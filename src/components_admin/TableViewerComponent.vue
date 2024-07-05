<template>
  <div class="mongodb-table-viewer">
    <h2>{{ title }}</h2>
    <p>{{ description }}</p>

    <!-- Filter input -->
    <input
      v-model="filterText"
      @input="applyFilter"
      type="text"
      placeholder="Suchbegriff eingeben..."
      class="filter-input"
    />

    <button @click="showAddForm = !showAddForm" class="toggle-form-button">
      {{ showAddForm ? 'Formular schließen' : 'Neuen Datensatz hinzufügen' }}
    </button>

    <!-- Add form -->
    <div v-if="showAddForm" class="add-form">
      <h3>Neuen Datensatz hinzufügen</h3>
      <form @submit.prevent="addItem">
        <div v-for="(key, index) in Object.keys(newItem)" :key="index" class="form-field">
          <label :for="key">{{ key }}</label>
          <input v-model="newItem[key]" :id="key" class="form-input" />
        </div>
        <button type="submit" class="form-button">Hinzufügen</button>
      </form>
    </div>

    <table class="data-table">
      <thead>
        <tr>
          <th v-for="(key, index) in tableColumns" :key="index">{{ key }}</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, rowIndex) in filteredData" :key="rowIndex">
          <td v-for="(key, colIndex) in tableColumns" :key="colIndex" class="table-cell">
            {{ formatValue(item[key]) }}
          </td>
          <td class="table-cell">
            <button @click="editItem(item)" class="action-button">Edit</button>
            <button @click="deleteItem(item)" class="action-button">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- Edit form -->
    <div v-if="editMode" class="edit-form">
      <h3>Datensatz bearbeiten</h3>
      <form @submit.prevent="updateItem">
        <div v-for="(key, index) in Object.keys(editedItem)" :key="index" class="form-field">
          <label :for="key">{{ key }}</label>
          <input v-model="editedItem[key]" :id="key" class="form-input" />
        </div>
        <div class="edit-form-buttons">
          <button type="submit" class="form-button">Aktualisieren</button>
          <button @click="cancelEdit" class="form-button cancel-button">Abbrechen</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MongoDBTableViewer',
  props: {
    title: String,
    description: String,
    apiEndpoint: String,
    apiInsert: String,
    apiUpdate: String,
    apiDelete: String,
    tableColumns: Array,
    newItemTemplate: Object
  },
  data() {
    return {
      tableData: [], // Holds the fetched data from the API
      filterText: '', // Holds the filter text entered by the user
      filteredData: [], // Holds the filtered data to be displayed
      showAddForm: false, // Controls the visibility of the add form
      newItem: { ...this.newItemTemplate }, // Holds the data for the new item to be added
      editMode: false, // Flag to indicate if editing mode is active
      editedItem: {} // Holds the data for the item being edited
    };
  },
  async mounted() {
    await this.loadData();
  },
  methods: {
    async loadData() {
      try {
        const response = await fetch(this.apiEndpoint);
        const data = await response.json();
        this.tableData = data;
        this.filteredData = data; // Initially display all data
      } catch (error) {
        console.error(`Error loading data from ${this.apiEndpoint}:`, error);
      }
    },
    formatValue(value) {
      if (Array.isArray(value)) {
        return value.join(', ');
      }
      if (typeof value === 'object' && value !== null) {
        if (value.$oid) {
          return value.$oid;
        }
        return JSON.stringify(value);
      }
      return value;
    },
    editItem(item) {
      this.editMode = true;
      // Create a copy of the item for editing with only 'frage' and 'studiengänge' fields
      this.editedItem = {
        _id: item._id,
        frage: item.frage,
        studiengänge: item.studiengänge
      };
    },
    async updateItem() {
      try {
        const response = await fetch(`${this.apiUpdate}/${this.editedItem._id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(this.editedItem)
        });
        if (response.ok) {
          // Update tableData and filteredData with updated item
          const updatedItem = await response.json();
          const index = this.tableData.findIndex(item => item._id === updatedItem._id);
          if (index !== -1) {
            this.tableData.splice(index, 1, updatedItem);
            this.filteredData = [...this.tableData]; // Update filteredData as well
          }
          this.cancelEdit();
        } else {
          console.error('Error updating item:', response.statusText);
        }
      } catch (error) {
        console.error('Error updating item:', error);
      }
    },
    async deleteItem(item) {
      if (confirm('Möchten Sie diesen Eintrag wirklich löschen?')) {
        try {
          const response = await fetch(`${this.apiDelete}/${item._id}`, {
            method: 'DELETE'
          });
          if (response.ok) {
            // Remove item from tableData and filteredData
            this.tableData = this.tableData.filter(data => data._id !== item._id);
            this.filteredData = [...this.tableData]; // Update filteredData as well
          } else {
            console.error('Error deleting item:', response.statusText);
          }
        } catch (error) {
          console.error('Error deleting item:', error);
        }
      }
    },
    applyFilter() {
      const searchText = this.filterText.toLowerCase();
      this.filteredData = this.tableData.filter(item => {
        return Object.values(item).some(value => {
          if (typeof value === 'string') {
            return value.toLowerCase().includes(searchText);
          } else if (Array.isArray(value)) {
            return value.some(subValue => subValue.toLowerCase().includes(searchText));
          }
          return false;
        });
      });
    },
    async addItem() {
      try {
        const response = await fetch(this.apiInsert, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(this.newItem)
        });
        if (response.ok) {
          const newItem = await response.json();
          this.tableData.push(newItem);
          this.filteredData.push(newItem);
          this.showAddForm = false; // Hide the add form
          window.location.reload(); // Reload the page after successful insertion
        } else {
          console.error('Error adding item:', response.statusText);
        }
      } catch (error) {
        console.error('Error adding item:', error);
      }
    },
    cancelEdit() {
      this.editMode = false;
      this.editedItem = {};
    }
  }
};
</script>

<style scoped>
.mongodb-table-viewer {
  font-family: Arial, sans-serif;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;
}

h2 {
  font-size: 24px;
  margin-bottom: 10px;
}

p {
  margin-bottom: 20px;
}

.filter-input {
  margin-bottom: 10px;
  padding: 8px;
  width: calc(100% - 16px);
  box-sizing: border-box;
}

.toggle-form-button {
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.add-form {
  margin-top: 20px;
  background-color: #fff;
  padding: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.add-form h3 {
  font-size: 20px;
  margin-bottom: 10px;
}

.form-field {
  margin-bottom: 10px;
}

.form-field label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

.form-input {
  width: calc(100% - 10px);
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.form-button {
  padding: 8px 16px;
  background-color: #28a745;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 10px;
}

.cancel-button {
  background-color: #dc3545;
}

.data-table {
  margin-top: 20px;
  width: 100%;
  border-collapse: collapse;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.data-table th, .data-table td {
  border: 1px solid #ccc;
  padding: 8px;
  text-align: left;
}

.data-table th {
  background-color: #007bff;
  color: #fff;
}

.data-table .table-cell {
  padding: 8px;
  text-align: center;
}

.action-button {
  padding: 6px 12px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 5px;
}

.edit-form {
  margin-top: 20px;
  background-color: #fff;
  padding: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.edit-form h3 {
  font-size: 20px;
  margin-bottom: 10px;
}

.edit-form-buttons {
  margin-top: 10px;
}

@media (max-width: 600px) {
  .form-input, .action-button, .toggle-form-button {
    width: 100%;
    margin-bottom: 10px;
  }
}
</style>

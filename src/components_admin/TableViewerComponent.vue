<template>
  <div>
    <h2>{{ title }}</h2>
    <p>{{ description }}</p>

    <!-- Filter input -->
    <input 
      v-model="filterText" 
      @input="applyFilter" 
      type="text" 
      placeholder="Suchbegriff eingeben..." 
    />

    <button @click="showAddForm = !showAddForm">
      {{ showAddForm ? 'Formular schließen' : 'Neuen Datensatz hinzufügen' }}
    </button>

    <!-- Add form -->
    <div v-if="showAddForm">
      <h3>Neuen Datensatz hinzufügen</h3>
      <form @submit.prevent="addItem">
        <div v-for="(key, index) in Object.keys(newItem)" :key="index">
          <label :for="key">{{ key }}</label>
          <input v-model="newItem[key]" :id="key" />
        </div>
        <button type="submit">Hinzufügen</button>
      </form>
    </div>
    <table>
      <thead>
        <tr>
          <th v-for="(key, index) in tableColumns" :key="index">{{ key }}</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, rowIndex) in filteredData" :key="rowIndex">
          <td v-for="(key, colIndex) in tableColumns" :key="colIndex">
            {{ formatValue(item[key]) }}
          </td>
          <td>
            <button @click="editItem(item)">Edit</button>
            <button @click="deleteItem(item)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
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
    tableColumns: Array,
    newItemTemplate: Object
  },
  data() {
    return {
      tableData: [], // Holds the fetched data from the API
      filterText: '', // Holds the filter text entered by the user
      filteredData: [], // Holds the filtered data to be displayed
      showAddForm: false, // Controls the visibility of the add form
      newItem: { ...this.newItemTemplate } // Holds the data for the new item to be added
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
      console.log('Editing item:', item);
    },
    deleteItem(item) {
      console.log('Deleting item:', item);
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
          window.location.reload(); // Reload the page
        } else {
          console.error('Error adding item:', response.statusText);
        }
      } catch (error) {
        console.error('Error adding item:', error);
      }
    }
  }
};
</script>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  border: 1px solid black;
  padding: 8px;
  text-align: left;
}

input {
  margin-bottom: 10px;
  padding: 8px;
  width: calc(100% - 16px);
  box-sizing: border-box;
}

form {
  margin: 20px 0;
}
</style>

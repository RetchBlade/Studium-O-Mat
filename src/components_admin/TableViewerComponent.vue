<template>
  <div class="mongodb-table-viewer">
    <!-- Titel und Beschreibung -->
    <h2>{{ title }}</h2>
    <p>{{ description }}</p>

    <!-- Filter-Eingabe -->
    <input
      v-model="filterText"
      @input="applyFilter"
      type="text"
      placeholder="Suchbegriff eingeben..."
      class="filter-input"
    />

    <!-- Schaltfläche zum Ein-/Ausblenden des Hinzufügen-Formulars -->
    <button @click="toggleAddForm" class="toggle-form-button">Neuen Datensatz hinzufügen</button>

    <!-- Formular zum Hinzufügen eines neuen Datensatzes -->
    <div v-if="showAddForm" class="add-form">
      <h3>Neuen Datensatz hinzufügen</h3>
      <form @submit.prevent="addItem">
        <!-- Dynamische Generierung der Formularfelder basierend auf 'newItemTemplate' -->
        <div v-for="(key, index) in Object.keys(newItem)" :key="index" class="form-field">
          <label :for="key">{{ key }}</label>
          <input v-model="newItem[key]" :id="key" class="form-input" />
        </div>
        <button type="submit" class="form-button">Hinzufügen</button>
      </form>
    </div>

    <!-- Daten-Tabelle -->
    <table class="data-table">
      <thead>
        <tr>
          <!-- Dynamische Generierung der Tabellenüberschriften basierend auf 'tableColumns' -->
          <th v-for="(key, index) in tableColumns" :key="index">{{ key }}</th>
          <th>Aktionen</th>
        </tr>
      </thead>
      <tbody>
        <!-- Dynamische Generierung der Tabellenzeilen basierend auf 'filteredData' -->
        <tr v-for="(item, rowIndex) in filteredData" :key="rowIndex">
          <td v-for="(key, colIndex) in tableColumns" :key="colIndex" class="table-cell">
            <!-- Anzeige der Werte, ggf. Formatierung über 'formatValue' Methode -->
            {{ formatValue(item[key]) }}
          </td>
          <!-- Aktionen pro Zeile (Bearbeiten und Löschen) -->
          <td class="table-cell">
            <button @click="editItem(item)" class="action-button">Bearbeiten</button>
            <button @click="deleteItem(item)" class="action-button">Löschen</button>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- Formular zum Bearbeiten eines Datensatzes -->
    <div v-if="editMode" class="edit-form" ref="editForm">
      <h3>Datensatz bearbeiten</h3>
      <form @submit.prevent="updateItem">
        <!-- Dynamische Generierung der Formularfelder basierend auf 'editableColumns' -->
        <div v-for="(key, index) in editableColumns" :key="index" class="form-field">
          <label :for="key">{{ key }}</label>
          <input v-model="editedItem[key]" :id="key" class="form-input" />
        </div>
        <!-- Aktualisieren und Abbrechen-Buttons -->
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
  name: 'MongoDBTableViewer', // Name der Vue-Komponente
  props: {
    title: String, // Titel der Tabelle (übergeben als String-Prop)
    description: String, // Beschreibung der Tabelle (übergeben als String-Prop)
    apiEndpoint: String, // API-Endpunkt zur Datenabfrage (übergeben als String-Prop)
    apiInsert: String, // API-Endpunkt zum Einfügen von Daten (übergeben als String-Prop)
    apiUpdate: String, // API-Endpunkt zur Aktualisierung von Daten (übergeben als String-Prop)
    apiDelete: String, // API-Endpunkt zum Löschen von Daten (übergeben als String-Prop)
    tableColumns: Array, // Array der Tabellenspalten (übergeben als Array-Prop)
    newItemTemplate: Object, // Vorlage für neuen Datensatz (übergeben als Objekt-Prop)
    editableColumns: Array // Array der bearbeitbaren Spalten (übergeben als Array-Prop)
  },
  data() {
    return {
      tableData: [], // Enthält die gesamten Daten aus der API
      filterText: '', // Wert für die Filter-Eingabe
      filteredData: [], // Gefilterte Daten basierend auf dem Filtertext
      showAddForm: false, // Zeigt an, ob das Hinzufügen-Formular angezeigt wird
      newItem: { ...this.newItemTemplate }, // Neuer Datensatz für das Hinzufügen
      editMode: false, // Zeigt an, ob der Bearbeitungsmodus aktiv ist
      editedItem: {} // Bearbeiteter Datensatz
    };
  },
  async mounted() {
    await this.loadData(); // Beim Mounten der Komponente werden die Daten geladen
  },
  methods: {
    async loadData() {
      try {
        const response = await fetch(this.apiEndpoint); // API-Anfrage, um Daten abzurufen
        const data = await response.json(); // JSON-Daten von der API erhalten
        this.tableData = data; // Gesamte Daten in tableData speichern
        this.filteredData = data; // Gefilterte Daten initial auf alle Daten setzen
      } catch (error) {
        console.error(`Fehler beim Laden der Daten von ${this.apiEndpoint}:`, error); // Fehlerbehandlung für API-Fehler
      }
    },
    formatValue(value) {
      // Methode zur Formatierung von Werten (z.B. Array zu kommagetrennten String)
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
      // Methode zum Starten des Bearbeitungsmodus für einen Datensatz
      this.editMode = true; // Bearbeitungsmodus aktivieren
      this.editedItem = { ...item }; // Bearbeiteten Datensatz kopieren

      // Scrollen zum Bearbeitungsformular (smoother Übergang)
      this.$nextTick(() => {
        this.$refs.editForm.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    },
    async updateItem() {
      // Methode zum Aktualisieren eines Datensatzes über die API
      try {
        const response = await fetch(`${this.apiUpdate}/${this.editedItem._id}`, {
          method: 'PUT', // PUT-Anfrage für Aktualisierung
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(this.editedItem) // Daten des bearbeiteten Datensatzes als JSON senden
        });
        if (response.ok) {
          const updatedItem = await response.json(); // Aktualisierten Datensatz von der API empfangen
          const index = this.tableData.findIndex(item => item._id === updatedItem._id); // Index des aktualisierten Datensatzes finden
          if (index !== -1) {
            this.tableData.splice(index, 1, updatedItem); // Datensatz in tableData aktualisieren
            this.filteredData = [...this.tableData]; // Gefilterte Daten ebenfalls aktualisieren
          }
          this.cancelEdit(); // Bearbeitungsmodus beenden
        } else {
          alert('Fehler beim Aktualisieren des Elements: ' + response.statusText); // Fehlermeldung bei nicht erfolgreicher API-Antwort
          console.error('Fehler beim Aktualisieren des Elements:', response.statusText);
        }
      } catch (error) {
        alert('Fehler beim Aktualisieren des Elements: ' + error.message); // Fehlermeldung bei einem Fehler während der Aktualisierung
        console.error('Fehler beim Aktualisieren des Elements:', error);
      }
    },
    async deleteItem(item) {
      // Methode zum Löschen eines Datensatzes über die API
      if (confirm('Möchten Sie diesen Eintrag wirklich löschen?')) {
        try {
          const response = await fetch(`${this.apiDelete}/${item._id}`, {
            method: 'DELETE' // DELETE-Anfrage für das Löschen
          });
          if (response.ok) {
            this.tableData = this.tableData.filter(data => data._id !== item._id); // Datensatz aus tableData entfernen
            this.filteredData = [...this.tableData]; // Gefilterte Daten aktualisieren
          } else {
            console.error('Fehler beim Löschen des Elements:', response.statusText); // Fehlermeldung bei nicht erfolgreicher API-Antwort
          }
        } catch (error) {
          console.error('Fehler beim Löschen des Elements:', error); // Fehlermeldung bei einem Fehler während des Löschens
        }
      }
    },
    applyFilter() {
      // Methode zum Anwenden des Filters auf die Tabelle
      const searchText = this.filterText.toLowerCase(); // Filtertext in Kleinbuchstaben konvertieren
      this.filteredData = this.tableData.filter(item => {
        // Filtern der tableData basierend auf dem Filtertext
        return Object.values(item).some(value => {
          if (typeof value === 'string') {
            return value.toLowerCase().includes(searchText); // Suche in Zeichenketten
          } else if (Array.isArray(value)) {
            return value.some(subValue => subValue.toLowerCase().includes(searchText)); // Suche in Arrays
          }
          return false;
        });
      });
    },
    async addItem() {
      // Methode zum Hinzufügen eines neuen Datensatzes über die API
      try {
        const response = await fetch(this.apiInsert, {
          method: 'POST', // POST-Anfrage für das Hinzufügen
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(this.newItem) // Neuen Datensatz als JSON senden
        });
        if (response.ok) {
          const newItem = await response.json(); // Neuen Datensatz von der API empfangen
          this.tableData.push(newItem); // Neuen Datensatz zu tableData hinzufügen
          this.filteredData.push(newItem); // Neuen Datensatz auch zu den gefilterten Daten hinzufügen
          this.showAddForm = false; // Hinzufügen-Formular ausblenden
          window.location.reload(); // Seite neu laden (kann angepasst werden)
        } else {
          console.error('Fehler beim Hinzufügen des Elements:', response.statusText); // Fehlermeldung bei nicht erfolgreicher API-Antwort
        }
      } catch (error) {
        console.error('Fehler beim Hinzufügen des Elements:', error); // Fehlermeldung bei einem Fehler während des Hinzufügens
      }
    },
    cancelEdit() {
      // Methode zum Abbrechen des Bearbeitungsmodus
      this.editMode = false; // Bearbeitungsmodus deaktivieren
      this.editedItem = {}; // Bearbeiteten Datensatz zurücksetzen
    },
    toggleAddForm() {
      // Methode zum Ein- und Ausblenden des Hinzufügen-Formulars
      this.showAddForm = !this.showAddForm; // Zeigen oder Verstecken des Hinzufügen-Formulars
      if (!this.showAddForm) {
        this.newItem = { ...this.newItemTemplate }; // Bei Verstecken des Formulars das neue Element zurücksetzen
      }
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

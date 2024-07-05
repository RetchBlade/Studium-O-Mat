<template>
    <div>
      <table>
        <thead>
          <tr>
            <th v-for="(value, key) in tableColumns" :key="key">{{ key }}</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in tableData" :key="index">
            <td v-for="(value, key) in tableColumns" :key="key">{{ item[key] }}</td>
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
  import axios from 'axios'; // For making HTTP requests, if needed
  
  export default {
    name: 'MongoTableComponent',
    data() {
      return {
        tableData: [], // Holds the fetched data from MongoDB
        tableColumns: {} // Holds the column names based on fetched data
      };
    },
    async mounted() {
      // Fetch data from MongoDB Atlas
      try {
        const response = await axios.get('YOUR_API_ENDPOINT'); // Replace with your API endpoint
        this.tableData = response.data; // Assuming API returns an array of objects
        this.extractColumns(); // Extract column names dynamically
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },
    methods: {
      extractColumns() {
        if (this.tableData.length > 0) {
          // Assuming first item contains all possible keys
          this.tableColumns = Object.keys(this.tableData[0]);
        }
      },
      editItem(item) {
        // Logic to edit item (e.g., navigate to edit form)
        console.log('Editing item:', item);
      },
      deleteItem(item) {
        // Logic to delete item (e.g., make API call to delete)
        console.log('Deleting item:', item);
      }
    }
  };
  </script>
  
  <style scoped>
  /* Add your custom styles here */
  table {
    width: 100%;
    border-collapse: collapse;
  }
  
  th, td {
    border: 1px solid black;
    padding: 8px;
    text-align: left;
  }
  </style>
  
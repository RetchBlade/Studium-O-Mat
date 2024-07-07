<template>
  <div>
    <!-- Integrate MongoDBTableViewer component -->
      <MongoDBTableViewer
      title="Benutzerliste"
        description="Anpassungen der Benutzer."
        apiEndpoint="http://localhost:5000/api/user/readuser"
        apiInsert="http://localhost:5000/api/auth/register"
        apiUpdate="http://localhost:5000/api/user/updateuser"
        apiDelete="http://localhost:5000/api/user/deleteuser"
        :newItemTemplate="{ email: '', password: ''}"
        :tableColumns="['email']"
        :editableColumns="['email']"
      />
  </div>
</template>

<script>
import MongoDBTableViewer from './TableViewerComponent.vue'; // Adjust the path as per your project structure

export default {
  name: 'AdminUsers',
  components: {
    MongoDBTableViewer // Register MongoDBTableViewer as a component
  }
}
</script>

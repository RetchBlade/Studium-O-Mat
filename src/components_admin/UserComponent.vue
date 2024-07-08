<template>
  <div>
    <!-- Intigrierte MongoDBTableViewer Komponente -->
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
import MongoDBTableViewer from './TableViewerComponent.vue';

export default {
  name: 'AdminUsers',
  components: {
    MongoDBTableViewer
  }
}
</script>

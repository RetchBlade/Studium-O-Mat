<template>
  <div>
    <h1>Benutzerliste</h1>
    <p>Anpassungen der Benutzer</p>

    <!-- Integrate MongoDBTableViewer component -->
    <MongoDBTableViewer />
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

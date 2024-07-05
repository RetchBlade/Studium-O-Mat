<template>
  <div>
    <!-- Integrate MongoDBTableViewer component -->
    <MongoDBTableViewer
      title="Fragen"
      description="Hier können Sie die Fragen verwalten."
      apiEndpoint="http://localhost:5000/api/quiz/readquest"
      apiInsert="http://localhost:5000/api/quiz/addquest"
      :tableColumns="['frage', 'studiengänge']"
      :newItemTemplate="{ frage: '', studiengänge: [] }"
    />
  </div>
</template>

<script>
import MongoDBTableViewer from './TableViewerComponent.vue'; // Adjust the path as per your project structure

export default {
  name: 'FragePool',
  components: {
    MongoDBTableViewer
  }
}
</script>

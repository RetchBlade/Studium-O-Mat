<template>
  <div>
    <!-- Intigrierte MongoDBTableViewer Komponente -->
    <MongoDBTableViewer
      title="Fragen"
      description="Hier können Sie die Fragen verwalten."
      apiEndpoint="http://localhost:5000/api/quiz/readquest"
      apiInsert="http://localhost:5000/api/quiz/addquest"
      apiUpdate="http://localhost:5000/api/quiz/updatequest"
      apiDelete="http://localhost:5000/api/quiz/deletequest"
      :tableColumns="['frage', 'studiengänge']"
      :newItemTemplate="{ frage: '', studiengänge: [] }"
      :editableColumns="['frage', 'studiengänge']"
    />
  </div>
</template>

<script>
import MongoDBTableViewer from './TableViewerComponent.vue';

export default {
  name: 'FragePool',
  components: {
    MongoDBTableViewer
  }
}
</script>

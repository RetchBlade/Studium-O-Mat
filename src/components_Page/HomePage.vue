<template>
  <!-- Die Hauptvorlage, die zwei Komponenten, SliderComponent und ExperienceComponent, rendert -->
  <SliderComponent/> <!-- Rendert die SliderComponent -->
  <ExperienceComponent/> <!-- Rendert die ExperienceComponent -->
</template>

<script>
// Importiere die SliderComponent und die ExperienceComponent
import SliderComponent from '@/components/SliderComponent.vue'
import ExperienceComponent from '@/components/ExperienceComponent.vue'

export default {
  components: {
    // Registriere die importierten Komponenten
    SliderComponent,
    ExperienceComponent
  }
}
</script>

  
  <style>
   /* Muss nicht gemacht werden, solange andere Templates genutzt werden */
   
  </style>
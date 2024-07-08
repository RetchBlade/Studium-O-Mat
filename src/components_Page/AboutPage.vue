<template>
  <div class="team-section bg-gray-100 py-12">
    <div class="container mx-auto text-center">
      <h2 class="text-3xl font-bold mb-8">Unser Team</h2>
      <p class="text-lg text-gray-700 leading-relaxed mb-12">
        Wir sind Informatikstudenten im vierten Semester an der Hochschule Bochum und kennen aus eigener Erfahrung die Schwierigkeiten bei der Wahl des richtigen Studienfachs. Wir haben festgestellt, dass es für Studieninteressierte oft nicht genügend Unterstützung gibt, um diese Entscheidung zu erleichtern. Aus diesem Grund haben wir beschlossen, aufgrund unserer eigenen Erfahrungen anderen Studieninteressierten zu helfen.
        Mit diesem Ziel vor Augen haben wir eine Plattform entwickelt, die angehenden Studenten bei der Auswahl des passenden Studiengangs unterstützt. 
        Mit unserem fundierten Wissen und Verständnis möchten wir dazu beitragen, dass zukünftige Studenten sicherer in ihr Universitätsleben starten können.
      </p>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12">
        <div v-for="(member, index) in teamMembers" :key="index" class="overflow-hidden bg-white shadow-lg rounded-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
          <img :src="member.image" alt="Team Member" class="w-full h-64 object-cover object-center rounded-t-lg">
          <div class="p-4">
            <h3 class="text-xl font-semibold mb-2">{{ member.name }}</h3>
            <p class="text-gray-600">{{ member.role }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      teamMembers: [
        { name: 'Lorenz Berkmans', role: 'Developer', image: require('@/assets/lorenz.jpg') },
        { name: 'Eray Lacin', role: 'Developer', image: require('@/assets/eray.jpg') },
        { name: 'Safak Karaalp', role: 'Developer', image: require('@/assets/safak.jpg') },
        { name: 'Haneen Al Kurdi', role: 'Designer', image: require('@/assets/haneen.jpg') },
        { name: 'Elifnur Catalbas', role: 'Designer', image: require('@/assets/elif.jpg') }
      ]
    };
  }
};
</script>

<style scoped>
.team-section {
  padding-top: 8rem;
  padding-bottom: 8rem;
}

.team-section h2 {
  color: #333;
  padding-top: 4rem;


}

.team-section p {
  font-size: 18px;
  line-height: 1.8;
  max-width: 800px;
  margin: 0 auto 2rem;
  padding-bottom: 3rem;

}

.grid-cols-1 {
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
}

.sm\:grid-cols-2 {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.gap-x-8 {
  column-gap: 2rem; /* Horizontaler Abstand zwischen den Karten */
}

.gap-y-12 {
  row-gap: 1.2rem; /* Vertikaler Abstand zwischen den Karten */
}

.text-lg {
  font-size: 18px;
}

.text-xl {
  font-size: 20px;
}

.font-semibold {
  font-weight: 600;
}

.text-gray-600 {
  color: #666;
}

.hover\:shadow-xl {
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
}

.transition {
  transition: all 0.9s ease;
}

.transform {
  transform: translateY(0);
}

.hover\:translate-y-1 {
  transform: translateY(-1px);
}

.hover\:scale-105 {
  transform: scale(1.05);
}
</style>

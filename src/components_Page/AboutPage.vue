<template>
  <div class="team-section bg-gray-100 py-12">
    <div class="container mx-auto">
      <h2 class="text-3xl font-bold text-center mb-8">Unser Team</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div v-for="(member, index) in teamMembers" :key="index" class="bg-white rounded-lg overflow-hidden shadow-lg">
          <img :src="member.image" alt="Team Member" class="w-full h-48 md:h-64 object-cover object-center rounded-full">
          <div class="p-6">
            <h3 class="text-xl font-semibold mb-2">{{ member.name }}</h3>
            <p class="text-gray-700">{{ member.role }}</p>
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
        { name: 'Eray Lacin', role: 'Developer', image:  require('@/assets/eray.jpg')  },
        { name: 'Safak Karaalp', role: 'Developer' , image:  require('@/assets/safak.jpg') },
        { name: 'Haneen Al Kurdi', role: 'Designer', image:  require('@/assets/haneen.jpg')  },
        { name: 'Elifnur Catalbas', role: 'Designer', image:  require('@/assets/elif.jpg')  }
      ]
    };
  }
};
</script>

<style scoped>
.team-section {
  padding-top: 6rem;
  padding-bottom: 6rem;
}

.team-section h2 {
  color: #333;
}

.team-section .grid {
  margin-top: 2rem;
}

.team-section .grid > div {
  transition: transform 0.3s ease-in-out;
}

.team-section .grid > div:hover {
  transform: translateY(-0.5rem);
}
</style>

<template>
  <div class="team-section bg-gray-100 py-12">
    <div class="container mx-auto">
      <h2 class="text-3xl font-bold text-center mb-8 mt-4">Unser Team</h2>
      <MDBCardGroup class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <MDBCard v-for="(member, index) in teamMembers" :key="index" class="mb-4">
          <MDBCardImg :src="member.image" top alt="Team Member" class="w-full h-48 md:h-64 object-cover object-center"/>
          <MDBCardBody>
            <MDBCardTitle>{{ member.name }}</MDBCardTitle>
            <MDBCardText>
              {{ member.role }}
            </MDBCardText>
          </MDBCardBody>
          <MDBCardFooter>
            <small class="text-muted"> </small>
          </MDBCardFooter>
        </MDBCard>
      </MDBCardGroup>
    </div>
  </div>
</template>

<script>
import { MDBCardGroup, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImg, MDBCardFooter } from 'mdb-vue-ui-kit';

export default {
  components: {
    MDBCardGroup,
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImg,
    MDBCardFooter
  },
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
  padding-top: 10rem; /* Reduzierter oberer Abstand für den Titel */
  padding-bottom: 10rem;
}

.team-section h2 {
  color: #333;
}

.MDBCardGroup {
  margin-top: 10rem; /* Abstand zwischen dem Titel und der ersten Karte */
  margin-bottom:10rem;
}

/* Stil für einzelne Karten */
.MDBCard {
  transition: transform 0.7s ease-in-out;
  margin-bottom: 20; /* Abstand zwischen den Karten */
}

.MDBCard:hover {
  transform: translateY(-0.5rem);
}

.MDBCardImg {
  border-radius: 50%;
  object-fit: cover;
}
</style>

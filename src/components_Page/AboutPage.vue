<template>
  <div class="team-section bg-gray-100 py-12">
    <div class="container mx-auto">
      <h2 class="text-3xl font-bold text-center mb-8 mt-4">Unser Team</h2>
      <h3>
        Wir sind Informatikstudenten im vierten Semester an der Hochschule Bochum und kennen aus eigener Erfahrung die Schwierigkeiten bei der Wahl des richtigen Studienfachs. Wir haben festgestellt, dass es für Studieninteressierte oft nicht genügend Unterstützung gibt, um diese Entscheidung zu erleichtern. Aus diesem Grund haben wir beschlossen, aufgrund unserer eigenen Erfahrungen anderen Studieninteressierten helfen zu wollen
        Mit diesem Ziel vor Augen haben wir eine Plattform entwickelt, die angehenden Studenten bei der Auswahl des passenden Studiengangs unterstützt. 
          Mit unserem fundierten Wissen und Verständnis möchten wir dazu beitragen, dass zukünftige Studenten sicherer in ihr Universitätsleben starten können.
      </h3>
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
  padding-bottom: 4rem;
}

.team-section h2 {
  color: #333;
}

.MDBCardGroup {
  margin-top: 10rem; /* Abstand zwischen dem Titel und der ersten Karte */
  margin-bottom: 10rem;
}

/* Stil für einzelne Karten */
.MDBCard {
  transition: transform 0.7s ease-in-out;
  margin-bottom: 20px; /* Abstand zwischen den Karten */
}

.MDBCard:hover {
  transform: translateY(-0.5rem);
}

.MDBCardImg {
  border-radius: 50%;
  object-fit: cover;
}

h2 {
  font-weight: normal;
  font-size: 50px;
  padding-bottom: 50px;
}

h3 {
  font-weight: light;
  font-size: 25px;
  padding-bottom: 150px;
}
</style>

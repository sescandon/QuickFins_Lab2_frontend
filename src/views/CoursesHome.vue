<template>
  <div class="container-courses-home">
    <ul class="selector">
      <li @click="goCourses">Mis cursos</li>
      <li @click="goNewCourse" v-if="isProfessor === true">Crear nuevo curso</li>
    </ul>
    <div class="router-scroll">
      <router-view />
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { getAuthenticationToken } from '@/dataStorage';


const requestPath = '/mis-roles';

export default {
  name: "courses-home",
  data() {
    return {
      isProfessor: false,
    }
  },
  beforeCreate() {
    axios.get(this.$store.state.backURL + requestPath, { params: { access_token: getAuthenticationToken() } })
      .then(response => {
        if (response.status !== 200) {
          alert('Error Obteniendo sus roles');
        } else {
          const roles = response.data.map(r => r.id);
          console.log('PAUUUUU roles', roles)
          if(roles.includes(2)){
            this.isProfessor = true;
          }
        }
      }).catch(error => {
        alert('Error en la petición');
        console.log(error);
      });
  },
  methods: {
    goCourses(event) {
      this.$router.push({ name: 'courses' });
      event.preventDefault();
    },
    goNewCourse(event) {
      this.$router.push({ name: 'add-course' });
      event.preventDefault();
    },
  }
}
</script>

<style scoped>
.container-courses-home {
  display: grid;
  width: 100%;
  height: calc(100vh - 60px);
  grid-template-columns: 200px 1fr;
  grid-template-rows: 1fr;
  gap: 15px;
  justify-content: flex-start;
  align-items: flex-start;
}
</style>

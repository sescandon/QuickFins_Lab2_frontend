<template>
  <div class="container-courses">
    <div class="name-courses" @click="goCourses">
      Mis Cursos
      <div>
        <button @click="goNewCourse" class="btn btn-primary">Crear nuevo curso</button>
        <button @click="goPrincipal" class="btn btn-secondary">Home</button>
      </div>
    </div>
    <router-view />
    <div class="grid-courses">
      <Course v-for="enrolled in enrollments" :key="enrolled.courseId + '-' + enrolled.role.id" :enrolled="enrolled">
      </Course>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { getAuthenticationToken } from '@/dataStorage';
import Course from "@/components/Course";


const requestPath = '/mis-cursos';

export default {
  name: "courses",
  components: { Course },
  data() {
    return {
      enrollments: []
    }
  },
  beforeCreate() {
    axios.get(this.$store.state.backURL + requestPath, { params: { access_token: getAuthenticationToken() } })
      .then(response => {
        if (response.status !== 200) {
          alert('Error en la respuesta del servidor');
        }
        else {
          this.enrollments = response.data;
        }
      }).catch(error => {
        alert('Error con la conexión al servidor');
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
    goPrincipal(event){
      this.$router.push({ name: 'home' });
      event.preventDefault();
    },
  }
}
</script>

<style scoped>
.container-courses {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  overflow: hidden;
}

.container-courses button {
  padding: 0px 10px;
}

.name-courses {
  display: flex;
  justify-content: space-between;
  font-family: 'Verdana';
  font-size: 18px;
  color: #0078BD;
  width: 100vw;
  padding: 20px 140px 10px 140px;
  height: 60px;
  text-align: left;
  cursor: pointer;
  background-color: #DEE3E5;
  box-shadow: -1px 10px 27px -11px rgba(0, 71, 112, 0.59);
  -webkit-box-shadow: -1px 10px 27px -11px rgba(0, 71, 112, 0.59);
  -moz-box-shadow: -1px 10px 27px -11px rgba(0, 71, 112, 0.59);
}

.name-courses div{
  display: flex;
  gap: 10px;
}

.grid-courses {
  display: grid;
  padding: 10px 140px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 500px));
  gap: 20px;
}
</style>

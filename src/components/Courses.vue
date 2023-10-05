<template>
  <div class="container-courses">
    <h2 class="screen-title">Mis Cursos</h2>
    <div class="grid-courses">
      <Course v-for="enrolled in enrollments" :key="enrolled.courseId + '-' + enrolled.role.id" :enrolled="enrolled">
      </Course>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { getAuthenticationToken } from '@/dataStorage';
import Course from '@/components/Course'

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
  }
}
</script>

<style scoped>
.container-courses {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
}

.grid-courses {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 500px));
  gap: 20px;
}
</style>

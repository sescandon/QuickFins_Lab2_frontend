<template>
  <div class="container-courses-home">
    <ul class="selector">
      <li @click="goCourses">Mis cursos</li>
      <li @click="goNewCourse">Crear nuevo curso</li>
    </ul>
    <div class="router-scroll">
      <router-view />
    </div>
  </div>
</template>

<script>

export default {
  name: "courses-home",
  data() {
    return {
      enrollments: []
    }
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

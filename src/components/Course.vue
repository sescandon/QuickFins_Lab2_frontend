<template>
  <div class="cardCourse">
    <h3>{{ enrolled.courseName }}</h3>
    <div>
      <h5>Duración: {{ enrolled.courseDurationHours }} horas</h5>
      <h6>Rol: {{ enrolled.role.roleName }}</h6>
    </div>
  </div>
</template>

<script>
export default {
  name: "Course",
  props: {
    enrolled: Object
  }
}
</script>

<style scoped>
.cardCourse{
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  border: 1px solid #B6C0CB;
  background-color: #1E4D79;
  text-align: left;
  color: white;
  border-radius: 8px;
}

.cardCourse div{
  display: flex;
  flex-direction: column;
  gap: 5px;
}
</style>

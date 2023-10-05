<template>
  <div class="flex-names">
    <h2 class="screen-title">Integrantes del Equipo</h2>
    <span>Paula Daniela Guzmán Zabala - Frontend</span>
    <span>Daniel Gonzalo Osuna Rodriguez - Frontend</span>
    <span>Dylan Macgiver Rivero Esteves - Backend</span>
    <span>Sebastián Escandón Florez - Backend</span>
  </div>
</template>

<script>
export default {
  name: 'integrantes',
  data( ){
    return {}
  },
  beforeCreate(){}
}
</script>

<style scoped>
.flex-names {
  display: flex;
  flex-direction: column;
}
</style>

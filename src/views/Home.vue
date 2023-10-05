<template>
  <div class="container-home">
    <div class="name-home" @click="goPrincipal">
      Buscador QuickFins
      <button @click="logout" class="btn btn-primary">Logout</button>
    </div>
    <div class="container-principal-roles">
      <ul class="selector">
        <li @click="goNewRole">Añadir nuevo rol</li>
        <li @click="goRoles">Tus Roles</li>
        <li @click="goInt">Integrantes del Equipo</li>
        <li @click="goCourses">Mis Cursos</li>
      </ul>
      <div class="router-scroll">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import { getAuthenticationToken, setAuthenticationToken } from '@/dataStorage';

export default {
  name: "Home",
  beforeCreate() {
    if (!getAuthenticationToken()) {
      this.$router.push({ name: 'login' })
    }
  },
  methods: {
    goInt(event) {
      this.$router.push({ name: 'integrantes' });
      event.preventDefault();
    },
    goRoles(event) {
      this.$router.push({ name: 'roles' });
      event.preventDefault();
    },
    goNewRole(event) {
      this.$router.push({ name: 'add-role' });
      event.preventDefault();
    },
    goPrincipal(event) {
      this.$router.push({ name: 'home' });
      event.preventDefault();
    },
    logout(event) {
      setAuthenticationToken();
      this.$router.push({ name: 'login' });
      event.preventDefault();
    },
    goCourses(event) {
      this.$router.push({ name: 'courses' });
      event.preventDefault();
    },
  }
}
</script>

<style>
.container-home {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  overflow: hidden;
}

.container-home button {
  padding: 0px 10px;
}

.name-home {
  display: flex;
  justify-content: space-between;
  font-family: 'Verdana';
  font-size: 18px;
  color: #007bff;
  width: 100vw;
  padding: 20px 140px 10px 140px;
  height: 60px;
  text-align: left;
  cursor: pointer;
  background-color: #DEE3E5;
  box-shadow: 0px 0px 25px -15px rgba(0, 71, 112, 0.59);
  -webkit-box-shadow: 0px 0px 25px -15px rgba(0, 71, 112, 0.59);
  -moz-box-shadow: 0px 0px 25px -15px rgba(0, 71, 112, 0.59);
}

.container-principal-roles {
  display: grid;
  width: 100vw;
  grid-template-columns: 200px 1fr;
  grid-template-rows: 1fr;
  gap: 15px;
  justify-content: flex-start;
  align-items: flex-start;
}

.selector {
  display: flex;
  flex-direction: column;
  gap: 15px;
  border-right: 1px solid #B6C0CB;
  list-style: none;
  height: calc(100vh - 60px);
  /*Header height */
  padding-top: 20px;
  padding-right: 20px;
}

.selector li {
  cursor: pointer;
}

.router-scroll{
  display: flex;
  overflow-y: scroll;
  overflow-x: hidden;
  width: 100%;
  height: calc(100vh - 60px);
  padding: 10px;
}

.screen-title{
  font-family: 'Verdana';
  font-size: 24px;
  font-weight: 700;
  color: #007bff;
  width: 100%;
  text-align: center;
  line-height: normal;
}
</style>

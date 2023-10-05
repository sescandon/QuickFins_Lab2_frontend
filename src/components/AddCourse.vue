<template>
  <div class="col-12 col-sm-10 col-md-8 offset-sm-1 offset-md-2">
    <div class="mt-5">
      <form class="border border-primary rounded form-inline" @submit="associate">

        <h2 class="col-12 text-center text-primary mt-3 mb-5">Crear un nuevo curso</h2>

        <div class="form-group col-12">
          <label for="name" class="custom-label col-md-3">Nombre del Curso*</label>
          <input id="name" class="form-control col-12 col-sm-10 col-md-7 offset-sm-1" type="text" placeholder="Nombre"
            v-model="name" required />
        </div>

        <div class="form-group col-12">
          <label for="hours" class="custom-label col-md-3">Horas de Duración*</label>
          <input id="hours" class="form-control col-12 col-sm-10 col-md-7 offset-sm-1" type="text"
            placeholder="Cantidad de horas" v-model="hours" required />
        </div>

        <div class="col-12 mb-3">
          <button class="col-sm-6 col-md-4 offset-sm-5 offset-md-7 btn btn-primary" type="submit">
            Crear Curso
          </button>
        </div>

      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "add-course",
  data() {
    return {
      name: '',
      hours: '',
    }
  },

  methods: {
    associate(event) {
      axios
        .post(this.buildURI(), {
          courseName: this.name,
          durationHours: this.hours
        }, {
          params: {
            access_token: localStorage.getItem("token")
          }
        }
        ).then(response => {
          if (response.status !== 201) {
            alert("Error en la petición. Intente nuevamente");
          } else {
            alert("Se ha creado el curso correctamente");
          }
        }).catch(response => {
          if (response.response.status === 401) {
            alert("¡Ups! Al parecer ocurrió un error de permisos");
          } else if (response.response.status === 400) {
            alert("Por favor llena todos los ítems con *");
          } else {
            alert("No es posible conectar con el backend en este momento");
          }
        });
      event.preventDefault();
    },
    buildURI() {
      let associatePath = "/profesor/crear-curso";
      return this.$store.state.backURL + associatePath;
    },
  }

}
</script>

<style scoped>
.form-inline .form-group {
  margin-bottom: 1rem;
}
</style>

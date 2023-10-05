import Vue from 'vue';
import Router from 'vue-router';
import SignUp from "./views/SignUp";
import Login from "./views/Login";
import Home from "./views/Home";
import AddRole from "./components/AddRole";
import Courses from '@/components/Courses';
import CoursesHome from '@/views/CoursesHome';
import Roles from "@/components/Roles";
import Integrantes from "@/components/Integrantes";
import AddCourse from "@/components/AddCourse";

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/registro",
      name: "signup",
      component: SignUp
    },
    {
      path: "/",
      alias: "/iniciar-sesion",
      name: "login",
      component: Login
    },
    {
      path: "/principal",
      name: "home",
      component: Home,
      children: [
        {
          path: "nuevo-rol",
          name: "add-role",
          component: AddRole
        },
        {
          path: "roles",
          name: "roles",
          component: Roles
        },
        {
          path: "integrantes",
          name: "integrantes",
          component: Integrantes
        },
        {
          path: 'mis-cursos',
          name: 'courses-home',
          component: CoursesHome,
          children: [
            {
              path: "nuevo-curso",
              name: "add-course",
              component: AddCourse
            },
            {
              path: "listado-cursos",
              name: "courses",
              component: Courses
            },
          ]
        }
      ]
    }
  ]
})

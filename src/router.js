import Vue from "vue";
import VueRouter from "vue-router";
import login from "./components/login.vue";
import register from "./components/register.vue";
import home from "./components/home.vue";
import addNote from "./components/addNote.vue";

Vue.use(VueRouter);

export const router = new VueRouter({
  routes: [
    { path: "/login", component: login, name: "login" },
    { path: "/register", component: register, name: "register" },
    { path: "/home", component: home, name: "logout" },
    { path: "/addNote", component: addNote, name: "addNote" },
  ],
});

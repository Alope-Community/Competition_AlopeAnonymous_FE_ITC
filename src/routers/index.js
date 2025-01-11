import { createWebHistory, createRouter } from "vue-router";

import AOS from "aos";
import "aos/dist/aos.css";

// --- Pages
import Home from "../views/Home.vue";
import List_Relawan from "../views/List_Relawan.vue";
import Detail_Program from "../views/Detail_Program.vue";
import Detail_Donation from "../views/Detail_Donation.vue";
import Profile from "../views/profile.vue";
// auth
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/detail_program/:id",
      name: "detail_program",
      component: Detail_Program,
      props: true,
    },
    {
      path: "/detail_donation/:id",
      name: "detail_donation",
      component: Detail_Donation,
      props: true,
    },
    {
      path: "/list_relawan",
      name: "list_relawan",
      component: List_Relawan,
    },
    {
      path: "/login",
      name: "login",
      component: Login,
    },
    {
      path: "/register",
      name: "register",
      component: Register,
    },
    {
      path: "/profile",
      name: "profile",
      component: Profile,
    },
  ],
});
router.beforeEach((to, from, next) => {
  AOS.init(); // Initialize AOS
  next();
});
export default router;

<template>
  <div class="min-w-screen overflow-x-hidden font-primary">
    <!-- Navigation -->
    <template v-if="$route.path !== '/login' && $route.path !== '/register'">
      <User_Navigation v-if="isUserLoggedIn" />
      <Navigation v-else />
    </template>

    <!-- Main Content -->
    <main class="min-w-screen overflow-x-hidden">
      <router-view></router-view>
    </main>

    <!-- Footer -->
    <Footer v-if="$route.path !== '/login' && $route.path !== '/register'" />
  </div>
</template>
<script>
import Navigation from "./components/Navigation.vue";
import Footer from "./components/Footer.vue";
import User_Navigation from "./components/User_Navigation.vue";

export default {
  name: "App",
  components: {
    Navigation,
    Footer,
    User_Navigation,
  },
  computed: {
    // Periksa apakah pengguna sudah login
    isUserLoggedIn() {
      // Contoh: Periksa state login dari Vuex atau localStorage
      console.log(localStorage);
      return !!localStorage.getItem("userToken");
    },
  },
};
</script>

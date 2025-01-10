<template>
  <div class="min-w-screen overflow-x-hidden">
    <User_Navigation v-if="isBackgroundVisible" />
    <Navigation
      v-else-if="$route.path !== '/login' && $route.path !== '/register'"
    />
    <main class="min-w-screen overflow-x-hidden">
      <router-view></router-view>
    </main>

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
    isBackgroundVisible() {
      const allowedUrls = ["/"];
      return allowedUrls.includes(this.$route.path);
    },
  },
};
</script>

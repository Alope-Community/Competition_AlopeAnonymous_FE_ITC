<template>
  <nav
    :class="[
      isScrolled
        ? 'bg-white bg-opacity-90 backdrop-blur-lg shadow-md text-primary'
        : 'bg-white bg-opacity-100 shadow-none text-primary',
      'transition duration-300 fixed top-0 w-full z-50 px-6 md:px-16 lg:px-20 p-4',
    ]"
  >
    <div class="container mx-auto flex items-center justify-between">
      <!-- Brand -->
      <div class="text-2xl font-bold">Pijar Nusantara</div>

      <button class="block md:hidden focus:outline-none" @click="toggleMenu">
        <i class="fa-solid fa-bars text-xl"></i>
      </button>

      <ul
        :class="menuOpen ? 'flex' : 'hidden'"
        class="md:flex items-center space-x-6 flex-col md:flex-row md:space-x-6 md:space-y-0 space-y-4 absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent p-4 md:p-0 z-40"
      >
        <li>
          <a
            href="#about"
            class="font-medium transition duration-300 hover:text-red-500 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-red-500 after:transition-all after:duration-300 hover:after:w-full"
          >
            About
          </a>
        </li>

        <li class="relative group">
          <button
            class="flex items-center font-medium transition duration-300 hover:text-red-500 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-red-500 after:transition-all after:duration-300 hover:after:w-full focus:outline-none"
          >
            Program
            <i
              class="fa-solid fa-chevron-down ml-2 transition-transform duration-300 group-hover:rotate-180"
            ></i>
          </button>

          <ul
            class="absolute left-0 mt-2 w-48 bg-white text-gray-800 border border-gray-200 rounded-md shadow-xl z-50 opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-all duration-300"
          >
            <li>
              <a
                href="#relawan"
                class="block px-4 py-2 hover:bg-primary rounded-t-md hover:text-white transition duration-300"
              >
                Relawan
              </a>
            </li>
            <li>
              <a
                href="#donasi"
                class="block px-4 py-2 hover:bg-primary rounded-b-md hover:text-white transition duration-300"
              >
                Donasi
              </a>
            </li>
          </ul>
        </li>

        <!-- <li>
          <a
            href="#testimoni"
            class="font-medium transition duration-300 hover:text-red-500 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-red-500 after:transition-all after:duration-300 hover:after:w-full"
          >
            Testimoni
          </a>
        </li> -->

        <!-- User -->
        <li>
          <RouterLink
            to="profile"
            class="font-medium transition duration-300 hover:text-red-500 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-red-500 after:transition-all after:duration-300 hover:after:w-full"
          >
            User
          </RouterLink>
        </li>
        <li>
          <button
            @click="logout"
            class="font-medium transition duration-300 hover:text-red-500 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-red-500 after:transition-all after:duration-300 hover:after:w-full"
          >
            Logout
          </button>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { RouterLink } from "vue-router";

export default {
  name: "NavigationMenu",
  data() {
    return {
      menuOpen: false,
      isScrolled: false,
    };
  },
  methods: {
    logout() {
      localStorage.removeItem("userToken");
      this.$router.push({ name: "login" });
    },
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
    handleScroll() {
      this.isScrolled = window.scrollY > 0;
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<style>
.backdrop-blur {
  backdrop-filter: blur(10px);
}
</style>

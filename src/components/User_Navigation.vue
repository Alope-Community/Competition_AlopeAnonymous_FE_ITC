<template>
  <nav
    :class="[
      isScrolled
        ? 'bg-white bg-opacity-100 backdrop-blur text-primary'
        : 'bg-white text-primary',
      'transition duration-300 px-6 md:px-16 lg:px-20 p-4 fixed top-0 w-full z-50 shadow-lg',
    ]"
  >
    <div class="container mx-auto flex items-center justify-between">
      <!-- Brand -->
      <div class="text-2xl font-bold font-sekunder">Pijar Nusantara</div>

      <!-- Hamburger Menu (Mobile) -->
      <button class="block md:hidden focus:outline-none" @click="toggleMenu">
        <i class="fa-solid fa-bars text-xl"></i>
      </button>

      <!-- Navigation Menu (Desktop & Mobile) -->
      <ul
        :class="menuOpen ? 'flex' : 'hidden'"
        class="md:flex items-center space-x-6 flex-col md:flex-row md:space-x-6 md:space-y-0 space-y-4 absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent p-4 md:p-0 z-40"
      >
        <!-- About -->
        <li>
          <a
            href="#about"
            class="font-medium transition duration-300 hover:text-yellow-300 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-yellow-300 after:transition-all after:duration-300 hover:after:w-full"
          >
            About
          </a>
        </li>

        <!-- Dropdown Program -->
        <li class="relative group">
          <button
            class="flex items-center font-medium transition duration-300 hover:text-yellow-300 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-yellow-300 after:transition-all after:duration-300 hover:after:w-full focus:outline-none"
          >
            Program
            <i
              class="fa-solid fa-chevron-down ml-2 transition-transform duration-300 group-hover:rotate-180"
            ></i>
          </button>
          <!-- Dropdown Items -->
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

        <!-- Testimoni -->
        <li>
          <a
            href="#testimoni"
            class="font-medium transition duration-300 hover:text-yellow-300 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-yellow-300 after:transition-all after:duration-300 hover:after:w-full"
          >
            Testimoni
          </a>
        </li>

        <!-- User -->
        <li>
          <a
            href="#user"
            class="font-medium transition duration-300 hover:text-yellow-300 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-yellow-300 after:transition-all after:duration-300 hover:after:w-full"
          >
            User
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavigationMenu",
  data() {
    return {
      menuOpen: false,
      isScrolled: false,
    };
  },
  methods: {
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

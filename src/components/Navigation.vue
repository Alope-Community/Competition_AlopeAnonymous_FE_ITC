<template>
  <nav
    class="bg-primary px-6 md:px-16 lg:px-20 text-white p-4 fixed top-0 w-full z-50 shadow-lg"
  >
    <div class="container mx-auto flex justify-between items-center">
      <div>
        <h1 class="text-2xl font-bold font-sekunder">Pijar Nusantara</h1>
      </div>

      <div class="hidden md:flex space-x-4">
        <button
          class="w-32 border border-secondary text-secondary font-medium py-2 px-4 rounded-lg hover:bg-secondary hover:text-primary transition duration-300"
        >
          Login
        </button>
        <button
          class="w-32 border border-secondary text-secondary font-medium py-2 px-4 rounded-lg hover:bg-secondary hover:text-primary transition duration-300"
        >
          Register
        </button>
      </div>
      <div class="md:hidden">
        <button @click="toggleMenu" class="focus:outline-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
    </div>

    <transition name="slide-fade">
      <div
        v-if="menuOpen"
        class="md:hidden bg-primary text-white p-4 space-y-3 border-t border-secondary"
      >
        <button
          class="w-full border border-secondary text-secondary font-medium py-2 px-4 rounded-lg hover:bg-secondary hover:text-primary transition duration-300"
        >
          Login
        </button>
        <button
          class="w-full border border-secondary text-secondary font-medium py-2 px-4 rounded-lg hover:bg-secondary hover:text-primary transition duration-300"
        >
          Register
        </button>
      </div>
    </transition>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      menuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
  },
};
</script>

<style>
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.3s ease-in-out;
}
.slide-fade-enter-from {
  opacity: 0;
  transform: translateY(-20px);
}
.slide-fade-enter-to {
  opacity: 1;
  transform: translateY(0);
}
.slide-fade-leave-from {
  opacity: 1;
  transform: translateY(0);
}
.slide-fade-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>

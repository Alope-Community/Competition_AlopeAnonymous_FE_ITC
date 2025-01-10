<template>
  <nav
    class="bg-primary px-6 md:px-16 lg:px-20 text-white p-4 fixed top-0 w-full z-50 shadow-lg"
  >
    <div class="container mx-auto flex items-center justify-between">
      <div class="text-2xl font-bold font-sekunder">Pijar Nusantara</div>

      <!-- Navigation Menu -->
      <ul class="flex items-center space-x-6">
        <!-- About -->
        <li class="relative">
          <a
            href="#about"
            class="text-white font-medium transition duration-300 hover:text-yellow-300 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-yellow-300 after:transition-all after:duration-300 hover:after:w-full"
          >
            About
          </a>
        </li>

        <!-- Dropdown Program -->
        <li class="relative group">
          <button
            class="flex items-center text-white font-medium transition duration-300 hover:text-yellow-300 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-yellow-300 after:transition-all after:duration-300 hover:after:w-full focus:outline-none"
          >
            Program
            <i
              class="fa-solid fa-chevron-down ml-2 transition-transform duration-300 group-hover:rotate-180"
            ></i>
          </button>
          <!-- Dropdown Items -->
          <ul
            class="absolute left-0 mt-2 w-48 bg-white text-gray-800 border border-gray-200 rounded-md shadow-xl opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-all duration-300"
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
                class="block px-4 py-2 hover:bg-primary rounded-b-md rounded-t-none hover:text-white transition duration-300"
              >
                Donasi
              </a>
            </li>
          </ul>
        </li>

        <!-- Testimoni -->
        <li class="relative">
          <a
            href="#testimoni"
            class="text-white font-medium transition duration-300 hover:text-yellow-300 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-yellow-300 after:transition-all after:duration-300 hover:after:w-full"
          >
            Testimoni
          </a>
        </li>

        <!-- User -->
        <li class="relative">
          <a
            href="#user"
            class="text-white font-medium transition duration-300 hover:text-yellow-300 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-yellow-300 after:transition-all after:duration-300 hover:after:w-full"
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
};
</script>

<style>
.group:hover ul {
  visibility: visible;
  opacity: 1;
}
</style>

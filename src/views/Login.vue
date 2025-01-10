<template>
  <div class="flex min-h-screen items-center justify-center p-4">
    <!-- Wrapper Card -->
    <div
      class="flex border border-primary flex-col md:flex-row w-full max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden"
    >
      <!-- Bagian Kiri: Gradien -->
      <div
        class="hidden md:flex md:w-1/2 bg-gradient-to-r from-primary to-red-500 items-center justify-center p-6"
      >
        <h1 class="text-white text-3xl font-bold mb-2 text-center">
          Login untuk akses program dan komunitas.
        </h1>
      </div>

      <!-- Bagian Kanan: Form Login -->
      <div class="w-full md:w-1/2 p-6">
        <h2 class="text-2xl font-bold text-gray-800 text-center mb-6">Login</h2>
        <form @submit.prevent="handleSubmit">
          <!-- Input Email -->
          <div class="mb-4">
            <label for="email" class="block text-sm font-medium text-gray-700">
              Email
            </label>
            <div class="relative mt-2">
              <i class="fas fa-envelope absolute left-3 top-4 text-primary"></i>
              <input
                type="email"
                id="email"
                v-model="email"
                placeholder="Enter your email"
                class="pl-10 w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>
          </div>

          <!-- Input Password -->
          <div class="mb-4">
            <label
              for="password"
              class="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <div class="relative mt-2">
              <i class="fas fa-lock absolute left-3 top-4 text-primary"></i>
              <input
                type="password"
                id="password"
                v-model="password"
                placeholder="Enter your password"
                class="pl-10 w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>
          </div>

          <!-- Tombol Login -->
          <button
            type="submit"
            class="w-full border border-primary text-primary px-4 py-2 mt-4 rounded-md font-bold hover:bg-primary hover:text-white transition duration-300"
          >
            Login
          </button>
        </form>
        <p class="mt-4 text-center text-gray-600">
          Don't have an account?
          <a href="/register" class="text-blue-500 hover:underline">Sign up</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    handleSubmit() {
      console.log("Email:", this.email);
      console.log("Password:", this.password);
    },
  },
};
</script>

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
          Daftar untuk bergabung dalam komunitas kami.
        </h1>
      </div>

      <!-- Bagian Kanan: Form Register -->
      <div class="w-full md:w-1/2 p-6">
        <h2 class="text-2xl font-bold text-gray-800 text-center mb-6">
          Register
        </h2>
        <form @submit.prevent="handleSubmit">
          <!-- Input Nama Lengkap -->
          <div class="mb-4">
            <label for="name" class="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <div class="relative mt-2">
              <i class="fas fa-user absolute left-3 top-4 text-primary"></i>
              <input
                type="text"
                id="name"
                v-model="name"
                placeholder="Enter your full name"
                class="pl-10 w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>
          </div>

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

          <!-- Input Konfirmasi Password -->
          <div class="mb-4">
            <label
              for="confirmPassword"
              class="block text-sm font-medium text-gray-700"
            >
              Confirm Password
            </label>
            <div class="relative mt-2">
              <i class="fas fa-lock absolute left-3 top-4 text-primary"></i>
              <input
                type="password"
                id="confirmPassword"
                v-model="confirmPassword"
                placeholder="Confirm your password"
                class="pl-10 w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>
          </div>

          <!-- Tombol Register -->
          <button
            type="submit"
            class="w-full border border-primary text-primary px-4 py-2 mt-4 rounded-md font-bold hover:bg-primary hover:text-white transition duration-300"
          >
            Register
          </button>
        </form>
        <p class="mt-4 text-center text-gray-600">
          Already have an account?
          <a href="/login" class="text-blue-500 hover:underline">Login</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  },
  methods: {
    handleSubmit() {
      if (this.password !== this.confirmPassword) {
        alert("Passwords do not match!");
        return;
      }
      console.log("Name:", this.name);
      console.log("Email:", this.email);
      console.log("Password:", this.password);

      axios
        .post("https://alope.id/api/user/auth/signup", {
          name: this.name,
          email: this.email,
          password: this.password,
        })
        .then((response) => {
          if (response) {
            console.log(response);
          }
        })
        .catch((error) => {
          console.log("Server error:", error);
        });
    },
  },
};
</script>

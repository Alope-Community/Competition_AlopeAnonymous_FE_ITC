<template>
  <div class="flex min-h-screen items-center justify-center p-4">
    <div
      class="flex border border-primary flex-col md:flex-row w-full max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden"
    >
      <div
        class="hidden md:flex md:w-1/2 items-center justify-center p-6 relative"
      >
        <img
          src="./../assets/image/relawan_1.png"
          alt="Background"
          class="absolute inset-0 w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-black bg-opacity-50"></div>
        <h1 class="text-white text-3xl font-bold mb-2 text-center z-10">
          Gabung untuk program dan komunitas terbaik.
        </h1>
      </div>

      <div class="w-full md:w-1/2 p-6">
        <button
          class="flex items-center mb-6 text-primary font-bold hover:text-red-500 transition duration-300"
          @click="goToHome"
        >
          <i class="fas fa-arrow-left mr-2"></i> Kembali
        </button>

        <h2 class="text-2xl font-bold text-gray-800 text-center mb-6">Login</h2>
        <form @submit.prevent="handleSubmit">
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
                placeholder="Email"
                class="pl-10 w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>
          </div>

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
                placeholder="Password"
                class="pl-10 w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            class="w-full border border-primary text-primary px-4 py-2 mt-4 rounded-md font-bold hover:bg-primary hover:text-white transition duration-300"
          >
            Masuk
          </button>
        </form>
        <p class="mt-4 text-center text-gray-600">
          Belum Punya Akun?
          <a href="/register" class="text-blue-500 hover:underline">Daftar</a>
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
      email: "",
      password: "",
    };
  },
  methods: {
    handleSubmit() {
      console.log("Email:", this.email);
      console.log("Password:", this.password);

      axios
        .get("https://alope.id/api/user/auth/signin", {
          params: { email: this.email, password: this.password },
        })
        .then((response) => {
          if (response && response.data.token) {
            // Reset form
            this.email = "";
            this.password = "";

            // Simpan token di localStorage
            localStorage.setItem("userToken", response.data.token);

            // Redirect ke halaman home
            this.$router.push({ name: "home" });
          } else {
            // Jika respons tidak memiliki token, tampilkan alert
            alert("Login gagal: Email atau password salah.");
          }
        })
        .catch((error) => {
          // Tampilkan alert jika terjadi error
          alert("Login Gagal");
          console.error("Server error:", error);
        });
    },
    goToHome() {
      this.$router.push({ name: "home" });
    },
  },
};
</script>

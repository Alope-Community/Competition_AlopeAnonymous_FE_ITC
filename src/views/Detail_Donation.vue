<template>
  <section
    class="grid lg:grid-cols-3 md:grid-cols-2 mb-16 mt-28 mx-5 sm:mx-10 lg:mx-24 gap-5 font-primary"
  >
    <div>
      <div class="border border-red-500 rounded-[15px] shadow-xl">
        <img
          :src="'https://alope.id/storage/' + donation.image_url"
          alt=""
          class="w-full"
        />
        <div class="my-7 mx-2 text-center">
          <span
            class="bg-primary/20 text-primary font-semibold px-5 py-3 rounded text-lg mx-1 mb-2 inline-block"
          >
            {{ donation.category }}
          </span>
        </div>
      </div>
    </div>
    <div class="lg:col-span-2 border border-primary rounded-[15px] shadow-xl">
      <div class="md:my-5 md:mx-10 my-3 mx-5">
        <button
          class="flex items-center mb-6 text-primary font-bold hover:text-red-500 transition duration-300"
          @click="goToHome"
        >
          <i class="fas fa-arrow-left mr-2"></i> Kembali
        </button>

        <!-- Konten Deskripsi -->
        <h1 class="md:text-4xl text-3xl font-bold">{{ donation.title }}</h1>
        <h2 class="md:text-3xl text-2xl font-semibold mt-5 text-primary">
          Deskripsi
        </h2>
        <p class="text-gray-700 my-5 text-lg">
          {{ donation.description }}
        </p>
        <h2 class="md:text-3xl text-2xl font-semibold mt-5 text-primary">
          Contact Us
        </h2>
        <div class="flex items-center my-3 gap-3">
          <i
            class="fa-brands fa-instagram md:text-3xl text-xl rounded-lg p-2 text-primary"
          ></i>
          <a href="" class="text-xl text-red-500">{{
            donation.contact_instagram
          }}</a>
        </div>
        <div class="flex items-center my-3 gap-3">
          <i
            class="fa-solid fa-globe md:text-3xl text-xl rounded-lg p-2 text-primary"
          ></i>
          <p href="" class="text-xl text-red-500">{{
            donation.web_url
          }}</p>
        </div>
        <RouterLink
          v-if="isLoggedIn"
          :to="donation.donation_url"
          class="border border-[#FFAC00] text-[#FFAC00] px-4 py-2 mt-4 rounded-md font-bold hover:bg-[#FFAC00] hover:text-white transition duration-300"
        >
          Daftar Sekarang
        </RouterLink>
        <button
          v-else
          @click="promptLogin"
          class="border border-[#FFAC00] text-[#FFAC00] px-4 py-2 mt-4 rounded-md font-bold hover:bg-[#FFAC00] hover:text-white transition duration-300"
        >
          Daftar Sekarang
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
import { RouterLink } from "vue-router";
export default {
  props: {
    id: {
      type: [String, Number],
      required: true, // Pastikan `id` selalu diterima
    },
  },
  data() {
    return {
      isLoadingGetDonation: false,
      donation: {},
      isLoggedIn: false, // Tambahkan properti untuk status login
      error: null, // Untuk menyimpan pesan error jika terjadi
    };
  },
  methods: {
    async getDataDonation() {
      try {
        this.isLoadingGetDonation = true;
        this.error = null;

        // Memanggil API dengan ID
        const response = await axios.get(
          `https://alope.id/api/user/donationAPI/${this.id}`
        );

        if (response && response.data) {
          this.donation = response.data.data;
        }
      } catch (error) {
        console.error("Server error:", error);
        this.error = "Gagal mengambil data. Silakan coba lagi.";
      } finally {
        this.isLoadingGetDonation = false;
      }
    },
    checkLoginStatus() {
      // Periksa apakah token ada di localStorage
      const token = localStorage.getItem("userToken");
      this.isLoggedIn = !!token; // Mengatur status login berdasarkan token
    },
    goToHome() {
      this.$router.push({ name: "home" }); // Navigasi ke halaman home
    },
    promptLogin() {
      // Tampilkan notifikasi atau arahkan ke halaman login
      alert("Anda harus login untuk mendaftar.");
      this.$router.push({ name: "login" }); // Arahkan ke halaman login
    },
  },
  mounted() {
    this.checkLoginStatus(); // Cek status login saat komponen dimuat
    this.getDataDonation();
    window.scrollTo(0, 0);
  },
};
</script>

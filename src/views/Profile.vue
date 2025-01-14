<template>
  <div class="bg-white p-10 pt-24 sm:p-8 md:p-20 md:pt-24">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <!-- Kartu Profil -->
      <div>
        <div
          class="col-span-1 border border-red-300 bg-white p-4 rounded-md shadow-sm"
        >
          <h2 class="font-bold text-lg mb-4">PROFILE</h2>
          <div class="flex items-center mb-4">
            <div
              class="w-16 h-16 border border-primary bg-white rounded-full flex items-center justify-center"
            >
              <i class="fas fa-user text-primary text-2xl"></i>
            </div>
            <div class="ml-4">
              <p class="font-medium">{{ profile.name }}</p>
              <p class="text-sm text-gray-600">{{ profile.email }}</p>
            </div>
          </div>
          <p class="text-sm font-bold text-gray-900">
            Tanggal Bergabung : {{ formatDate(profile.created_at) }}
          </p>
        </div>
      </div>

      <!-- Riwayat Program -->
      <div class="col-span-1 md:col-span-2">
        <div
          class="mb-10 border border-red-300 bg-white p-4 rounded-md shadow-sm"
        >
          <h2 class="font-bold text-lg mb-4">Riwayat Relawan</h2>
          <div class="overflow-x-auto">
            <table class="w-full border-collapse border border-gray-200">
              <thead>
                <tr class="bg-gray-50">
                  <th class="border border-gray-200 p-2 text-sm text-center">
                    No
                  </th>
                  <th class="border border-gray-200 p-2 text-sm text-center">
                    Program di Ikuti
                  </th>
                  <th class="border border-gray-200 p-2 text-sm text-center">
                    Tanggal Bergabung
                  </th>
                  <th class="border border-gray-200 p-2 text-sm text-center">
                    Tanggal Mulai
                  </th>
                  <th class="border border-gray-200 p-2 text-sm text-center">
                    Tanggal Selesai
                  </th>
                </tr>
              </thead>
              <tbody
                v-for="(history_volunteer, index) in profile.volunteer"
                :key="index"
              >
                <tr class="text-center">
                  <td>{{ index + 1 }}</td>
                  <td>
                    {{ history_volunteer.title }}
                  </td>
                  <td>
                    {{ formatDate(history_volunteer.pivot.created_at) }}
                  </td>
                  <td>
                    {{ formatDate(history_volunteer.start_date) }}
                  </td>
                  <td>
                    {{ formatDate(history_volunteer.end_date) }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="border border-red-300 bg-white p-4 rounded-md shadow-sm">
          <h2 class="font-bold text-lg mb-4">Riwayat Donasi</h2>
          <div class="overflow-x-auto">
            <table class="w-full border-collapse border border-gray-200">
              <thead>
                <tr class="bg-gray-50">
                  <th class="border border-gray-200 p-2 text-sm text-center">
                    No
                  </th>
                  <th class="border border-gray-200 p-2 text-sm text-center">
                    Program di Ikuti
                  </th>
                  <th class="border border-gray-200 p-2 text-sm text-center">
                    Tanggal Berdonasi
                  </th>
                  <th class="border border-gray-200 p-2 text-sm text-center">
                    Tanggal Mulai
                  </th>
                  <th class="border border-gray-200 p-2 text-sm text-center">
                    Tanggal Selesai
                  </th>
                </tr>
              </thead>
              <tbody
                v-for="(history_donation, index) in profile.donation"
                :key="index"
              >
                <tr class="text-center">
                  <td>{{ index + 1 }}</td>
                  <td class="items-center justify-center text-center">
                    {{ history_donation.title }}
                  </td>
                  <td>
                    {{ formatDate(history_donation.pivot.created_at) }}
                  </td>
                  <td>
                    {{ formatDate(history_donation.start_date) }}
                  </td>
                  <td>
                    {{ formatDate(history_donation.end_date) }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import moment from "moment";

export default {
  data() {
    return {
      profile: {},
    };
  },
  methods: {
    formatDate(date) {
      return moment(date).format("DD MMMM YYYY");
    },
    getDataProfile() {
      // Ambil token dari localStorage
      const token = localStorage.getItem("userToken"); // Ganti "token" dengan nama key yang digunakan saat menyimpan token
      if (!token) {
        console.error("Token not found in localStorage");
        return;
      }

      // Header dengan Authorization
      const headers = {
        Authorization: `Bearer ${token}`,
      };

      axios
        .get("https://alope.id/api/user/profile", { headers }) // Tambahkan headers di sini
        .then((response) => {
          if (response && response.data) {
            this.profile = response.data.data;
            console.log(response);
          }
        })
        .catch((error) => {
          console.error("Server error:", error);
        });
    },
  },
  mounted() {
    this.getDataProfile();
    window.scrollTo(0, 0);
  },
};
</script>

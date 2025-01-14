<template>
  <section>
    <!-- Header Section -->
    <div class="bg-gradient-to-r from-primary to-red-500 text-white py-10">
      <div class="container mx-auto px-10 pt-32 text-center">
        <h1 class="text-white text-4xl font-bold mb-8">
          Temukan Lebih Banyak <br />
          Program Donasi
        </h1>
      </div>
    </div>

    <!-- Konten Section -->
    <div class="bg-white my-16 mx-5 sm:mx-10 lg:mx-14">
      <div class="container mx-auto px-4 mb-5 lg:px-20">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <!-- Filter Section -->
          <div class="col-span-1">
            <div
              class="bg-white border border-red-500 shadow-md p-4 rounded-lg"
            >
              <button
                class="flex items-center mb-6 text-primary font-bold hover:text-red-500 transition duration-300"
                @click="goToHome"
              >
                <i class="fas fa-arrow-left mr-2"></i> Kembali
              </button>
              <div class="mb-4">
                <div class="relative">
                  <input
                    type="text"
                    v-model="searchQuery"
                    @input="searchDonations"
                    id="search"
                    placeholder="Cari program"
                    class="w-full border border-red-500 rounded-lg p-2 focus:ring-red-500 focus:border-red-500"
                  />
                  <i
                    class="fas fa-search absolute right-3 top-3 text-primary"
                  ></i>
                </div>
              </div>
            </div>
          </div>

          <!-- Program Cards Section -->
          <div class="md:col-span-3 grid grid-cols-1 mb-5">
            <!-- Card 1 -->
            <div
              class="bg-white border border-primary gap-10 shadow-md rounded-[15px] md:flex overflow-hidden items-center mb-5"
              v-for="(donation, index) in donations"
              :key="index"
            >
              <img
                :src="'https://alope.id/storage/' + donation.image_url"
                alt="List_Relawan"
                class="md:w-1/2 md:max-w-88 md:min-w-44 w-full max-h-52 min-h-52 object-cover"
              />
              <div class="md:w-2/3 p-4">
                <h2 class="lg:text-2xl text-2xl font-bold text-gray-900 mb-2">
                  {{ donation.title }}
                </h2>
                <p class="text-md text-gray-600 mb-7">
                  {{ truncateDescription(donation.description) }}
                </p>
                <RouterLink
                  :to="'/detail_donation/' + donation.id"
                  class="bg-white border border-red-500 text-red-500 px-4 py-2 rounded-lg hover:bg-red-500 hover:text-white transition"
                >
                  Daftar Sekarang
                </RouterLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { RouterLink } from "vue-router";
import axios from "axios";

export default {
  data() {
    return {
      searchQuery: "", // For storing the search input
      donations: [], // Store donations
      isLoadingGetDonation: false, // Loading state for donations
    };
  },
  methods: {
    truncateDescription(description) {
      const words = description.split(" ");
      if (words.length > 10) {
        return words.slice(0, 10).join(" ") + "...";
      }
      return description;
    },
    // Method to fetch donations from the API
    getDataDonation() {
      this.isLoadingGetDonation = true;
      axios
        .get("https://alope.id/api/user/donationAPI")
        .then((response) => {
          if (response) {
            console.log(response.data.data);
            this.isLoadingGetDonation = false;
            this.donations = response.data.data;
          }
        })
        .catch((error) => {
          this.isLoadingGetDonation = false;
          console.log("Server error:", error);
        });
    },

    // Method to search donations based on the query
    searchDonations() {
      if (this.searchQuery.length > 2) {
        this.isLoadingGetDonation = true;
        axios
          .get("https://alope.id/api/user/donation/searchAPI", {
            params: { keyword: this.searchQuery },
          })
          .then((response) => {
            this.isLoadingGetDonation = false;
            this.donations = response.data.data;
          })
          .catch((error) => {
            this.isLoadingGetDonation = false;
            console.log("Server error during search:", error);
          });
      } else {
        // Reset the donations if the search query is too short
        this.getDataDonation();
      }
    },

    // Method to navigate back to the home page
    goToHome() {
      this.$router.push({ name: "home" });
    },
  },
  mounted() {
    this.getDataDonation(); // Fetch the data on mount
    window.scrollTo(0, 0);
  },
};
</script>

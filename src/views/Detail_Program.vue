<template>
  <section
    class="grid lg:grid-cols-3 md:grid-cols-2 mb-16 mt-28 mx-5 sm:mx-10 lg:mx-24 gap-5 font-primary"
  >
    <div>
      <div class="border border-red-500 rounded-[15px] shadow-xl">
        <img
          :src="'https://alope.id/storage/' + volunteer.image_url"
          alt=""
          class="w-full"
        />
        <div class="my-7 mx-2 text-center">
          <span
            class="bg-red-500/20 text-red-500 font-semibold px-5 py-3 rounded text-lg mx-1 mb-2 inline-block"
          >
            {{ volunteer.category }}
          </span>
        </div>
      </div>
    </div>
    <div class="lg:col-span-2 border border-primary rounded-[15px] shadow-xl">
      <div class="md:my-5 md:mx-10 my-3 mx-5">
        <h1 class="md:text-4xl text-3xl font-bold">{{ volunteer.title }}</h1>
        <h2 class="md:text-3xl text-2xl font-semibold mt-5 text-primary">
          Deskripsi
        </h2>
        <p class="text-gray-700 my-5 text-lg">
          {{ volunteer.description }}
        </p>
        <h2 class="md:text-3xl text-2xl font-semibold mt-5 text-primary">
          Contact Us
        </h2>
        <div class="flex items-center my-3 gap-3">
          <i
            class="fa-brands fa-instagram md:text-3xl text-xl rounded-lg p-2 text-primary"
          ></i>
          <a href="" class="text-xl text-red-500">{{
            volunteer.contact_instagram
          }}</a>
        </div>
        <div class="flex items-center my-3 gap-3">
          <i
            class="fa-solid fa-phone md:text-3xl text-xl rounded-lg p-2 text-primary"
          ></i>
          <a href="" class="text-xl text-red-500">{{
            volunteer.contact_phone
          }}</a>
        </div>
        <button
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
export default {
  data() {
    return {
      isLoadingGetVolunteer: false,
      volunteer: {},
    };
  },
  methods: {
    getDataVolunteer() {
      this.isLoadingGetVolunteer = true;
      axios
        .get("https://alope.id/api/user/volunteerAPI/1")
        .then((response) => {
          if (response) {
            console.log(response.data.data);
            this.isLoadingGetVolunteer = false;
            this.volunteer = response.data.data;
          }
        })
        .catch((error) => {
          this.isLoadingGetVolunteer = false;
          console.log("Server error:", error);
        });
    },
  },
  mounted() {
    this.getDataVolunteer();
    // this.getDataVolunteers();
  },
};
</script>

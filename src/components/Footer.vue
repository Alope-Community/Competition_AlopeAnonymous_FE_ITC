<template>
  <footer class="mt-7 bg-primary text-secondary font-primary">
    <div
      class="grid grid-cols-1 md:grid-cols-6 gap-5 mx-6 md:mx-16 text-secondary"
    >
      <div class="lg:col-span-2 md:col-span-4">
        <h1 class="font-extrabold mt-10 mb-5 text-2xl font-sekunder">
          Pijar Nusantara
        </h1>
        <p class="font-semibold">
          Jelajahi bakat mengajar Anda <br />
          dan ciptakan dampak nyata <br />
          bagi pendidikan Nusantara.
        </p>
        <div class="flex items-center gap-3 mt-5">
          <h1 class="text-2xl font-extrabold mr-2">Follow Us:</h1>
          <a href="#" aria-label="Instagram">
            <i class="fa-brands fa-instagram text-2xl"></i>
          </a>
          <a href="#" aria-label="GitHub">
            <i class="fa-brands fa-github text-2xl"></i>
          </a>
          <a href="#" aria-label="LinkedIn">
            <i class="fa-brands fa-linkedin text-2xl"></i>
          </a>
        </div>
      </div>

      <div class="lg:col-span-2 md:col-span-3">
        <h1 class="font-extrabold mt-10 mb-5 text-2xl">Location</h1>
        <p class="font-semibold">
          Jl. Pramuka No.67 <br />
          Purwawinangun-Kuningan <br />
          Jawa Barat 45512
        </p>
      </div>

      <div class="lg:col-span-2 md:col-span-3 grid grid-cols-2 gap-x-10">
        <div>
          <h1 class="font-extrabold mt-10 mb-5 text-2xl">Program</h1>
          <RouterLink to="/list_relawan" class="font-semibold block"
            >Relawan</RouterLink
          >
          <RouterLink to="/list_donation" class="font-semibold block"
            >Donasi</RouterLink
          >
        </div>
        <div>
          <h1 class="font-extrabold mt-10 mb-5 text-2xl">Lainnya</h1>
          <a href="#home" class="font-semibold block">Privacy Policy</a>
          <a href="#faq" class="font-semibold block">FAQ</a>
        </div>
      </div>
    </div>

    <div class="mx-6 md:mx-16">
      <hr class="mt-5 border-secondary" />
      <p class="text-center py-3">
        &copy; CopyRight Team Alope Anonymous, All Right Reserved
      </p>
    </div>
  </footer>
</template>

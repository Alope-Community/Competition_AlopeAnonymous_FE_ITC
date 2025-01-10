<template>
  <div class="bg-white p-4 sm:p-8 md:p-20">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <!-- Kartu Profil -->
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
            <p class="font-medium">Taufan Hidayatul Akbar</p>
            <p class="text-sm text-gray-600">taufan@gmail.com</p>
          </div>
        </div>
        <p class="text-sm font-bold text-gray-900">Tanggal Bergabung :</p>
      </div>

      <!-- Riwayat Program -->
      <div
        class="col-span-1 md:col-span-2 border border-red-300 bg-white p-4 rounded-md shadow-sm"
      >
        <h2 class="font-bold text-lg mb-4">Riwayat Program</h2>
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
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              <!-- Contoh data kosong -->
              <tr>
                <td
                  class="border border-gray-200 p-2 text-sm text-center"
                  colspan="5"
                >
                  Belum ada data
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

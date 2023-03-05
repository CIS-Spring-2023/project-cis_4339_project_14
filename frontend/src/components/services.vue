<script>
export default {
  computed: {
    services() {
      return this.$root.serviceArray
    }
  }
}
</script>

<template>
    <div>
        <h1 class="font-bold text-4xl text-red-700 tracking-widest text-center mt-10">
        List of Services
        </h1>
        <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10"
        >
        <div class="ml-10"></div>
        <div class="flex flex-col col-span-2">
        <table class="min-w-full shadow-md rounded">
            <thead class="bg-gray-50 text-xl">
              <tr class="p-4 text-left">
                <th class="p-4 text-left">Name</th>
                <th class="p-4 text-left">Company</th>
                <th class="p-4 text-left">Description</th>
                <th class="p-4 text-left">Active?</th>
              </tr>
            </thead>
            <tbody>
                <tr v-for="(service, index) in services" :key="index">
                    <td>{{ service.name }}</td>
                    <td>{{ service.company }}</td>
                    <td>{{ service.description }}</td>
                    <td>{{ service.status }}</td>
                </tr>
            </tbody>
        </table>
        </div>
        </div>
      
    </div>
</template>
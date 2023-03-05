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
        Edit Service
        </h1>
        <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10"
        >
        <div class="ml-10"></div>

        </div>
    </div>
</template>
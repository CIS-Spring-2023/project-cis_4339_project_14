<script>
export default {
  computed: {
    services() {
      return this.$serviceArray
    }
  }
}
</script>

<template>
    <div>
      <ul>
        <li v-for="service in services" :key="service">
          <h3>{{ service.nameOfService }}</h3>
          <p>{{ service.descriptionOfService }}</p>
          <p>{{ service.companyOfService }}</p>
          <p>{{ service.status }}</p>
        </li>
      </ul>
    </div>
</template>
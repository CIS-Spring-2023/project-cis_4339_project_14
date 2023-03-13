<template>
    <div>
      <!-- canvas element for chart -->
      <canvas id="clientChart"></canvas>
    </div>
</template>
  
  
  <script>
  import { Chart, registerables } from 'chart.js'
  import clientData from '../assets/clientData.js'
  
  Chart.register(...registerables);
  export default {
    name: 'clientChart',
    data() {
      return {
        clientData: clientData
      }
    },
    //establish Chart object after mounting the component
    mounted() {
      const ctx = document.getElementById('clientChart');
      new Chart(ctx, this.clientData);
    }
  }
  </script>
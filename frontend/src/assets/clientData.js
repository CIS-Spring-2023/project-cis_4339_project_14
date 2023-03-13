export const clientData = {
    type: "doughnut",
    data: {
      labels: ["77027", "77001", "77005", "77008", "77584", "77777"],
      datasets: [
        {
          label: "Number of Clients",
          data: [39, 20, 15, 25, 22, 30],
          backgroundColor: [
          'rgb(255,99,132)',
          'rgb(54, 90, 235)',
          'rgb(250, 100, 86)',
          'rgb(60, 255, 120)',
          'rgb(90, 100, 120)',
          'rgb(200, 160, 20)'
          ],
          borderWidth: 3,
          hoverOffset: 25
        }
      ]
    },
    options: {
      responsive: true
    }
  };
  
  export default clientData;
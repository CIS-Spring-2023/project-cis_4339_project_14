import axios from 'axios'
const apiURL =
    import.meta.env.VITE_ROOT_API

// var counts = [];
// var zips = []
export function getClientData() {
    axios.get(`${apiURL}/clients/zips`)
        .then((res) => {
            clientData.data.labels = res.data.zips
            clientData.data.datasets[0].data = res.data.counts
            alert("client data loaded");
        })
        .catch((error) => {
            console.log(error);
        })
}

export const clientData = {
    type: "doughnut",
    data: {
        labels: [],
        datasets: [{
            label: "Number of Clients",
            data: [],
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
        }]
    },
    options: {
        responsive: true
    }
};

export default clientData;
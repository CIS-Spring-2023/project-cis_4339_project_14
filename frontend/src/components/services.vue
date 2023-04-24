<script>
import axios from 'axios';
const apiURL = import.meta.env.VITE_ROOT_API

export default {
//   computed: {
//     services() {
//       return this.$root.serviceArray
//     },
//   },
  data(){
        return{
            services: this.$root.serviceArray,
            // This object stores what the user wants to change
            selectedService: {}

        }
    },

  methods:{
    selectService(index){
        console.log("got to selecservuce")
        this.selectedService = Object.assign({}, this.$root.serviceArray[index]);
        console.log(this.selectedService)
    },
    editService(){
        // Call global function from App.vue based on what the user input is for toChange.toEdit
        // if(this.toChange.toEdit === 'Company'){
        //     this.$root.editServiceCompany(this.toChange.name, this.toChange.newVal);
        // }
        // else if (this.toChange.toEdit === 'Description')
        // {
        //     this.$root.editServiceDescription(this.toChange.name, this.toChange.newVal);
        // }
        // else if (this.toChange.toEdit === 'Status')
        // {
        //     this.$root.editServiceStatus(this.toChange.name, this.toChange.newVal);
        // }

        // // reset object vars
        // this.toChange.name = "";
        // this.toChange.toEdit = "";
        // this.toChange.newVal = "";

        axios
            .put(`${apiURL}/services/update`, {data: this.selectedService})
            .then(() => {
                alert('Service has been updated')
            })
            .catch((error) => {
                console.log(error)
        })
    }
  }
}
</script>

<template>
    <div>
        <!-- Below, a table is created to show the current services regardless of status -->
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
                <th class="p-4 text-left">Active</th>
              </tr>
            </thead>
            <tbody>
                <tr v-for="(service, index) in services" :key="index" @click="selectService(index)">
                    <td>{{ service.name }}</td>
                    <td>{{ service.company }}</td>
                    <td>{{ service.description }}</td>
                    <td>{{ service.status }}</td>
                </tr>
            </tbody>
        </table>
        <br>
        <br>
        </div>
        </div>
        


        <!-- Below, a form is presented for users to potentially edit services -->
        <!-- ALL SERVICES START OFF AS INACTIVE, SO THE USER WILL HAVE TO SET THEM AS ACTIVE FIRST AT THE LEAST -->
        <h6 class="font-bold text-4xl text-red-700 tracking-widest text-center mt-10">
            Edit Service
        </h6>
        <p class="font-bold text-4xl text-red-700 tracking-widest text-center mt-10" v-if="this.$root.editLogin == false"> NEEDS EDIT ACCESS </p>
        <div class="px-10 py-20">
            <form v-if='this.$root.editLogin == true' @submit.prevent="editService">
                <div class="flex flex-col">
                    <label class="block">
                    <span class="text-gray-700">Service Name</span>
                    <span style="color: #ff0000">*</span>
                    <input
                        v-model="selectedService.name"
                        type="text"
                        class="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    />
                    <!-- <p class="text-gray-600 text-xs italic">Enter which service you would like to change (Case - sensitive)</p> -->
                    </label>
                </div>

                <br>

                <div class="flex flex-col">
                    <label class="block">
                    <span class="text-gray-700">Service Description</span>
                    <span style="color: #ff0000">*</span>
                    <input
                        v-model="selectedService.description"
                        type="text"
                        class="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    />
                    <!-- <p class="text-gray-600 text-xs italic">Enter which property you would like to change (Case - sensitive)</p> -->
                    </label>
                </div>

                <br>

                <div class="flex flex-col">
                    <label class="block">
                    <span class="text-gray-700">Service Company</span>
                    <span style="color: #ff0000">*</span>
                    <input
                        v-model="selectedService.company"
                        type="text"
                        class="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    />
                    <!-- <p class="text-gray-600 text-xs italic">Enter the new desired value or Active/Inactive for status (Case - sensitive)</p> -->
                    </label>
                </div>

                <br>

                <div class="flex flex-col mt-4">
                    <label class="inline-flex items-center">
                        <input
                            type="checkbox"
                            class="form-checkbox h-5 w-5 text-indigo-600"
                            v-bind:checked="selectedService.status"
                            v-on:change="selectedService.status = !selectedService.status"
                        />
                        <span class="ml-2 text-gray-700">Status</span>
                    </label>
                </div>

                <br>

                <div class="flex justify-center mt-10 mr-20">
                    <button class="bg-red-700 text-white rounded" type="submit">
                    Save Service
                    </button>
                </div>

            </form>
        </div>  
    </div>
</template>
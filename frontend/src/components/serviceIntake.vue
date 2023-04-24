<script>
import axios from 'axios'
const apiURL = import.meta.env.VITE_ROOT_API

export default{
    data(){
        return{
            services: {
                name: "",
                description: "",
                company: "",
                status: false

            }
        };
    },

    methods: {
        //call global method to add new service to global array. This calls the global method which then proceeds to push values to the global array
        //then reset vars
        addService(){
            // this.$root.addNewService(this.services.nameOfService,
            // this.services.companyOfService,
            // this.services.descriptionOfService,
            // this.services.status);

            // this.services.nameOfService = "";
            // this.services.descriptionOfService = "";
            // this.services.companyOfService = "";
            // this.services.status = "Inactive";
            axios
            .post(`${apiURL}/services/add`, this.services)
            .then(() => {
                alert('Service has been added.')
            })
            .catch((error) => {
                console.log(error)
            })

            this.services.name = "";
            this.services.description = "";
            this.services.company = "";

            this.$root.buildServicesInMemory();
        }

    }

}
</script>

<template>
    <main>
        <h1 class="font-bold text-4xl text-red-700 tracking-widest text-center mt-10">
            Services Form
        </h1>
        <div class="px-10 py-20">
            <!-- Prevent Reloading the page when new service is added will be further implemented sprint 3-->
            <form @submit.prevent="addService">
            <!-- faux frontend here for now -->    
            <!-- <form> -->
                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10">

                <!-- Intake service Name here -->
                <div class="flex flex-col">
                    <label class="block">
                    <span class="text-gray-700">Service Name</span>
                    <span style="color: #ff0000">*</span>
                    <input
                        type="text"
                        class="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        v-model="services.name"
                    />
                    <!-- Will do more stuff to process data here -->
                    </label>
                </div>


                <!-- Intake Company of the service provided here -->
                <div class="flex flex-col">
                    <label class="block">
                    <span class="text-gray-700">Service Company</span>
                    <span style="color: #ff0000">*</span>
                    <input
                        type="text"
                        class="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        v-model="services.company"
                    />
                    <!-- Will do more stuff to process data here -->
                    </label>
                </div>
                </div>
                    
                <!-- Intake service Description here -->
                <div class="flex flex-col">
                    <label class="block">
                    <span class="text-gray-700">Service Description</span>
                    <input
                        type="text"
                        class="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        v-model="services.description"
                    />
                    <p class="text-gray-600 text-xs italic">Something to describe what the service is about</p>
                    <!-- Will do more stuff to process data here -->
                    </label>
                </div>

                <!-- checkbox to set a specific service as active -->
                <!-- <div>
                    <label for="statusOfService">Active:</label>
                    <input type="checkbox" id="statusOfService" v-model="services.statusOfService" />
                </div> -->

                <!-- submit button -->
                <div class="flex justify-center mt-10 mr-20">
                    <button class="bg-red-700 text-white rounded" type="submit">
                    Add Service
                    </button>
                </div>
            </form>
        </div>
    </main>
</template>
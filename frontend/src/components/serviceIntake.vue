<script>
import axios from 'axios'
const apiURL = import.meta.env.VITE_ROOT_API

export default{
    data(){
        return{
            services: {
                nameOfService: "",
                descriptionOfService: "",
                companyOfService: "",
                statusOfService: false

            }
        };
    },

    // methods: {
    //     addnewService(){
    //         // This method will be further implemented in the back end portion of this project
    //         // because this method will need to lookup the current events stored and decide 
    //         // if an even needs to be added or not
    //     }

    // }

}
</script>

<template>
    <main>
        <h1 class="font-bold text-4xl text-red-700 tracking-widest text-center mt-10">
            Services Form
        </h1>
        <div class="px-10 py-20">
            <!-- Prevent Reloading the page when new service is added will be further implemented sprint 3-->
            <!-- <form @submit.prevent="addnewService"> -->
            <!-- faux frontend here for now -->    
            <form>
                <div class="flex flex-col">
                    <label class="block">
                    <span class="text-gray-700">Service Name</span>
                    <span style="color: #ff0000">*</span>
                    <input
                        type="text"
                        class="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        v-model="services.nameOfService"
                    />
                    </label>
                </div>
                <div class="flex flex-col">
                    <label class="block">
                    <span class="text-gray-700">Service Company</span>
                    <span style="color: #ff0000">*</span>
                    <input
                        type="text"
                        class="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        v-model="services.companyOfService"
                    />
                    </label>
                </div>
                <div class="flex flex-col">
                    <label class="block">
                    <span class="text-gray-700">Service Description</span>
                    <span style="color: #ff0000">*</span>
                    <input
                        type="text"
                        class="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        v-model="services.descriptionOfService"
                    />
                    </label>
                </div>
            </form>
        </div>
    </main>
</template>
<script>
export default {
  computed: {
    services() {
      return this.$root.serviceArray
    },
  },
  data(){
        return{
            // This object stores what the user wants to change
            toChange:{
                name: "",
                toEdit: "",
                newVal:""
            }

        }
    },

  methods:{
    editService(){
        // Call global function from App.vue based on what the user input is for toChange.toEdit
        if(this.toChange.toEdit === 'Company'){
            this.$root.editServiceCompany(this.toChange.name, this.toChange.newVal);
        }
        else if (this.toChange.toEdit === 'Description')
        {
            this.$root.editServiceDescription(this.toChange.name, this.toChange.newVal);
        }
        else if (this.toChange.toEdit === 'Status')
        {
            this.$root.editServiceStatus(this.toChange.name, this.toChange.newVal);
        }

        // reset object vars
        this.toChange.name = "";
        this.toChange.toEdit = "";
        this.toChange.newVal = "";
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
        <br>
        <br>
        </div>
        </div>

        <h2 class="font-bold text-4xl text-red-700 tracking-widest text-center mt-10">
            Edit Service
        </h2>
        <div class="px-10 py-20">
            <form @submit.prevent="editService">
                <div class="flex flex-col">
                    <label class="block">
                    <span class="text-gray-700">Service Name</span>
                    <span style="color: #ff0000">*</span>
                    <input
                        type="text"
                        class="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        v-model="toChange.name"
                    />
                    <p class="text-gray-600 text-xs italic">Enter which service you would like to change</p>
                    </label>
                </div>

                <div class="flex flex-col">
                    <label class="block">
                    <span class="text-gray-700">Property to Change</span>
                    <span style="color: #ff0000">*</span>
                    <input
                        type="text"
                        class="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        v-model="toChange.toEdit"
                    />
                    <p class="text-gray-600 text-xs italic">Enter which property you would like to change (Case - sensitive)</p>
                    </label>
                </div>

                <div class="flex flex-col">
                    <label class="block">
                    <span class="text-gray-700">New Value</span>
                    <span style="color: #ff0000">*</span>
                    <input
                        type="text"
                        class="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        v-model="toChange.newVal"
                    />
                    <p class="text-gray-600 text-xs italic">Enter the new desired value</p>
                    </label>
                </div>

                <div class="flex justify-center mt-10 mr-20">
                    <button class="bg-red-700 text-white rounded" type="submit">
                    Save Service
                    </button>
                </div>

            </form>
        </div>  
    </div>
</template>
<script>
import axios from 'axios'
import { getClientData } from './assets/clientData'
const apiURL = import.meta.env.VITE_ROOT_API

export default {
  name: 'App',
  data() {
    return {
      orgName: 'Dataplatform',


      viewLogin: false,
      editLogin: false,

      //User that is a viewer username and password
      viewerLogin: {
          username: "viewer",
          password: "viewpassword"
      },

      // User that is an editor username and password
      editorLogin: {
        username: "editor",
        password: "editpassword"
      },
      
      /*
      This is a global array to demonstrate front end services functionality
      This will obviously be removed when in sprint 3 because by then we can 
      work on the backend to store the data in a database instead
      */
      serviceArray: []

    }
  },
  methods: {
      // This method is global as of now because the global array serviceArray needs to be changed to demonstrate front-end functionality
  addNewService(name, company, description, status){
    this.serviceArray.push({
      name: name,
      company: company, 
      description: description,
      status: status
    });



    // console.log(this.serviceArray);
  },

  // edit company name 
  // again this is something that only demonstrates fron-end functionality and will be changed drastically in the next sprint
  editServiceCompany(name, newVal){
    const index = this.serviceArray.findIndex(service => service.name === name);

    this.serviceArray[index].company = newVal;

    console.log(this.serviceArray);

  },

  // edit desctiption
  // again this is something that only demonstrates fron-end functionality and will be changed drastically in the next sprint
  editServiceDescription(name, newVal){
    const index = this.serviceArray.findIndex(service => service.name === name);

    this.serviceArray[index].description = newVal;

  },

  // edit status of service
  // again this is something that only demonstrates fron-end functionality and will be changed drastically in the next sprint
  editServiceStatus(name, newVal){
    const index = this.serviceArray.findIndex(service => service.name === name);

    this.serviceArray[index].status = newVal;

  },

  buildServicesInMemory(){
    axios
      .get(`${apiURL}/services/all`)
      .then((res) => {
          this.serviceArray = res.data
          alert('Service loaded in memory')
          console.log(this.serviceArray)
      })
      .catch((error) => {
          console.log(error)
      })
  }
    
  },

  created() {   
    axios.get(`${apiURL}/org`).then((res) => {
      this.orgName = res.data.name
    })
    getClientData();
    this.buildServicesInMemory();
    
  }
}
</script>
<template>
  <main class="flex flex-row">
    <div id="_container" class="h-screen">
      <header class="w-full">
        <section class="text-center">
          <img class="m-auto" src="@\assets\DanPersona.svg" />
        </section>
        <nav class="mt-10">
          <ul class="flex flex-col gap-4">
            <li>
              <router-link to="/login">
                <span
                  style ="position: relative; top: 6px" 
                  class="material-icons"
                  >login</span
                  >
                Login
                </router-link>
            </li>
            <li>
              <router-link to="/">
                <span
                  style="position: relative; top: 6px"
                  class="material-icons"
                  >dashboard</span
                >
                Dashboard
              </router-link>
            </li>
            <li>
              <router-link v-if="editLogin" to="/intakeform">
                <span
                  style="position: relative; top: 6px"
                  class="material-icons"
                  >people</span
                >
                Client Intake Form
              </router-link>
            </li>
            <li>
              <router-link v-if="editLogin" to="/eventform">
                <span
                  style="position: relative; top: 6px"
                  class="material-icons"
                  >event</span
                >
                Create Event
              </router-link>
            </li>
            <li>
              <router-link v-if="editLogin" to="/serviceIntake">
                <span
                  style="position: relative; top: 6px"
                  class="material-icons"
                  >design_services</span
                >
                Service Intake
              </router-link>
            </li>

            <!-- <li>
              <router-link to="/">
                <span
                  style="position: relative; top: 6px"
                  class="material-icons"
                  >edit_note</span
                >
                Edit Services
              </router-link>
            </li> -->

            <li>
              <router-link v-if="editLogin || viewLogin" to="/services">
                <span
                  style="position: relative; top: 6px"
                  class="material-icons"
                  >library_add_check</span
                >
                Services View/Edit
              </router-link>
            </li>
            <li>
             <router-link v-if="editLogin || viewLogin" to="/findclient">
                <span
                  style="position: relative; top: 6px"
                  class="material-icons"
                  >search</span
                >
                Find Client
              </router-link>
            </li>
            <li>
              <router-link v-if="editLogin || viewLogin" to="/findevents">
                <span
                  style="position: relative; top: 6px"
                  class="material-icons"
                  >search</span
                >
                Find Event
              </router-link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
    <div class="grow w-4/5">
      <section
        class="justify-end items-center h-24 flex"
        style="background: linear-gradient(250deg, #c8102e 70%, #efecec 50.6%)"
      >
        <h1 class="mr-20 text-3xl text-white">{{ this.orgName }}</h1>
      </section>
      <div>
        <router-view>
        </router-view>
      </div>
    </div>
  </main>
</template>
<style>
#_container {
  background-color: #c8102e;
  color: white;
  padding: 18px;
}
</style>

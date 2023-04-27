<template> 
    <h1 class="font-bold text-4xl text-red-700 tracking-widest text-center mt-10">Login</h1>
    <div class="px-10 py-20">
        <div class="flex flex-col justify-center items-center">
            <form @submit.prevent="authenticate">
                <div class="flex flex-col">
                    <label>Username</label>
                    <input type="text" v-model="username" placeholder="Enter Username" required/>
                </div>
                <div class="flex flex-col">
                    <label>Password</label>
                    <input type="password" v-model="password" placeholder="Enter Password" required/>
                </div>
                <p v-if="wrongPassword == true"> Incorrect Credentials</p>
                <p v-if="correctPassword == true"> Authetication Successful</p>
                <button class="bg-red-700 text-white rounded" type="submit">Login</button>
            </form>
        </div>
    </div>
</template>

<script> 
    import axios from 'axios'
    const apiURL = import.meta.env.VITE_ROOT_API
        export default{
            name: 'login',
            data() {
                return{
                    username:"",
                    password:"",
                    
                    wrongPassword: false,
                    correctPassword: false 
                };
            },
            methods: {
                authenticate(){ // this method is authenticating if the login input equals the right credentials depending one if the user is and editor or a viewer
                    // clear the session storage. This will simulate a new session everytime a user tries to login again after already logging in 
                    sessionStorage.clear();
    
                    if(this.username !="" && this.password !=""){
                        const user = this.username
                        axios // gets username and passsword and send get request to api
                        .get(`${apiURL}/login/${this.username}/${this.password}`)
                        .then((res) => {
                            const result = res.data.result
                            if(result == true){ // if true, proceeds
                                if(user == this.$root.editorLogin.username){ // gives editor privileges 
                                    this.$root.editLogin = true;
                                    this.$root.viewLogin = false;
                                    sessionStorage.setItem("editLogin", true);
                                    this.wrongPassword = false;
                                    this.correctPassword = true;
    
                                }
                                else if(user == this.$root.viewerLogin.username){// gives view privileges
                                    this.$root.viewLogin = true;
                                    this.$root.editLogin = false;
                                    sessionStorage.setItem("viewLogin", true);
                                    this.wrongPassword = false;
                                    this.correctPassword = true;
                                }
                            }
                            else{
                                // set wrongPassword to true and correct password to false. This is used for the HTML portion and indicates if the user login was successful or not
                                this.wrongPassword = true;
                                this.correctPassword = false;
                            }    
                            
                        })
                        .catch((error) => {
                            console.log(error)
                        })
                        
     
                }
                // Reset all variables for clean page
                this.username = "";
                this.password = "";      
            }
            }
    
            }
    </script>
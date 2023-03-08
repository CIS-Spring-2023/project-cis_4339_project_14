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
                <button class="bg-red-700 text-white rounded" type="submit">Login</button>
            </form>
        </div>
    </div>
</template>

<script>
    export default{
        name: 'login',
        data() {
            return{
                username:"",
                password:"",
                
                wrongPassword: false
            };
        },
        methods: {
            authenticate(){
                if(this.username !="" && this.password !=""){
                    if(this.username == this.$root.viewerLogin.username && this.password == this.$root.viewerLogin.password){
                        
                        this.$root.viewLogin = true;
                        sessionStorage.setItem("viewLogin", true);
                        
                        this.$root.editLogin = false;
                        sessionStorage.setItem("editLogin", false);

                        this.wrongPassword = false;

                        //console.log(this$root.viewLogin)
                    }

                    else if(this.username == this.$root.editorLogin.username && this.password == this.$root.editorLogin.password) {
                        
                        this.$root.editLogin = true;
                        sessionStorage.setItem("editLogin", true);


                        this.$root.viewLogin = false;
                        sessionStorage.setItem("viewLogin", false);

                        this.wrongPassword = false;

                        //console.log(this.$root.editorLogin);
                }

                else{
                    this.wrongPassword = true;
                }
            
            }
        
        }
        }

        }
</script>
<template>
    <h1 class="font-bold text-4xl text-red-700 tracking-widest text-center mt-10">Login</h1>
    <div class="px-10 py-20">
        <div class="flex flex-col justify-center items-center">
            <form>
                <div class="flex flex-col">
                    <label>Username</label>
                    <input type="text" v-model="username" placeholder="Enter Username" required/>
                </div>
                <div class="flex flex-col">
                    <label>Password</label>
                    <input type="password" v-model="password" placeholder="Enter Password" required/>
                </div>
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
                password:""
                
            };
        },
        computed: {
            editLogin(){
                return this.$root.editLogin
            },

            viewLogin(){
                return this.$root.viewLogin
            }
        },
        methods: {
            viewerLogin(username, password) {
                if(this.username !="" && this.password !=""){
                    if(this.username == this.$parent.viewerLogin.username && this.password == this.$parent.viewerLogin.password) {
                        sessionStorage()
                        ///this.$emit("viewLogin",true);
                    }
                    
                    }
                    console.log(this.$root.viewLogin);
                },
                editorLogin(username, password) {
                if(this.username !="" && this.password !=""){
                    if(this.username == this.$parent.editorLogin.username && this.password == this.$parent.editorLogin.password) {
                    this.$emit("editLogin",true);
                    }
                    
                }
                console.log(this.$root.editLogin);
            }
            
            }

        }
</script>
<script>
import useVuelidate from '@vuelidate/core'
import { required } from '@vuelidate/validators'
import axios from 'axios'
const apiURL = import.meta.env.VITE_ROOT_API

export default{
    data(){
        return{
            nameOfService: "",
            descriptionOfService: "",
            companyOfService: "",
            statusOfService: false
        };
    },

    methods: {
        
    }

}
</script>
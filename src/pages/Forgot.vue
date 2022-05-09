<template>
    <form @submit.prevent="forgot">
        <h3>Forgot Password</h3>

        <div class="form-group">
            <label>Email</label>
            <input type="email" class="form-control" v-model="email"  placeholder="Email"/>
        </div>

        <button class="btn btn=primary btn-block">Submit</button>

    </form>
</template>

<script>
import AuthenticationService from "@/services/AuthenticationService";
export default {
    name: 'forgot',
    data() {
        return {
            email: ''
        }
    },
    methods: {
        async forgot() {
            const response = await AuthenticationService.forgot({
                email: this.email
            });

            console.log(response);
        }
    }
}
</script>


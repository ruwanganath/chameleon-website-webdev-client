<template>
  <div class="background">
    <div class="container-lg">
      <div class ="row">
        <form class ="col">
          <div class="form elevation-2">
            <img
              :src="require('@/assets/images/logo2.png')"
              width="150"
              height="150"
              class="logo"
            />
            <h1>Welcome Back</h1>
            <p class="p1">Please enter your details</p>
            <div>
                <input type="email"  class="form-control" id="exampleInputEmail1" placeholder="Email" aria-describedby="emailHelp" v-model="email" />
            </div>
            <div>
                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" v-model="password" />
            </div>
              <br />
              <div class="error" v-html="error"></div>
                <button @click="login" type="submit" class="btn btn-primary">Login</button>
                <div style ="margin-top:20px;">
                    <p class="p1">Don't have an account? <button class="sign-up-btm">Sign Up</button></p>
                </div>
          </div>
        </form>

        <div class ="col">
          <div>
            <img :src="require('@/assets/images/IoT.png')" class="marginauto" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



  <script>
import AuthenticationService from "@/services/AuthenticationService";
export default {
  name: "login",
  data() {
    return {
      email: "",
      password: "",
      error: null,
    };
  },
  methods: {
    async login() {
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password,
        });
        this.$store.dispatch("setToken", response.data.token);
        this.$store.dispatch("setUser", response.data.user);
      } catch (error) {
        this.error = error.response.data.error;
      }
    },
  },
};
</script>

  <style scoped>

.background {
  background: rgb(255, 255, 255);
  background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(185, 215, 138, 1) 100%
  );
  min-height: 100%;
}

.logo {
  display: block;
  padding-top: 20px;
  margin: auto;
}

h1 {
  text-align: center;
  font-family: Arial;
  font-weight: bold;
  font-size: 400%;
}

.p1 {
    text-align: center;
    font-weight: bold;
}


.btn {
  background-color: #FAAD4A;
  width: 100%;
  border-radius: 25px;
  border-color: #FAAD4A;
  font-weight: bold;
  font-size: 120%;
  color: #ffffff;
  box-shadow: 0px 6px 5px -2px #121212;
}

.btn-primary:hover, .btn-primary:focus, .btn-primary:active, .btn-primary.active, .open > .btn-primary.dropdown-toggle {
    background-color: transparent;
    color: #FF8F00;
    background-color: #ffffff;
    border-color: #FF8F00;
}

.sign-up-btm {
    color: #99C854;
    font-weight: bold;
    background:none;
    border:none;
    margin:0;
    padding:0;
    padding-left:10px;
    font-size: 120%;
    text-decoration: underline;
    cursor: pointer;
}



.marginauto {
  max-width: 100%;
  min-height: 900px;
  display: block;
  margin: 10px auto 20px;
  padding-left: 10px;
}



.form {
  min-height: 800px;
  max-width: 100%;
  display: block;
  margin-top: 60px ;
  border-radius: 25px;
  background: white;
  padding-inline:40px;
}

.form-control{
    border-color: #99C854;
    border-radius: 10px;
    border-width: 3px;
    margin-top: 20px;
}


</style>

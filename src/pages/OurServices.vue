<template>
    <div class="three">
      <div class="head">
        <div></div>
        <div>Our Services</div>
        <div></div>
      </div>

      
      <div class="main">
        <div class="row">
          <div class="column">
            
              <img :src="services1" alt="img1" width="260" height="250">
              <p >IoT services, Planning and Operations</p>
            
            
          </div>
          <div class="column">
            
              <img :src="services2" alt="img2" width="260" height="250">
              <p>IoT Support Services</p>
            
            
          </div>
          <div class="column">
            
              <img :src="services3" alt="img3" width="260" height="250">
              <p>Smart Homes and Offices</p>
            
           
          </div>
          <div class="column">
            
              <img :src="services4" alt="img4" width="260" height="250">
              <p >IoT Based Energy Management Systems</p>
            
            
          </div>
        </div>
       Hello world  
      </div>
      
    </div>
</template>

<script>
const services1 = require("@/assets/images/services1.png");
const services2 = require("@/assets/images/services2.png");
const services3 = require("@/assets/images/services3.png");
const services4 = require("@/assets/images/services4.png");

export default {
  name: "OurServices",
  data() {
    return {
      services1,
      services2,
      services3,
      services4
    };
  },
  mounted() {},
  methods: {
    },
};
</script>


<style scoped lang="scss">
.three {
  padding: 40px 40px;
  .head {
    display: flex;
    align-items: center;
    div:first-child {
      flex: 1;
      height: 2px;
      background: #99c854;
    }
    div:nth-child(2) {
      padding: 0 20px;
      font-size: 35px;
      font-weight: bold;
    }
    div:last-child {
      flex: 1;
      height: 2px;
      background: #99c854;
    }
  }
  .main {
    margin-top: 50px;
    font-size: 15px;
    font-family: 'Poppins', sans-serif;
    font-weight: 100;

    p {
      margin-top: 10px;
      font-size: 18px;
      font-family: 'Poppins', sans-serif;
      font-weight: 100;
      
    }


   
  

    
    /* Three image containers (use 25% for four, and 50% for two, etc) */
    .column {
      float: right;
      width: 25%;
      padding: 30px;
      
    }

    /* Clear floats after image containers */
    .row::after {
      content: "";
      clear: both;
      display: table;
    }

    
  }  
}

</style>
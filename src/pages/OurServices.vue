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

          <div class="shape">
            Providing Quality IoT Based Solutions
          </div>
          
        </div>
        <div class="row1">
          <div class="column1">
            <div role="progressbar" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100" style="--value:81"></div>
            <p>Project Completion Rate</p>
          </div>
          <div class="column1">
            <div role="progressbar" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100" style="--value:81"></div>
            <p>Quality Assurance</p>
            
          </div>
          <div class="column1">
            <div role="progressbar" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100" style="--value:81"></div>
            <p>Customer Satisfaction</p>
          </div>
        </div>

      
      
      
      
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
        float: left;
        width: 25%;
        padding: 30px;
        
      }

    /* Clear floats after image containers */
    .row::after {
      content: "";
      clear: both;
      display: table;
    }
@keyframes growProgressBar {
  0%, 33% { --pgPercentage: 0; }
  100% { --pgPercentage: var(--value); }
}

@property --pgPercentage {
  syntax: '<number>';
  inherits: false;
  initial-value: 0;
}

div[role="progressbar"] {
  --size: 12rem;
  --fg: #99c854;
  --bg: rgb(247, 255, 221);
  --pgPercentage: var(--value);
  animation: growProgressBar 3s 1 forwards;
  width: var(--size);
  height: var(--size);
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: 
    radial-gradient(closest-side, white 80%, transparent 0 99.9%, white 0),
    conic-gradient(var(--fg) calc(var(--pgPercentage) * 1%), var(--bg) 0)
    ;
  font-family: Helvetica, Arial, sans-serif;
  font-size: calc(var(--size) / 5);
  color: var(--fg);
}

div[role="progressbar"]::before {
  counter-reset: percentage var(--value);
  content: counter(percentage) '%';
}

/* demo */
body {
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
    
  }  
  .shape{
        text-align:center;
        background-color:#99c854;
        width:40%;
        height:20px;
        line-height:19px;
        color:rgb(12, 4, 4);
        margin:20px auto;
        position:relative;
        border-radius: 25px;
      }
      .shape:before{
        content:"";
        width:0px;
        height:0px;
      
        position:absolute;
        
        
        
      }






}
 /* Three image containers (use 25% for four, and 50% for two, etc) */
    .column1 {
      float: right;
      width: 33.3%;
      padding: 80px;
      
    }

    /* Clear floats after image containers */
    .row1::after {
      content: "";
      clear: both;
      display: table;
    }
</style>
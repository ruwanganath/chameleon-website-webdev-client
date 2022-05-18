<template>
  <div class="main">
    <div class="fir">
      <img :src= "melbourneCity" alt="melboure" />
      <div class="bottom-left">
        <h1>{{firstHeading}}</h1>
      </div>
      <div class="read-more">
        <router-link to="/web/portfolioP1" v-slot="{href, route, navigate}">
          <button :href="href" @click="navigate" class='whatever-you-want'>
            Read More
          </button>
        </router-link>
      </div>
    </div>

    <div class="fir" >
      <img :src= "ev" alt="ev charging" />
      <div class="bottom-right" style = "right: 5px" >
        <h1>{{secondHeading}}</h1>
      </div>
      <div class="read-more-left">
        <router-link to="/web/portfolioP2" v-slot="{href, route, navigate}">
          <button :href="href" @click="navigate" class='whatever-you-want'>
            Read More
          </button>
        </router-link>
        <!-- <button type="read-more" name="button">Read More</button> -->
      </div>
    </div>

    <div class="fir" >
      <img :src= "suburb" alt="melboure" />
      <div class="bottom-left">
        <h1>{{thirdHeading}}</h1>
      </div>
      <div class="read-more">
        <router-link to="/web/portfolioP3" v-slot="{href, route, navigate}">
          <button :href="href" @click="navigate" class='whatever-you-want'>
            Read More
          </button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
// const melbourneCity = require("@/assets/images/melbourne.jpg")

export default {
  name: "Portfolio",
  data() {
    return {
      melbourneCity:require("@/assets/images/melbourne.jpg"),
      ev:require("@/assets/images/ev.jpg"),
      suburb:require("@/assets/images/suburb.jpg"),
      firstHeading:"SMART CITIES OPEN DATA",
      secondHeading:"EV CHARGER PLACEMENT",
      thirdHeading:"LOCATE A SOCKET"

    }
  }
}
</script>

<style scoped>
.fir{
position: relative;
text-align:left;
color: white;
}
.fir img {
  width: 100%;
  height: 900px;
}
.bottom-left {
  width: 40%;
  position: absolute;
  bottom: 180px;
  left: 12px;
}
.bottom-left h1{
  font-size : 5vw;
  font-weight: bold;
  text-shadow: 2px 2px black;
}
.read-more{
position: absolute;
bottom:150px;
left: 12px;
}

.read-more button{
  background-color: transparent;
  color: white;
  border: none;
  font-size:25px;
}

.read-more button:hover{
  text-decoration: underline;
  color: white;
}

.bottom-right {
  width: 40%;
  position: absolute;
  bottom: 180px;
  right: 12px;
  text-align:right;
}

.bottom-right h1{
  font-size : 5vw;
  font-weight: bold;
  text-shadow: 2px 2px black;
}

.read-more-left{
position: absolute;
bottom:150px;
right: 10px;
}

.read-more-left button{
  background-color: transparent;
  color: white;
  border: none;
  /* font-weight: bold; */
  /* text-decoration: underline; */
  font-size:25px;
}

.read-more-left button:hover{
  text-decoration: underline;
  color: white;
}

</style>

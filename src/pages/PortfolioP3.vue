<template>
  <div class="one">
    <div class="main">
      <div class="fir">
        <figure class="tint">
          <img :src= "suburb" alt="melbourne"/>
        </figure>
        <div class="paragraph">
          <p>The locate a socket sub-project is apart of the EV Adoption Tools 
          initiative which intends to increase the adoption and accessibility of Electric Vehicles 
          (EVs) in Australia. Locate a Socket aims to be able to design and implement a mobile app 
          (Android and IOS) to help consumers identify a nearby charging location. While there are existing apps on 
          the market that offer this functionality, we believe that we can offer an app that sets it apart from those 
          apps by implementing features that add value beyond just</p>
        </div>
        <h1 class="heading">LOCATE A SOCKET</h1>
        <video class="video" width="480" height="360" controls>
          <!-- source src="movie.mp4" type="video/mp4" -->
          <!-- source src="movie.ogg" type="video/ogg" -->
        Your browser does not support the video tag.
        </video>
        <img class="x" :src= "x" alt="x"/>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "PortfolioP3",
    data() {
      return {
        suburb:require("@/assets/images/suburb.jpg"),
        x:require("@/assets/images/X.png")
      }
    }
}
</script>

<style scoped lang="scss">
  .one {
    padding: 10px 0px;
    .main {
      .fir{
        position: relative;
        text-align:left;
        .paragraph {
          width: 470px;
          font-size: 20px;
          position: absolute;
          text-align:left;
          top: 276px;
          left: 70px;
        }
        .video {
          position: absolute;
          text-align:right;
          top: 276px;
          right: 100px;
        }
        .heading {
          width: 600px;
          font-size: 96px;
          font-weight: bold;
          text-shadow: 2px 2px black;
          position: absolute;
          text-align:left;
          top: 450px;
          left: 64px;
        }
        .x {
          position: absolute;
          top: 100px;
          right: 100px;
          width: 40px;
          height: 40px;
        }
      }
      img {
        width: 100%;
        height: 879px;
      }
      .tint:before {
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(255,255,255, 0.5);
      }
    }
  }
</style>

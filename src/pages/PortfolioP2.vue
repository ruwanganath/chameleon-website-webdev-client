<template>
<div class="p1">
  <div class="portfolio-one">


    <img :src="ev" alt="melboure" />
    <div class="description-left">
      <p>{{description}}</p>
    </div>

    <div class="heading-left">
      <h1>{{heading}}</h1>
    </div>

    <div class="video-p1">
      <iframe :src="videoLink" width="740" height="480" allow="autoplay"></iframe>
    </div>

    <div class="close">
      <router-link to="/web/portfolio" v-slot="{href, route, navigate}">
        <button :href="href" @click="navigate" class='whatever-you-want'>
        </button>
      </router-link>
    </div>

  </div>
</div>
</template>

<script>
// const melbourneCity = require("@/assets/images/melbourne.jpg")

export default {
  name: "PortfolioP2",
  data() {
    return {
      ev:require("@/assets/images/ev.jpg"),
      heading: "EV CHARGER PLACEMENT",
      description: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      videoLink: "https://player.vimeo.com/video/209810458?h=5147ab1d32&title=0&byline=0&portrait=0",



    }
  }
}
</script>

<style scoped>
.portfolio-one {
  position: relative;
  text-align: left;

}

.portfolio-one img {
  width: 100%;
  height: 63rem;
  object-fit: cover;
  opacity: 0.6;
}

.description-left {
  width: 40%;
  position: absolute;
  bottom: 30rem;
  left: 3rem;
}

.description-left p {
  color: black;
  font-size: 1vw;
  font-weight: bold;
}

.heading-left {
  width: 40%;
  position: absolute;
  bottom: 11.25rem;
  left: 3rem;
}

.heading-left h1 {
  color: black;
  font-size: 5vw;
  font-weight: bold;
  text-shadow: 2px 2px black;
}

.video-p1 {
  position: absolute;
  bottom: 15rem;
  right: 8rem;
}

.close{
position: absolute;
top:5rem;
right: 2rem;
}

.close button{
  background-image: url("../assets/images/delete.png");
  width:20px;
  height:20px;
  border:none;
  cursor: pointer;
  background-size:cover;
  background-color: transparent;

}
</style>

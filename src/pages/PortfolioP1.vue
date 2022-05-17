<template>
<div class="p1">
  <div class="portfolio-one">


    <img :src="melbourneCity" alt="melboure" />
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
      <button type="read-more" name="button"></button>
    </div>

  </div>
</div>
</template>

<script>
// const melbourneCity = require("@/assets/images/melbourne.jpg")

export default {
  name: "PortfolioP1",
  data() {
    return {
      melbourneCity: require("@/assets/images/melbourne.jpg"),
      heading: "SMART CITIES OPEN DATA",
      description: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      videoLink: "https://player.vimeo.com/video/24941936?h=2e7b64b19b",



    }
  }
}
</script>

<style>
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

<template>


<div class = "Project">
<img clss = "img1" v-bind:src= "melbourneImg" alt="">

</div>


</template>

<script>
const melbourneCity = require("@/assets/images/melbourne.jpg")

export default {
  name: "Portfolio",
  data() {
    return {
      melbourneImg : "https://images.unsplash.com/photo-1545044846-351ba102b6d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",

    }
  }
}
</script>

<style>
.img1{
  width: 1000px;
}


</style>

<template>
  <div class="one">

    <div class="head">
      <div></div>
      <div>Portfolio</div>
      <div></div>
    </div>

    <div class="main">
      <div class="fir" >
        <img :src= "melbourneCity" alt="melbourne" />
        <div class="bottom-left">
          <h1>SMART CITIES OPEN DATA</h1>
        </div>
        <div class="read-more">
          <button type="read-more" name="button">Read More</button>
        </div>
      </div>

      <div class="fir" >
        <img :src= "ev" alt="ev charging" />
        <div class="bottom-right" style = "right: 5px" >
          <h1>EV CHARGER PLACEMENT</h1>
        </div>
        <div class="read-more-left">
          <button type="read-more" name="button">Read More</button>
        </div>
      </div>

      <div class="fir" >
        <img :src= "suburb" alt="melbourne" />
        <div class="bottom-left">
          <h1>LOCATE A SOCKET</h1>
        </div>
        <div class="read-more">
          <button type="read-more" href="#/web/portfolioP3" name="button">Read More</button>
        </div>
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
      suburb:require("@/assets/images/suburb.jpg")

    }
  }
}
</script>

<style scoped lang="scss">
  .one {
    padding: 10px 0px;
    .head {
      display: flex;
      padding: 10px 70px;
      align-items: center;
      div:first-child {
        flex: 1;
        height: 2px;
        background: #99c854;
      }
      div:nth-child(2) {
        padding: 0 12px;
        font-size: 64px;
        height: 104px;
        text-align: center;
        font-weight: bold;
      }
      div:last-child {
        flex: 1;
        height: 2px;
        background: #99c854;
      }
    }
    .main {
      .fir{
      position: relative;
      text-align:left;
      color: white;
      }
      img {
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
        font-size : 120px;
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
        font-size : 120px;
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
    }
  }


</style>

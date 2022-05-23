<template>
<section class="latest">
  <h3>Latest Posts</h3>
  <div class="posts">
    <div class="post">
      <div class="image" :style="{ backgroundImage: `url('${require('@/assets/images/blogImage/smart-city.jpg')}')` }"></div>
      <h4>Smart City</h4>
    </div>
    <div class="post coll-2 roww-2">
      <div class="image" :style="{ backgroundImage: `url('${require('@/assets/images/blogImage/ev-charger.jpg')}')` }"></div>
      <h4>EV Charger</h4>
    </div>
    <div class="post roww-2">
      <div class="image" :style="{ backgroundImage: `url('${require('@/assets/images/blogImage/chameleon-web.jpg')}')` }"></div>
      <h4>Chameleon Website</h4>
    </div>
    <div class="post roww-2">
      <div class="image" :style="{ backgroundImage: `url('${require('@/assets/images/blogImage/smart-data.jpg')}')` }"></div>
      <h4>Smart Data</h4>
    </div>
    <div class="post">
      <div class="image" :style="{ backgroundImage: `url('${require('@/assets/images/blogImage/Deakin.jpg')}')` }"></div>
      <h4>Deakin</h4>
    </div>
    <div class="post coll-2">
      <div class="image" :style="{ backgroundImage: `url('${require('@/assets/images/blogImage/sit-class.jpg')}')` }"></div>
      <h4>SIT374</h4>
    </div>
  </div>
</section>
</template>

<script>
export default {
  name: 'latest'
}
</script>

<style lang="scss" scoped>
.latest {
    display: block;
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
    .posts {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: repeat(3, 196px);
        grid-gap: 30px;
        margin: 15px;
        .post {
            display: flex;
            flex-direction: column;
            background-color: #FFFFFF;
            box-shadow: 3px 3px 8px 0 rgba(0, 0, 0, 0.2);
            .image {
                flex: 1;
                background-position: center;
                background-size: cover;
                background-repeat: no-repeat;
            }
            h4 {
                box-sizing: border-box;
                padding: 3px 15px 0;
                height: 50px;
                line-height: 50px;
                margin: 0;
            }
            &.coll-2 {
                grid-column: span 2;
            }
            &.roww-2 {
                grid-row: span 2;
            }
        }
    }
}
</style>

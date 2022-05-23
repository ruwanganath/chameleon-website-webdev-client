<template>
  <div class="three">
      <div class="head">
        <div></div>
          <div>Chameleon Website Development</div>
        <div></div>
      </div>
      <div class="main">
        <p>Like any other company, the Chameleon company requires a website to be its digital public facing space. The main goal of the website is to promote Chameleon’s projects, products, and the services that it provides. As the project implementation progresses additional features and functionalities will be added such as blogs, events calendar, and a clients 'area.</p>
        <p>The goal for this trimester is to :</p>
        <ul>
          <li>Identify the hosting infrastructure and setup the DevOps pipelines</li> 
          <li>Identify the web development tools and SDLC processes to follow</li>
          <li>Propose an initial website layout and style</li>
          <li>Include an initial list of standard pages (including links to other Chameleon projects) and start working on their contents </li>
          <li>The website pages will be static where the content is hardcoded not database driven</li>
          <li>A basic subscribe, announcement and login feature with implementation of security</li>
          <li>User profile section with AI/ML componenet for image recognition</li>
          <li>Basic steps to integrate a blogging platform for users</li>
        </ul> 
        <div class="video-p1">
          <iframe :src="videoLink" width="740" height="480" allow="autoplay"></iframe>
        </div>
      </div>
  </div>
</template>
<script>
export default {
  name: "PortfolioP3",
  data() {
    return {
     videoLink: "https://video.deakin.edu.au/media/t/1_5msw6mc6"
    }
  }
}
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
        font-size: 50px;
        font-weight: bold;
      }
      div:last-child {
        flex: 0;
        height: 2px;
        background: #99c854;
      }
  }
  .main {
    margin-top: 40px;
    font-size: 36px;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;

      p {
        font-size: 24px;
        font-family: 'Poppins', sans-serif;
        font-weight: 600;
      }
      ul li {
        font-size: 24px;
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
        list-style-type: none;
        margin:10px 5px;
      }
    .video-p1 {
      width:100%;
      margin-top:40px;

    } 
    .video-p1 iframe {
      width:100%;
    } 
  }
}
</style>

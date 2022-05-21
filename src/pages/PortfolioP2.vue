<template>
  <div class="three">
      <div class="head">
        <div></div>
          <div>EV Charger Placement</div>
        <div></div>
      </div>
      <div class="main">
        <p>The EV Charger Placement project is also a sub-project of the EV Adoption Tools initiative. The goal of this sub-project is to use community data such as population, traffic and transit statistics to predict where would be the most suitable to install new charging stations so that they are well located in relation to other stations and have activities or facilities nearby to provide an adequate location to stop and charge. There will also be considerations for nearby residents to improve business foot traffic whilst reducing residential areas from unnecessary visitors. These locations will also be cross-referenced with existing or planned infrastructure to ensure that the stations power requirements can be adequately supported.
The goal of this sub-project is to use community data (population, traffic, transit etc) to predict where would be the most mutually beneficial place to install new charging stations so that: </p>
        <ul>
          <li>-	Stations are well located in relation to other charging stations</li> 
          <li>-	People have other reasons to stop there (landmark or facility that people spend time at) </li>
          <li>-	Residents benefit from the installation (business see increased foot traffic & residents are spared extra traffic) </li>
          <li>-	Existing or planned infrastructure can accommodate the stations (power requirements) </li>
        </ul>

        <p>This project will primarily be a data science project that will include: </p>
         <ul>
          <li>-	Identifying data sets that can support this decision-making process. This will include a research process that will determine whether the required data sets are available</li>
          <li>-	The outcomes here will be creating a dashboard and possibly an application or machine learning model that provides these recommendations</li>
        </ul>  
        <div class="video-p1">
          <iframe :src="videoLink" width="740" height="480" allow="autoplay"></iframe>
        </div>
      </div>
  </div>
</template>
<script>
export default {
  name: "PortfolioP2",
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

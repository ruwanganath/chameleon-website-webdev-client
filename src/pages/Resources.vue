<template>
  <div class="resources">
    <div class="head">
      <div></div>
      <div>Resources Centre</div>
      <div></div>
    </div>
    <div class="main">
      <div class="calendar-box content-box">
        <b-calendar v-model="value" hide-header locale="en" width="100%" label-help="" weekday-header-format="long">
        </b-calendar>
      </div>
      <div class="collapse-box content-box">
        <h2>Frequently Asked Questions</h2>
        <div class="title">
          <p></p>
          <p>The Chameleon Questions and answers.</p>
        </div>
        
        <div role="tablist">
          <div v-for="(item,index) in collapseData" :key="index" class="cardBox">
            <h3 @click="toggle(index)" class="titleLink">
              <p>{{item.title}}</p>
              <p class="iconBox">
                <b-icon icon="chevron-up" v-if="collapseIndex==index"></b-icon>
                <b-icon icon="chevron-down" v-else></b-icon>
              </p>
            </h3>
            <b-collapse :id="'accordion'+index" :visible="collapseIndex==index" accordion="my-accordion" class="collapse" role="tabpanel">
              <p>{{item.content }}</p>
            </b-collapse>
          </div>
        </div>
      </div>
    </div>
    <div class="box2"> </div>
  </div>
</template>
<script>
export default {
  name:"Resources",
  data(){
    return{
      collapseIndex:null,
      value:null,

      collapseData:[{
        title:'What is an Internet of Things (IoT)Device?',
        content:'The Internet of Things (IoT) is an ecosystem consisting of web-enabled smart devices such as smart phones, suburban traffic systems and domestic appliances (to name a few). There is an immense number of these connected devices which all use embedded systems, such as processors, sensors, and communication hardware, to collect, send and act on data they acquire from their environments.'
      },{
        title:'Where is your company located',
        content:'We are in Melbourne, Australia. However, we have staff working for us across the globe. This gives us a unique perspective and the ability to work with multiple service providers.'
      },{
        title:'Do you work with international clients?',
        content:'Due to our global reach and staff locale, we do work with international clients. Our talents are not limited to Australia!'
      },{
        title:'How can I engage you for your services?',
        content:'If you think our services would be appropriate for your organisation, please reach out to us by navigating to the ‘Contact Us’ tab in the top right and get in touch using the most suitable avenue that is suitable for you.'
      },{
        title:'Do you provide ongoing support for your systems?',
        content:'We have ongoing support available for our clients, this is to ensure that they are operating effectively, and we can roll out updates and improvements to any systems we implement.'
      }],
    }
  },
  mounted(){
    this.setToday()
  },
  methods:{
    toggle(index){
      if(index == this.collapseIndex){
        this.collapseIndex = null
        return
      }
      this.collapseIndex = index;
    },
    setToday(){
      const now = new Date()
      this.value = new Date(now.getFullYear(), now.getMonth(), now.getDate())
    },
    clearDate() {
      this.value = ''
    }
  }
}
</script>
<style lang="scss" scoped>
.resources{
  font-family: 'Poppins', sans-serif;
   color:#3e3e3e;
  height:100%;
  width:100%;
  overflow: hidden;
  // margin: 40px 40px;
  padding:40px 40px;
  box-sizing: border-box;
  min-width:1000px;  
  position:relative;
  .head {
    display: flex;
    align-items: center;
    margin-bottom: 60px;
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
      flex: 1;
      height: 2px;
      background: #99c854;
    }
  }
  .main{
    display:flex;
    justify-content:space-evenly;
    .content-box:nth-child(2){
      width:42%;
    }
    .content-box{
      padding:0px 10px;
      // flex:1;
      width:48%;

      flex-shrink: 0;
      align-items: center;
      h2{
        font-size:41px;
        font-weight: bold;
        text-align: right;
      }
      .title{
        display:flex;
        justify-content: flex-end;
        p:nth-child(2){    
          width:240px;
          text-align: right;
        }
      }
      
      .cardBox{
        h3{
          margin:10px 0 0 0;
          border-bottom:2px solid #eff0e5;
          display:flex;
          p{
            font-size: 24px;
          }
          p:nth-child(1){
            flex:1;
          }
          .iconBox{
            width:20px;
          }
        }
      }
    }
  }

  .box2 {
    z-index:-10;
    right:0;
    bottom:-54px;
    position:absolute;
    width: 15%;
    height: 80%;
    background: linear-gradient(to bottom right, #fff 0%, #fff 49.9%, rgba(199, 230, 154, 1) 50%, rgba(199, 230, 154, 1) 100%);
  }

  .calendar-box{
    display:flex;
    flex-direction: column;
    justify-content: center;
    
    .b-calendar{
      background:#e2f2cc;
      border-radius: 50px;
      width:100%;
      padding:0 30px 30px;
    }
  }
}
</style>

<style>
.calendar-box .b-calendar .form-control{
  background:#f1f8e6 !important;
}

.calendar-box .b-calendar .row {
    --bs-gutter-x: 1.5rem;
    --bs-gutter-y: 0;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin-top: calc(-1 * var(--bs-gutter-y));
    margin-right: calc(-0.5 * var(--bs-gutter-x));
    margin-left: calc(-0.5 * var(--bs-gutter-x));
    height: 55px;
    padding-top: 10px;
    border: #dee2e6 1px solid;
}
</style>
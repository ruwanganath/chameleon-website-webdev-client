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
        content:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'
      },{
        title:'Where is your company located',
        content:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'
      },{
        title:'Do you work with international clients?',
        content:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'
      },{
        title:'How can I engage you for your services?',
        content:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'
      },{
        title:'Do you provide ongoing support for your systems?',
        content:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'
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
      font-size: 35px;
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
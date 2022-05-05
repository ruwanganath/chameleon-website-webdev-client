<template>
  <div class="home">
    <div class="first">
      <div class="title">welcome to Chameleon</div>

      <div class="explain">Striving to create a smarter world!</div>

      <div class="button">
        <button
          type="button"
          style="width: 130px"
          class="btn btn-warning active"
        >
          Login
        </button>
      </div>

      <div class="right">
        <div class="rightIcon" data-toggle="modal" data-target="#exampleModal">
          <img class="rightIcon2" :src="Ellipse" alt="" />
          <img class="rightIcon3" :src="Megaphone" alt="" />
        </div>

        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  New Product Coming Soon!
                </h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                Get ready for the revolutionary development in the IoT industry.
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-warning active"
                  data-toggle="modal"
                  data-target="#exampleModal2"
                  @click="readMore"
                >
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>

        <div
          class="modal fade"
          id="exampleModal2"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  Get more Updates!
                </h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Email"
                />
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-warning active"
                  data-toggle="modal"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="second">
      <div class="head">
        <div></div>
        <div>Our Mission</div>
        <div></div>
      </div>
      <div class="main">
        <div class="left">
          <div>
            <p>Given the complexity of energy application</p>
            <p>needs today, IoT systems are being designed</p>
            <p>to address a wide variety of existing problems.</p>
          </div>
          <div>
            <p>In Chameleon, our mission is to research,</p>
            <p>create, test, document and deploy IoT-based</p>
            <p>solutions to enhance life through the</p>
            <p>application of smart city technologies</p>
            <p>including: the building of smarter cities,</p>
            <p>homes, transportation, and energy</p>
            <p>management systems.</p>
          </div>
        </div>
        <div class="right">
          <img :src="pngwing1" alt="" />
        </div>
      </div>
    </div>

    <div class="three">
      <div class="head">
        <div></div>
        <div>Testimonals</div>
        <div></div>
      </div>
      <div class="main">
        <div class="li">
          <div class="top">
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut
            </div>
            <div class="img">
              <img :src="leftquotessign1" alt="" />
            </div>
          </div>
          <div class="bottom">
            <div>
              <img :src="Ellipse1" alt="" />
            </div>
            <div>Robert Smith</div>
          </div>
        </div>
        <div class="li liRight">
          <div class="top">
            <div class="text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut
            </div>
            <div class="imgRight">
              <img :src="leftquotessign1" alt="" />
            </div>
          </div>
          <div class="bottom">
            <div>
              <img :src="Ellipse2" alt="" />
            </div>
            <div>Jane Fibbs</div>
          </div>
        </div>
      </div>
    </div>

    <div class="four">
      <div class="left">
        <div>
          <div class="title" style="font-size: 35px; font-weight: bold">
            SEND US YOUR REVIEW!
          </div>
          <div class="content">
            <p>Have you worked with us or used any</p>
            <p>of our services in the past? If so, we</p>
            <p>would love to hear from you</p>
          </div>
        </div>
        <div class="img">
          <img :src="image2" alt="" />
        </div>
      </div>
      <div class="right">
        <div class="main">
          <form>
            <div class="form-group">
              <label for="exampleFormControlInput1">Full name</label>
              <input
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
              />
            </div>
            <div class="form-group">
              <label for="exampleFormControlInput1">Email</label>
              <input
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
              />
            </div>
            <div class="form-group">
              <label for="exampleFormControlTextarea1">Message</label>
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="6"
              ></textarea>
            </div>
            <div class="sendimage">
              <img :src="sendimage" alt="">
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
const Ellipse = require("@/assets/images/Ellipse4.png");
const Megaphone = require("@/assets/images/Megaphone.png");
const pngwing1 = require("@/assets/images/pngwing-1.png");
const leftquotessign1 = require("@/assets/images/left-quotes-sign 1.png");
const Ellipse2 = require("@/assets/images/Ellipse2.png");
const Ellipse1 = require("@/assets/images/Ellipse1.png");
const image2 = require("@/assets/images/image2.png");
const image = require("@/assets/images/Image.png");
const sendimage = require("@/assets/images/Group18.png");


export default {
  name: "Home",
  data() {
    return {
      Ellipse,
      Megaphone,
      pngwing1,
      leftquotessign1,
      Ellipse2,
      Ellipse1,
      image2,
      image,
      sendimage
    };
  },
  mounted() {},
  methods: {
    readMore() {
      $("#exampleModal").modal("hide");
      $("#exampleModal2").modal("show");
    },
  },
};
</script>
<style scoped lang="scss">
.home {
}
.first {
  padding-left: 30px;
  background-image: url("../assets/images/Image1.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  padding-top: 40px;
  padding-bottom: 40px;
  .title {
    font-size: 35px;
    font-weight: bold;
  }
  .explain {
    font-weight: bold;
    margin-top: 40px;
    width: 150px;
  }
  .button {
    margin-top: 30px;
  }
  .button-cover {
    width: 140px;
    background: #ff9500;
    color: #fff;
    margin-top: 15px;
  }
  .right {
    text-align: right;
    text-align: -webkit-right;
    padding-right: 40px;
    margin-top: 200px;
    .rightIcon {
      position: relative;
      width: 123px;
      height: 87px;
    }
    .rightIcon2 {
    }
    .rightIcon3 {
      position: absolute;
      top: 20px;
      left: 30px;
    }
    .modal-footer {
      justify-content: center;
    }
    .modal-title {
      font-weight: bold;
      font-size: 25px;
    }
    .modal-content {
      background: #99c854;
    }
  }
}
.second {
  padding: 40px 40px;
  .head {
    display: flex;
    align-items: center;
    div:first-child {
      width: 20%;
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
  .main {
    margin-top: 20px;
    display: flex;
    justify-content: space-around;
    .right {
      img {
        height: 350px;
      }
    }
  }
}
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
      font-size: 35px;
      font-weight: bold;
    }
    div:last-child {
      flex: 1;
      height: 2px;
      background: #99c854;
    }
  }
  .main {
    display: flex;
    margin-top: 40px;
    .li {
      .top {
        background: #d4d4d4;
        width: 90%;
        border-radius: 30px;
        padding: 30px;
        position: relative;
        .img {
          position: absolute;
          top: 5px;
          left: 16px;
        }
        .imgRight {
          position: absolute;
          top: 5px;
          right: 16px;
        }
        img {
          width: 20px;
        }
      }
      .bottom {
        display: flex;
        align-items: center;
      }
    }
    .liRight {
      display: flex;
      flex-direction: column;
      align-items: self-end;
    }
  }
}
.four {
  display: flex;
  height: 878px;
  .left {
    flex: 1;
    background-image: url("../assets/images/Image.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    .img {
      position: absolute;
      top: 0;
      left: 0;
    }
    .title {
      font-size: 35px;
      font-weight: bold;
    }
    .content > p {
      font-weight: bold;
    }
  }
  .right {
    flex: 1;
    background: #f9f9f9;
    .main {
      padding-top: 150px;
      padding-left: 30px;
      padding-right: 100px;
      .sendimage{
        margin-top:50px;
        img{
          width: 200px;
        }
      }
    }
  }
}
</style>
>>>>>>> wensong

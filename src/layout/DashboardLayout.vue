<template>
  <div class="wrapper">
    <div>
      <top-navbar @onsubscribe="subscribe"></top-navbar>

      <dashboard-content @click="toggleSidebar"> </dashboard-content>
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
              <div class="cancel" @click="hideModal2">
                <img :src="Multiply" alt="" />
              </div>
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
              <div class="readMore">Subscribe</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
</style>
<script>
import TopNavbar from "./TopNavbar.vue";
import ContentFooter from "./ContentFooter.vue";
import DashboardContent from "./Content.vue";
import MobileMenu from "./MobileMenu.vue";
const Multiply = require("@/assets/images/Multiply.png");

export default {
  components: {
    TopNavbar,
    ContentFooter,
    DashboardContent,
    MobileMenu, //,
    //Footer
  },
  data() {
    return {
      Multiply,
    };
  },
  methods: {
    subscribe() {
      console.log("9999");
      this.showModal2();
    },
    hideModal2() {
      $("#exampleModal2").modal("hide");
    },
    showModal2() {
      $("#exampleModal2").modal("show");
    },
    toggleSidebar() {
      if (this.$sidebar.showSidebar) {
        this.$sidebar.displaySidebar(false);
      }
    },
  },
};
</script>

<style scoped lang="scss">
.readMore {
  width: 152px;
  height: 43px;
  text-align: center;
  line-height: 43px;
  background: #feb95f;
  border-radius: 17px;
}
.modal-content {
  background: #99c854;
}
.modal-footer {
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center !important;
}
.cancel {
  background: #b9d78a;
  padding: 5px;
  border-radius: 50%;
  position: absolute;
  top: -22px;
  right: -10px;
  img {
    width: 35px;
    height: 35px;
  }
}
.modal-title {
  font-weight: bold;
  font-size: 25px;
}
.modal-header{
  margin: auto;
}
</style>

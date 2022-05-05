<template>
  <div class="wrapper">
    <div >
      <top-navbar></top-navbar>

      <dashboard-content @click="toggleSidebar"> </dashboard-content>
<<<<<<< HEAD
=======

>>>>>>> wensong
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
export default {
  components: {
    TopNavbar,
    ContentFooter,
    DashboardContent,
<<<<<<< HEAD
    MobileMenu,
=======
    MobileMenu//,
    //Footer
>>>>>>> wensong
  },
  methods: {
    toggleSidebar() {
      if (this.$sidebar.showSidebar) {
        this.$sidebar.displaySidebar(false);
      }
    },
  },
};
</script>

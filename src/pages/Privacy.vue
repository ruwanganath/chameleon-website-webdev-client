<template>
      <div class="three">
      <div class="head">
        <div></div>
        <div>Privacy</div>
        <div></div>
      </div>
      <div class="main">
        <P>At Chameleon we take privacy very seriously, that’s why we;</P>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
          standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
           a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, 
           remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing 
           Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions
            of Lorem Ipsum.</p>
      </div>
    </div>
</template>

<script>

export default {
  name: "Privacy",
  data() {
    return {
    };
  },
  mounted() {},
  methods: {
    },
};
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
      flex: 1;
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
      font-weight: 500;
    }
  }   
}
</style>


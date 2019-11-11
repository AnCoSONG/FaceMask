<template>
  <div class="Notfound">
    <h1>
      404
      <h3>Page Not Found.</h3>
    </h1>
    <h4 @click="goBack()" style="margin-top:100px;">
      <elasticButton msg="Click To Go Back to Last Avaliable Page"></elasticButton>
    </h4>
    <h4 @click="goTo('/')">
      <elasticButton msg="Click To Go Back to Home Page"></elasticButton>
    </h4>
  </div>
</template>

<script>
import elasticButton from "../components/elasticButton";
export default {
  name: "forum",
  components: {
    elasticButton
  },
  data() {
    return {};
  },

  mounted() {
    //===================
    /** 监控访问 BEGIN */
    let self = this;
    let loadStatus = setInterval(function() {
      if (window.loaddone && !self.$store.state.loaddone) {
        //加载完成后执行一些动作
        self.$store.commit("loaded");
        setTimeout(function() {
          //1s后删除加载器
          $("#global_load").remove();
        }, 1000);
        clearInterval(loadStatus);
      }
    }, 1000);
    // 监测是否是 切换进入
    if (self.$store.state.loaddone) {
      if (this.$store.state.transiting) {
        // console.log("ss")
        this.$store.commit("DoneTransite");
        $("#u-loader").css({
          "clip-path": "circle(0%)",
          "-webkit-clip-path": "circle(0%)"
        });
      }
    }
    /** 监控访问 END */
    //===================
  },
  methods: {
    goTo(name) {
      this.$router.push(name);
    },
    goBack() {
      this.$router.go(-1);
    }
  },
  beforeRouteLeave(to, from, next) {
    console.log("You are going to route: ", to.name);
    $("#u-loader").css({
      "clip-path": "circle(100%)",
      "-webkit-clip-path": "circle(100%)"
    });
    this.$store.commit("beginTransite");
    next();
  }
};
</script>

<style scoped>
.Notfound {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-flow: nowrap column;
  justify-content: center;
  align-content: center;
  align-items: center;
  /* background: #1166dd; */
  background: url(../assets/about/bgpro.jpg) no-repeat center center;
  background-size: cover;
  color:#222;
}

.Notfound h1 {
  font-size: 10vw;
}

::selection {
  color:white;
  background-color: transparent;
}

@media (max-width:450px){
  .Notfound h1 {
    font-size: 4rem;
  }
}
</style>
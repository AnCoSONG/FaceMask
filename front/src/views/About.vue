<template>
  <div class="about">
    <h1>
      关于我们
      <h3 style="font-family:'Noto Sans SC', serif;font-weight:700;">About Us</h3>
    </h1>
    <h2 style="margin:100px 0;">
      <p>一个临时拼凑的小团队。</p>
      <p>一群努力平凡的人。</p>
    </h2>
    <h4 @click="goBack()" style="font-family:'Noto Sans SC', serif;font-weight:700;">
      <elasticButton msg="Click To Go Back"></elasticButton>
    </h4>
    <h4 @click="goTo('/')" style="font-family:'Noto Sans SC', serif;font-weight:700;">
      <elasticButton msg="Click To Go Home"></elasticButton>
    </h4>
  </div>
</template>
<script>
import elasticButton from "../components/elasticButton";

export default {
  name: "About",
  components: {
    elasticButton
  },
  data() {
    return {};
  },
  mounted() {
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
.about {
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
  color: #222;
  font-family: "Ma Shan Zheng", serif;
}

::selection {
  color:white;
  background-color: transparent;
}

.about h1 {
  font-size: 8vw;
}

@media (max-width:450px){
  .about h1 {
    font-size: 4rem;
  }
}
</style>

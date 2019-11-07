<template>
  <div class="master">这是名师介绍页面</div>
</template>

<script>
export default {
  name: "Master",
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
    if(self.$store.state.loaddone){

      if (this.$store.state.transiting) {
        // console.log("ss")
        this.$store.commit("DoneTransite");
        $("#u-loader").css("clip-path", "circle(0%)");
      }
    }
  },
  methods: {
    goTo(name) {
      this.$router.push(name);
    }
  },
  beforeRouteLeave(to, from, next) {
    console.log("You are going to route: ", to.name);
    $("#u-loader").css("clip-path", "circle(100%)");
    this.$store.commit("beginTransite");
    next();
  }
};
</script>

<style scoped>
.master {
  color: #000;
}
</style>
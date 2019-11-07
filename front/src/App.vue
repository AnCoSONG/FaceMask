<template>
  <div id="app">
    <!-- <img src="./assets/logo.png">
    <div>
      <p>
        If Element is successfully added to this project, you'll see an
        <code v-text="'<el-button>'"></code>
        below
      </p>
      <el-button>el-button</el-button>
    </div>
    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <transition
      mode="out-in"
      name="custom-classes-transition"
      enter-active-class="animated fadeIn"
      leave-active-class="animated fadeOut"
    >
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import "element-ui/lib/theme-chalk/display.css";

export default {
  name: "app",
  methods: {}
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #f3f3f3;
  z-index: 1;
  background-color: black;
}

.swiper-wrapper {
  /* 改变swiper原始的滑动效果 */
  transition-timing-function: cubic-bezier(1, 0, 0, 1) !important;
  /* transition-duration: 1000ms !important; */
}
</style>

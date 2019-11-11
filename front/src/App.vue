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
  min-width: 400px;
  /* overflow-x: hidden; */
}

.swiper-wrapper {
  /* 改变swiper原始的滑动效果 */
  transition-timing-function: cubic-bezier(1, 0, 0, 1) !important;
  /* transition-duration: 1000ms !important; */
}

nav ol,
nav ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

li,
ol,
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.parallax {
  height: 100vh;
  width: 100vw;
  /* background:url('../assets/mark.png') no-repeat center center;
  background-size: contain;
  background-blend-mode: overlay; */
  background-color: #121212;
  display: flex;
  flex-flow: wrap column;
  justify-content: center;
  align-content: center;
  align-items: center;
  z-index: -1;
}

#scene {
  width: 64vw;
}

.c-h-text {
  margin: 0 auto;
  font-size: 12vw;
  font-family: "Zhi Mang Xing", cursive;
  top: 60% !important;
  /* height: 100%; */
  /* transform: translateY(-50%); */
  text-shadow: 0 1px 0 #000, 0 -1px 0 #000, 1px 0 0 #000, -1px 0 0 #000,
    3px 3px 0 #000;
  width: 100%;
}
.c-h-img {
  width: 42vw;
  height: auto;
  border: 1px solid #fff;
}

@media screen and (max-width: 992px) {
  #scene {
    width: 75vw;
  }

  .c-h-img {
    width:70vw;
  }
  .c-h-text {
    font-size: 16vw;
    top:70%!important;

  }
}

@media screen and (max-width: 600px) {
  #scene {
    width: 80vw;
  }
  .c-h-img {
    width:75vw;
  }

  .c-h-text {
    font-size: 18vw;
    top:80%!important;
  }
}
</style>

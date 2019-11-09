import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import './plugins/jquery'
import './plugins/vue-awesome-swiper'
// import './plugins/jquery-smoove' //曲线救国，在jquery中设置jQuery为全局变量再在之后导入时传入立即函数

// import particlesJS from './plugins/particles'
// window.particlesJS = particlesJS
// console.log(window.particlesJS)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

<template>
  <div class="art">
    <!-- 这是脸谱艺术页面，包括脸谱介绍，脸谱历史，脸谱分类等内容。点击后进入子页。 -->
    <div class="header">
      <div class="header-inner">
        <div class="logo">百变脸谱</div>
        <div class="menu hidden-sm-and-down">
          <elasticButton class="menu-item active" msg="脸谱艺术" id="artB"></elasticButton>
          <elasticButton class="menu-item" msg="脸谱名家" id="masterB"></elasticButton>
          <elasticButton class="menu-item" msg="国潮脸谱" id="fashionB"></elasticButton>
          <elasticButton class="menu-item" msg="互动脸谱" id="yoursB"></elasticButton>
        </div>
        <div class="menu hidden-md-and-up">
          <elasticButton class="menu-item" msg="菜单"></elasticButton>
        </div>
      </div>
    </div>
    <div class="hero">
      <ul id="scene" style="width:60vw;">
        <li data-depth="0.2">
          <img
            src="../assets/home/art.png"
            alt
            style="width:40vw; height:auto;border:1px solid #fff;"
          />
        </li>
        <li data-depth="0.6" class="c-text">
          <div>脸谱艺术</div>
        </li>
      </ul>
      <!-- Hero做视差效果 -->
      <!-- <div class="c-pic" data-depth="0.2">
      </div>-->
      <!-- <div class="c-text" data-depth="0.6">脸谱艺术</div> -->
    </div>
    <!-- <elasticButton class="tipText" style="postion:absolute; bottom:100px;" msg="向下滑动查看更多"></elasticButton> -->
    <div class="main-part">
      <div class="section-list">
        <div class="section" id="intro">
          <div class="text" @click="shiftTo('intro')">脸谱介绍</div>
          <div class="img-holder">
            <img src="../assets/art/introduction.jpg" alt />
          </div>
        </div>
        <div class="section" id="histo">
          <div class="text" @click="shiftTo('histo')">脸谱历史</div>
          <div class="img-holder">
            <img src="../assets/art/history.jpg" alt />
          </div>
        </div>
        <div class="section" id="exhib">
          <div class="text" @click="shiftTo('exhib')">脸谱展示</div>
          <div class="img-holder">
            <img src="../assets/art/exhibition.jpg" alt />
          </div>
        </div>
      </div>
      <canvas class="particle-bg"></canvas>
      <div class="intro">
        <div class="intro_inner">
          <h1>This part is for introduction</h1>
        </div>
      </div>
      <div class="histo">
        <div class="histo_inner">
          <h1>This part is for history</h1>
        </div>
      </div>
      <div class="exhib">
        <div class="exhib_inner">
          <h1>This part is for exhibition</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Parallax from "parallax-js";
import Particles from "particlesjs";
import elasticButton from "@/components/elasticButton.vue";
import underlineElasticButton from "@/components/underlineElasticButton.vue";
import { TimelineMax } from "gsap";

export default {
  name: "Art",
  components: {
    elasticButton,
    underlineElasticButton
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
        $("#u-loader").css("clip-path", "circle(0%)");
      }
    }
    /** 监控访问 END */
    //===================

    this.$nextTick(function() {
      //===================
      /** 加载视差和粒子 */
      let el = document.getElementById("scene");
      let parallaxInstance = new Parallax(el);
      var particles = Particles.init({
        selector: ".particle-bg",
        color: "#000",
        speed: 0.7,
        maxParticles: 120
      });
      /** 加载完成 */
      //===================
      //===================
      /** 顶部滚动事件绑定 */
      let offsetTop = $(".main-part").offset().top;
      // console.log(offsetTop);
      $(window).scroll(function(e) {
        let scrollTop = $(window).scrollTop();

        // console.log(offsetTop, scrollTop);
        if (offsetTop - 100 < scrollTop) {
          // 在main-part区域内即为深色
          $(".header").css("color", "#222");
        } else {
          $(".header").css("color", "#fff");
        }
        
      });
      /**顶部滚动颜色改变 DONE */
      //======================

      //======================
      /**鼠标滚动 */
      $(".art").mousewheel(function(e) {
        // console.log(e);
        let wheelDelta = e.deltaY;
        if (wheelDelta < 0) {
          $(".header").css({ transform: "translateY(-5%)", opacity: 0 });
        } else {
          $(".header").css({ transform: "translateY(5%)", opacity: 1 });
        }
      });
      /**鼠标滚动绑定显示隐藏header实现 */
      //======================
      //======================
      /**smoove实现内容加载 */
      // $('.particle-bg').smoove({offset: '10%'})
      // $('.section').smoove({offset: '10%'})
      /**smoove实现内容加载 放弃 粒子和smoove不可兼得*/
      //======================

      /** scrollMagic显示效果绑定 */
      //======================
      let controller = new ScrollMagic.Controller({ loglevel: 3 });
      // console.log(controller)
      let timelineEffectText = new TimelineMax({ paused: true });
      timelineEffectText
        .fromTo(
          ".main-part .section-list .section:nth-child(1)",
          0.75,
          { autoAlpha: 0, y: 128 },
          { autoAlpha: 1, y: 0 }
        )
        .fromTo(
          ".main-part .section-list .section:nth-child(2)",
          0.75,
          { autoAlpha: 0, y: 128 },
          { autoAlpha: 1, y: 0 },
          "-=0.25"
        )
        .fromTo(
          ".main-part .section-list .section:nth-child(3)",
          0.75,
          { autoAlpha: 0, y: 128 },
          { autoAlpha: 1, y: 0 },
          "-=0.25"
        );
      new ScrollMagic.Scene({
        triggerElement: ".main-part",
        triggerHook: "onEnter",
        offset: 400
      })
        .addTo(controller)
        .setTween(timelineEffectText.play());
      //======================

      //======================
      /** 显示隐藏 */
      $(".section .text")
        .mouseover(function(e) {
          let tid = e.target.parentNode.id;
          $("#" + tid + " .img-holder").slideDown(300);
          $("#" + tid).addClass("active");
          let dic = ["intro", "histo", "exhib"];
          for (let i of dic) {
            // console.log(i)
            if (tid !== i) {
              $("#" + i).addClass("notactive");
            }
          }
        })
        .mouseout(function(e) {
          // console.log('cba')
          let tid = e.target.parentNode.id;
          $("#" + tid + " .img-holder").slideUp(300);
          $("#" + tid).removeClass("active");
          let dic = ["intro", "histo", "exhib"];
          for (let i of dic) {
            // console.log(i)
            if (tid !== i) {
              $("#" + i).removeClass("notactive");
            }
          }
        });
      /** 显示隐藏图片 DONE */
      //======================

      //======================
      /** 菜单按钮绑定 */
      $("#artB").click(function(e) {
        // self.goTo("Art");
        self.shiftTo("main-part")
      });
      $("#masterB").click(function(e) {
        self.goTo("Master");
      });
      $("#fashionB").click(function(e) {
        self.goTo("Fashion");
      });
      $("#yoursB").click(function(e) {
        self.goTo("Yours");
      });

      /** 菜单按钮绑定 DONE*/
      //======================

    });
  },
  methods: {
    goTo(name) {
      this.$router.push(name);
    },
    shiftTo(name){
      console.log("shift to", name)
      let topOf = $('.'+name).offset().top
        // console.log(topOfIntro)
        $('html,body').animate({scrollTop:topOf}, 2000, 'easeInOutExpo')
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
.art {
  color: white;
  background-color: #121212;
}
.hero {
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

.c-text {
  left: 10.5vw !important;
  margin: 0 auto;
  font-size: 12vw;
  font-family: "Zhi Mang Xing", cursive;
  top: 60% !important;
  /* height: 100%; */
  /* transform: translateY(-50%); */
  text-shadow: 0 1px 0 #000, 0 -1px 0 #000, 1px 0 0 #000, -1px 0 0 #000,
    3px 3px 0 #000;
}

.header {
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
  padding: 2.778vh 0;
  transition: transform 300ms ease-in-out, opacity 300ms ease-in-out;
  /* pointer-events: none; */
}

.header .header-inner {
  display: flex;
  flex-flow: nowrap row;
  justify-content: space-between;
  align-content: center;
  position: relative;
  height: 100%;
  padding: 0 7vw;
  transition: transform 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s,
    -webkit-transform cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  transform: translate3d(0, 5.3vh, 0);
}

.header .header-inner .logo {
  position: relative;
  pointer-events: auto;
  font-weight: 700;
  font-family: "Liu Jian Mao Cao", cursive;

  font-size: 2em;
  pointer-events: none;
  transition: color 300ms cubic-bezier(0.47, 0, 0.745, 0.715);
}

.header .header-inner .menu {
  display: flex;
  flex-flow: nowrap row;
  /* width:60%;  */
  /* 暂时不需要 */
  justify-content: space-evenly;
  align-items: center;
  align-content: center;
}

.header .header-inner .menu .menu-item {
  /* font-family: "Noto Serif SC", serif; */
  font-family: "Ma Shan Zheng", serif;
  font-weight: 600;
  margin: 0 1em;
  letter-spacing: 0.2em;
  text-indent: 0.1em;
  font-size: 1.2em;
  cursor: pointer;
  z-index: 10;
  transition: color 300ms cubic-bezier(0.47, 0, 0.745, 0.715);
}

.main-part {
  width: 100vw;
  height: 100vh;
  background-color: white;
  color: #222;
}

.section-list {
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: nowrap column;
  justify-content: center;
  align-content: center;
  align-items: center;
}

.section-list .section {
  font-family: "Ma Shan Zheng", serif;
  font-size: 4vw;
  font-weight: 700;
  letter-spacing: 0.2em;
  text-indent: 0.2em;
  margin: 2vh 0;
  z-index: 2;
  cursor: pointer;
  transition: color 300ms ease-in-out;
}

.section-list .section.active {
  z-index: 10;
  color: white;
}

.section-list .section.notactive {
  color: #aaa;
}

.section-list .section .img-holder {
  display: none;
  width: 60vw;
  height: auto;
  z-index: -1;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  /* background-color:rgba(230, 230, 230, 0.3); */
  /* display: flex; */
  /* flex-flow: nowrap row;
  justify-content: center;
  align-content: center;
  align-items: center; */
  /* background: url(../assets/home_wire.png) no-repeat center center; */
  /* background-size: contain; */
}

.section-list .section .img-holder img {
  width: inherit;
  /* border:1px solid #222; */
  height: auto;
  margin-left: -10px;
  box-shadow: 0 0 12px 2px rgba(0, 0, 0, 0.1);
}

.particle-bg {
  position: absolute;
  top: 100vh;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  display: block !important;
}

.intro,
.histo,
.exhib {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-flow: wrap row;
  justify-content: center;
  align-content: center;
  align-items: center;
}

.intro {
  background:rgba(0, 0, 0, 0.1);
}

.histo {
  background: #fff222;
}

.exhib {
  background: #222aaa;
}
</style>
<template>
  <div class="fashion">
    <!-- 这是国潮脸谱页面，展示一些脸谱潮品。点击后进入子页。 -->
    <div class="header">
      <div class="header-inner">
        <div class="logo" @click="goTo('/')">百变脸谱</div>
        <div class="menu hidden-sm-and-down">
          <elasticButton class="menu-item" msg="脸谱艺术" id="artB"></elasticButton>
          <elasticButton class="menu-item" msg="脸谱名家" id="masterB"></elasticButton>
          <elasticButton class="menu-item active" msg="国潮脸谱" id="fashionB"></elasticButton>
          <elasticButton class="menu-item" msg="互动脸谱" id="yoursB"></elasticButton>
          <div
            class="menu-item backbtn"
            style="position:relative"
            @click="goBack()"
            @mouseenter="animateBegin('backbtn','swing')"
            @mouseleave="animateEnd('backbtn','swing')"
          >
            <span
              style="display:inline-block;padding-top: 0.2em;padding-right: 0.05em;padding-bottom: 0.1em;overflow:hidden"
            >
              <img src="../assets/back.png" alt style="width:1.2em; height:1.2em;" />
            </span>
          </div>
        </div>
        <div class="menu hidden-md-and-up">
          <div
            class="menu-item callOutMenu"
            style="font-size:1.8em;"
            @mouseenter="animateBegin('callOutMenu','tada')"
            @mouseleave="animateEnd('callOutMenu','tada')"
          >菜单</div>
        </div>
      </div>
    </div>
    <div class="menu-top-wrapper">
      <div class="menu-wrapper" style="transform:translateY(100%)">
        <div class="menu-inner" style="transform:translateY(-100%)">
          <div class="menu-body">
            <nav class="navigator">
              <ul class="nav-list">
                <li class="nav-item">
                  <router-link to="Art" class="nav-link">
                    脸谱艺术
                    <small>Art</small>
                  </router-link>
                </li>
                <li class="nav-item">
                  <router-link to="Master" class="nav-link">
                    脸谱大师
                    <small>Master</small>
                  </router-link>
                </li>
                <li class="nav-item">
                  <router-link to="Fashion" class="nav-link">
                    国潮脸谱
                    <small>Fashion</small>
                  </router-link>
                </li>
                <li class="nav-item">
                  <router-link to="Yours" class="nav-link">
                    互动脸谱
                    <small>Yours</small>
                  </router-link>
                </li>
                <li class="nav-item backHome">
                  <router-link to="/" class="nav-link">
                    返回首页
                    <small>Home</small>
                  </router-link>
                </li>
              </ul>
            </nav>
            <div class="center-bg-text">
              <span class="txt">百变脸谱</span>
            </div>
            <div class="bottom-desc">百变脸谱团队.</div>
          </div>
        </div>
      </div>
    </div>
    <el-backtop :right="80" :bottom="80"></el-backtop>
    <div class="parallax">
      <ul id="scene">
        <li data-depth="0.2">
          <img
            src="../assets/home/fashionpro.jpg"
            alt
            class="c-h-img"
          />
        </li>
        <li data-depth="0.6" class="c-h-text">
          <div>国潮脸谱</div>
        </li>
      </ul>
      <!-- Hero做视差效果 -->
      <!-- <div class="c-pic" data-depth="0.2">
      </div>-->
      <!-- <div class="c-text" data-depth="0.6">脸谱艺术</div> -->
    </div>
    <div class="scrolldown-tip" style="transform: translateY(100%);">
      <div class="scrolldown-btn" @mouseenter="scrollHover()">
        <elasticButton ref="scrolldown" msg="向下滑动查看更多   Scroll Down to See More"></elasticButton>
      </div>
    </div>
    <div class="main-part">
      <div class="section-list">
        <div class="box box1" @mouseenter="animateBegin('box1','pulse')" @mouseleave="animateEnd('box1','pulse')">
          <img src="../assets/fashion/clothes-pro.jpg" />
        </div>
        <div class="p-text">脸谱元素服装</div>
      </div>
      <div class="section-list">
        <div class="box box2" id="boxright1" @mouseenter="animateBegin('box2','pulse')" @mouseleave="animateEnd('box2','pulse')">
          <img src="../assets/fashion/shoe-pro.jpg" />
        </div>
        <div class="p-text1">脸谱元素鞋</div>
      </div>
      <div class="section-list">
        <div class="box box3" @mouseenter="animateBegin('box3','pulse')" @mouseleave="animateEnd('box3','pulse')">
          <img src="../assets/fashion/accessory-pro.jpg" />
        </div>
        <div class="p-text">脸谱元素饰品</div>
      </div>
      <div class="section-list">
        <div class="box box4" id="boxright2" @mouseenter="animateBegin('box4','pulse')" @mouseleave="animateEnd('box4','pulse')">
          <img src="../assets/fashion/home-pro.jpg" />
        </div>
        <div class="p-text1">脸谱元素家居</div>
      </div>
      <div class="footer">
        <h1 class="chinese">百变脸谱</h1>
        <h2 class="english">Fancy Mask</h2>
        <h4
          @click="goTo('About')"
          style="font-family:'Noto Sans SC', serif;cursor:pointer;"
        >About Us</h4>
        <p>All Copyright Reserved.</p>
      </div>
    </div>
  </div>
</template>

<script>
import Parallax from "parallax-js";
// import Particles from "particlesjs";
import elasticButton from "@/components/elasticButton.vue";
import underlineElasticButton from "@/components/underlineElasticButton.vue";
import { TimelineMax } from "gsap";

export default {
  name: "Fashion",
  components: {
    elasticButton,
    underlineElasticButton
  },
  data() {
    return {
      menuOpened: false
    };
  },

  mounted() {
    //===================
    /** 监控访问 BEGIN */
    let self = this;
    let loadStatus = setInterval(function() {
      if (window.loaddone && !self.$store.state.loaddone) {
        //加载完成后执行一些动作
        self.$store.commit("loaded");

        //===================
        /** scrolldown出现 */
        anime({
          targets: ".scrolldown-tip",
          translateY: "0%",
          duration: 600,
          easing: "easeOutCubic",
          delay: 1000,
          complete: function() {
            console.log("finished");
            self.scrollHover();
          }
        });
        /** scrolldown出现  Done*/
        //===================
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
        //===================
        /** scrolldown出现 */
        anime({
          targets: ".scrolldown-tip",
          translateY: "0%",
          duration: 600,
          easing: "easeOutCubic",
          delay: 1000,
          complete: function() {
            console.log("finished");
            self.scrollHover();
          }
        });
        /** scrolldown出现  Done*/
        //===================
      }
    }
    /** 监控访问 END */
    //===================

    //=======================
    /** 菜单呼出绑定 */
    $(".callOutMenu").click(function(e) {
      console.log("召唤菜单,alive");
      if (!self.menuOpened) {
        let menuTimeline = anime.timeline({
          easing: "easeOutExpo",
          complete: function(anim) {
            self.menuOpened = true;
            $(".header-inner").css("color", "#fff");
            $(".menu-top-wrapper").addClass("active"); // 加上pointer-events:auto;开启事件监听。
            $(".callOutMenu").text("关闭"); // 之后可以变为按钮动画
            $("body").css("overflow-y", "hidden");
          }
        });
        menuTimeline
          .add({
            targets: ".menu-inner",
            translateY: "0%",
            duration: 500
          })
          .add({
            targets: ".menu-wrapper",
            translateY: "0%",
            duration: 500,
            offset: "-=500"
          });
      } else {
        // console.log("已经打开");
        console.log("正在关闭");
        let menuTimeline = anime.timeline({
          easing: "easeInExpo",
          complete: function(anim) {
            self.menuOpened = false;
            $(".menu-top-wrapper").removeClass("active");
            $(".header-inner").css("color", "");
            $(".callOutMenu").text("菜单"); // 之后可以变为按钮动画
            $("body").css("overflow-y", "auto");
          }
        });
        menuTimeline
          .add({
            targets: ".menu-inner",
            translateY: "100%",
            duration: 500
          })
          .add({
            targets: ".menu-wrapper",
            translateY: "100%",
            duration: 500,
            offset: "-=500"
          });
      }
    });
    /** 菜单呼出绑定 */
    //=======================

    this.$nextTick(function() {
      //===================
      /** 加载视差和粒子 */
      let el = document.getElementById("scene");
      let parallaxInstance = new Parallax(el);
      // var particles = Particles.init({
      //   selector: ".particle-bg",
      //   color: "#000",
      //   speed: 0.5,
      //   maxParticles: 100
      // });
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

        if (scrollTop == 0) {
          $(".header").css({ transform: "translateY(5%)", opacity: 1 });
        }
      });
      /**顶部滚动颜色改变 DONE */
      //======================

      //======================
      /**鼠标滚动 */
      $(".fashion").mousewheel(function(e) {
        //菜单打开时阻止滚动
        //=================
        if (self.menuOpened) {
          // console.log("Alibe")
          e.preventDefault();
          return false;
        }
        // Done
        //=================
        //console.log(e);
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
      let timelineEffectText1 = new TimelineMax({ paused: true });
      timelineEffectText1
        .fromTo(
          ".main-part .section-list:nth-child(1) .box",
          0.75,
          { autoAlpha: 0, x: -64, y: 64 },
          { autoAlpha: 1, x: 15, y: 0, ease: Power2.easeIn }
        )
        .fromTo(
          ".main-part .section-list:nth-child(1) .p-text",
          0.75,
          { autoAlpha: 0, x: 64, y: 64 },
          { autoAlpha: 1, x: -15, y: 0, ease: Power2.easeIn },
          "-=0.75"
        )
        .fromTo(
          ".main-part .section-list:nth-child(1) .box",
          0.75,
          { x: 15, y: 0 },
          { x: 0, y: 0 }
        )
        .fromTo(
          ".main-part .section-list:nth-child(1) .p-text",
          0.75,
          { x: -15, y: 0 },
          { x: 0, y: 0 },
          "-=0.75"
        );
      new ScrollMagic.Scene({
        triggerElement: ".main-part .section-list:nth-child(1)",
        triggerHook: "onEnter",
        offset: 300
      })
        .addTo(controller)
        .setTween(timelineEffectText1.play());

      let timelineEffectText3 = new TimelineMax({ paused: true });
      timelineEffectText3
        .fromTo(
          ".main-part .section-list:nth-child(3) .box",
          0.75,
          { autoAlpha: 0, x: -64, y: 64 },
          { autoAlpha: 1, x: 15, y: 0, ease: Power2.easeIn }
        )
        .fromTo(
          ".main-part .section-list:nth-child(3) .p-text",
          0.75,
          { autoAlpha: 0, x: 64, y: 64 },
          { autoAlpha: 1, x: -15, y: 0, ease: Power2.easeIn },
          "-=0.75"
        )
        .fromTo(
          ".main-part .section-list:nth-child(3) .box",
          0.75,
          { x: 15, y: 0 },
          { x: 0, y: 0 }
        )
        .fromTo(
          ".main-part .section-list:nth-child(3) .p-text",
          0.75,
          { x: -15, y: 0 },
          { x: 0, y: 0 },
          "-=0.75"
        );
      new ScrollMagic.Scene({
        triggerElement: ".main-part .section-list:nth-child(3)",
        triggerHook: "onEnter",
        offset: 300
      })
        .addTo(controller)
        .setTween(timelineEffectText3.play());

      let timelineEffectText2 = new TimelineMax({ paused: true });
      timelineEffectText2
        .fromTo(
          ".main-part .section-list:nth-child(2) .box",
          0.75,
          { autoAlpha: 0, x: 64, y: 64 },
          { autoAlpha: 1, x: -15, y: 0, ease: Power2.easeIn }
        )
        .fromTo(
          ".main-part .section-list:nth-child(2) .p-text1",
          0.75,
          { autoAlpha: 0, x: -64, y: 64 },
          { autoAlpha: 1, x: 15, y: 0, ease: Power2.easeIn },
          "-=0.75"
        )
        .fromTo(
          ".main-part .section-list:nth-child(2) .box",
          0.75,
          { x: -15, y: 0 },
          { x: 0, y: 0 }
        )
        .fromTo(
          ".main-part .section-list:nth-child(2) .p-text1",
          0.75,
          { x: 15, y: 0 },
          { x: 0, y: 0 },
          "-=0.75"
        );
      new ScrollMagic.Scene({
        triggerElement: ".main-part .section-list:nth-child(2)",
        triggerHook: "onEnter",
        offset: 300
      })
        .addTo(controller)
        .setTween(timelineEffectText2.play());

      let timelineEffectText4 = new TimelineMax({ paused: true });
      timelineEffectText4
        .fromTo(
          ".main-part .section-list:nth-child(4) .box",
          0.75,
          { autoAlpha: 0, x: 64, y: 64 },
          { autoAlpha: 1, x: -15, y: 0, ease: Power2.easeIn }
        )
        .fromTo(
          ".main-part .section-list:nth-child(4) .p-text1",
          0.75,
          { autoAlpha: 0, x: -64, y: 64 },
          { autoAlpha: 1, x: 15, y: 0, ease: Power2.easeIn },
          "-=0.75"
        )
        .fromTo(
          ".main-part .section-list:nth-child(4) .box",
          0.75,
          { x: -15, y: 0 },
          { x: 0, y: 0 }
        )
        .fromTo(
          ".main-part .section-list:nth-child(4) .p-text1",
          0.75,
          { x: 15, y: 0 },
          { x: 0, y: 0 },
          "-=0.75"
        );
      new ScrollMagic.Scene({
        triggerElement: ".main-part .section-list:nth-child(4)",
        triggerHook: "onEnter",
        offset: 400
      })
        .addTo(controller)
        .setTween(timelineEffectText4.play());
      //======================

      //======================
      /** 菜单按钮绑定 */
      $("#artB").click(function(e) {
        self.goTo("Art");
      });
      $("#masterB").click(function(e) {
        self.goTo("Master");
      });
      $("#fashionB").click(function(e) {
        self.shiftTo("main-part");
      });
      $("#yoursB").click(function(e) {
        self.goTo("Yours");
      });

      /** 菜单按钮绑定 DONE*/
      //======================

      //======================
      /** safari竖排文字排版兼容性问题 */
      if (IsSafari()) {
        $("h3").css({ "writing-mode": "horizontal-tb", width: "60vw" });
      }
      /** safari竖排文字排版兼容性问题 Done*/
      //=====================
    });
  },
  methods: {
    goTo(name) {
      this.$router.push(name);
    },
    shiftTo(name) {
      console.log("shift to", name);
      let topOf = $("." + name).offset().top;
      // console.log(topOfIntro)
      $("html,body").animate({ scrollTop: topOf }, 2000, "easeInOutExpo");
    },
    goBack() {
      this.$router.go(-1);
    },
    animateBegin(className, animateName) {
      $("." + className).addClass("animated " + animateName);
    },
    animateEnd(className, animateName) {
      $("." + className).removeClass("animated " + animateName);
    },
    scrollHover() {
      // console.log(this.$refs);
      if (this.$refs.scrolldown) {
        this.$refs.scrolldown.play();
      }
    }
  },
  beforeRouteLeave(to, from, next) {
    console.log("You are going to route: ", to.name);
    $("#u-loader").css({
      "clip-path": "circle(100%)",
      "-webkit-clip-path": "circle(100%)"
    });
    $("body").css("overflow-y", "auto"); // 清理
    this.menuOpened = false; // 清理
    this.$store.commit("beginTransite");
    next();
  },
  goBack() {
    this.$router.go(-1);
  }
};
</script>

<style scoped>
.fashion {
  color: white;
  background-color: #121212;
  overflow-x: hidden;
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
  /* margin-left: 3vw; */
  margin-left: 1em;
  font-size: 2em;
  /* pointer-events: none; */
  cursor: pointer;
  transition: color 300ms cubic-bezier(0.47, 0, 0.745, 0.715);
}

.header .header-inner .logo:hover {
  text-shadow: 0 1px 0 #666, 0 -1px 0 #666, 1px 0 0 #666, -1px 0 0 #666,
    3px 3px 0 #666;
  /* color:#aaa; */
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
  margin-left: 1em;
  letter-spacing: 0.2em;
  text-indent: 0.1em;
  font-size: 1.2em;
  cursor: pointer;
  z-index: 10;
  transition: color 300ms cubic-bezier(0.47, 0, 0.745, 0.715);
}

.header .header-inner .menu .menu-item:last-child {
  margin-right: 1em;
}

/** main-part部分 */
/** start */
.main-part {
  width: 100vw;
  height: 100%;
  background-color: #121212;
}

.main-part .section-list {
  margin: 0 7vw;
  background: white;
  color: #121212;
  /* width: 100%; */
  height: 100vh;
  display: flex;
  flex-flow: nowrap column;
  justify-content: center;
  align-content: center;
  align-items: center;
}

.p-text {
  width: 70%;
  font-size: 7vw;
  font-family: "Zhi Mang Xing", cursive;
  font-weight: 500;
  position: relative;
  top: -22vw;
  left: 16vw;
  z-index: 1;
  text-shadow: 0 1px 0 #fff, 0 -1px 0 #fff, 1px 0 0 #fff, -1px 0 0 #fff,
    3px 3px 0 #fff;
}
.p-text1 {
  width: 70%;
  font-size: 7vw;
  font-family: "Zhi Mang Xing", cursive;
  font-weight: 500;
  position: relative;
  top: -22vw;
  left: -15vw;
  z-index: 1;
  text-shadow: 0 1px 0 #fff, 0 -1px 0 #fff, 1px 0 0 #fff, -1px 0 0 #fff,
    3px 3px 0 #fff;
}
@media screen and (min-width: 768px) and (max-width: 992px) {
  .p-text {
    top: 2rem;
    left: 0.5rem;
    font-size: 5rem;
  }
  .p-text1 {
    top: 2rem;
    left: 0rem;
    font-size: 5rem;
  }
}
@media screen and (min-width: 450px) and (max-width: 768px) {
  .p-text {
    top: 2rem;
    left: 0.5rem;
    font-size: 3rem;
  }
  .p-text1 {
    top: 2rem;
    left: 0rem;
    font-size: 3rem;
  }
}
@media screen and (max-width: 450px) {
  .p-text {
    top: 2rem;
    left: 0.5rem;
    font-size: 2rem;
  }
  .p-text1 {
    top: 2rem;
    left: 0rem;
    font-size: 2rem;
  }
}

.box {
  margin: 0 auto;
  width: 28vw;
  min-height: 31vh;
  padding: 1vh;
  position: relative;
  margin-left: 11vw;
  margin-top: 20vh;
  background: -webkit-gradient(
    linear,
    0% 20%,
    0% 92%,
    from(#fff),
    to(#f3f3f3),
    color-stop(0.1, #fff)
  );
  border-top: 1px solid #ccc;
  border-right: 1px solid #ccc;
  border-left: 1px solid #ccc;
  -webkit-box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.2);
}
#boxright1 {
  margin-left: 45vw;
}
#boxright2 {
  margin-left: 48vw;
}
@media screen and (max-width: 992px) {
  .box {
    width: 25rem;
    margin: 0 auto;
  }
  #boxright1 {
    /* width: 25rem; */
    margin: 0 auto;
  }
  #boxright2 {
    margin: 0 auto;
  }
}
@media screen and (min-width: 450px) and (max-width: 768px) {
  .box {
    width: 18rem;
    margin: 0 auto;
  }
  #boxright1 {
    margin: 0 auto;
  }
  #boxright2 {
    margin: 0 auto;
  }
}
@media screen and (max-width: 450px) {
  .box {
    width: 13rem;
    margin: 0 auto;
  }
  #boxright1 {
    margin: 0 auto;
  }
  #boxright2 {
    margin: 0 auto;
  }
}

.box:before {
  content: "";
  position: absolute;
  width: 10rem;
  height: 2rem;
  border-left: 1px dashed rgba(0, 0, 0, 0.1);
  border-right: 1px dashed rgba(0, 0, 0, 0.1);
  background: -webkit-gradient(
    linear,
    555% 20%,
    0% 92%,
    from(rgba(0, 0, 0, 0.1)),
    to(rgba(0, 0, 0, 0)),
    color-stop(0.1, rgba(0, 0, 0, 0.2))
  );
  -webkit-box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.2);
  -webkit-transform: translate(-50px, 10px) skew(10deg, 10deg) rotate(-50deg);
}
.box:after {
  content: "";
  position: absolute;
  right: 0;
  bottom: 0;
  width: 10rem;
  height: 2rem;
  background: -webkit-gradient(
    linear,
    555% 20%,
    0% 92%,
    from(rgba(0, 0, 0, 0.1)),
    to(rgba(0, 0, 0, 0)),
    color-stop(0.1, rgba(0, 0, 0, 0.2))
  );
  border-left: 1px dashed rgba(0, 0, 0, 0.1);
  border-right: 1px dashed rgba(0, 0, 0, 0.1);
  -webkit-box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.2);
  -webkit-transform: translate(50px, -20px) skew(10deg, 10deg) rotate(-50deg);
}
@media screen and (min-width: 450px) and (max-width: 768px) {
  .box::before {
    width: 8rem;
    height: 1.6rem;
  }
  .box::after {
    width: 8rem;
    height: 1.6rem;
  }
}
@media screen and (max-width: 450px) {
  .box::before {
    width: 5.5rem;
    height: 1.4rem;
  }
  .box::after {
    width: 5.5rem;
    height: 1.4rem;
    bottom: -1.5rem;
    right: 1rem;
  }
}

.box img {
  width: 98%;
  height: 98%;
  margin-top: 8px;
}
/** main-part部分 */
/** end */

/** menu部分 */
/** start */
.menu-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  /* display:flex;
  justify-content: center;
  align-items: center;
  align-content: center; */
  /* z-index:9; */
  /* background-color: #ac3131; */
}

.menu-inner {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.menu-top-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9;
  display: block;
  pointer-events: none;
}

.menu-top-wrapper.active {
  pointer-events: auto;
}

.menu-body {
  position: relative;
  display: flex;
  flex-flow: nowrap column;
  justify-content: center;
  align-content: center;
  align-items: center;
  widows: 100%;
  height: 100%;
  background-color: #c9171e;
  /* background:url(../assets/about/bg.png) no-repeat center center;
  background-size: cover;
  background-blend-mode: multiply; */
}

.menu-body .navigator {
  position: relative;
  z-index: 1;
}

.menu-body .center-bg-text {
  z-index: 0;
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  text-align: center;
  text-indent: -0.1em;
  pointer-events: none;
}

.menu-body .bottom-desc {
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-content: center;
  align-items: center;
  position: absolute;
  bottom: 6.555vh;
  font-family: "Ma Shan Zheng", serif;
}

.menu-body .center-bg-text .txt {
  color: #d31c23;
  font-size: 26vw;
  font-family: "Liu Jian Mao Cao", cursive;
  font-weight: 400;
  letter-spacing: -0.001em;
  white-space: nowrap;
  transform: rotate(-6deg) translate3d(0, -0.1em, 0);
}

.menu-body .navigator .nav-list {
  padding-top: 2.668vh;
  position: relative;
}

nav ol,
nav ul {
  list-style: none;
}

li,
ol,
ul {
  list-style: none;
}

.menu-body .navigator .nav-list .nav-item {
  position: relative;
  pointer-events: auto;
  z-index: 0;
  overflow: hidden;
}

.menu-body .navigator .nav-list .nav-item .nav-link:not(:last-child) {
  padding: 15px 0;
}

.menu-body .navigator .nav-list .nav-item .nav-link {
  display: inline-flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-content: center;
  align-items: baseline;
  width: 100%;
  height: 100%;
  color: #fff;
  font-weight: 700;
  letter-spacing: 0;
  cursor: pointer;
  font-size: 2.2rem;
  font-family: "Ma Shan Zheng", serif;
  text-shadow: 0 1px 0 #000, 0 -1px 0 #000, 1px 0 0 #000, -1px 0 0 #000,
    3px 3px 0 #000;
}

.menu-body .navigator .nav-list .nav-item.backHome {
  /* background: url(../assets/btn_bg.png) no-repeat center center;
  background-size: contain;
  width:200px;
  height: 200px; */
}

.menu-body .navigator .nav-list .nav-item .nav-link small {
  font-family: "Comfortaa", cursive;
  padding-left: 10px;
  font-size: 1.5rem;
  font-weight: 700;
}

/** menu部分 */
/** end */

/** Scroll Down */
/** start */
.scrolldown-tip {
  position: absolute;
  z-index: 2;
  background-color: #fff;
  height: 70px;
  width: 86vw;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0 7vw;
}

.scrolldown-tip .scrolldown-btn {
  color: #222;
  padding: 0 7.1428vw;
  cursor: pointer;
  display: flex;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-content: center;
  align-items: center;
  /* vertical-align: baseline; */
  width: auto;
  height: 100%;
  font-size: 1.2em;
  font-family: "Noto Sans SC", serif;
  font-weight: 700;
  border-bottom: 1px solid #f3d3d3;
}

@media (max-width:768px){
  .scrolldown-tip .scrolldown-btn{
    font-size: 1em;
  }
}

/** Scroll Down */
/** End */

/** Footer */

.footer {
  height: auto;
  width: 100%;
  margin-top: 10px;
  padding: 100px;
  background-color: #121212;

  color: #fff;
}
.footer .chinese {
  font-family: "Liu Jian Mao Cao", cursive;
  margin: 20px;
}

.footer .english {
  font-family: "Lakki Reddy", cursive;
  margin: 20px;
}

/** Footer */
</style>
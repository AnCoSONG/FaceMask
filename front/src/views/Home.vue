<template>
  <div class="home">
    <div class="bg hero"></div>
    <header class="header">
      <div class="header-inner">
        <div class="logo">Fancy Mask</div>
        <!-- <div class="menu hidden-md-and-up">菜单（待定制）</div> -->
      </div>
    </header>
    <div id="fancy_wrap">
      <div class="main">
        <div class="svg_container">百变脸谱</div>
        <div class="description">一起传承脸谱文化</div>
      </div>
      <elasticButton class="fancy_btn" msg="Click To Enter"></elasticButton>
    </div>

    <!-- NO USED -->
    <!-- <underlineElasticButton style="position:absolute; top:2em;" msg="This is an underline anime button"></underlineElasticButton> -->
    <!-- <img class="logo" src="../assets/fancyMask.png" alt /> -->
    <!-- <div class="logoText">
        <div class="chinese">百变脸谱</div>
        <div class="english">Fancy Mask</div>
    </div>-->
    <!-- <div class="fancy_btn">点按进入</div> -->
    <!-- NO USED -->
    <div class="home_inner">
      <!-- Home真正的主页部分 -->
      <div class="inner_box">
        <div class="center-mark"></div>
        <div class="content">
          <div class="main row">
            <div class="side-title col-lg-2">
              <span id="cur">{{currentPage}}</span>
              <span id="marker">&#9;&#x26AC;&nbsp;&#9;</span>
              <span id="max">{{maxPage}}</span>
            </div>
            <div class="main-swiper col-lg-8 col-md-10">
              <!-- Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi deleniti, non minus ullam assumenda reiciendis odio quas voluptates nemo libero provident molestiae inventore molestias alias placeat eius unde nam ut! -->
              <swiper ref="mySwiper" :options="swiperOption" style="height:50vh;">
                <swiper-slide class="inner-swiper rotor">
                  <div class="inner_slide">
                    <p
                      class="LONGLONGTEXT"
                    >Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur magni sequi voluptatum at, reprehenderit quasi, vero praesentium obcaecati pariatur ipsam esse. Omnis aperiam id nisi mollitia excepturi minima amet error!</p>
                    <img src="../assets/home/art.png" alt="Thumbnail" class="center-img" />
                    <!-- Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, molestias mollitia voluptate illo repellat voluptas placeat? Nobis expedita modi magnam, praesentium ea earum distinctio facere voluptatum mollitia commodi perspiciatis id. -->
                    <!-- <img src="../assets/home/art.png" alt="" width="200" height="auto" style="object-fit:contain;z-index:-2;"> -->
                    <h3 class="center-text">脸谱艺术</h3>
                  </div>
                </swiper-slide>
                <swiper-slide class="inner-swiper rotor">
                  <div class="inner_slide">
                    <p
                      class="LONGLONGTEXT"
                    >Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur magni sequi voluptatum at, reprehenderit quasi, vero praesentium obcaecati pariatur ipsam esse. Omnis aperiam id nisi mollitia excepturi minima amet error!</p>
                    <img src="../assets/home/master.png" alt="Thumbnail" class="center-img" />
                    <!-- Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, molestias mollitia voluptate illo repellat voluptas placeat? Nobis expedita modi magnam, praesentium ea earum distinctio facere voluptatum mollitia commodi perspiciatis id. -->
                    <!-- <img src="../assets/home/art.png" alt="" width="200" height="auto" style="object-fit:contain;z-index:-2;"> -->
                    <h3 class="center-text">脸谱大师</h3>
                  </div>
                </swiper-slide>
                <swiper-slide class="inner-swiper rotor">
                  <div class="inner_slide">
                    <p
                      class="LONGLONGTEXT"
                    >Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur magni sequi voluptatum at, reprehenderit quasi, vero praesentium obcaecati pariatur ipsam esse. Omnis aperiam id nisi mollitia excepturi minima amet error!</p>
                    <img src="../assets/home/fashion.png" alt="Thumbnail" class="center-img" />
                    <!-- Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, molestias mollitia voluptate illo repellat voluptas placeat? Nobis expedita modi magnam, praesentium ea earum distinctio facere voluptatum mollitia commodi perspiciatis id. -->
                    <!-- <img src="../assets/home/art.png" alt="" width="200" height="auto" style="object-fit:contain;z-index:-2;"> -->
                    <h3 class="center-text">国潮脸谱</h3>
                  </div>
                </swiper-slide>
                <swiper-slide class="inner-swiper rotor">
                  <div class="inner_slide">
                    <p
                      class="LONGLONGTEXT"
                    >Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur magni sequi voluptatum at, reprehenderit quasi, vero praesentium obcaecati pariatur ipsam esse. Omnis aperiam id nisi mollitia excepturi minima amet error!</p>
                    <img
                      src="../assets/home/artificial.png"
                      data-depth="0.00"
                      alt="Thumbnail"
                      class="center-img"
                    />
                    <!-- Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, molestias mollitia voluptate illo repellat voluptas placeat? Nobis expedita modi magnam, praesentium ea earum distinctio facere voluptatum mollitia commodi perspiciatis id. -->
                    <!-- <img src="../assets/home/art.png" alt="" width="200" height="auto" style="object-fit:contain;z-index:-2;"> -->
                    <h3 class="center-text" data-depth="0.40">互动脸谱</h3>
                  </div>
                </swiper-slide>
              </swiper>
            </div>
            <div class="swiper-controler-group col-lg-2 col-md-2 hidden-xs-only">
              <div class="prev"></div>
              <div style="overflow:hidden;"></div>
              <div class="next"></div>
            </div>
          </div>
        </div>
        <div class="footer row">
          <div class="col-md-2">
            <elasticButton class="goToAbout" msg="About"></elasticButton>
          </div>
          <!-- <div class="col-md-4">
            <elasticButton :msg="currentName" :id="currentName" v-if="refresh"></elasticButton>
          </div>-->
          <div class="col-md-8">
            <underlineElasticButton :msg="currentName" :id="currentName" v-if="refresh"></underlineElasticButton>
          </div>
          <div class="col-md-2">
            <elasticButton class="goBack" msg="Go Back"></elasticButton>
            <!-- <div class="progress-shower">
              <svg viewBox="0 0 54 54" style="width:32px; height:32px;">
                <path class="path-loop-bg" d="M27,2A25,25,0,1,1,2,27,25,25,0,0,1,27,2" />
                <path
                  class="path-loop"
                  d="M27,2A25,25,0,1,1,2,27,25,25,0,0,1,27,2"
                  stroke-dasharray="157.10179138183594"
                  style="stroke-dashoffset: 111.719px;"
                />
              </svg>
            </div>-->
          </div>
        </div>
      </div>
      <div id="mousePao" class="hidden-sm-and-down"></div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import elasticButton from "@/components/elasticButton.vue";
import underlineElasticButton from "@/components/underlineElasticButton.vue";

import { TweenLite } from "gsap/TweenMax";
// import Parallax from 'parallax-js'

export default {
  name: "home",
  components: {
    // HelloWorld,
    elasticButton,
    underlineElasticButton
  },
  data() {
    return {
      swiperOption: {
        direction: "vertical",
        effect: "slide",
        initialSlide: 0,
        slidesPerView: 1,
        spaceBetween: 50,
        mousewheel: true,
        speed: 1000,
        loop: true,
        autoplay: false,
        navigation: {
          nextEl: ".next",
          prevEl: ".prev"
        },

        on: {
          init: () => {
            if (this.swiper) {
              console.log("aaa");
              this.currentPage = this.swiper.realIndex + 1;
              this.currentName = this.maskList[this.swiper.realIndex].en;
            }
          },
          slideChangeTransitionEnd: () => {
            // alert(this.swiper.activeIndex);
            if (this.swiper) {
              let self = this;
              // alert(this.swiper.activeIndex)
              this.currentPage = this.swiper.realIndex + 1;
              this.currentName = this.maskList[this.swiper.realIndex].en;
              let name = this.currentName;
              this.refresh = false;
              this.$nextTick(() => {
                this.refresh = true;
                this.$nextTick(() => {
                  $("#" + this.currentName).click(function(e) {
                    self.goTo(name);
                  });
                });
              });
            }
          }
        }
      },
      currentName: "Art",
      refresh: true,
      currentPage: 1,
      maxPage: 4,
      maskList: [
        { han: "脸谱艺术", en: "Art", imgUrl: "../assets/home/art.png" },
        { han: "脸谱名家", en: "Master", imgUrl: "../assets/home/master.png" },
        {
          han: "国潮脸谱",
          en: "Fashion",
          imgUrl: "../assets/home/fashion.png"
        },
        {
          han: "你的脸谱",
          en: "Yours",
          imgUrl: "../assets/home/artificial.png"
        }
      ]
    };
  },

  computed: {
    swiper() {
      //拿到swiper实例
      return this.$refs.mySwiper.swiper;
    }
  },
  mounted: function() {
    // check load status in anypage
    //!! must add this proportion in any part.

    /* animatecss封装的动画方法 */
    function animateCSS(element, animationName, callback) {
      const node = document.querySelector(element);
      node.classList.add("animated", animationName);

      function handleAnimationEnd() {
        node.classList.remove("animated", animationName);
        node.removeEventListener("animationend", handleAnimationEnd);

        if (typeof callback === "function") callback();
      }

      node.addEventListener("animationend", handleAnimationEnd);
    }
    /* 监测是否已经进入 */
    let self = this;
    let loadStatus = setInterval(function() {
      if (window.loaddone && !self.$store.state.loaddone) {
        //加载完成后执行一些动作
        // $(".logo").animate({ height: "600px" }, 1000);
        // $('.fancy_btn').fadeIn(1000)
        //这里动画还会改
        $("#fancy_wrap").css("visibility", "visible");
        animateCSS("#fancy_wrap", "zoomIn");
        //动画完成
        self.$store.commit("loaded");
        // window.loaddone = false;
        setTimeout(function() {
          //1s后删除加载器
          $("#global_load").remove();
        }, 1000);
        clearInterval(loadStatus);
      }
    }, 1000);

    // 如果已经loaddone,那么就直接显示
    if (self.$store.state.loaddone) {
      //这边可以在返回的时候直接返回到主页部分
      //这里动画还会改
      if (this.$store.state.transiting) {
        console.log("Transiting back")
        $("#u-loader").css("clip-path", "circle(0%)");
        this.$store.commit("DoneTransite");
      }
      $("#fancy_wrap").css("visibility", "visible");
      animateCSS("#fancy_wrap", "zoomIn");
      //动画完成
      clearInterval(loadStatus)
    }

    /* 监测进入完成 */

    /**
     * Hero 3d 效果 上下放大缩小 左右旋转
     */

    // 初始化,封装方法将效果代码在进入后调用
    TweenLite.set($(".hero"), {
      rotationY: 0,
      rotationX: 0,
      rotationZ: 0,
      scale: 1.05,
      transformPerspective: 1000
    });
    // 鼠标over和鼠标move
    $(".home")
      .mouseover(function() {
        $(".home").mousemove(function(e) {
          let x = e.pageX - $(this).offset().left,
            y = e.pageY - $(this).offset().top;

          let px = x / $(this).width(),
            py = y / $(this).height();
          let xx = -2 + 4 * px,
            yy = 2 - 4 * py;

          let sy = py / 20;

          TweenMax.to($(".hero"), 0.5, {
            scale: 1.05 + sy,
            rotationY: xx,
            rotationX: yy,
            rotationZ: 0,
            transformPerspective: 1000,
            ease: Quad.easeOut,
            delay: 0.1
          });
        });
      })
      .mouseout(function() {
        $(this).unbind("mousemove");
        //TweenMax.killTweensOf($(this));
        TweenMax.to($(".hero"), 0.5, {
          scale: 1.05,
          rotationY: 0,
          rotationX: 0,
          rotationZ: 0,
          transformPerspective: 1000,
          ease: Quad.easeOut
        });
      });

    /*
     * Hero 3d 效果结束
     */

    /*
    绑定进入主页
    */
    // console.log($(".home_inner"));
    $(".fancy_btn").click(function() {
      /* 在这里初始化旋转进度条 */
      console.log(self);

      $("#Art").click(function(e) {
        console.log("clicked");
        self.goTo("Art");
      });
      // console.log(anime());
      // anime({
      //   targets: ".path-loop",
      //   strokeDashoffset: [anime.setDashoffset, 0],
      //   easing: "linear",
      //   duration: 3000,
      //   round: 1,
      //   direction: "normal"
      // });

      $(".home_inner").css("clip-path", "circle(100%)");
      $(".home").unbind("mouseover"); //解绑mouseover事件
      self.swiper.autoplay.start(); //开始自动播放
      self.swiper.autoplay.disableOnInteraction = false;
      self.swiper.autoplay.delay = 5000;

      console.log(self.swiper.autoplay);

      //初始化rotor
      //为中间的图片加上3d效果，这个效果与hero不同，上下左右均旋转

      TweenLite.set($(".rotor"), {
        rotationY: 0,
        rotationX: 0,
        rotationZ: 0,
        scale: 0.95,
        transformPerspective: 1000
      });

      // 鼠标事件绑定
      // 初始化移动变量
      let isMove = false,
        timer = null;
      $(".home_inner")
        .mouseover(function(e) {
          // console.log(e)
          // 检测压在什么上面
          // console.log(e)
          if (
            e.target.className.indexOf("swiper-slide") !== -1 ||
            e.target.className.indexOf("inner_slide") !== -1
          ) {
            $("#mousePao").animate(
              { width: 50, height: 50 },
              100,
              "easeOutSine"
            );
            $("#mousePao").text("Enter");
          } else if (e.target.className.indexOf("prev") !== -1) {
            $("#mousePao").animate(
              { width: 50, height: 50 },
              100,
              "easeOutSine"
            );
            $("#mousePao").text("Prev");
          } else if (e.target.className.indexOf("next") !== -1) {
            $("#mousePao").animate(
              { width: 50, height: 50 },
              100,
              "easeOutSine"
            );
            $("#mousePao").text("Next");
          } else if (
            e.target.className.indexOf("text-wrapper") !== -1 ||
            e.target.className.indexOf("letters") !== -1 ||
            e.target.className.indexOf("letter") !== -1
          ) {
            $("#mousePao").animate(
              { width: 50, height: 50 },
              100,
              "easeOutSine"
            );
            $("#mousePao").text("Tap");
          } else {
            $("#mousePao").animate(
              { width: 38, height: 38 },
              100,
              "easeOutSine"
            );
            $("#mousePao").text("");
          }
          $(".home_inner").mousemove(function(e) {
            isMove = true;
            clearTimeout(timer);
            // 鼠标移动时，气泡跟着动
            $("#mousePao").css({
              opacity: 1,
              top: e.clientY - 19,
              left: e.clientX - 19
            });
            timer = setTimeout(function() {
              isMove = false;
              $("#mousePao").css({ opacity: 0 });
            }, 700);

            // rotor效果
            let x = e.pageX - $(this).offset().left,
              y = e.pageY - $(this).offset().top;

            let px = x / $(this).width(),
              py = y / $(this).height();
            let xx = -10 + 20 * px,
              yy = 10 - 20 * py;

            TweenMax.to($(".rotor"), 0.5, {
              scale: 0.95,
              rotationY: xx,
              rotationX: yy,
              rotationZ: 0,
              transformPerspective: 1000,
              ease: Quad.easeOut,
              delay: 0.1
            });
          });
        })
        .mouseout(function() {
          $(this).unbind("mousemove");
          //TweenMax.killTweensOf($(this));
          TweenMax.to($(".rotor"), 0.5, {
            scale: 0.95,
            rotationY: 0,
            rotationX: 0,
            rotationZ: 0,
            transformPerspective: 1000,
            ease: Quad.easeOut
          });
        });

      // 绑定滚动事件

      $(".home_inner").mousewheel(function(e) {
        //检测是否是非swiper滑动，非swiper滑动再执行滑动操作

        if (
          e.target.className.indexOf("inner_swiper") !== -1 ||
          e.target.className.indexOf("inner_slide") !== -1
        ) {
          //swiper内，无视
        } else {
          e.preventDefault(); //禁止默认
          if (e.deltaY > 30) {
            if (!self.swiper.animating) {
              self.swiper.slidePrev();
            }
          } else if (e.deltaY < -30) {
            if (!self.swiper.animating) {
              self.swiper.slideNext();
            }
          }
        }
      });
    });
  },
  methods: {
    goTo(name) {
      this.$router.push(name);
    }
  },
  watch: {},
  // beforeRouteEnter(to, from, next){
  //   console.log('Route:', to.name)
  //   next()
  // },
  beforeRouteLeave(to, from, next) {
    console.log("You are going to route: ", to.name);
    $("#u-loader").css("clip-path", "circle(100%)");
    this.$store.commit("beginTransite");
    next()
  }
};
</script>

<style scoped>
.home {
  display: flex;
  flex-flow: nowrap column;
  justify-content: center;
  align-content: center;
  align-items: center;
}

.bg {
  position: fixed;
  top: 0;
  left: 0;
  background: url("../assets/home_bg.jpg") no-repeat center center;
  background-blend-mode: multiply;
  background-size: cover;
  height: 100vh;
  width: 100vw;
  color: white;
  background-color: rgba(0, 0, 0, 0.7);
}

.hero {
  transform: scale(1.05);
}

.header {
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
  padding: 2.778vh 0;
  pointer-events: none;
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
  font-family: "Lakki Reddy", cursive;
  font-size: 1.5em;
  cursor: pointer;
}

#fancy_wrap {
  visibility: hidden;
  text-align: center;
  z-index: 2;
  display: flex;
  flex-flow: nowrap column;
  justify-content: center;
  align-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  /* position: absolute; */
  /* background: url('../assets/fancyMask.png') no-repeat center center; */
  /* background-size: contain; */
  /* margin: 0 auto; */
  /* top: 40%; */
  /* transform: translateY(-50%); */
}

#fancy_wrap .main .svg_container {
  font-size: 12vw;
  font-family: "Liu Jian Mao Cao", cursive;
  font-weight: 700;
  text-shadow: 0 1px 0 #000, 0 -1px 0 #000, 1px 0 0 #000, -1px 0 0 #000,
    3px 3px 0 #000;
  letter-spacing: 0.3em;
  margin-bottom: 4vw;
  text-indent: 0.3em;
}

#fancy_wrap .main .description {
  font-weight: 600;
  font-family: "Noto Serif SC", serif;
  font-size: 1em;
  letter-spacing: 0.2em;
  text-shadow: 0 0.5px 0 #000, 0 -0.5px 0 #000, 0.5px 0 0 #000, -0.5px 0 0 #000,
    2px 2px 0 #000;
}

.home .home_inner {
  /* display: none; */
  position: absolute;
  clip-path: circle(0%);
  width: 100%;
  height: auto;
  top: 0;
  left: 0;
  z-index: 9;
  background-color: black;
  transition: clip-path 300ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
}

.home_inner .inner_box {
  height: 100vh;
  display: flex;
  flex-flow: nowrap column;
  justify-content: center;
  align-content: center;
  align-items: center;
}

.home_inner .inner_box .center-mark {
  background: url("../assets/mark.png") no-repeat center center;
  opacity: 0.05;
  background-size: contain;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  transform: rotate(-6deg);
  z-index: -1;
}

.home_inner .inner_box .content {
  height: 50vh;
  display: flex;
  flex-flow: nowrap column;
  justify-content: center;
  align-content: center;
  align-items: center;
  padding: 0 7vw;
}

.home_inner .inner_box .content .main {
  height: 50vh;
  display: flex;
  flex-flow: wrap row;
  justify-content: center;
  align-content: center;
  align-items: center;
}

.home_inner .inner_box .content .main-swiper {
  /* background-color: aliceblue; */
  height: 100%;
  /* width: 60%; */
}

.home_inner .inner_box .content .main .side-title {
  /* width: 20%; */
  padding: 1vw;
  font-family: "Noto Serif SC", serif;
  pointer-events: none;
}

.home_inner .inner_box .content .main .side-title > span {
  margin: 0 3px;
}

.home_inner .inner_box .content .main .main-swiper .inner-swiper {
  display: flex;
  flex-flow: nowrap column;
  justify-content: center;
  /* border: 1px #fff solid; */
}
.inner_slide {
  cursor: pointer;
  /* min-width: 80vw; */
  /*  防止萎缩 */

  /* background: url(../assets/home/art.png) no-repeat center center; */
  /* background-size: cover; */
  /* min-height: 100%; */
  /* clip-path: polygon(100,0, 200,100) */
}

.center-text {
  position: absolute;
  top: 50%;
  left: 60%;
  transform: translateY(-50%);
  font-size: 6.2vw;
  font-family: "Zhi Mang Xing", cursive;
  text-shadow: 0 1px 0 #000, 0 -1px 0 #000, 1px 0 0 #000, -1px 0 0 #000,
    3px 3px 0 #000;
  color: rgba(255, 255, 255, 1);
}

.center-img {
  width: 34vw;
  height: auto;
  border: 1px solid #fff;
}

.LONGLONGTEXT {
  opacity: 0;
  line-height: 0px;
}

.swiper-controler-group {
  padding: 2vh;
  overflow: hidden;
}

.swiper-controler-group .prev {
  background: url(../assets/sharpup.svg) no-repeat center center;
  background-size: contain;
  width: 2em;
  height: 2em;
  margin: 0 auto;
  margin-bottom: 2vh;
}
.swiper-controler-group .next {
  background: url(../assets/sharpdown.svg) no-repeat center center;
  background-size: contain;
  width: 2em;
  height: 2em;
  margin: 0 auto;
  margin-top: 2vh;
}

/**footer */
.footer {
  width: 100%;
  /* font-family: "Noto Serif SC", serif;  
  找另外的英文字体 */
  font-family: "Comfortaa", cursive;

  padding: 0 7vw;
  position: absolute;
  bottom: 6vw;
  justify-content: center;
  display: flex;
  align-content: center;
  align-items: center;
}

/* .home_inner .inner_box .main {
  display: flex;
  flex-flow: nowrap row;
  justify-content: center;
  align-items: center;
  align-content: center;
  padding: 0 7vw;
} */

/* #fancy_wrap .enter {
  position: absolute;
  bottom: 10vh;
  z-index:2;

}

#fancy_wrap .enter::before {
  content: "";
  position: absolute;
  z-index: 2;
  left: 0;
  right: 100%;
  bottom: 0;
  background: #f3f3f3;
  height: 2px;
  -webkit-transition-property: right;
  transition-property: right;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-timing-function: ease-out;
  transition-timing-function: ease-out;
} */

/* #fancy_wrap .logo {
  width: 100px;
  height: 0px;
  object-fit: contain;
  display: none;
} */

/* Enter按钮
暂时可行 */
#fancy_wrap .fancy_btn {
  /* display: none; */
  position: absolute;
  bottom: 10vh;
  letter-spacing: 0.05em;
  text-indent: 0.05em;
  font-size: 1em;

  font-weight: 700;
  padding: 0.4em;
  padding-left: 0em;
  padding-top: 0.1em;
  padding-right: 0em;
  font-family: "Comfortaa", cursive;
  text-shadow: 0 0.5px 0 #000, 0 -0.5px 0 #000, 0.5px 0 0 #000, -0.5px 0 0 #000,
    2px 2px 0 #000;
}

#fancy_wrap .fancy_btn:hover {
  cursor: pointer;
}
/** Enter按钮，可行 */

/* #fancy_wrap .logoText {
  transform: rotate(-6deg) translate3d(0, -.001em, 0);
  font-family: 'Ma Shan Zheng', cursive;
  font-size: 10vw;


}

#fancy_wrap .logoText .chinese {
  letter-spacing: 1em;
  text-indent: 1em;
} */

/** 气泡 */
#mousePao {
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  position: fixed;
  /* visibility: hidden; */
  opacity: 0;
  top: 0;
  left: 0;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  border: 1px solid #f3f3f3;
  background-color: transparent;
  transition: opacity 0.5s ease-out, visibility 0.5s ease-out;
  z-index: -1;
}

/* Small devices (landscape phones, 576px and up) */
@media (max-width: 768px) {
  /* .inner_slide {
    min-width: 100vw;
  } */
}

/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) {
  /* .inner_slide {
    min-width: 66vw;
  } */
}

/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) {
  /* .inner_slide {
    min-width: 66vw;
  } */
}

/* Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {
}
</style>

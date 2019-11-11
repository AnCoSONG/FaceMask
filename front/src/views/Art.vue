<template>
  <div class="art">
    <!-- 这是脸谱艺术页面，包括脸谱介绍，脸谱历史，脸谱分类等内容。点击后进入子页。 -->
    <div class="header">
      <div class="header-inner">
        <div class="logo" @click="goTo('/')">百变脸谱</div>
        <div class="menu hidden-sm-and-down">
          <elasticButton class="menu-item active" msg="脸谱艺术" id="artB"></elasticButton>
          <elasticButton class="menu-item" msg="脸谱名家" id="masterB"></elasticButton>
          <elasticButton class="menu-item" msg="国潮脸谱" id="fashionB"></elasticButton>
          <elasticButton class="menu-item" msg="互动脸谱" id="yoursB"></elasticButton>
          <div
            class="menu-item backbtn"
            style="position:relative"
            @click="goBack()"
            @mouseenter="animateBegin('backbtn','swing')"
            @mouseleave="animateEnd('backbtn','swing')"
          >
            <span
              style="display:inline-block;padding-top: 0.2em;padding-right: 0.05em;padding-bottom: 0.1em;overflow:hidden;"
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
    <div class="scrolldown-tip" style="transform: translateY(100%);">
      <div class="scrolldown-btn" @mouseenter="scrollHover()">
        <elasticButton ref="scrolldown" msg="向下滑动查看更多   Scroll Down to See More"></elasticButton>
      </div>
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
      <div id="particles-js">
        <canvas class="particle-bg particles-js-canvas-el"></canvas>
      </div>
      <div class="intro">
        <div class="intro_inner">
          <h1 class="title-text">脸谱介绍</h1>
          <h3 class="desc-text">
            <strong class="strong-text">脸谱</strong>，是中国传统戏曲演员脸上的绘画，
            用于舞台演出时的化妆造型艺术。不同行
            当的脸谱，情况不一。“生”、“旦”面
            部妆容简单，略施脂粉，叫“俊扮”、
            “素面”、“洁面”。而“净行”与“丑
            行”面部绘画比较复杂，特别是净，都是
            重施油彩的，图案复杂，因此称“花脸”。
            戏曲中的脸谱，主要指净的面部绘画。而
            “丑”，因其扮演戏剧角色，故在鼻梁上
            抹一小块白粉，俗称小花脸。
          </h3>
        </div>
        <div class="operator" @click="wannaSupply('介绍')">
          <elasticButton msg="我有补充？"></elasticButton>
        </div>
      </div>
      <div class="histo">
        <div class="histo_inner">
          <h1 class="title-text">脸谱历史</h1>
          <h3 class="desc-text">
            <p>
              五彩缤纷的戏剧
              <strong class="strong-text">脸谱</strong>不同于面具，
              它是中国独具风格的造型艺术。
            </p>
            <p>
              <strong class="strong-text">脸谱</strong>，起源于原始图腾（约550年），
              后来逐渐演变成艺术化的戏剧脸谱。
            </p>
            <p>
              据《旧唐书·音乐志》和唐段安节撰
              《乐府杂录》记载，公元550年的北齐
              兰陵王高长恭英勇善战，但因貌美少威，
              因而每次作战就戴上狰狞的假面具。到
              了唐代就发展成为一种“代面”的歌舞
              形式，这种戴面具的演出，观众看不到
              演员的表情，妨碍对戏剧艺术的欣赏，
              后来就不戴面具了，发展为将面具上的
              花纹直接画在脸上的化妆艺术。
            </p>
          </h3>
          <div class="operator" @click="wannaSupply('历史')">
            <elasticButton msg="我有补充？"></elasticButton>
          </div>
        </div>
      </div>
      <div class="exhib">
        <div class="exhib_inner">
          <h1 class="title-text">脸谱展示</h1>
          <div class="mask-list">
            <div class="each-mask" @mouseenter="activateMe(1)" @mouseleave="deactivateMe(1)">
              <img src="../assets/art/安禄山：《太真外传》.jpg" alt="安禄山" />
            </div>
            <div class="each-mask" @mouseenter="activateMe(2)" @mouseleave="deactivateMe(2)">
              <img src="../assets/art/程咬金：《贾家楼》.jpg" alt="程咬金" />
            </div>
            <div class="each-mask" @mouseenter="activateMe(3)" @mouseleave="deactivateMe(3)">
              <img src="../assets/art/赤福寿：《取金陵》.jpg" alt="赤福寿" />
            </div>
            <div
              class="each-mask hidden-xs-only"
              @mouseenter="activateMe(4)"
              @mouseleave="deactivateMe(4)"
            >
              <img src="../assets/art/廉颇：《将相和》.jpg" alt="廉颇" />
            </div>
            <div
              class="each-mask hidden-sm-and-down"
              @mouseenter="activateMe(5)"
              @mouseleave="deactivateMe(5)"
            >
              <img src="../assets/art/司马懿：《空城计》.jpg" alt="司马懿" />
            </div>
            <div
              class="each-mask hidden-md-and-down"
              @mouseenter="activateMe(6)"
              @mouseleave="deactivateMe(6)"
            >
              <img src="../assets/art/夏侯惇：《博望坡》.jpg" alt="夏侯惇" />
            </div>
          </div>
          <div class="mask-name">鼠标划动到上方图像查看信息。</div>
          <div class="operator" @click="wannaSupply('展示')">
            <elasticButton msg="我有补充？"></elasticButton>
          </div>
        </div>
        <!-- <div class="interlayer"></div> -->
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
import Particles from "particlesjs";
// import particlesJS from "particles.js/particles"
import elasticButton from "@/components/elasticButton.vue";
import underlineElasticButton from "@/components/underlineElasticButton.vue";
import { TimelineMax } from "gsap";
import { Notification } from 'element-ui'

export default {
  name: "Art",
  components: {
    elasticButton,
    underlineElasticButton
  },
  data() {
    return {
      maskList: [
        { name: "安禄山", work: "《太真外传》" },
        { name: "程咬金", work: "《贾家楼》" },
        { name: "赤福寿", work: "《取金陵》" },
        { name: "廉颇", work: "《将相和》" },
        { name: "司马懿", work: "《空城计》" },
        { name: "夏侯惇", work: "《博望坡》" }
      ],
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
        $("#u-loader").css({
          "clip-path": "circle(0%)",
          "-webkit-clip-path": "circle(0%)"
        });
      }
      console.log("111");
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
            $(".menu-top-wrapper").addClass("active"); // 加上pointer-events:auto;开启事件监听。
            $(".header-inner").css("color", "#fff");
            $(".callOutMenu").text("关闭"); // 之后可以变为按钮动画
            $("body").css("overflow", "hidden");
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
            $(".header-inner").css("color", ""); //恢复
            $(".menu-top-wrapper").removeClass("active");
            $(".callOutMenu").text("菜单"); // 之后可以变为按钮动画
            $("body").css("overflow", "auto");
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
      var particles = Particles.init({
        selector: ".particle-bg",
        color: "#000",
        speed: 0.5,
        maxParticles: 100
      });
      // console.log(ParticlesJS())
      // let p = particlesJS('particles-js', particlesJSON)
      // console.log(p)
      /** 加载完成 */
      //===================
      //===================
      /** 顶部滚动事件绑定 */
      let offsetTop = $(".main-part").offset().top;
      let offsetTop2 = $(".intro").offset().top;
      // console.log(offsetTop);
      $(window).scroll(function(e) {
        // 菜单阻止滚动
        // ==============
        if (self.menuOpened) {
          e.preventDefault();
          return false;
        }
        // DONE
        //===============
        let scrollTop = $(window).scrollTop();

        // console.log(offsetTop, scrollTop);
        if (offsetTop - 100 < scrollTop && scrollTop < offsetTop2 - 80) {
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
      $(".art").mousewheel(function(e) {
        //菜单打开时阻止滚动
        //=================
        if (self.menuOpened) {
          // console.log("Alibe")
          e.preventDefault();
          return false;
        }
        // Done
        //=================
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
      let timelineEffectText = new TimelineMax({
        paused: true,
        align: "start"
      });
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

      // let controllerIntro = new ScrollMagic.Controller({loglevel:3})
      let timelineEffectIntro = new TimelineMax({
        paused: true,
        align: "start"
      });
      timelineEffectIntro
        .fromTo(
          ".intro .intro_inner h1",
          0.75,
          { autoAlpha: 0, y: 128 },
          { autoAlpha: 1, y: 0 }
        )
        .fromTo(
          ".intro .intro_inner h3",
          0.75,
          { autoAlpha: 0, y: 128 },
          { autoAlpha: 1, y: 0 },
          "-=0.25"
        )
        .fromTo(
          ".intro .operator",
          0.75,
          { autoAlpha: 0, y: 64 },
          { autoAlpha: 1, y: 0 }
        );
      new ScrollMagic.Scene({
        triggerElement: ".intro",
        triggerHook: "onEnter",
        offset: 400
      })
        .addTo(controller)
        .setTween(timelineEffectIntro.play());

      // let controllerHisto = new ScrollMagic.Controller({ loglevel: 3});
      let timelineEffectHisto = new TimelineMax({
        paused: true,
        align: "start"
      });
      timelineEffectHisto
        .fromTo(
          ".histo .histo_inner h1",
          0.75,
          { autoAlpha: 0, y: 128 },
          { autoAlpha: 1, y: 0 },
          "-=0.25"
        )
        .fromTo(
          ".histo .histo_inner h3 p:eq(0)",
          0.75,
          { autoAlpha: 0, x: -128 },
          { autoAlpha: 1, x: 0 }
        )
        .fromTo(
          ".histo .histo_inner h3 p:eq(1)",
          0.75,
          { autoAlpha: 0, x: -128 },
          { autoAlpha: 1, x: 0 },
          "-=0.5"
        )
        .fromTo(
          ".histo .histo_inner h3 p:eq(2)",
          0.75,
          { autoAlpha: 0, x: -128 },
          { autoAlpha: 1, x: 0 },
          "-=0.5"
        )
        .fromTo(
          ".histo .operator",
          0.75,
          { autoAlpha: 0, y: 128 },
          { autoAlpha: 1, y: 0 },
          "-=0.25"
        );
      new ScrollMagic.Scene({
        triggerElement: ".histo",
        triggerHook: "onEnter",
        offset: 400
      })
        .addTo(controller)
        .setTween(timelineEffectHisto.play());

      // let controllerExhib = new ScrollMagic.Controller({loglevel: 3})
      let timelineEffectExhib = new TimelineMax({ paused: true });
      timelineEffectHisto
        .fromTo(
          ".exhib .exhib_inner h1",
          0.75,
          { autoAlpha: 0, y: 128 },
          { autoAlpha: 1, y: 0 },
          "-=0.25"
        )
        .fromTo(
          ".exhib .exhib_inner .mask-list .each-mask:odd",
          0.75,
          { autoAlpha: 0, y: 128 },
          { autoAlpha: 1, y: 0 }
        )
        .fromTo(
          ".exhib .exhib_inner .mask-list .each-mask:even",
          0.75,
          { autoAlpha: 0, y: -128 },
          { autoAlpha: 1, y: 0 },
          "-=0.75"
        )
        .fromTo(
          ".exhib .exhib_inner .mask-name",
          0.75,
          { autoAlpha: 0, y: -128 },
          { autoAlpha: 1, y: 0 },
          "-=0.25"
        )
        .fromTo(
          ".exhib .exhib_inner .operator",
          0.75,
          { autoAlpha: 0, y: -128 },
          { autoAlpha: 1, y: 0 },
          "-=0.25"
        );
      new ScrollMagic.Scene({
        triggerElement: ".exhib",
        triggerHook: "onEnter",
        offset: 400
      })
        .addTo(controller)
        .setTween(timelineEffectExhib.play());

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
        self.shiftTo("main-part");
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
    wannaSupply(partname) {
      Notification.warning({
          title: '警告',
          message: "论坛功能正在搭建，届时您可以去" + partname+"版块发帖补充。",
        });
    },
    goBack() {
      this.$router.go(-1);
    },
    scrollHover() {
      // console.log(this.$refs);
      if(this.$refs.scrolldown){

        this.$refs.scrolldown.play();
      }
    },
    animateBegin(className, animateName) {
      $("." + className).addClass("animated " + animateName);
    },
    animateEnd(className, animateName) {
      $("." + className).removeClass("animated " + animateName);
    },
    activateMe(num) {
      let self = this;
      let seq = num - 1;
      let allMask = $(".each-mask");
      for (let i = 0; i < allMask.length; i++) {
        if (i === seq) {
          $(".each-mask:eq(" + i + ")").css({
            transform: "scale(1.3)",
            clipPath: "cirlce(100%)",
            "-webkit-clip-path": "circle(100%)"
          });
          let maskInfo = self.maskList[i];
          $(".mask-name").text(maskInfo.name + " — " + maskInfo.work);
        } else {
          $(".each-mask:eq(" + i + ")").css({
            transform: "scale(0.8)",
            filter: "blur(1px) brightness(0.3)"
          });
        }
      }
    },
    deactivateMe(num) {
      $(".each-mask").css({
        filter: "none",
        transform: "scale(1)"
      });
      let seq = num - 1;
      $(".each-mask:eq(" + seq + ")").css({
        clipPath: "cirlce(40%)",
        "-webkit-clip-path": "circle(40%)"
      });
      $(".mask-name").text("鼠标划动到脸谱上查看信息。");
    }
  },
  beforeRouteLeave(to, from, next) {
    console.log("You are going to route: ", to.name);
    $("#u-loader").css({
      "clip-path": "circle(100%)",
      "-webkit-clip-path": "circle(100%)"
    });
    $("body").css("overflow", "auto"); // 清理
    self.menuOpened = false; // 清理
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
  /* color:#fff; */
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
  transition: transform 500ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s,
    -webkit-transform 500ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  transform: translate3d(0, 5.3vh, 0);
}

.header .header-inner .logo {
  position: relative;
  pointer-events: auto;
  font-weight: 700;
  font-family: "Liu Jian Mao Cao", cursive;

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
  flex-flow: wrap column;
  justify-content: center;
  align-content: center;
  align-items: center;
  color: #fff;
  font-family: "Zhi Mang Xing", cursive;
  cursor: default;
  /* font-family: "Ma Shan Zheng", serif; */

  /* pointer-events: none; */
}

.intro {
  background: url(../assets/art/introduction.jpg) no-repeat center center;
  background-size: cover;
  /* background:chocolate; */
}

.histo {
  background: url(../assets/art/history.jpg) no-repeat center center;
  background-size: cover;
}

.exhib {
  background: url(../assets/art/exhibition.jpg) no-repeat center center;
  background-size: cover;
  background-color: rgba(0, 0, 0, 0.5);
  background-blend-mode: multiply;
}

.title-text {
  font-size: 4rem;
  text-shadow: 0 1px 0 #000, 0 -1px 0 #000, 1px 0 0 #000, -1px 0 0 #000,
    3px 3px 0 #000;
}

.histo .title-text {
  text-shadow: 0 1px 0 #666, 0 -1px 0 #666, 1px 0 0 #666, -1px 0 0 #666,
    3px 3px 0 #666;
}

.desc-text {
  margin-top: 8vh;
  text-align: left;
  height: auto;
  writing-mode: vertical-rl;
  height: 40%;
  line-height: 1.4;
  /* font-size: 2vw; */
  /* font-family: "Noto Serif SC", serif; */
  font-family: "Ma Shan Zheng", serif;
  font-weight: 400;
}

.desc-text .strong-text {
  /* font-size: 2.1rem; */

  text-shadow: 0 0.5px 0 #000, 0 -0.5px 0 #000, 0.5px 0 0 #000, -0.5px 0 0 #000,
    2px 2px 0 #000;
}

.histo .desc-text .strong-text {
  /* font-size: 2.1rem; */

  text-shadow: 0 0.5px 0 #666, 0 -0.5px 0 #666, 0.5px 0 0 #666, -0.5px 0 0 #666,
    2px 2px 0 #666;
}

.desc-text .strong-text:hover {
  color: #aaa;
}

.operator {
  position: relative;
  bottom: -12vh;
  font-family: "Noto Serif SC", serif;
  font-weight: 700;
  letter-spacing: 0.2em;
  font-size: 0.9rem;
}

.exhib .exhib_inner .mask-list {
  display: flex;
  flex-flow: nowrap row;
  justify-content: center;
  align-content: center;
  align-items: center;
  margin-top: 8vh;
  padding-bottom: 8vh;
}

.exhib .exhib_inner .mask-list .each-mask {
  /* z-index: 2; */
  width: 10vw;
  height: 10vw;
  background-color: #666;
  margin: 0 1vw;
  transition: all 500ms cubic-bezier(0.645, 0.045, 0.355, 1);
  clip-path: circle(40%);
  -webkit-clip-path: circle(40%);
  z-index: 3;
  cursor: pointer;
}

.exhib .exhib_inner .mask-name {
  font-family: "Ma Shan Zheng", serif;
  font-size: 1.5em;
  margin-top: 2vh;
}

.exhib .exhib_inner .mask-list .each-mask img {
  width: 100%;
  height: auto;
  object-fit: cover;
}

/* .exhib .interlayer{
  z-index:2;
  background:#222;

  position: absolute;
  top:400vh;
  left:0;
  width:100%;
  height: 100%;
} */

/** Footer */

.footer {
  height: auto;
  width: 100%;
  padding: 100px;
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

.el-backtop {
  color: #121212 !important;
}

/** Scroll Down */
/** start */
.scrolldown-tip {
  position: absolute;
  z-index: 2;
  background-color: #fff;
  height: 70px;
  width: auto;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0 7vw;
}

.scrolldown-tip .scrolldown-btn {
  border-bottom: 1px solid #f3d3d3;
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
}

/** Scroll Down */
/** End */

/* Small devices (landscape phones, 576px and up) */
@media (max-width: 768px) {
  .intro .desc-text {
    font-size: 4vw;
  }

  .histo .desc-text {
    font-size: 3vw;
  }

  .exhib .exhib_inner .mask-list .each-mask {
    width: 20vw;
    height: 20vw;
  }

  .header .header-inner {
    transform: translate3d(0, 6.3vh, 0);
  }
}

/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) and (max-width: 992px) {
  .exhib .exhib_inner .mask-list .each-mask {
    width: 18vw;
    height: 18vw;
  }
  .histo .desc-text {
    font-size: 2.5vw;
  }
  .header .header-inner {
    transform: translate3d(0, 6.3vh, 0);
  }
}

/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) and (max-width: 1200px) {
  /* .inner_slide {
    min-width: 66vw;
  } */
  .exhib .exhib_inner .mask-list .each-mask {
    width: 15vw;
    height: 15vw;
  }

  .histo .desc-text {
    font-size: 2.5vw;
  }
}

/* Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {
  /* .histo .desc-text {
    font-size: 3vw;
  } */
}
</style>
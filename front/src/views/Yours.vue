<template>
  <div class="yours">
    <!-- 这是互动页面 -->
    <div class="header">
      <div class="header-inner">
        <div class="logo" @click="goTo('/')">百变脸谱</div>
        <div class="menu hidden-sm-and-down">
          <elasticButton class="menu-item" msg="脸谱艺术" id="artB"></elasticButton>
          <elasticButton class="menu-item" msg="脸谱名家" id="masterB"></elasticButton>
          <elasticButton class="menu-item" msg="国潮脸谱" id="fashionB"></elasticButton>
          <elasticButton class="menu-item active" msg="互动脸谱" id="yoursB"></elasticButton>
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
                    脸谱名家
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
    <div class="parallax">
      <ul id="scene">
        <li data-depth="0.2">
          <img src="../assets/home/yourspro.jpg" alt class="c-h-img" />
        </li>
        <li data-depth="0.6" class="c-h-text">
          <div>互动脸谱</div>
        </li>
      </ul>
      <!-- Hero做视差效果 -->
      <!-- <div class="c-pic" data-depth="0.2">
      </div>-->
      <!-- <div class="c-text" data-depth="0.6">脸谱艺术</div> -->
    </div>
    <div class="scrolldown-tip" style="transform: translateY(100%);">
      <div class="scrolldown-btn" @mouseenter="scrollHover()">
        <elasticButton ref="scrolldown" msg="寻找你的脸谱  Find Your Mask"></elasticButton>
      </div>
    </div>
    <div class="main-part">
      <div class="interaction-main-wrapper">
        <div class="interaction-inner" v-loading="isLoading">
          <div class="q-desc-wrap" v-show="started==='not'">
            <div class="q-title">回答一些问题找到属于你的脸谱</div>
            <div class="q-updating-mask">
              <swiper ref="maskSwiper" :options="swiperOption" class="mask-swiper">
                <swiper-slide class="each-slide">
                  <div class="img-holder">
                    <img src="../assets/art/安禄山：《太真外传》.png" alt="安禄山" />
                  </div>
                  <div class="name-work">安禄山 《太真外传》</div>
                </swiper-slide>
                <swiper-slide class="each-slide">
                  <div class="img-holder">
                    <img src="../assets/art/程咬金：《贾家楼》.png" alt="程咬金" />
                  </div>
                  <div class="name-work">程咬金 《贾家楼》</div>
                </swiper-slide>
                <swiper-slide class="each-slide">
                  <div class="img-holder">
                    <img src="../assets/art/司马懿：《空城计》.png" alt="司马懿" />
                  </div>
                  <div class="name-work">司马懿 《空城计》</div>
                </swiper-slide>
              </swiper>
            </div>
            <div class="q-start-btn" @click="startQuestion">
              <elasticButton msg="点击开始"></elasticButton>
            </div>
          </div>
          <div class="q-question-wrap" v-show="started==='ing'">
            <div class="question-title">{{current_ques.title}}</div>
            <div class="question-content">
              <el-radio-group v-model="current_ques.choice">
                <el-radio label="A" border>{{current_ques.A}}</el-radio>
                <el-radio label="B" border>{{current_ques.B}}</el-radio>
                <el-radio label="C" border>{{current_ques.C}}</el-radio>
                <el-radio label="D" border>{{current_ques.D}}</el-radio>
              </el-radio-group>
            </div>
            <div class="question-operator">
              <div class="box" @click="nextQuestion()">
                <elasticButton msg="下一题" v-show="current_no<=7"></elasticButton>
              </div>
              <div class="box" @click="viewResult()">
                <elasticButton msg="查看结果" v-show="current_no==8"></elasticButton>
              </div>
            </div>
          </div>
          <div class="q-result-wrap" v-show="started==='finish'">
            <div class="q-result-title">这是我们根据你的性格为你选择的脸谱人物。</div>
            <div class="q-result-wrap-inner">
              <div class="img-holder">
                <img :src="yoursMask.url" alt="你的脸谱" />
              </div>
              <div class="q-result-mask-name">
                <h3>{{yoursMask.color+"脸谱"}}</h3>
                <p>
                  {{yoursMask.feature+"历史上的人物如 "}}
                  <strong class="result-name">{{yoursMask.people}}</strong>&nbsp;跟你相似
                </p>
              </div>
            </div>
            <div class="q-result-operator">
              <el-popover placement="bottom" width="200" trigger="hover">
                <div class="share-panel">
                  <div class="share-third">
                    <div class="share-Weibo" @click="shareToThird('weibo')">
                      <img src="../assets/yours/weibo.svg" alt />
                    </div>
                    <div class="share-QZone" @click="shareToThird('qzone')">
                      <img src="../assets/yours/qzone.svg" alt />
                    </div>
                    <div class="share-QQ" @click="shareToThird('qq')">
                      <img src="../assets/yours/QQ.svg" alt />
                    </div>
                  </div>
                  <div class="share-link"></div>
                </div>
                <el-button slot="reference" type="text" style="color:#121212;font-size:1.2rem;">分享本站</el-button>
              </el-popover>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <h1 class="chinese">百变脸谱</h1>
      <h2 class="english">Fancy Mask</h2>
      <h4
        @click="goTo('About')"
        style=" font-family: 'Noto Serif SC', serif;;cursor:pointer;"
      >About Us</h4>
      <p>All Copyright Reserved.</p>
    </div>
  </div>
</template>

<script>
import Parallax from "parallax-js";
import Particles from "particlesjs";
import elasticButton from "@/components/elasticButton.vue";
import underlineElasticButton from "@/components/underlineElasticButton.vue";
import { TimelineMax } from "gsap";
import { Notification } from "element-ui";

export default {
  name: "Yours",
  components: {
    elasticButton,
    underlineElasticButton
  },
  data() {
    return {
      isLoading: false,
      menuOpened: false,
      started: "not",
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        grabCursor: true,
        autoplay: true,
        cubeEffect: {
          shadow: true
          // slideShadows: true,
          // shadowOffset: 20,
          // shadowScale: 0.94
        }
      },
      questionList: null, //存所有题目
      current_no: 0, //存当前在第几题
      current_ques: {
        // 存当前题目的回答
        id: "0",
        title: "题目",
        choice: "A",
        A: "A选项",
        B: "B选项",
        C: "C选项",
        D: "D选项"
      },
      allResultList: {}, //存储答案的列表
      yoursMask: {
        color: "白色",
        feature: "代表着阴险、奸诈、飞扬、肃煞的性格",
        people: "曹操",
        url: "https://vaskka.com/lp/static/picture/white/0.jpg"
      } //存储服务器识别结果
    };
  },
  computed: {
    swiper() {
      return this.$refs.maskSwiper.swiper;
    }
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
        //菜单打开时阻止滚动
        //=================
        if (self.menuOpened) {
          // console.log("Alibe")
          e.preventDefault();
          return false;
        }
        // Done
        //=================
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
      $(".yours").mousewheel(function(e) {
        //console.log(e);
        //菜单打开时阻止滚动
        //=================
        if (self.menuOpened) {
          // console.log("Alibe")
          e.preventDefault();
          return false;
        }
        // Done
        //=================
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
      /**scrollMagic显示效果绑定 UNDONE */
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
        self.goTo("Fashion");
      });
      $("#yoursB").click(function(e) {
        self.shiftTo("scrolldown-tip");
      });

      /** 菜单按钮绑定 DONE*/
      //======================
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
    },
    async startQuestion() {
      this.isLoading = true;
      let self = this;
      let res = await this.axios
        .get("https://vaskka.com/lp/question")
        .catch(err => {
          console.log(err);
        });
      console.log(res);
      this.isLoading = false;
      if (res.status == 200) {
        this.questionList = res.data;
        this.setNextQuestion();
        self.started = "ing";
      } else {
        console.error("Error ", res);
      }
    },

    nextQuestion() {
      this.isLoading = true;
      let ans_temp = {
        question_id: this.current_ques.id,
        choose: this.current_ques.choice
      };
      this.allResultList[this.current_no - 1] = ans_temp;
      console.log(this.allResultList);
      this.setNextQuestion();
      this.isLoading = false;
    },
    setNextQuestion() {
      this.current_ques.id = this.questionList[this.current_no].question_id;
      this.current_ques.title = this.questionList[this.current_no].title;
      this.current_ques.A = this.questionList[this.current_no].content.A;
      this.current_ques.B = this.questionList[this.current_no].content.B;
      this.current_ques.C = this.questionList[this.current_no].content.C;
      this.current_ques.D = this.questionList[this.current_no].content.D;
      this.current_ques.choice = "A"; //初始为A
      this.current_no += 1;
    },

    async viewResult() {
      this.isLoading = true;
      let ans_temp = {
        question_id: this.current_ques.id,
        choose: this.current_ques.choice
      };
      this.allResultList[this.current_no - 1] = ans_temp;
      console.log("All DATA", this.allResultList);
      let res = await this.axios
        .post("https://vaskka.com/lp/question", this.allResultList)
        .catch(err => {
          console.log(err);
        });

      console.log(res);
      if (res) {
        if (res.status === 200) {
          this.yoursMask = res.data;
          if (res.data.url.indexOf("http") === -1) {
            let resImgUrl = "https://vaskka.com/lp" + res.data.url;
            this.yoursMask.url = resImgUrl;
          }
          this.started = "finish";
          Notification.success({
            title: "成功",
            message: "已找到你的脸谱"
          });
        } else {
          Notification.error({
            title: "失败",
            message: "出现错误:" + res.status
          });
        }
      } else {
        Notification.error({
          title: "失败",
          message: "无法拿到数据"
        });
      }

      this.isLoading = false;
    },

    shareToThird(platname) {
      console.log("Share to ", platname);
      let url = "https://anco.fun";
      let title = `我的性格对应脸谱的是${this.yoursMask.color}脸谱, 你的呢？`;
      let desc = "在？来看下你是什么脸谱";
      let summary = "来这里看看你的性格对应什么脸谱吧";
      let picUrl = this.yoursMask.url;
      let openurl = "";
      switch (platname) {
        case "qq":
          openurl = `http://connect.qq.com/widget/shareqq/index.html?url=${url}&title=${title}&desc=${desc}&pics=${picUrl}&summary=${summary}&site=${url}`;
          window.open(openurl);
          break;
        case "qzone":
          openurl = `http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=${url}&title=${title}&desc=${desc}&summary=${summary}&site=${url}&pics=${picUrl}`;
          window.open(openurl);
          break;
        case "weibo":
          openurl = `https://service.weibo.com/share/share.php?url=${url}&title=${title}&pic=${picUrl}&appkey`;
          window.open(openurl);
          break;

        default:
          alert("ERROR PLATFORM");
          break;
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
  }
};
</script>

<style scoped>
.yours {
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

.main-part {
  width: 100vw;
  height: auto;
  background-color: #121212;
}

.main-part .interaction-main-wrapper {
  margin: 0 7vw;
  background: white;
  color: #121212;
}

.main-part .interaction-main-wrapper .interaction-inner {
  padding: 0 7.1428vw;
  height: 60vh;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  /* background-color: #f3f3f3; */
  box-shadow: 0 0 12px 2px rgba(0, 0, 0, 0.2);
}

.main-part .interaction-main-wrapper .interaction-inner .q-desc-wrap,
.main-part .interaction-main-wrapper .interaction-inner .q-question-wrap,
.main-part .interaction-main-wrapper .interaction-inner .q-result-wrap {
  width: 100%;
  height: 100%;
  padding: 20px;
  display: flex;
  justify-content: space-around;
  flex-flow: nowrap column;
  align-content: center;
  align-items: center;
}

.main-part .interaction-main-wrapper .interaction-inner .q-desc-wrap .q-title {
  font-size: 2.4vw;
  font-family: "Ma Shan Zheng", serif;
}

.main-part
  .interaction-main-wrapper
  .interaction-inner
  .q-desc-wrap
  .q-updating-mask {
  width: auto;
  height: auto;
}

.main-part
  .interaction-main-wrapper
  .interaction-inner
  .q-desc-wrap
  .q-updating-mask
  .each-slide {
  display: flex;
  flex-flow: nowrap column;
  justify-content: center;
  align-items: center;
  align-content: center;
  font-family: "Ma Shan Zheng", serif;
}

.main-part
  .interaction-main-wrapper
  .interaction-inner
  .q-desc-wrap
  .q-updating-mask
  .img-holder {
  width: 12vw;
  height: auto;
}

.main-part
  .interaction-main-wrapper
  .interaction-inner
  .q-desc-wrap
  .q-updating-mask
  .img-holder
  img {
  width: 100%;
  height: 100%;
}

.main-part
  .interaction-main-wrapper
  .interaction-inner
  .q-desc-wrap
  .q-updating-mask
  .name-work {
  margin-top: 15px;
  font-size: 1.4vw;
  font-weight: 700;
  font-family: "Noto Serif SC", serif;
}

.main-part
  .interaction-main-wrapper
  .interaction-inner
  .q-desc-wrap
  .q-updating-mask
  .mask-swiper {
  height: 20vw;
  width: 20vw;
}

.main-part
  .interaction-main-wrapper
  .interaction-inner
  .q-desc-wrap
  .q-start-btn {
  font-family: "Noto Serif SC", serif;
  font-size: 2vw;
  font-weight: 600;
}

.main-part .interaction-main-wrapper .interaction-inner .q-question-wrap {
  padding: 2vh 0;
}

.main-part
  .interaction-main-wrapper
  .interaction-inner
  .q-question-wrap
  .question-title {
  font-size: 2rem;
  font-family: "Noto Serif SC", serif;
  font-weight: 700;
}

.main-part
  .interaction-main-wrapper
  .interaction-inner
  .q-question-wrap
  .question-content
  .el-radio.is-bordered.is-checked {
  /* border-color: #c9171e; */
}

.main-part
  .interaction-main-wrapper
  .interaction-inner
  .q-question-wrap
  .question-content
  .el-radio__input.is-checked
  .el-radio__inner {
  /* border-color:#c9171e; */
  /* background-color: #c9171e; */
}

.main-part
  .interaction-main-wrapper
  .interaction-inner
  .q-question-wrap
  .question-content
  .el-radio__input.is-checked
  + .el-radio__label {
  /* color:#c9171e !important; */
}

.main-part
  .interaction-main-wrapper
  .interaction-inner
  .q-question-wrap
  .question-operator {
  font-size: 1.2rem;
  font-family: "Noto Serif SC", serif;
  font-weight: 700;
}

.main-part
  .interaction-main-wrapper
  .interaction-inner
  .q-result-wrap
  .q-result-title {
  font-size: 1.5rem;
  font-family: "Noto Serif SC", serif;
  font-weight: 700;
}

.main-part
  .interaction-main-wrapper
  .interaction-inner
  .q-result-wrap
  .img-holder {
  width: 9.5rem;
  height: auto;
  clip-path: circle(40%);
  -webkit-clip-path: circle(40%);
  transition: clip-path 500ms cubic-bezier(0.645, 0.045, 0.355, 1),
    -webkit-clip-path 500ms cubic-bezier(0.645, 0.045, 0.355, 1);
}

.main-part
  .interaction-main-wrapper
  .interaction-inner
  .q-result-wrap
  .img-holder:hover {
  clip-path: circle(100%);
  -webkit-clip-path: circle(100%);
}

.main-part
  .interaction-main-wrapper
  .interaction-inner
  .q-result-wrap
  .q-result-wrap-inner
  .img-holder
  img {
  width: 100%;
  height: auto;
}
.main-part
  .interaction-main-wrapper
  .interaction-inner
  .q-result-wrap
  .q-result-wrap-inner
  .q-result-mask-name {
  font-size: 1.1rem;
  font-family: "Noto Serif SC", serif;
  font-weight: 700;
  width: 30vw;
  padding-left: 3vw;
  cursor: default;
}

.main-part
  .interaction-main-wrapper
  .interaction-inner
  .q-result-wrap
  .q-result-wrap-inner
  .q-result-mask-name
  h3 {
  cursor: default;
  display: inline-block;
  font-family: "Ma Shan Zheng", serif;
  margin-bottom: 3vh;
  padding: 1vh 0.2vw;
  border-top: 1px solid #121212;
  border-bottom: 1px solid #121212;
  text-shadow: 0 0.2px 0 #aaa, 0 -0.2px 0 #aaa, 0.2px 0 0 #aaa, -0.2px 0 0 #aaa,
    1px 1px 0 #aaa;
}

.main-part
  .interaction-main-wrapper
  .interaction-inner
  .q-result-wrap
  .q-result-wrap-inner
  .q-result-mask-name
  h3:hover {
  color: #444;
}

.main-part
  .interaction-main-wrapper
  .interaction-inner
  .q-result-wrap
  .q-result-wrap-inner {
  display: flex;
  flex-flow: nowrap row;
  justify-content: center;
  align-content: center;
  align-items: center;
}
.main-part
  .interaction-main-wrapper
  .interaction-inner
  .q-result-wrap
  .q-result-operator {
  font-family: "Ma Shan Zheng", serif;
  font-size: 1.2rem;
}

.share-panel {
  display: flex;
  flex-flow: wrap column;
  justify-content: center;
  align-items: center;
  align-content: center;
}

.share-panel .share-third {
  width: 100%;
  height: 40px;
  display: flex;
  flex-flow: wrap row;
  justify-content: center;
  align-content: center;
  align-items: center;
}

.share-panel .share-third > * {
  margin: 10px;
  cursor: pointer;
}

.share-panel .share-third img {
  width: 30px;
  height: 30px;
}

.result-name:hover {
  color: #444;
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
  margin: 0 auto;
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
  font-family: "Noto Serif SC", serif;
  font-weight: 700;
  border-bottom: 1px solid #f3d3d3;
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

@media (max-width: 768px) {
  .main-part
    .interaction-main-wrapper
    .interaction-inner
    .q-desc-wrap
    .q-title {
    font-size: 2rem;
  }

  .main-part
  .interaction-main-wrapper
  .interaction-inner
  .q-desc-wrap
  .q-updating-mask
  .mask-swiper {
    width: 30vw;
    height: 30vw;
  }

  .main-part .interaction-main-wrapper .interaction-inner .q-desc-wrap .q-updating-mask .img-holder{
    width: 20vw;
    height: auto;
  }

  .main-part .interaction-main-wrapper .interaction-inner .q-desc-wrap .q-updating-mask .name-work{
    /* margin-left: 30px; */
    font-size: 1.1rem;
  }

  .main-part .interaction-main-wrapper .interaction-inner .q-desc-wrap .q-start-btn {
    font-size: 1.5rem;
  }
}
</style>
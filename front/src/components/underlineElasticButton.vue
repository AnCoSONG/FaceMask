<template>
  <div class="ml">
    <span class="link">
      <span class="text-wrapper" @mouseenter="play">
        <span class="letters" ref="letters">{{msg}}</span>
      </span>
    </span>
  </div>
</template>

<script>
import anime from "animejs";
var animeButton = null;
export default {
  name: "underlineElasticButton",
  props: {
    msg: String
  },
  methods: {
    init: function() {
      // Wrap every letter in a span
      var textWrapper = this.$refs.letters;
      textWrapper.innerHTML = textWrapper.textContent.replace(
        /([^\x00-\x80]|\w)/g,
        "<span class='letter' style='display: inline-block'>$&</span>"
      );

      var animeButton = anime
        .timeline({ loop: false })
        .add({
            targets: this.$refs.letters.children,
            translateY: ["0%", "-50%"],
            elasticity: 650,
            delay: function(el, index) {
                return 5 + index * 5;
            },
            duration: 300,
            easing: "easeInExpo"
        })
        .add({
            targets: this.$refs.letters.children,
            opacity: 0,
            easing: "easeInExpo",
            duration: 400,
        }, '-=400')
        .add({
          targets: this.$refs.letters.children,
          translateY: ["-40%", "100%"],
          duration: 10
        })
        .add({
          targets: this.$refs.letters.children,
          duration: 600,
          opacity: 1,
          delay: function(el, index) {
            return 20 + index * 15;
          },
          easing: "easeOutElastic",
          elasticity: 650,
          translateY: ["100%", "0%"]
        });
      return animeButton;
    },
    play: function() {
      this.animeButton.restart();
    }
  },
  mounted() {
    this.animeButton = this.init();
    this.animeButton.pause();
  }
};
</script>

<style scoped>
.ml {
  position: relative;
}
.ml .text-wrapper {
  position: relative;
  display: inline-block;
  padding-top: 0.2em;
  padding-right: 0.05em;
  padding-bottom: 0.05em;
  overflow: hidden;
}
.ml .letters {
  display: inline-block;
}

.link {
    position: relative;
    text-decoration: none;
    display: inline-block;
    /* color: white; */
    padding: 0 1px;
    -webkit-transition: color ease 1.6s;
    transition: color ease 1.6s;
}
.link::before,
.link::after {
    content: '';
    position: absolute;
    background-color: #fff;
    z-index: -1;
    height: 3%;
}
.link::before {
    width: 0%;
    left: 0;
    bottom: 0;
    -webkit-transition: width ease 1.49s;
    transition: width ease 1.49s;
}
.link::after {
    width: 100%;
    left: 0;
    bottom: 0;
    -webkit-transition: all ease 1.5s;
    transition: all ease 1.5s;
}
.link:hover::before {
    width: 100%;
}
.link:hover::after {
    left: 100%;
    width: 0%;
    -webkit-transition: all ease 1.3s;
    transition: all ease 1.3s;
}
</style>
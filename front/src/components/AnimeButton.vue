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
  name: "AnimeButton",
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
          opacity: 0,
          duration: 100
        })
        .add({
          targets: this.$refs.letters.children,
          translateY: ["0%", "50%"],
          duration: 100
        })
        .add({
          targets: this.$refs.letters.children,
          duration: 600,
          opacity: 1,
          delay: function(el, index) {
            return 20 + index * 15;
          },
          easing: "easeOutElastic",
          elasticity: 1000,
          translateY: ["50%", "0%"]
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
  font-weight: 700;
  font-size: 1.2em;
  position: relative;
}
.ml .text-wrapper {
  position: relative;
  display: inline-block;
  padding-top: 0.2em;
  padding-right: 0.05em;
  padding-bottom: 0.1em;
  overflow: hidden;
}
.ml .letters {
  display: inline-block;
}

.link {
  position: relative;
  text-decoration: none;
  display: inline-block;
  color: white;
  padding: 0 1px;
  -webkit-transition: color ease 0.8s;
  transition: color ease 0.8s;
}
.link::before 
{
  content: "";
  position: absolute;
  z-index: -1;
  left: 0;
  right: 100%;
  bottom: 0;
  background: #f3f3f3;
  height: 2px;
  -webkit-transition-property: right;
  transition-property: right;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  transition-delay: 200ms;
  -webkit-transition-timing-function: ease-out;
  transition-timing-function: ease-out;
}

.link:hover::before {
  right: 0;
}
</style>
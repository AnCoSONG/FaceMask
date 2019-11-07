<template>
  <div class="ml">
      <span class="text-wrapper" @mouseenter="play">
        <span class="letters" ref="letters">{{msg}}</span>
      </span>
  </div>
</template>

<script>
import anime from "animejs";
var animeButton = null;
export default {
  name: "elasticButton",
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
  /* font-weight: 700; */
  /* font-size: 1.2em; */
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

.text-wrapper {
  cursor: pointer;
}

</style>
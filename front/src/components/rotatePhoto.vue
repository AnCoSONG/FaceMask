<template>
    <div class="person">
        <div class="card-container">
            <div class="card" ref="card" @mouseenter="enter" @mouseleave="out">
                <div class="front">
                    <div class="person-svg" v-html="master.svgcode" :style="master.svgstyle"></div>
                    <span class="ms" style="opacity: 1; filter:alpha(opacity=100); -moz-opacity:1.0;" ref="inoverlay"></span>
                    <img :src="master.img" alt="" style="width:40vw; height:28vw;">
                </div>
            <div class="back">
                <img :src="master.img" alt="" style="width:40vw; height:28vw;">
                <span class="ms"></span>
                <div class="text">
                    <span style="font-weight:bold;">{{master.name}}</span>{{master.text}}
                </div>
            </div>
        </div>
        <div class="p-text" >{{master.name}}</div>
        <div class="p-text" style="font-size:4vw;">{{master.title}}</div>
    </div>
</div>
</template>

<script>
import anime from 'animejs'
var inAnime = null;
var outAnime = null;
export default {
    name:'rotatePhoto',
    props:{
        master:{
            type: Object,
            required: true
        }
    },
    methods: {
        initAnime: function(){
            var card = this.$refs.card;
            var playing = false;

            card.addEventListener('click',function() {
            if(playing)
                return;
            
            playing = true;
            anime({
                targets: card,
                scale: [{value: 1}, {value: 1.05}, {value: 1, delay: 250}],
                 rotateY: {value: '+=180', delay: 200},
                easing: 'easeInOutSine',
                duration: 400,
                complete: function(anime){
                playing = false;
                }
            });
            });

            this.inAnime = anime;
            this.outAnime = anime;
        },
        inPlay: function(inAnime){
            console.log("in playing");
            inAnime.timeline({loop: false})
            .add({
                targets: this.$refs.inoverlay,
                opacity: [1,0],
                easing: "easeInExpo",
                duration: 800,
            })
            .add({
                targets: '.cls-1',
                direction: "alternate",
                strokeDashoffset: [0, anime.setDashoffset],
                easing: "easeInOutSine",
                duration: 1000,
                delay: (el, i) => {
                return i * 10;
                },
                complete:()=>{
                    console.log('in complete')
                }
            },"-=700");
        },
        outPlay:function(outAnime){
            console.log("out playing");
            outAnime.timeline({loop: false})
            .add({
                targets: '.cls-1',
                direction: "alternate",
                strokeDashoffset: [anime.setDashoffset, 0],
                easing: "easeInOutSine",
                duration: 1000,
                delay: (el, i) => {
                return i * 10;
                }
            })
            .add({
                targets: this.$refs.inoverlay,
                opacity: [0,1],
                easing: "easeInExpo",
                duration: 800,
            },"-=1000");
        },
        enter: function(){
            // if(this.outAnime != null) this.outAnime.pause();
            this.inPlay(this.inAnime);

        },
        out: function(){
            // if(this.inAnime != null) this.inAnime.pause();
            this.outPlay(this.outAnime);
        }
    },
    mounted(){
        this.initAnime();
    }
}
</script>

<style scoped>
.person-svg{
    position: absolute;
    /* top: 2.1vw;
    left: 0.9vw;
    width: 39vw;
    height: 26vw; */
    /* width: 24vw;
    height: 7vw; */
    z-index: 100;
}

.p-text {
  width:70%;
  font-size: 7vw;
  font-family: "Zhi Mang Xing", cursive;
  font-weight: 500;
  position: relative;
  top: -22vw;
  left: 32vw;
  z-index: 100;
  text-shadow: 0 1px 0 #fff, 0 -1px 0 #fff, 1px 0 0 #fff, -1px 0 0 #fff,
    3px 3px 0 #fff;
}

.text{
    height: 52%;
    position: absolute;
    text-align:justify;
    line-height: 2em;
    font-weight: 500;
    font-family: '仿宋';
    writing-mode: vertical-rl;
    writing-mode: tb-rl;
    color: black;
}
.ms{
    position: absolute; 
    width: 40vw; 
    height: 28vw;  
    background: white;
    opacity: 0.9;
    filter:alpha(opacity=90);
    -moz-opacity:0.9;
    border-style:solid;
    border-color:black;
}

.card-container
{
    /* font-family: 'Open Sans', sans serif; */
    font-size: 1.3vw;
    font-weight: bold;
    width: 40vw;
    position: relative;
    top: 8vw;
    right: 8vw;
    /* height: 250px; */
    /* margin: 50px auto;  */
    /* border-radius: 10px; */
    perspective: 1400px;
}

.card
{
    position: relative;
    height: 100%;
    /* border-radius: 10px; */
    width: 100%;
    transform-style: preserve-3d;
}

.front,.back
{
    display: flex;
    width: 100%;
    height: 100%;
    /* border-radius: 10px; */
    justify-content: center;
    align-items: center;
    backface-visibility: hidden;
}

.back
{
    position: absolute;
    top: 0;
    left: 0;
    transform: rotateY(180deg);
}

</style>
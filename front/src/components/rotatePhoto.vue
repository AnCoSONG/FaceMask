<template>
    <div class="person">
        <div class="card-container">
            <div class="card" ref="card">
                <div class="front" @mouseenter="enter()" @mouseleave="out()">
                    <div class="person-svg" v-html="master.svgcode" :style="master.svgstyle"></div>
                    <span class="ms" style="opacity: 1; filter:alpha(opacity=100); -moz-opacity:1.0;" ref="inoverlay"></span>
                    <img :src="master.img" class="image" alt="">
                </div>
                <div class="back">
                    <img :src="master.img" class="image" alt="">
                    <span class="ms" style="z-index: 5;"></span>
                    <div class="text" style="z-index: 10;">
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
// var inAnime = null;
// var outAnime = null;
export default {
    name:'rotatePhoto',
    props:{
        master:{
            type: Object,
            required: true
        }
    },
    data() {
        return {
            inAnime: null,
            outAnime: null,
            clickNum: 0
        }
    },
    methods: {
        initAnime: function(inAnime, outAnime){
            var card = this.$refs.card;
            var playing = false;
            let that = this;
            card.addEventListener('click',function() {
            if(playing)
                return;
            
            playing = true;
            that.clickNum++;
            if(that.clickNum % 2 != 0){
                console.log("pause" + that.clickNum);
                inAnime.pause();
                outAnime.pause();
            }
            else{
                inAnime.restart();
            }
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
        },
        enter: function(){
            let that = this;
            // console.log(that);
            console.log(that.clickNum+ "enter");
            this.outAnime.pause()
            if(that.clickNum % 2 == 0) this.inAnime.restart();

        },
        out: function(){
            let that = this;
            this.inAnime.pause()
            if(that.clickNum % 2 == 0) this.outAnime.restart();
        }
    },
    mounted(){
        var oAnime = anime.timeline({loop: false, autoplay: false})
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
        this.outAnime = oAnime;

        var iAnime = anime.timeline({loop: false, autoplay: false})
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
        },"-=400");
        this.inAnime = iAnime;

        this.initAnime(this.inAnime, this.outAnime);
    }
}
</script>

<style scoped>

.person-svg{
    position: absolute;
    z-index: 1;
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
  pointer-events: none;
  text-shadow: 0 1px 0 #fff, 0 -1px 0 #fff, 1px 0 0 #fff, -1px 0 0 #fff,
    3px 3px 0 #fff;

}

.text{
    height: 52%;
    position: absolute;
    text-align:justify;
    line-height: 2;
    font-weight: 500;
    font-family: "Ma Shan Zheng", serif;
    writing-mode: vertical-rl;
    writing-mode: tb-rl;
    color: black;
}
@media screen and (max-width:992px) and (min-width:785px){
    .text{
        font-size:1.4rem;
        height: 70%;
    }
    .p-text{
        font-size: 5rem;
        top: -17rem;
        left: 23rem;
    }
}
@media screen and (max-width:785px){
    .text{
        font-size:1.1rem;
        height: 70%;
    }
    .p-text{
        font-size: 3.5rem;
        top: 2rem;
        left: 3.7rem;
    }
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
@media screen and (max-width:992px) and (min-width:785px){
    .ms{
        width: 32rem;
        height: 23rem;
    }
}
@media screen and (max-width:785px){
    .ms{
        width: 25rem;
        height: 18rem;
    }
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
@media screen and (max-width:992px) and (min-width:785px){
    .card-container{
        width: 32rem;
        height: 23rem;
    }
}
@media screen and (max-width:785px){
    .card-container{
        width: 25rem;
        height: 18rem;
        left: 0rem;
    }
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
    z-index: 4;
}

.image
{
    width: 40vw;
    height: 28vw;
}
@media screen and (max-width:992px) and (min-width:785px){
    .image{
        width: 32rem;
        height: 23rem;
    }
}
@media screen and (max-width:785px){
    .image{
        width: 25rem;
        height: 18rem;
    }
}

</style>
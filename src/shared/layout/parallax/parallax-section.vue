<template>
    <section class="mm-parallax mm-parallax-section" >
    
        <div class="mm-parallax-bg">
            <div class="mm-parallax-bg-animated" v-bind:style="{ top: `-${rScroll}px` }">
                <slot name="background"></slot>
            </div>
        </div>
         <div class="mm-parallax-content">
            <slot name="content">

            </slot>
        </div>
    </section>
</template>

<style  lang="less">
@import '../../../styles/vendor/flexbox.less';
@import '../../../styles/vendor/hamburger.less';
@import '../../../styles/animations/scroll-reveal.less';

section.mm-parallax-section{
    display: block;
    width: 100vw;
    height: 100vh;
    padding-top: 60px;
    box-sizing: border-box;
    cursor: default;

    position: relative;
}
div.mm-parallax-bg{
    display: block;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    object-fit: cover;
    object-position: top;

    position: absolute;
    top: 0px;
    left: 0px;

    .mm-parallax-bg-animated{
        display: block;
        width: 100%;
        height: 120%;
        object-fit: cover; 
        position: relative;
         top: 0px;
        left: 0px;

-webkit-transition: all 500ms linear;
-moz-transition: all 500ms linear;
-ms-transition: all 500ms linear;
-o-transition: all 500ms linear;
transition: all 500ms linear;
    }
    .parallax-media{
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover; 
    }
}
div.mm-parallax-content{

    position: absolute;
    width: 100%;
    height: 100%;
    top: 0px;
    left: 0px;

    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-flex-wrap: nowrap;
    -ms-flex-wrap: nowrap;
    flex-wrap: nowrap;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-align-content: center;
    -ms-flex-line-pack: center;
    align-content: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
}

@media only screen and (min-width: 1200px) {
    
}
</style>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component({})
export default class ParallaxSection extends Vue {

    get gScroll(): number {
        return this.$store.getters['UIParallaxModule/getPosition'];
    }

    get rScroll(): number {
        const initPosY = '0px';
        const finalPosY = '100px';
        return 1.25 * this.gScroll;
    }

    mounted(){

    }

}
</script>
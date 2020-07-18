<template>
    <section class="mm-parallax mm-parallax-image" >
        
         <div class="wrapper">

                <img 
                v-bind:style="{ top: `-${rScroll}px` }"
                v-bind:src="src">
        </div>
      
    </section>
</template>

<style  lang="less">
@import '../../../styles/vendor/flexbox.less';
@import '../../../styles/vendor/hamburger.less';
@import '../../../styles/animations/scroll-reveal.less';

@color-dark-blue: #345063;
@color-main-blue: #578ABE;
@color-light-blue: #60A8E2;
@font-title-size: 40px;
@font-text-size: 18px;
.mm-parallax-image{
    div.wrapper{
        width: 100%; 
        height: 100vh;
        overflow: hidden;
        img{
            width: 100%; 
            height: 150%; 
            display: block;
            object-fit: cover;
            position: relative;

            -webkit-transition: all 500ms linear;
-moz-transition: all 500ms linear;
-ms-transition: all 500ms linear;
-o-transition: all 500ms linear;
transition: all 500ms linear;
        }
    }
}
@media only screen and (min-width: 1200px) {
    
}
</style>


<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
@Component({})
export default class ParallaxList extends Vue {

@Prop({default: 'src'}) public src: string|undefined;

    get gScroll(): number {
        return this.$store.getters['UIParallaxModule/getPosition'];
    }

    get rScroll(): number {
        const initPosY = '0px';
        const finalPosY = '100px';
        return  Math.min(2*(1.25 * this.gScroll / 122)*100, 500);
        //return 10;
    }

}
</script>
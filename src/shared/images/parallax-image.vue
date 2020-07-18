<template>
  <section class="mm-parallax mm-parallax-image">
    <div class="wrapper">
      <img v-bind:style="{ top: `${-rScroll}px` }" v-bind:src="src" />
    </div>
  </section>
</template>



<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
@Component({})
export default class ParallaxList extends Vue {

  @Prop({ default: "src" }) public src: string | undefined;
  @Prop({ default: "scrollY0" }) public scrollY0: number | undefined;

  private gImagePosY0: number = 0;
  private gImagePosYF: number = 0;

  private mounted(): void {
    
    const imageElement: any = document.getElementsByClassName('mm-parallax-image')[0];
    const pageElement: any = document.getElementsByClassName('page')[0];

    const imagePosY0 = imageElement.offsetTop;
    const imagePosYF = imageElement.offsetTop + imageElement.offsetHeight;
    const pagePosYFinal = pageElement.clientHeight;

    const gImagePosY0 = 100 * imagePosY0 / window.innerHeight;
    const gImagePosYF = 100 * imagePosYF / window.innerHeight;

    const maxTopDiff = (100 * imageElement.offsetHeight / window.innerHeight);

    this.gImagePosY0 = gImagePosY0;
    this.gImagePosYF = gImagePosYF;

  }

  get gScroll(): number {
    return this.$store.getters["UIParallaxModule/getPosition"];
  }

  get rScroll(): number {

    /*
    
    if(this.gScroll < (this.scrollY0 || 0)) {
        return + 100;
    } else  if(this.gScroll >= (this.scrollY0 || 0)  && this.gScroll < this.gImagePosY0){
        return - 0.01*( this.gScroll - (this.scrollY0 || 0) )
    } else {
        return - this.gScroll
    }

    */

     return Math.max(0.5*this.gScroll - (this.scrollY0 || 0), 0);
     //return 0;

  }
}
</script>

<style  lang="less">
@import "../../styles/themes/colors";
@import "../../styles/themes/fonts";

@import "../../styles/vendor/flexbox.less";
@import "../../styles/vendor/hamburger.less";
@import "../../styles/animations/scroll-reveal.less";

.mm-parallax-image {
  div.wrapper {
    width: 100%;
    height: 120vh;
    overflow: hidden;
    img {
      width: 100%;
      height: calc(100vh + 500px);
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

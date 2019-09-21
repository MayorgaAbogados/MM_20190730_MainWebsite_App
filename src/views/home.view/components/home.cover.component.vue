<template>
    <div class="cover">

        <div class="cover-background">
            <div class="layer-content" v-bind:style="{ top: `-${0.5*this.scrollPosition}vh` }">
                <bg-video 
                    :path="COVER_BG.path" 
                    :alt="COVER_BG.alt" 
                    :file="COVER_BG.file"
                    :formats="COVER_BG.formats"
                    :resolutions="COVER_BG.resolutions">
                </bg-video>
            </div>
            <div class="layer-color">
            </div>
        </div>

        <div class="cover-front">
            <div class="wrapper">
            <h1>
                 ABOGADOS JURÍDICOS ESPECIALIZADOS
            </h1>
            <p>
                 Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. 
                 Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
            </p>
            <button>
                 Cotice nuestros servicios
            </button>
            </div>
        </div>

    </div>
</template>

<script lang="ts">
import { Component, Prop, Watch, Vue } from 'vue-property-decorator';
import BasicLazyVideoComponent from './../../../shared/components/videos/basic.lazy.video.component.vue';



@Component({
    components: {
        'bg-video' : BasicLazyVideoComponent
    }
})
export default class LogoComponent extends Vue {

   @Prop({default: 'scrollPosition'}) public scrollPosition: number|undefined;
    


    private COVER_BG: any = {
        file: 'home-cover-bg',
        alt: 'Mayorga Abogados Background Cover'
    }
}
</script>

<style scoped lang="less">
//@import './../../../../src/shared/styles/main.less';
@color-main-blue: #60A8E2;
div.cover{
    display: block;
    position: relative;
    overflow: hidden;

    width: 100vw;
    height: 100vh;

     .cover-background{
        display: block;
        width: 100vw;
        height: 100vh;
        position: absolute;
        top: 0vh;
        left: 0px;

 
        .layer-content{
            display: block;
             width: 100vw;
            height: 150vh;
            position: absolute;
            top: 0px;
            left: 0px;

            -webkit-transition: all 100ms ease-out;
            -moz-transition: all 100ms ease-out;
            -ms-transition: all 100ms ease-out;
            -o-transition: all 100ms ease-out;
            transition: all 100ms ease-out;

        }
        .layer-color{
            display: block;
            width: 100vw;
            height: 100vh;
            position: absolute;
            top: 0px;
            left: 0px;
            //background-color: #345063;
            //opacity: 0.5;
        }
    }
     .cover-front{
         display: block;
        width: 100vw;
        height: 100vh;
      position: absolute;
        top: 0px;
        left: 0px;
    }

    div.wrapper{

          display: block;
          width: 100vw;
          height: 100vh;
          
          display: -ms-flexbox;
          display: -webkit-flex;
          display: flex;
          -webkit-flex-direction: column;
          -ms-flex-direction: column;
          flex-direction: column;
          -webkit-flex-wrap: wrap;
          -ms-flex-wrap: wrap;
          flex-wrap: wrap;
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


    h1{
          color: white;
          font-size: 35pt;
          font-family: 'Roboto', sans-serif;
          font-weight: 300;
          margin: 0 auto;
          letter-spacing: 1px;
          padding: 0.5em 0em;
    }
    p{
          color: white;
          width: 35%;
          min-width: 800px;
          margin: 0 auto;
          font-size: 12pt;
          font-family: 'Roboto', sans-serif;
          font-weight: 500;
          letter-spacing: 1px;
          line-height: 1.2em;
    }
    button{
          display: block;
          width: fit-content;
          padding: 1em;
          margin: 3em auto;
           font-size: 12pt;
          background-color: @color-main-blue;
          outline:none;
          border:none;
          color: white;
          font-family: 'Roboto', sans-serif;
          font-weight: 400;
          letter-spacing: 1px;
    }

}
</style>
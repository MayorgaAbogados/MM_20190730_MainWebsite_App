<template>
    <div class="about">
        
        <div class="col left" >
            <bg-picture :size="'cover'" :file="ABOUT_BG.file" :alt="ABOUT_BG.alt"></bg-picture>
        </div>

        <div class="col right">
            <div class="wrapper">

                <div class="title-line"></div>
                
                <h1 class="title-text"  v-scroll-show="scrollPosition > 30">
                    Director Jurídico
                </h1>
                <h2 class="subtitle-text" v-scroll-show="scrollPosition > 40">
                    MIGUEL A. MAYORGA
                </h2>

                <ul>
                    <li v-scroll-show="scrollPosition > 50">
                        <img class="li-bullet" src="@/shared/assets/images/blue-square-bullet.jpg">
                        <div class="li-wrapper">
                            Abogado egresado de la Universidad Nacional de Colombia (GRADUADO CON HONORES)
                        </div>
                    </li>
                    <li v-scroll-show="scrollPosition > 60"> 
                        <img class="li-bullet" src="@/shared/assets/images/blue-square-bullet.jpg">
                        <div class="li-wrapper">
                            Especializado en Tributación y Comercio Exterior en la Universidad de los Andes (GRADUADO CON HONORES)
                        </div>
                    </li>
                    <li v-scroll-show="scrollPosition > 70">
                        <img class="li-bullet" src="@/shared/assets/images/blue-square-bullet.jpg">
                        <div class="li-wrapper">
                            Diplomado Internacional SEMINAIRE DE FORMATIOM D’ENQUETEURS Direction Nationale du
                            Recrutement et de la Formation Professionnelle
                            des Douanes Francaises.
                        </div>
                    </li>
                    <li v-scroll-show="scrollPosition > 80">
                        <img class="li-bullet" src="@/shared/assets/images/blue-square-bullet.jpg">
                        <div class="li-wrapper">
                            Programa de Extensión DERECHO Y RELACIONES INTERNACIONALES de la Universidad Nacional de Colombia
                        </div>
                    </li>
                </ul>
                <button v-scroll-show="scrollPosition > 120">Contactar</button>
            </div>
        </div>

    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import BasicLazyImageComponent from './../../../shared/components/pictures/basic.lazy.image.component.vue';
import BasicLazyVideoComponent from './../../../shared/components/videos/basic.lazy.video.component.vue';
import ScrollReveal from 'scrollreveal';


@Component({
    components: {
        'bg-picture' : BasicLazyImageComponent,
        'bg-video' : BasicLazyVideoComponent,
    }
})
export default class IndexProgressBarComponent extends Vue {

    @Prop({default: 'scrollPosition'}) public scrollPosition: number|undefined;



     private ABOUT_BG: any = {
        file: 'people-director-bg',
        alt: 'Mayorga Abogados Nosotros'
    }



    

}
</script>

<style scoped lang="less">
@import './../../../../src/shared/styles/main.less';

div.about{

    display: block;
      background-color: white;
    width: 100%;
    height:100vh;

    div.col{
        display: block;
        width: 50vw;
        height:100vh;
      
    }

    div.wrapper{
        display: block;
        width: 100%;
        box-sizing: border-box;
        padding: 3em;

        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        -webkit-flex-direction: column;
        -ms-flex-direction: column;
        flex-direction: column;
        -webkit-flex-wrap: nowrap;
        -ms-flex-wrap: nowrap;
        flex-wrap: nowrap;
        -webkit-justify-content: flex-start;
        -ms-flex-pack: start;
        justify-content: flex-start;
        -webkit-align-content: stretch;
        -ms-flex-line-pack: stretch;
        align-content: stretch;
        -webkit-align-items: flex-start;
        -ms-flex-align: start;
        align-items: flex-start;
    }

    div.title-line{
        display: block;
        width: 1.25em;
        height: 2px;
        font-size: @font-title-size;
        background-color:@color-main-blue;
    }

    h1.title-text{

        display: block;
        width: fit-content;
        padding: 0.5em 0em;
        padding-bottom: 0px;
        
        color: @color-dark-blue;
        font-family: 'Roboto', sans-serif;
        font-size: @font-title-size;
        font-weight: 700;
        letter-spacing: 1px;

        #scroll-show-fade();    

    }

    h2.subtitle-text{
        display: block;
        width: fit-content;
        padding: 0.5em 0em;
        
        color: @color-light-blue;
        font-family: 'Roboto', sans-serif;
        font-size: @font-title-small-size;
        font-weight: 700;
        letter-spacing: 1px;

        #scroll-show-fade()
    }

    p{
        display: block;
        width: 28.5em;

        padding: 0.5em 0em;

        text-align: left;
        line-height: 1.25em;
        letter-spacing: 1px;
        
        color: @color-dark-blue;
        font-family: 'Roboto', sans-serif;
        font-size: @font-text-size;
        font-weight: 300;
        
    }

    ul{

        display: block;
        width: fit-content;
        padding: 0.5em 0em;

        text-align: left;
        width: 28.5em;
        line-height: 1.25em;
        
        color: @color-dark-blue;
        font-family: 'Roboto', sans-serif;
        font-size: @font-text-size;
        font-weight: 300;
        letter-spacing: 1px;
    }

    li{
        width: 22em;
        padding: 0.25em 0em;
        display: block;
        img.li-bullet{
           display: inline-block;
           vertical-align: middle;
           width: 0.75em; 
        }
        div.li-wrapper{
            display: inline-block;
            vertical-align: middle;
            width: ~"calc(100% - 2em)";
            padding-left: 0.5em;
            margin-left: 1em;
            padding: 0.25em 0em;
            border-bottom: 2px solid @color-light-blue;
        }
    }

    button{
        display: block;
        color: #fff;
        border:none;
        outline: none;
        padding: 0.75em 1.25em;
        margin: 2em 0em;
        font-size: 18px;
        letter-spacing: 1px;
 
        background-color: @color-dark-blue;
    }


    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-align-content: center;
    -ms-flex-line-pack: center;
    align-content: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;

}
</style>
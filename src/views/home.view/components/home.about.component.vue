<template>
    <div class="about">
        <div class="col left">
            <div class="wrapper">

                <div class="title-line"></div>
                
                <h1 class="title-text"  v-scroll-show="scrollPosition > 30">¿QUIÉNES <br> SOMOS?</h1>
                
                <p v-scroll-show="scrollPosition > 40">
                    <strong>MAYORGA ABOGADOS</strong>, es un Estudio Jurídico y Económico, creado en 2005, integrado actualmente por profesionales especializados (abogados, economistas y contadores), egresados de las mejores universidades de Colombia y el Exterior; con éxitos totalmente verificables, en  asesoría y asistencia legal corporativa, en las siguientes AREAS DE PRÁCTICA:
                </p>
                <ul>
                    <li v-scroll-show="scrollPosition > 50">
                        <img class="li-bullet" src="@/shared/assets/images/blue-square-bullet.jpg">
                        <div class="li-wrapper">
                            Derecho Aduanero
                        </div>
                    </li>
                    <li v-scroll-show="scrollPosition > 60"> 
                        <img class="li-bullet" src="@/shared/assets/images/blue-square-bullet.jpg">
                        <div class="li-wrapper">
                            Derecho Penal y Económico
                        </div>
                    </li>
                    <li v-scroll-show="scrollPosition > 70">
                        <img class="li-bullet" src="@/shared/assets/images/blue-square-bullet.jpg">
                        <div class="li-wrapper">
                            Derecho del Comercio Exterior
                        </div>
                    </li>
                    <li v-scroll-show="scrollPosition > 80">
                        <img class="li-bullet" src="@/shared/assets/images/blue-square-bullet.jpg">
                        <div class="li-wrapper">
                            Derecho Tributario
                        </div>
                    </li>
                    <li v-scroll-show="scrollPosition > 90">
                        <img class="li-bullet" src="@/shared/assets/images/blue-square-bullet.jpg">
                        <div class="li-wrapper">
                            Derecho Cambiario
                        </div>
                    </li>
                    <li v-scroll-show="scrollPosition > 100">
                        <img class="li-bullet" src="@/shared/assets/images/blue-square-bullet.jpg">
                        <div class="li-wrapper">
                            Derecho Mercantil y Societario
                        </div>
                    </li>
                </ul>
                <button v-scroll-show="scrollPosition > 120">Exitos y logros</button>
            </div>
        </div>
        <div class="col right" >
            <bg-picture :size="'cover'" :file="ABOUT_BG.file" :alt="ABOUT_BG.alt"></bg-picture>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import BasicLazyImageComponent from './../../../shared/components/pictures/basic.lazy.image.component.vue';
import ScrollReveal from 'scrollreveal';


@Component({
    components: {
        'bg-picture' : BasicLazyImageComponent
    }
})
export default class IndexProgressBarComponent extends Vue {

    @Prop({default: 'scrollPosition'}) public scrollPosition: number|undefined;



     private ABOUT_BG: any = {
        file: 'home-about-bg',
        alt: 'Mayorga Abogados Nosotros'
    }



    

}
</script>

<style scoped lang="less">
@import './../../../../src/shared/styles/main.less';

@color-dark-blue: #345063;
@color-main-blue: #578ABE;
@color-light-blue: #60A8E2;
@font-title-size: 40px;
@font-text-size: 18px;
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
        
        color: @color-dark-blue;
        font-family: 'Roboto', sans-serif;
        font-size: @font-title-size;
        font-weight: 700;
        letter-spacing: 1px;

        #scroll-show-fade();    

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
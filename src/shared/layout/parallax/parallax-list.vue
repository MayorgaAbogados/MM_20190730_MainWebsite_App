<template>
    <section class="mm-parallax mm-parallax-list" >
        
         <div class="wrapper">

                <div class="title-line" v-scroll-show="rScroll > 30"></div>
                
                <h1 class="title-text"  v-scroll-show="rScroll > 40">¿QUIÉNES <br> SOMOS?</h1>
                
                <p v-scroll-show="rScroll > 50">
                    <strong>MAYORGA ABOGADOS</strong>, es un Estudio Jurídico y Económico, creado en 2005, integrado actualmente por profesionales especializados (abogados, economistas y contadores), egresados de las mejores universidades de Colombia y el Exterior; con éxitos totalmente verificables, en  asesoría y asistencia legal corporativa, en las siguientes AREAS DE PRÁCTICA:
                </p>
                <ul>
                    <li v-scroll-show="rScroll > 70">
                        <img class="li-bullet" src="@/assets/images/blue-square-bullet.jpg">
                        <div class="li-wrapper">
                            Derecho Aduanero
                        </div>
                    </li>
                    <li v-scroll-show="rScroll > 75"> 
                        <img class="li-bullet" src="@/assets/images/blue-square-bullet.jpg">
                        <div class="li-wrapper">
                            Derecho Penal y Económico
                        </div>
                    </li>
                    <li v-scroll-show="rScroll > 80">
                        <img class="li-bullet" src="@/assets/images/blue-square-bullet.jpg">
                        <div class="li-wrapper">
                            Derecho del Comercio Exterior
                        </div>
                    </li>
                    <li v-scroll-show="rScroll > 85">
                        <img class="li-bullet" src="@/assets/images/blue-square-bullet.jpg">
                        <div class="li-wrapper">
                            Derecho Tributario
                        </div>
                    </li>
                    <li v-scroll-show="rScroll > 90">
                        <img class="li-bullet" src="@/assets/images/blue-square-bullet.jpg">
                        <div class="li-wrapper">
                            Derecho Cambiario
                        </div>
                    </li>
                    <li v-scroll-show="rScroll > 95">
                        <img class="li-bullet" src="@/assets/images/blue-square-bullet.jpg">
                        <div class="li-wrapper">
                            Derecho Mercantil y Societario
                        </div>
                    </li>
                </ul>
                <button v-scroll-show="rScroll > 98">Exitos y logros</button>
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
.mm-parallax-list{
div.wrapper{
    display: block;
    width: 100%;
    height: 100%;
    box-sizing:border-box;
    padding: 2.5em;
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
}
@media only screen and (min-width: 1200px) {
    
}
</style>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component({})
export default class ParallaxList extends Vue {

 get gScroll(): number {
        return this.$store.getters['UIParallaxModule/getPosition'];
    }

    get rScroll(): number {
        const initPosY = '0px';
        const finalPosY = '100px';
        return (1.25 * this.gScroll / 122)*100;
    }

}
</script>
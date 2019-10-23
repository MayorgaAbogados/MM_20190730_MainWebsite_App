<template>
    <div class="people experience">
        <div class="col">
            <div class="wrapper">
                <div class="title-line"></div>
                <h1 class="title-text">EXPERIENCIA DOCENTE</h1>
                <ul>
                    <li>
                        <img class="li-bullet" src="@/shared/assets/images/blue-square-bullet.jpg">
                        <div class="li-wrapper">Universidad Nacional de Colombia</div>
                    </li>
                    <li>
                        <img class="li-bullet" src="@/shared/assets/images/blue-square-bullet.jpg">
                        <div class="li-wrapper">Universidad Jorge Tadeo Lozano - Catedratico</div>
                    </li>
                </ul>
            </div>
        </div>
        <div class="col">
            <div class="wrapper">
            <div class="title-line"></div>
            <h1 class="title-text">INVESTIGACIONES Y  PUBLICACIONES</h1>
            <ul>
                <li>
                    <img class="li-bullet" src="@/shared/assets/images/blue-square-bullet.jpg">
                    <div class="li-wrapper">
                        Abogado egresado de la Universidad Nacional de Colombia (GRADUADO CON HONORES)
                    </div>
                </li>
                <li>
                    <img class="li-bullet" src="@/shared/assets/images/blue-square-bullet.jpg">
                    <div class="li-wrapper">
                        Ordenes Administrativas Y Estructura De Programas De Fiscalizacion De Control Al Contrabando-D.I.A.N
                    </div>
                </li>
                <li>
                    <img class="li-bullet" src="@/shared/assets/images/blue-square-bullet.jpg">
                    <div class="li-wrapper">
                        El Nuevo Delito De Contrabando.
                    </div>
                </li>
                <li>
                    <img class="li-bullet" src="@/shared/assets/images/blue-square-bullet.jpg">
                    <div class="li-wrapper">
                        Responsabilidad Administrativa Y Régimen Sancionatorio De Las Sociedades De Intermediacion Aduanera.
                    </div>
                </li>
                <li>
                    <img class="li-bullet" src="@/shared/assets/images/blue-square-bullet.jpg">
                    <div class="li-wrapper"> 
                        El Delito Fiscal e Implicaciones Penales De La Evasión                    
                    </div>
                </li>
                <li>
                    <img class="li-bullet" src="@/shared/assets/images/blue-square-bullet.jpg">
                    <div class="li-wrapper"> 
                        Artículos sobre Derecho Mercantil y Comercio Internacional en revistas especializadas.                 
                    </div>
                </li>
                
            </ul>
        </div>
        </div>
        <div class="col">
            <div class="wrapper">
            <div class="title-line"></div>
            <h1 class="title-text">EXPERIENCIA LABORAL</h1>
            <ul>
               <li>
                    <img class="li-bullet" src="@/shared/assets/images/blue-square-bullet.jpg">
                    <div class="li-wrapper"> 
                       Consultor Jurídico Empresarial.
                    </div>
                </li>
                <li>
                    <img class="li-bullet" src="@/shared/assets/images/blue-square-bullet.jpg">
                    <div class="li-wrapper"> 
                       Director Jurídico de MAYORGA MOGOLLÓN Y ASOCIADOS
                    </div>
                </li>
                <li>
                    <img class="li-bullet" src="@/shared/assets/images/blue-square-bullet.jpg">
                    <div class="li-wrapper"> 
                       Ex-Coordinador Nacional de Investigaciones Especiales D.I.A.N.
                    </div>
                </li>
                <li>
                    <img class="li-bullet" src="@/shared/assets/images/blue-square-bullet.jpg">
                    <div class="li-wrapper"> 
                       Coautor-redactor decretos y proyectos de ley en materia aduanera y tributaria
                    </div>
                </li>
                <li>
                    <img class="li-bullet" src="@/shared/assets/images/blue-square-bullet.jpg">
                    <div class="li-wrapper"> 
                       Gestor Convenios D.I.A.N. FISCALíA GENERAL DE LA NACIÓN
                    </div>
                </li>
                <li>
                    <img class="li-bullet" src="@/shared/assets/images/blue-square-bullet.jpg">
                    <div class="li-wrapper"> 
                       Conferencista en foros académicos y gremiales.
                    </div>
                </li>
            </ul>
        </div>
        </div>
    </div>  
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({})
export default class PeopleExperienceComponent extends Vue {

@Prop({default: 'scrollPosition'}) public scrollPosition: number|undefined;
 
}
</script>

<style lang="less">
@import './../../../../src/shared/styles/main.less';
div.people.experience{

    width: 100%;
    z-index: 0;

    display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-auto-rows: 1fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px;

    div.col{

        display: inline-block;
        height: 100%;
        width: 100%;
        margin-left: 0px;

        background-color: #F5F7FA;
        &:nth-child(2) {
            background: rgba(96, 96, 96, 0.1)
        }

        div.wrapper{
            display: block;         /* new */
            padding: 24px;
            width: 100%;
            box-sizing: border-box;
            border: 1px solid none;
        }
    }

    div.title-line{
        display: block;
        width: 1.25em;
        height: 2px;
        font-size: @font-subtitle-size;
        background-color:@color-main-blue;
    }

    h1.title-text{

        display: block;
        width: fit-content;
        padding: 0.5em 0em;
        padding-bottom: 0px;
        
        color: @color-dark-blue;
        font-family: 'Roboto', sans-serif;
        font-size: @font-subtitle-size;
        text-align: left;
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
        font-size: @font-subtitle-size;
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
        width: 100%;
        padding: 0.5em 0em;

        text-align: left;
        line-height: 1.25em;
        
        color: @color-dark-blue;
        font-family: 'Roboto', sans-serif;
        font-size: @font-text-size;
        font-weight: 300;
        letter-spacing: 1px;
    }

    li{
        width: 100%;
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
            border-bottom: 2px solid @color-main-blue;
        }
    }


}
</style>
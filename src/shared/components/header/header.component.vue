<template>
    <header>
        
        <div class="header-top">
            <img src="./../../assets/images/header-gradient-top.png">
        </div> 

        <div class="header-middle">
        
            <div class="header-middle-logo">
                <img class="m-logo" src="./../../assets/images/m-logo.png">
                <img class="m-text" src="./../../assets/images/m-text.png">
            </div>
            <div class="header-middle-menu">
                <ul class="menu">
                   
                    <li class="menu-item" :class="isActive('about')" @click="setActive('about')">
                        <span>
                         ¿Quiénes somos?
                        </span>
                    </li>

                    <li class="menu-item" :class="isActive('people')" @click="setActive('people')"><span>Profesionales</span></li>
                    <li class="menu-item" :class="isActive('services')" @click="setActive('services')"><span>Servicios</span></li>
                    <li class="menu-item" :class="isActive('clients')" @click="setActive('clients')"><span>Clientes</span></li>
                    <li class="menu-item" :class="isActive('publishing')" @click="setActive('publishing')"><span>Publicaciones</span></li>
                    <li class="menu-item" :class="isActive('contact')" @click="setActive('contact')"><span>Contacto</span></li>

                </ul>
            </div>

        </div>

          
    </header>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import DropdownMenuComponent from './../dropdown/dropdown.component.vue';

@Component({
    components:{
        'menu-dropdown-components' :DropdownMenuComponent
    }
})
export default class HeaderComponent extends Vue {

    @Prop({default: 'home'}) public section: string|undefined;
    private mounted() {}

    private setActive(tabName: string): void {
        this.$emit('update',tabName);
    };

    private isActive(tabName: string): string {
        return (this.section === tabName) ? 'active' : '';
    };

 
}
</script>

<style lang="less">

@color-main-blue: #60A8E2;
@color-main-gray: #B3B3B3;
header{
    display: block;
    width: 100vw;
    height: 100px;
    min-height: 100px;
    overflow: visible;
    z-index: 100;
    padding: 0em 0em;
    background-color:white;
    div.header-top{
        display: block;
        width: 100%;
        img{
            display: block;
            height: 5px;
            width: 100%;
        }
    }

    div.header-middle{

        display: block;
        width: 100%;
        
        box-sizing: border-box;
        padding: 0em 2em;
        //height: ~"calc(100px - 5px)";



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
        -webkit-align-content: flex-start;
        -ms-flex-line-pack: flex-start;
        align-content: flex-start;
        -webkit-align-items: flex-start;
        -ms-flex-align: flex-start;
        align-items: flex-start;

        &-logo{
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
    }

    img.m{
        &-logo{
            display: block;
            width: 3.5em;
            padding: 1.5em;
        }
        &-text{
            display: block;
            width: 6.5em;
            padding: 0em;
        }
    }

    ul.menu{
 
    }

    li.menu-item{
        display: inline-block;
        vertical-align: top;
        padding: 0em 0em;
        padding-right: 2em;
        padding-top:2em; 
        cursor: pointer;
        color: @color-main-gray;
        font-family: 'Roboto', sans-serif;
        font-weight: 300;
        letter-spacing: 1px;

  

        span{
            display: block;
            padding-top: 0.5em;
            border-top: 2px solid white;
        }

        &.active{
            color: @color-main-blue;
            span{
                display: block;
                padding-top: 0.5em;
                border-top: 2px solid @color-main-blue;
            }
        }
    }
}
</style>
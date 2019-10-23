<template>
    <header class="header">
        
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
                    <li class="menu-item" 
                        @click="setActive('about')"
                        @mouseenter="setTabActive('about')"
                        @mouseleave="setTabActive('')">
                        <menu-dropdown
                            :title="'¿Quiénes somos?'"

                            :hoverClass="isTabActive('about')"
                            :selectedClass="isActive('about')"

                            :options="[{
                                text: 'Home',
                                link: '/home/section/cover'
                            },{
                                text: 'Nosotros',
                                link: '/home/section/about-us'
                            },{
                                text: 'Ubicanos',
                                link: '/home/section/map'
                            }]"
                        ></menu-dropdown>   
                    </li>
                    <li class="menu-item"  @click="setActive('people')" @mouseenter="setTabActive('people')" @mouseleave="setTabActive('')">
                         <menu-dropdown
                            :title="'Profesionales'"
                            
                            :hoverClass="isTabActive('people')"
                            :selectedClass="isActive('people')"

                            :options="[{
                                text: 'Director Juridico',
                                link: '/people/section/director'
                            },{
                                text: 'Experiencia Juridica',
                                link: '/people/section/experience'
                            },{
                                text: 'Equipo Legal',
                                link: '/people/section/team'
                            }]"
                        ></menu-dropdown>  
                    </li>
                    <li class="menu-item"  @click="setActive('services')" @mouseenter="setTabActive('services')" @mouseleave="setTabActive('')">
                         <menu-dropdown
                            
                            :title="'servicios'"

                            :hoverClass="isTabActive('services')"
                            :selectedClass="isActive('services')"

                            :options="[{
                                text: 'link a',
                                link: 'http://google.com.co'
                            },{
                                text: 'link a',
                                link: 'http://google.com.co'
                            },{
                                text: 'link a',
                                link: 'http://google.com.co'
                            }]"
                        ></menu-dropdown>  
                    </li>
                    <li class="menu-item"  @click="setActive('clients')" @mouseenter="setTabActive('clients')" @mouseleave="setTabActive('')">
                         <menu-dropdown
                            :title="'Clientes'"

                            :hoverClass="isTabActive('clients')"
                            :selectedClass="isActive('clients')"

                            :options="[{
                                text: 'link a',
                                link: 'http://google.com.co'
                            },{
                                text: 'link a',
                                link: 'http://google.com.co'
                            },{
                                text: 'link a',
                                link: 'http://google.com.co'
                            }]"
                        ></menu-dropdown>  
                    </li>
                    <li class="menu-item"  @click="setActive('publishing')" @mouseenter="setTabActive('publishing')" @mouseleave="setTabActive('')">
                         <menu-dropdown
                            :title="'Publicaciones'"

                            :hoverClass="isTabActive('publishing')"
                            :selectedClass="isActive('publishing')"

                            :options="[{
                                text: 'link a',
                                link: 'http://google.com.co'
                            },{
                                text: 'link a',
                                link: 'http://google.com.co'
                            },{
                                text: 'link a',
                                link: 'http://google.com.co'
                            }]"
                        ></menu-dropdown>  
                    </li>
                    <li class="menu-item"  @click="setActive('contact')" @mouseenter="setTabActive('contact')" @mouseleave="setTabActive('')">
                        <menu-dropdown
                            :title="'Contacto'"
                            
                            :hoverClass="isTabActive('contact')"
                            :selectedClass="isActive('contact')"

                            :options="[{
                                text: 'link a',
                                link: 'http://google.com.co'
                            },{
                                text: 'link a',
                                link: 'http://google.com.co'
                            },{
                                text: 'link a',
                                link: 'http://google.com.co'
                            }]"
                        ></menu-dropdown>  
                    </li>
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
        'menu-dropdown' :DropdownMenuComponent
    }
})
export default class HeaderComponent extends Vue {

    @Prop({default: 'home'}) public section: string|undefined;
    private tabActive: string = '';

    private mounted() {}

    private setActive(tabName: string): void {
        this.$emit('update',tabName);
    };

    private setTabActive(tabName: string): void{
        this.tabActive = tabName;
    }

    private isActive(tabName: string): string {
        return (this.section === tabName) ? 'selected-active' : 'selected-default';
    };
    private isTabActive(tabName: string): string {
        return (this.tabActive === tabName) ? 'hover-active' : 'hover-default';
    };

 
}
</script>

<style lang="less">

@color-main-blue: #60A8E2;
@color-main-gray: #B3B3B3;
.header{
    display: block;
    width: 100vw;
    height: 100px;
    min-height: 100px;
    overflow: visible;
    z-index: 100;
    padding: 0em 0em;
    background-color:white;
    position: fixed;
    top: 0px;
    z-index: 1000;
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

  
    }
}
</style>
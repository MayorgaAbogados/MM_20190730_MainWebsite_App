<template>  
    <div class="menu">

       
        <ul class="mm-menu-mobile" :class="{ 'onCollapse':isOpen, 'onExpanded' : !isOpen}">
            <li v-for="(menu,key) of menus" v-bind:key="key">
                <h1> {{ menu.title }} </h1> 
            </li>
            <li class="auth">
                <h1 v-if="isLogged" > <router-link to="/profile">Perfil</router-link> </h1>
                <h1 v-if="!isLogged"> <router-link to="/auth/signin">Iniciar Sesión</router-link> </h1>
            </li>
        </ul>
     


        <ul class="mm-menu-desktop">
            <li v-for="(menu,key) of menus" v-bind:key="key" >
               <mm-dropdown :title="menu.title" :items="menu.items" :isActive="currentTab === menu.title"></mm-dropdown>
               
            </li>
            <!-- 
            <li class="auth">
                <h1 v-if="isLogged" > <router-link to="/profile">Perfil</router-link> </h1>
                <h1 v-if="!isLogged"> <router-link to="/auth/signin">Iniciar Sesión</router-link> </h1>
            </li>
            -->
        </ul>
          
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import { DropdownItem, DropdownMenu} from '../../../dropdowns/header-dropdown/models/dropdown.interfaces';
import DefaultDropdown from '../../../dropdowns/header-dropdown/header-dropdown.component.vue';

@Component({
  components: {
      'mm-dropdown' : DefaultDropdown,
  },
})
export default class DefaultMenu extends Vue {

    private menus: DropdownMenu[] = [];
    private isLogged: boolean = false;

    get isOpen() {
        return this.$store.getters['UIHeaderMenuModule/getIsOpen'];
    }

    get currentTab() {
        return this.$store.getters['UIHeaderMenuModule/getTab'];
    }

    private doAlert() {
  

    }

    private mounted() {

        this.menus = [
            {
                title: '¿Quiénes Somos?',
                items: [{
                    text: 'Mayorga Abogados',
                    path: '/home',
                }],
            }, {
                title: 'Equipo de Expertos',
                items: [{
                    text: 'Director',
                    path: '/team/director',
                }, {
                    text: 'Profesionales a su servicio',
                    path: '/team/lawyers',
                }],
            }, {
                title: 'Planes de Servicio',
                items: [{
                    text: 'Gratis su primera consulta',
                    path: '/services/free', /*'http://server.mayorga.com.co/page/consulting/free/form/source/website',*/
                }, {
                    text: 'Agende su cita',
                    path: '/services/schedule',
                }, {
                    text: 'Afiliece como Cliente Premium',
                    path: '/services/vip', /*http://server.mayorga.com.co/page/membership/form/source/website*/
                }],
            },
            {
                title: 'Noticias y Boletines',
                items: [{
                    text: 'Boletines',
                    path: '/blog',
                }, {
                    text: 'Seminario',
                    path: '/webminars',
                }],
            },
            {
                title: 'Consultas',
                items: [{
                    text: 'Su primera consulta gratis',
                    path: '/services/free',
                    },{
                    text: 'Agende su cita',
                    path: '/services/consulting',
                    },
                ],
            },
            
        ];

    }
}
</script>

<style>

h1{
    padding: 0px;
    margin: 0px;
}
li.auth h1{
    font-family: Roboto, sans-serif;
    font-size: 16px;
    font-weight: 300;
    letter-spacing: 1px;
    padding: 5px;
    margin: 0px;
    color: #b3b3b3;

    width: 170px;
    margin-top: 10px;
}
li.auth{
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        -webkit-flex-direction: row;
        -ms-flex-direction: row;
        flex-direction: row;
        -webkit-flex-wrap: nowrap;
        -ms-flex-wrap: nowrap;
        flex-wrap: nowrap;
        -webkit-justify-content: flex-end;
        -ms-flex-pack: end;
        justify-content: flex-end;
        -webkit-align-content: center;
        -ms-flex-line-pack: center;
        align-content: center;
        -webkit-align-items: center;
        -ms-flex-align: center;
        align-items: center;
}
div.menu{
    padding:0px;
    margin: 0px;
    display: block;
    position: relative;
    z-index: 1;
}
.mm-menu-mobile{ display: block;}
.mm-menu-desktop{ display: none;}
div.menu ul, menu li {
   margin:0;
   padding: 0;
   text-indent: 0;
   list-style: none;
   list-style-type: 0;
}
div.menu li{
    width:100%;
    height: 30px; /* TODO change as Global Variable $headerHeight */
    display: block;
}
div.menu .mm-menu-mobile h1{
    font-family: Roboto,sans-serif;
    z-index: 0;
    font-size: 16px;
    font-weight: 300;
    letter-spacing: 1px;
    padding: 5px;
    margin: 0px;
    background-color: white;
    width: 100%;
    color: #b3b3b3;
}
div.menu .mm-menu-mobile.onCollapse{
    position: relative;
    top: -100vh;
    -webkit-transition: all 500ms ease-in-out;
    -moz-transition: all 500ms ease-in-out;
    -ms-transition: all 500ms ease-in-out;
    -o-transition: all 500ms ease-in-out;
    transition: all 500ms ease-in-out;
}
div.menu .mm-menu-mobile.onExpanded{
    position: relative;
    top: 0px;
    -webkit-transition: all 500ms ease-in-out;
    -moz-transition: all 500ms ease-in-out;
    -ms-transition: all 500ms ease-in-out;
    -o-transition: all 500ms ease-in-out;
    transition: all 500ms ease-in-out;
}


@media only screen and (min-width: 1200px) {

    div.menu li{
        width:100%;
        height: 85px; /* TODO change as Global Variable $headerHeight */
        display: block;
    }
    .mm-menu-mobile{ display: none;}
    .mm-menu-desktop{ display: block;}    
    .mm-menu-desktop {
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        -webkit-flex-direction: row;
        -ms-flex-direction: row;
        flex-direction: row;
        -webkit-flex-wrap: nowrap;
        -ms-flex-wrap: nowrap;
        flex-wrap: nowrap;
        -webkit-justify-content: flex-end;
        -ms-flex-pack: end;
        justify-content: flex-end;
        -webkit-align-content: center;
        -ms-flex-line-pack: center;
        align-content: center;
        -webkit-align-items: center;
        -ms-flex-align: center;
        align-items: center;
    }
    .mm-menu-desktop li{
        width: fit-content;
    } 
    li.auth h1{
        font-family: Roboto, sans-serif;
        font-size: 16px;
        font-weight: 300;
        letter-spacing: 1px;
        padding: 5px;
        margin: 0px;
        color: #b3b3b3;
        width: 170px;
        margin-top: 10px;
    }
    li.auth{
        padding: 0px;
        padding-top: 1em;
        width: auto;

        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        -webkit-flex-direction: row;
        -ms-flex-direction: row;
        flex-direction: row;
        -webkit-flex-wrap: nowrap;
        -ms-flex-wrap: nowrap;
        flex-wrap: nowrap;
        -webkit-justify-content: flex-end;
        -ms-flex-pack: end;
        justify-content: flex-end;
        -webkit-align-content: center;
        -ms-flex-line-pack: center;
        align-content: center;
        -webkit-align-items: center;
        -ms-flex-align: center;
        align-items: center;
    }

}
</style>
<template>
    
    <header class="main-header">
            <div class="mm-row">
                <img class="mm-topbar" src="./images/header-gradient-top.png">
            </div>
            
            <div class="mm-row r1">
                <mm-header-logo></mm-header-logo>
                <mm-header-menu ></mm-header-menu>
            </div>
    </header>

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import DefaultLogo from '@/shared/core/logo/default.logo.vue';
import DefaultMenu from '@/shared/core/menu/default.menu.vue';
@Component({
  components: {
      'mm-header-logo' : DefaultLogo,
      'mm-header-menu' : DefaultMenu,
  },
})
export default class App extends Vue {
  private doAlert() {
      alert('PERROS HEADER');
  }
}
</script>

<style>
header.main-header{
    position: fixed;
    top: 0px;
    background-color: white;
    z-index: 1000;
}
div.mm-row{
    width: 100%;
    background-color: white;
     display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-flex-wrap: nowrap;
    -ms-flex-wrap: nowrap;
    flex-wrap: nowrap;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-align-content: center;
    -ms-flex-line-pack: center;
    align-content: center;
    -webkit-align-items: center;
    -ms-flex-align: cente
}
img.mm-topbar{
    display: block;
    z-index: 100;
    width: 100%;
    height: 5px;
    object-fit: cover;
}


.r1{
    display: block !important;
    background-color: white;
    max-height: 60px;
}

@media only screen and (min-width: 1200px) {
    .r1{
    display: flex !important;
    background-color: white;
    max-height: 100px;
}
}
</style>
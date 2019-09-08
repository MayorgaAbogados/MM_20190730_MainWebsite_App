<template>
  <div id="view-home-id" class="view page home" v-on:scroll="handleScroll"> 

    <header-component :section="section" @update="setSection"></header-component>

    <div class="section">
      <cover-component :scrollPosition="coverPositionScroll"></cover-component>
    </div>

    <div class="section">
      <about-component></about-component>
    </div>

    <div class="section">
      <map-component></map-component>
    </div>

    <footer-component></footer-component>

    <vip-form-component></vip-form-component>

  </div>
</template>


<script lang="ts">

import './../../config/vndrs/_index';

import { Component, Prop, Vue } from 'vue-property-decorator';

import HeaderComponent from './../../shared/components/header/header.component.vue';
import FooterComponent from './../../shared/components/footer/footer.component.vue';

import HomeCoverComponent from './components/home.cover.component.vue';
import HomeAboutComponent from './components/home.about.component.vue';
import HomeMapComponent from './components/home.maps.component.vue';

import FloatingVIPFormComponent from './components/home.premiun.form.component.vue';



@Component({
  components: {
    'header-component' : HeaderComponent,
    'footer-component' : FooterComponent,
    'cover-component' : HomeCoverComponent,
    'about-component' : HomeAboutComponent,
    'map-component': HomeMapComponent,
    'vip-form-component': FloatingVIPFormComponent,
  },
})
export default class HomeView extends Vue {

    private section: string = '';
    private coverPositionScroll: number = 0;

    private setSection($sectionName:string):void{
      this.section = $sectionName;
      this.$router.push({ name: 'home/section', params: { sectionName: $sectionName }});
    }

    private beforeMount(){
      this.section = this.$route.params.sectionName;
    }

    handleScroll (event: any) {
      const maxY = (document as any).documentElement.clientHeight;
      const posY = (document as any).getElementById('view-home-id').scrollTop;
      const pos$ = 100.00 * (posY + 0.0)/(maxY + 0.0);
      this.coverPositionScroll =  Math.min(Math.max(pos$, 0), 100);
    }

    private created () {
      window.addEventListener('scroll', this.handleScroll);
    }

    private destroyed () {
      window.removeEventListener('scroll', this.handleScroll);
    }

}
</script>



<style lang="less">
@import (reference) './../../../src/shared/styles/main.less';
@color-main-blue: #60A8E2;
div.view.page.home{
    
  //#view(column,center,center);
  display: block;
  width: 100vw;
  height: 100vh;
  overflow: scroll;
  overflow-x: hidden;
  

  div.section{
      display: block;
      width: 100vw;
      height: 100vh;
  }
}
</style>

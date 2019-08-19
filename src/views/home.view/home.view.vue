<template>
  <div class="view page home"> 

        <full-page ref="fullpage" :options="options" id="fullpage">
            <div class="section header-section fp-auto-height">
              <header-component :section="section" @update="setSection"></header-component>
            </div>

            <div class="section cover-section">
              <cover-component></cover-component>
            </div>

             <div class="section about-section">
               <about-component></about-component>
            </div>

             <div class="section map-section">
              <map-component></map-component>
            </div>
            
            <div class="section footer-section fp-auto-height">
               <footer-component></footer-component>
            </div>
        </full-page>

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

    private options:any = {
        licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
        anchors: ['header', 'cover','about','map-section','footer'],
        sectionsColor: ['#ffffff', '#000000','#ffffff','#ffffff', '#000000'],
    };

    private setSection($sectionName:string):void{
      this.section = $sectionName;
      this.$router.push({ name: 'home/section', params: { sectionName: $sectionName }});
    }

    private beforeMount(){
      this.section = this.$route.params.sectionName;
    }

}
</script>



<style lang="less">
@import (reference) './../../../src/shared/styles/main.less';
@color-main-blue: #60A8E2;
div.view.page.home{
    
  #view(column,center,center);
  width: 100vw;
  height: auto;

  div.section{
       display: block;
        width: 100vw;

      &.cover{
        display: block;
        width: 100vw;
      }

      &.footer{
        display: block;
        width: 100vw;
        height: fit-content;
      }
  }
}
</style>

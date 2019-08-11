<template>
  <div class="view page home"> 

        <full-page ref="fullpage" :options="options" id="fullpage">
            <div class="section fp-auto-height">
              <header-component :section="section" @update="setSection"></header-component>
            </div>

            <div class="section cover">
              <cover-component></cover-component>
            </div>

             <div class="section">
               <about-component></about-component>
            </div>

             <div class="section">
              <map-component></map-component>
            </div>
            
            <div class="section fp-auto-height">
                <div style="height: 250px;">
                 <h1>FOOTER</h1>
                </div>
            </div>
        </full-page>

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



@Component({
  components: {
    'header-component' : HeaderComponent,
    'footer-component' : FooterComponent,
    'cover-component' : HomeCoverComponent,
    'about-component' : HomeAboutComponent,
    'map-component': HomeMapComponent,
  },
})
export default class HomeView extends Vue {

    private section: string = '';

    private options:any = {
        licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
        anchors: ['header', 'cover','about','map','footer'],
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
  }
}
</style>

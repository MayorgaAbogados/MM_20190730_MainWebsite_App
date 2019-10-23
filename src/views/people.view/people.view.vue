<template>
  <div id="view-home-id" class="view page home" v-on:scroll="handleScroll"> 

    <header-component :section="section" @update="setSection"></header-component>

    <div class="section full-h">
        <cover-component :scrollPosition="coverPositionScroll"></cover-component>
    </div>

    <div class="section auto-h">
      <about-component :scrollPosition="coverPositionScroll"></about-component>
    </div>

    <div class="section auto-h" >
      <experience-component :scrollPosition="coverPositionScroll"></experience-component>
    </div>

    <div class="section auto-h" >
        <team-component :scrollPosition="coverPositionScroll"></team-component>
    </div>

    
    <div class="section full-h" >
        <map-component></map-component>
    </div>


    <footer-component ></footer-component>


  </div>
</template>


<script lang="ts">



import { Component, Prop, Vue } from 'vue-property-decorator';

import HeaderComponent from './../../shared/components/header/header.component.vue';
import FooterComponent from './../../shared/components/footer/footer.component.vue';

import PeopleCoverComponent from './components/people.cover.component.vue';
import PeopleAboutComponent from './components/people.about.component.vue';
import PeopleExperienceComponent from './components/people.experience.component.vue';
import PeopleTeamComponent from './components/people.team.component.vue';
import HomeMapComponent from './components/home.maps.component.vue';

import FloatingVIPFormComponent from './components/home.premiun.form.component.vue';

import './../../config/vndrs/_index';
import './../../config/directives/v-visibility';
import './../../config/directives/v-scroll-show';

@Component({
  components: {
    'header-component' : HeaderComponent,
    'footer-component' : FooterComponent,
    'cover-component' : PeopleCoverComponent,
    'about-component' : PeopleAboutComponent,
    'experience-component' : PeopleExperienceComponent,
    'team-component' : PeopleTeamComponent,
    'map-component': HomeMapComponent,
  },
})
export default class HomeView extends Vue {

    private section: string = '';
    private coverPositionScroll: number = 0;

    private setSection($sectionName:string):void{
      this.section = $sectionName;
      //this.$router.push({ name: 'home/section', params: { sectionName: $sectionName }});
    }

    private beforeMount(){
      this.section = this.$route.params.sectionName;
    }

    handleScroll (event: any) {
      const maxY = (document as any).documentElement.clientHeight;
      const posY = (document as any).getElementById('view-home-id').scrollTop;
      const pos$ = 100.00 * (posY + 0.0)/(maxY + 0.0);
      this.coverPositionScroll =  Math.min(Math.max(pos$, 0), 200);
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
      

      &.full-h{
        height: 100vh;
      }
      &.auto-h{
        height: fit-content;
      }
  }
}



</style>

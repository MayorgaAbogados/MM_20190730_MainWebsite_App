<template>
  <div class="view page home"> 

        <full-page ref="fullpage" :options="options" id="fullpage">
            <div class="section fp-auto-height">
              <header-component :section="section" @update="setSection"></header-component>
            </div>
            <div class="section cover">

               <h1>
                 ABOGADOS JURÍDICOS ESPECIALIZADOS
               </h1>

               <p>
                 Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. 
                 Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
               </p>

               <button>
                 Cotice nuestros servicios
               </button>

            </div>
             <div class="section">
               <h1>about</h1>
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



@Component({
  components: {
    'header-component' : HeaderComponent,
    'footer-component' : FooterComponent,
    'cover-component' : HomeCoverComponent,
    'about-component' : HomeAboutComponent,
  },
})
export default class HomeView extends Vue {

    private section: string = '';

    private options:any = {
        licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
        anchors: ['header', 'cover','about','footer'],
        sectionsColor: ['#41b883', '#055d36','#41b883', '#055d36'],
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
        background-image: url('./../../shared/assets/images/home-cover-bg.jpg');
        background-size: cover;
        background-position: center;

        div.wrapper{

          display: block;
          width: 100vw;
          height: 100vh;
          
          display: -ms-flexbox;
          display: -webkit-flex;
          display: flex;
          -webkit-flex-direction: column;
          -ms-flex-direction: column;
          flex-direction: column;
          -webkit-flex-wrap: wrap;
          -ms-flex-wrap: wrap;
          flex-wrap: wrap;
          -webkit-justify-content: center;
          -ms-flex-pack: center;
          justify-content: center;
          -webkit-align-content: center;
          -ms-flex-line-pack: center;
          align-content: center;
          -webkit-align-items: center;
          -ms-flex-align: center;
          align-items: center;
        }


        h1{
          color: white;
          font-size: 35pt;
          font-family: 'Roboto', sans-serif;
          font-weight: 300;
          margin: 0 auto;
          letter-spacing: 1px;
          padding: 0.5em 0em;
        }
        p{
          color: white;
          width: 35%;
          min-width: 800px;
          margin: 0 auto;
          font-size: 12pt;
          font-family: 'Roboto', sans-serif;
          font-weight: 500;
          letter-spacing: 1px;
          line-height: 1.2em;
        }
        button{
          display: block;
          width: fit-content;
          padding: 1em;
          margin: 3em auto;
           font-size: 12pt;
          background-color: @color-main-blue;
          outline:none;
          border:none;
          color: white;
          font-family: 'Roboto', sans-serif;
          font-weight: 400;
          letter-spacing: 1px;
        }
      }
  }
}
</style>

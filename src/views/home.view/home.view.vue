<template>
  <div class="view page home"> 

<!--
        <div class="view-header">
            <header-component/>
        </div>

        <div class="view-page">
            <cover-component/>
        </div>

        <div class="view-page">
            <about-component/>
        </div>

        <div class="view-footer">
            <footer-component/>
        </div>

-->

        <full-page ref="fullpage" :options="options" id="fullpage">
            <div class="section">
                First section ...
            </div>
            <div class="section">
                Second section ...
            </div>
        </full-page>

  </div>
</template>


<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import HeaderComponent from './../../shared/components/header/header.component.vue';
import FooterComponent from './../../shared/components/footer/footer.component.vue';
import HomeCoverComponent from './components/home.cover.component.vue';
import HomeAboutComponent from './components/home.about.component.vue';

import './../../config/vndrs/_index';

@Component({
  components: {
    'header-component' : HeaderComponent,
    'footer-component' : FooterComponent,
    'cover-component' : HomeCoverComponent,
    'about-component' : HomeAboutComponent,
  },
})
export default class HomeView extends Vue {

    private options:any = {
        licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
        menu: '#menu',
        anchors: ['page1', 'page2'],
        sectionsColor: ['#41b883', '#ff5f45']
    };

}
</script>



<style lang="less">
@import (reference) './../../../src/shared/styles/main.less';
div.view.page.home{
  #view(column,center,center);

  div.section{
      display: block;
      width: 100vw;
  }
}
</style>

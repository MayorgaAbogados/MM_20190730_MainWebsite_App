<!-- 
   ----------------------------------------------------------------------------
   -- PAGE : Purchase and Booking a Consulting Meeting. -----------------------
   ----------------------------------------------------------------------------
-->



<!-- ---------------------------------------------------------------------- -->
<!-- -- HTML AND STYLES --------------------------------------------------- -->
<!-- ---------------------------------------------------------------------- -->
  <template src='./home.page.html'></template>
  <style src="./home.page.less" lang="less"></style>
<!-- ---------------------------------------------------------------------- -->



<!-- ---------------------------------------------------------------------- -->
<!-- -- COMPONENT --------------------------------------------------------- -->
<!-- ---------------------------------------------------------------------- -->
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import BasicHeaderComponent from '../../shared/headers/basic-header/basic-header.component.vue';
import BasicFooterComponent from '../../shared/footers/basic-footer/basic-footer.component.vue';

import HomeCoverComponent from './components/home-cover-section/home-cover-section.component.vue';
import HomeAboutComponent from './components/home-about-section/home-about-section.component.vue';
import HomeMapComponent from './components/home-map-section/home-map-section.component.vue';
  
@Component({
    components: {
        'mm-header' : BasicHeaderComponent,
        'mm-footer': BasicFooterComponent,
        'mm-section-cover': HomeCoverComponent,
        'mm-section-about': HomeAboutComponent,
        'mm-section-map': HomeMapComponent,
    },
})
export default class HomePage extends Vue {

}

</script>

<!-- 
   ----------------------------------------------------------------------------
   -- PAGE : Purchase and Booking a Consulting Meeting. -----------------------
   ----------------------------------------------------------------------------
-->



<!-- ---------------------------------------------------------------------- -->
<!-- -- HTML AND STYLES --------------------------------------------------- -->
<!-- ---------------------------------------------------------------------- -->
  <template src='./team.page.html'></template>
  <style src="./team.page.less" lang="less"></style>
<!-- ---------------------------------------------------------------------- -->



<!-- ---------------------------------------------------------------------- -->
<!-- -- COMPONENT --------------------------------------------------------- -->
<!-- ---------------------------------------------------------------------- -->
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import BasicHeaderComponent from '../../shared/headers/basic-header/basic-header.component.vue';
import BasicFooterComponent from '../../shared/footers/basic-footer/basic-footer.component.vue';

import TeamDirectorCoverSectionComponent from './components/team-section-director-cover/team-section-director-cover.component.vue';
import TeamDirectorCVSectionComponent from './components/team-section-director-cv/team-section-director-cv.component.vue';
import TeamLawyersGallerySectionComponent from './components/team-section-lawyers-gallery/team-section-lawyers-gallery.component.vue';
import TeamMapSectionComponent from './components/team-section-map/team-section-map.component.vue';

@Component({
    components: {
        
        'mm-header' : BasicHeaderComponent,
        'mm-footer': BasicFooterComponent,

        'mm-section-director-cover': TeamDirectorCoverSectionComponent,
        'mm-section-director-cv': TeamDirectorCVSectionComponent,
        'mm-section-lawyers-gallery': TeamLawyersGallerySectionComponent,
        'mm-section-map': TeamMapSectionComponent,

    },
})
export default class TeamPage extends Vue {

}

</script>

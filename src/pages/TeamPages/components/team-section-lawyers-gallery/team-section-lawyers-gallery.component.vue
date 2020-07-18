<!-- ---------------------------------------------------------------------- -->
<!--  SECTION :: HOME ABOUT SECTION COMPONENT ----------------------------- -->
<!-- ---------------------------------------------------------------------- -->




<!-- ---------------------------------------------------------------------- -->
<!-- -- HTML AND STYLES --------------------------------------------------- -->
<!-- ---------------------------------------------------------------------- -->
  <template src='./team-section-lawyers-gallery.component.html'></template>
  <style src="./team-section-lawyers-gallery.component.less" lang="less"></style>
<!-- ---------------------------------------------------------------------- -->



<!-- ---------------------------------------------------------------------- -->
<!-- -- COMPONENT --------------------------------------------------------- -->
<!-- ---------------------------------------------------------------------- -->
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import TeamGalleryComponent from '@/shared/galleries/team-gallery.vue';

@Component({
    components: {
        
        'mm-team-gallery': TeamGalleryComponent,

    },
})
export default class TeamMapSectionComponent extends Vue {

}

</script>

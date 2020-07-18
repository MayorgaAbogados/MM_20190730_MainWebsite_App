<!-- ---------------------------------------------------------------------- -->
<!--  SECTION :: HOME ABOUT SECTION COMPONENT ----------------------------- -->
<!-- ---------------------------------------------------------------------- -->




<!-- ---------------------------------------------------------------------- -->
<!-- -- HTML AND STYLES --------------------------------------------------- -->
<!-- ---------------------------------------------------------------------- -->
  <template src='./team-section-map.component.html'></template>
  <style src="./team-section-map.component.less" lang="less"></style>
<!-- ---------------------------------------------------------------------- -->



<!-- ---------------------------------------------------------------------- -->
<!-- -- COMPONENT --------------------------------------------------------- -->
<!-- ---------------------------------------------------------------------- -->
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import OfficeMapComponent from '@/shared/maps/office-map.vue';

@Component({
    components: {
        
        'mm-office-map': OfficeMapComponent,

    },
})
export default class TeamMapSectionComponent extends Vue {

}

</script>

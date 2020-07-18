<!-- ---------------------------------------------------------------------- -->
<!--  SECTION :: HOME ABOUT SECTION COMPONENT ----------------------------- -->
<!-- ---------------------------------------------------------------------- -->




<!-- ---------------------------------------------------------------------- -->
<!-- -- HTML AND STYLES --------------------------------------------------- -->
<!-- ---------------------------------------------------------------------- -->
  <template src='./schedule-consulting-map-section.component.html'></template>
  <style src="./schedule-consulting-map-section.component.less" lang="less"></style>
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
export default class ScheduleConsultingMapSectionComponent extends Vue {

}

</script>

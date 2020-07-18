

<!-- ---------------------------------------------------------------------- -->
<!-- -- HTML AND STYLES --------------------------------------------------- -->
<!-- ---------------------------------------------------------------------- -->
  <template src='./schedule-consulting.page.html'></template>
  <style src="./schedule-consulting.page.less" lang="less"></style>
<!-- ---------------------------------------------------------------------- -->



<!-- ---------------------------------------------------------------------- -->
<!-- -- COMPONENT --------------------------------------------------------- -->
<!-- ---------------------------------------------------------------------- -->
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import BasicHeaderComponent from '../../../shared/headers/basic-header/basic-header.component.vue';
import BasicFooterComponent from '../../../shared/footers/basic-footer/basic-footer.component.vue';

import ScheduleConsultingSwiperSectionComponent from './components/schedule-consulting-swiper-section/schedule-consulting-swiper-section.component.vue';
import ScheduleConsultingFormSectionComponent from './components/schedule-consulting-form-section/schedule-consulting-form-section.component.vue';
import ScheduleConsultingCoverSectionComponent from './components/schedule-consulting-cover-section/schedule-consulting-cover-section.component.vue';
import ScheduleConsultingCalendarSectionComponent from './components/schedule-consulting-calendar-section/schedule-consulting-calendar-section.component.vue';
import ScheduleConsultingMapSectionComponent from './components/schedule-consulting-map-section/schedule-consulting-map-section.component.vue';
  
@Component({
    components: {
        'mm-header' : BasicHeaderComponent,
        'mm-footer': BasicFooterComponent,
        
        'mm-section-map': ScheduleConsultingMapSectionComponent,
        'mm-section-swiper': ScheduleConsultingSwiperSectionComponent,

        'mm-section-cover': ScheduleConsultingCoverSectionComponent,
        'mm-section-calendar': ScheduleConsultingCalendarSectionComponent,
        'mm-section-form': ScheduleConsultingFormSectionComponent,
    },
})
export default class ScheduleConsultingPage extends Vue {


    onSubmit(){

    }


}

</script>

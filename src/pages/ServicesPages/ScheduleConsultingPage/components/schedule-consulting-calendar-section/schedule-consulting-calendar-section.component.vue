<!-- ---------------------------------------------------------------------- -->
<!--  SECTION :: HOME ABOUT SECTION COMPONENT ----------------------------- -->
<!-- ---------------------------------------------------------------------- -->




<!-- ---------------------------------------------------------------------- -->
<!-- -- HTML AND STYLES --------------------------------------------------- -->
<!-- ---------------------------------------------------------------------- -->
  <template src='./schedule-consulting-calendar-section.component.html'></template>
  <style src="./schedule-consulting-calendar-section.component.less" lang="less"></style>
  <style src="./schedule-consulting-calendar-section.component.scss" lang="scss"></style>
<!-- ---------------------------------------------------------------------- -->



<!-- ---------------------------------------------------------------------- -->
<!-- -- COMPONENT --------------------------------------------------------- -->
<!-- ---------------------------------------------------------------------- -->
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import VueScheduler from '../../../../../vendors/v-calendar-scheduler-2/components/VueScheduler.vue';
import BasicButtonComponent from '@/shared/buttons/basic-button/basic-button.vue';

import MedTitleComponent from '@/shared/titles/med-title/med-title.vue';
import MedSubTitleComponent from '@/shared/titles/med-subtitle/med-subtitle.vue';
import MedTextComponent from '@/shared/texts/med-text/med-text.vue';

import { ModelSelect } from 'vue-search-select';

import { getGoogleCalendarEvents } from '../../helpers/schedule-google-calendar.api';

const moment = require('moment');
const md5 = require('md5');


@Component({
    components: {

        'mm-title':MedTitleComponent,
        'mm-subtitle': MedSubTitleComponent,
        'mm-text':MedTextComponent,

        'vue-scheduler': VueScheduler,

        'model-select' : ModelSelect,
    },
})
export default class ScheduleConsultingCalendarSectionComponent extends Vue {
 
    private EVENTS: any = [];
    private CALENDAR = {
        events: [],
        labels: {
            today: 'Hoy',
            back: 'Atrás',
            next: 'Siguiente',
            month: 'Mes',
            week: 'Semana',
            day: 'Día',
            all_day: 'Todo el día'
        },
        views: ['week'],
        timeRange: [8, 21],
        initial: {
            date: new Date(),
            view: 'week'
        },
        showTimeMarker: true,
        showTodayButton: false
    }
        

    private mounted(){
       
       getGoogleCalendarEvents().then( events => {
           console.warn('')
           console.warn('')
           console.warn(' EVENTS ==> ')
           console.warn(events)
           console.warn('')
           console.warn('')
           this.EVENTS = events;
       })

    }

    private onEventClicked($event: any): void {}
    private onEventCreated($event: any): void {}

    private eventDisplay($event: any) {
        return $event.html;
    }
}

</script>

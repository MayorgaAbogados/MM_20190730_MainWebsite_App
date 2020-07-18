<!-- ---------------------------------------------------------------------- -->
<!--  SECTION :: HOME ABOUT SECTION COMPONENT ----------------------------- -->
<!-- ---------------------------------------------------------------------- -->




<!-- ---------------------------------------------------------------------- -->
<!-- -- HTML AND STYLES --------------------------------------------------- -->
<!-- ---------------------------------------------------------------------- -->
  <template src='./schedule-consulting-swiper-section.component.html'></template>
  <style src="./schedule-consulting-swiper-section.component.less" lang="less"></style>
<!-- ---------------------------------------------------------------------- -->



<!-- ---------------------------------------------------------------------- -->
<!-- -- COMPONENT --------------------------------------------------------- -->
<!-- ---------------------------------------------------------------------- -->
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import Swiper from "swiper";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";

import ScheduleCoverComponent from '../schedule-consulting-cover-section/schedule-consulting-cover-section.component.vue';
import ScheduleFormComponent from '../schedule-consulting-form-section/schedule-consulting-form-section.component.vue';
import ScheduleCalendarComponent from '../schedule-consulting-calendar-section/schedule-consulting-calendar-section.component.vue';

@Component({
    components: {

        swiper,
        swiperSlide,

        'mm-slide-cover': ScheduleCoverComponent,
        'mm-slide-form': ScheduleFormComponent ,
        'mm-slide-calendar': ScheduleCalendarComponent,

    },
})
export default class ScheduleConsultingSwiperSectionComponent extends Vue {


public swiperOption = {
resistanceRatio: 0,
allowTouchMove: true,
autoHeight: true, //enable auto height
};

get swiper() {
return (this.$refs.ConsultingSwiperRef as any).swiper;
}
mounted() {
this.swiper.slideTo(0, 1000, false);
}

nextSlide($event: any) {}
prevSlide($event: any) {}

}

</script>

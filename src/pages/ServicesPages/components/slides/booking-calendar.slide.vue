<template>

     <div class="swiper-slide-wrapper calendar-booking" style="padding-top: 110px;">

        <h2>Consulta con nuestro equipo legal con experiencia</h2>

        <div class="calendar-booking-wrapper">

            <mm-booking-calendar @onChange="setScheduleTime($event)"></mm-booking-calendar>

        </div>


        <button @click="nextSlide()" class="slide-btn">SIGUIENTE</button>

        <button class="prev-slide-btn" @click="prevSlide()">
         <i class="fas fa-arrow-left"></i> volver
        </button>

    </div>

</template>


<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import CalendarView from './../calendars/calendar.vue';

@Component({
  components: {
      'mm-booking-calendar':  CalendarView
  }
})
export default class BookingCalendarSlideView extends Vue {
        @Prop({default: 'isTest'}) public isTest: boolean|undefined;
    private SCHEDULE_FORM = {};

    nextSlide(): void {


        console.log(' this.SCHEDULE_FORM @booking-calendar.vue on nextSlide ')
        console.log(this.SCHEDULE_FORM)

        //this.$emit('next',{ SCHEDULE_FOR : this.SCHEDULE_FORM })
        this.$emit('goToPayU', this.SCHEDULE_FORM)
    }
    prevSlide(): void {
        this.$emit('prev')
    }

    setScheduleTime($event: any){
        this.SCHEDULE_FORM  = $event;
    }

}
</script>

<style lang="less">
    .calendar-booking {
        h1,h2,h3{color: #405162 !important;}
        background-color: #fff !important;
        .v-val{
            
            width: calc(100% - 4em) !important;

        }
    }

        .price-new{
         
      }

        .price-old{
          text-decoration: line-through;
          opacity:0.8;
      }
    
</style>


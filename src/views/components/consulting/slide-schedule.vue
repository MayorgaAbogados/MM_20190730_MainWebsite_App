<template>

    <div class="swiper-slide-wrapper servicios meetingType">

        <div class="row" style="width: 700px; height: 500px; overflow: scroll" >
             <vue-scheduler style="width: 700px;"
                                    use12
                                    :events="events"
                                    :labels="{
                                        today: 'Hoy',
                                        back: 'Atrás',
                                        next: 'Siguiente',
                                        month: 'Mes',
                                        week: 'Semana',
                                        day: 'Día',
                                        all_day: 'Todo el día'
                                    }"
                                    :time-range="[8,17]"
                                    :available-views="['month', 'day']"
                                    :initial-date="new Date()"
                                    :initial-view="'month'"
                                    :show-time-marker="true"
                                    :show-today-button="false"
                                    eventDisplay="eventDisplay"
                                    @event-clicked="eventClicked"
                                    @event-created="eventCreated"
                />
        </div>


        <button class="prev-slide-btn" @click="prevSlide()">
        <i class="fas fa-arrow-left"></i> volver
        </button>

        <button @click="nextSlide()" class="slide-btn">SIGUIENTE</button>
        
    </div>

</template>


<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { ModelSelect } from 'vue-search-select';

@Component({
  components: {
      'model-select' : ModelSelect
  }
})
export default class ScheduleServicesSlideView extends Vue {
    
    public schedule: any = {};
    private events: any[] = [];
    private events_meeting: any = {};

    setServiceMeetingType(schedule: string){
        this.schedule = schedule;
    }

    private eventCreated($event: any){
        this.events_meeting = $event;
        this.schedule = this.events_meeting;
        console.warn(' EVENT CREATED ');
        console.warn({event: this.events_meeting});

    }

    private eventClicked($event: any){
        const events = this.events.filter((event:any) => 
            !(
                (event.date.toISOString() === $event.date.toISOString()) && 
                (event.endTime === $event.endTime) && 
                (event.startTime === $event.startTime)
            )
         );
          this.events = events;
          
    }

    nextSlide(): void {
        this.$emit('change', this.schedule)
        this.$emit('next')
    }
    prevSlide(): void {
        this.$emit('change', this.schedule)
        this.$emit('prev')
    }

}
</script>



<style lang="less">
   
    .v-cal-dialog form{
        position: relative;
        width: 100%;
    }
    .v-cal-dialog footer{
        width: 100%;
    }

    .v-cal-header__title-bar{
        padding: 10px 0px;
    }
    .v-cal-header {
        padding:  10px 0px;
    }
</style>



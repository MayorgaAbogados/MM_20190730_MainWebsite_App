<template>

        <div class="row" style="box-sizing: border-box;
    padding: 0em; width: calc(100% - 20px); margin: 0px" >
             <vue-scheduler style=""
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
                                    :time-range="[8,21]"
                                    :available-views="['week']"
                                    :initial-date="new Date()"
                                    :initial-view="'week'"
                                    :show-time-marker="true"
                                    :show-today-button="false"
                                    eventDisplay="eventDisplay"
                                    @event-clicked="eventClicked"
                                    @event-created="eventCreated"
                                    
                />
        </div>

</template>


<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { ModelSelect } from 'vue-search-select';
const moment = require('moment');
const md5 = require('md5');

@Component({
  components: {
      'model-select' : ModelSelect
  }
})
export default class CalendarView extends Vue {
    
    public schedule: any = {};
    private events: any[] = [];
    private events_meeting: any = {};


    private mounted(){
        console.error(' SI ME PIERDO DE ESPERAR ')
        const url_prod = 'http://server.mayorga.com.co/api/meetings/google/calendar/busy';
        const url_dev = 'http://localhost:8000/api/meetings/google/calendar/busy';
        fetch(url_prod).then( res => res.json()).then( events => {

            events.map((event: any) => {

                const obj = {
                    id: '',
                    disabled: true,
                    date: new Date(),
                   
                    startTime:  ((event.start.split('T')[1]).split('.')[0]),
                    endTime: ((event.end.split('T')[1]).split('.')[0])
                }

                const date = moment.utc(event.start);
                const startTime =  moment.utc(event.start);
                const endTime =   moment.utc(event.end);

                obj.date = date.toDate();
                obj.startTime = startTime.toDate().toTimeString().split(' ')[0];
                obj.endTime = endTime.toDate().toTimeString().split(' ')[0];
                obj.id = md5(obj.date.toISOString() + Math.random());

    
                const startAsMinutes = (startTime.minutes() + startTime.hours() * 60);
                const endAsMinutes= (startTime.minutes() + startTime.hours() * 60);

                const isStartBefore8am = startAsMinutes < (8*60);
                const isEndBefore8am = endAsMinutes < (8*60);
                const isStartAfter6pm = startAsMinutes > (12*60 + 6*60);
                const isEndAfter6pm = endAsMinutes < (12*60 + 6*60);


                //if(startAsMinutes > 5pm)

                this.events.push(obj);
                
            })

            setTimeout(() => {
                console.warn(document.querySelectorAll('.v-cal-event-time'));
                document.querySelectorAll('.v-cal-event-time').forEach((titleElement: any) => {
                    //titleElement.innerText = 'Ocupado';
                })
            }, 500)


        })
    }

    setServiceMeetingType(schedule: string){
        this.schedule = schedule;
    }

    private eventCreated($event: any){

        const date = $event;
        let $eventStartMinutes = 0;
        let $eventEndMinutes = 0;
        let $id = '';

        this.events.map((event:any) => {
                if(
                    (event.date.toISOString() === $event.date.toISOString()) && 
                    (event.endTime === $event.endTime) && 
                    (event.startTime === $event.startTime) 
                ){

                    event.id = md5(event.date.toISOString() + Math.random());
                    $id = event.id;
                    $eventStartMinutes = parseInt(event.startTime.split(':')[0],10)*60 + parseInt(event.startTime.split(':')[1],10);
                    $eventEndMinutes =  parseInt(event.endTime.split(':')[0],10)*60 + parseInt(event.endTime.split(':')[1],10);
              
                }
            }


        );


        setTimeout(() => {
            this.events.map((event:any) => {
                
                let eventStartMinutes = parseInt(event.startTime.split(':')[0],10)*60 + parseInt(event.startTime.split(':')[1],10);
                let eventEndMinutes =  parseInt(event.endTime.split(':')[0],10)*60 + parseInt(event.endTime.split(':')[1],10);
                let hours = 0;
                let minutes = 0;

       

                if($eventStartMinutes > eventStartMinutes && $eventStartMinutes < eventEndMinutes){
 
                    hours = Math.floor(eventEndMinutes/60);
                    minutes =  Math.floor((eventEndMinutes -hours*60)); 
                    date.startTime = (hours+ '').padStart(2,'0') + ':' +(minutes+ '').padStart(2,'0');
                }

                if($eventEndMinutes > eventStartMinutes && $eventEndMinutes < eventEndMinutes){         
                    hours = Math.floor(eventStartMinutes/60);
                    minutes =  Math.floor((eventStartMinutes - hours*60)); 
                    date.endTime = (hours+ '').padStart(2,'0') + ':' +(minutes+ '').padStart(2,'0');
                }

/*
                if($eventEndMinutes - $eventStartMinutes > 2*60){         
                    hours = Math.floor($eventStartMinutes/60);
                    minutes =  Math.floor(($eventStartMinutes - hours*60)); 
                    date.endTime = (hours+ '').padStart(2,'0') + ':' +(minutes+ '').padStart(2,'0');
                }
*/
            })
            setTimeout(() => {
                    this.events.map((event:any) => {
                        
                        if(event && event.id && event.id === $id){

                            event.startTime = date.startTime;
                   
                            event.endTime = date.endTime;
                            event.timestamp = event.date.toISOString();
                            event.hours = Math.ceil(($eventEndMinutes - $eventStartMinutes) / 60);
                            event.refCode = 'MEETING:'+ event.startTime + ':' + event.endTime;

                            event.timestamp_from = moment(event.date).add($eventStartMinutes,'minutes').toDate();
                            event.timestamp_to = moment(event.date).add($eventEndMinutes,'minutes').toDate();

                            const mievent = event;
                            this.$emit('onChange', mievent)
                        }

                    })
            }, 200);
        }, 200);


    }

    private eventClicked($event: any){
        const events = this.events.filter((event:any) => 
            !(
                (event.date.toISOString() === $event.date.toISOString()) && 
                (event.endTime === $event.endTime) && 
                (event.startTime === $event.startTime) && 
                !event.disabled
            )
         );
          this.events = events;
          
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
    .v-cal{
        width: calc(100% - 70px) !important;
    }
    .v-cal-content .v-cal-event-item {
            background-color: #414141!important;
    color:#414141!important;
    }
.v-cal-content .v-cal-event-item::after {
    content: '';
    display: block;
    position: absolute;
    width: 14px;
    height: 100%;
    top: 0;
    right: 0;
    background: -webkit-gradient(linear, left top, right top, from(transparent), color-stop(75%, #414141)) !important;;
    background: linear-gradient(to right, transparent 0%, #414141 75%) !important;;
}
</style>



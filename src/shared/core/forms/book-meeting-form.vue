<template>
  <div class="mm-form budget-form init-form"  v-bind:style="{ height: (height + 250) + 'px' }">

      <div class="mm-form-background">

      </div>

      <div class="mm-form-content" ref="bookMeetingFormContent">
          <form action="" method="post">
                <div class="form-header">
                    AGENDA CITA CON ABOGADOS
                </div>
                <div class="form-body">
                    <div class="form-row">
                        <p style="padding: 0em 1em">
                           En línea, para su comodidad, agende su cita para ser atendido vía Skype, por WhatsApp, en nuestras oficinas de la Avenida El Dorado No. 68C-61 Oficina 204 Torre Central Davivienda de Bogotá D.C. – Colombia y/o a domicilio dentro del sector urbano de la Capital, por uno de nuestros abogados experto
                        </p>
                    </div>
                    <div class="form-row row-cols-2">
                        <div class="form-col">
                            <div class="input-groups">
                                <div class="input-group">
                                    <label for="name">NOMBRES Y APELLIDOS</label>
                                    <input type="text" class="form-control" id="name" name="name" required>
                                </div>
                                <div class="input-group">
                                    <label for="email">EMAIL</label>
                                    <input type="text" class="form-control" id="email" name="email" required>
                                </div>
                                <div class="input-group">
                                    <label for="phone">TELÉFONO</label>
                                    <input type="text" class="form-control" id="phone" name="phone" required>
                                </div> 
                            </div>
                        </div>
                        <div class="form-col">
                            <div class="input-groups">

                                <div class="input-group">
                                    <label for="meeting-type">TIPO DE CITA</label>
                                    <select class="form-control" id="meeting-type" name="meeting-type">
                                        <option>Presencial en nuestras oficinas</option>
                                        <option>A Domicilio</option>
                                        <option>Skype/Videollamada</option>
                                        <option>Telefónica/WhatsApp</option>
                                    </select>
                                </div>
                                
                                   <div class="input-group">
                                    <label for="company">RAZON SOCIAL EMPRESA</label>
                                    <input type="text" class="form-control" id="company" name="company" required> 
                                </div>
                                <div class="input-group">
                                    <label for="nit">NIT EMPRESA O CONSULTANTE</label>
                                    <input type="text" class="form-control" id="nit" name="nit" required> 
                                </div>
                                <div class="input-group">
                                    <label for="city">CIUDAD / MUNICIPIO </label>
                                    <!-- string value -->
                                    <model-select :options="cities"
                                    v-model="city"
                                    placeholder="Selecciona una ciudad">
                                    </model-select>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div class="form-row">
                       <vue-scheduler
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
                </div>
                 <div class="form-footer">
                     <button type="button" class="btn btn-secondary" style="margin-right: 1pc; padding: 1.25em">CANCELAR CITA</button>
                     <button type="button" class="btn btn-success" style="marging:0em;  padding: 1.25em">SOLICITAR CITA</button>
                </div>
          </form>
      </div>
    
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
export default class MeetingBookingView extends Vue {


    private events: any[] = [];
    private events_meeting: any[] = [];
    private height: any = {};
      private city: string = '';
    private cities: any[] = [];


    private mounted(): void {
        setTimeout(() => this.matchHeight(), 500);
        this.matchCities();
    }
    private eventDisplay(event: any){
        return event.customAttribute
    }
    private matchHeight () {
        this.height = (this.$refs.bookMeetingFormContent as any).offsetHeight;
    }
    private matchCities(){
            const departmentsJSON = require("../../../assets/json/municipios.json");
        const citiesJSON = [].concat.apply([],departmentsJSON.map((departmentJSON: any) => departmentJSON.ciudades));
        const cities = citiesJSON.map((cityJSON: any) => {

            const city = {
                value : {
                    city : cityJSON,
                    department: departmentsJSON.filter((departmentJSON: any) => departmentJSON.ciudades.includes(cityJSON))[0].departamento
                },
                text: cityJSON
            }

            return city;
        })

        this.cities = cities;
    }

    private eventCreated($event: any){
        this.events_meeting = $event;
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


   

}
</script>


<style lang="less">
    @import './styles/form.style.less';
    @import './styles/inputs.style.less';

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



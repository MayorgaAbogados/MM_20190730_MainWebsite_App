<template>
  <div class="view view-services" id="view">
    <mm-header></mm-header>

    <section>
      <div class="swiper-budget">
        <swiper :options="swiperOption" ref="mySwiper">

          <!-- slides -->
          <swiper-slide name="Welcome">
            <mm-slide-welcome @next="nextSlide()"></mm-slide-welcome>
          </swiper-slide>

          <swiper-slide>
            <mm-slide-name @change="setName($event)" @next="nextSlide()" @prev="prevSlide()"></mm-slide-name>
          </swiper-slide>

          <swiper-slide>
            <mm-slide-city :name="USER.name" @change="setCity($event)" @next="nextSlide()" @prev="prevSlide()"></mm-slide-city>
          </swiper-slide>
          
          <swiper-slide>
            <mm-slide-gender :name="USER.name" @change="setGender($event)" @next="nextSlide()" @prev="prevSlide()">></mm-slide-gender>
          </swiper-slide>

          
          <swiper-slide>
            <mm-slide-category :name="USER.name" @change="setCategory($event)" @next="nextSlide()" @prev="prevSlide()">></mm-slide-category>
          </swiper-slide>

          <swiper-slide> 
              <mm-slide-services 
                :category="USER.category"
                @change="setService($event)" 
                @next="nextSlide()" 
                @prev="prevSlide()">
              </mm-slide-services>
          </swiper-slide>

          <swiper-slide>
            <mm-slide-services-form 
                :category='USER.category'
                :service="USER.service"
                @change="setServiceForm($event)" 
                @next="nextSlide()" 
                @prev="prevSlide()">
              </mm-slide-services-form>
          </swiper-slide>

   
          <!-- -------------------------------------------------------  -->
          <!-- --- TIPO DE CONSULTA ----------------------------------  -->
          <!-- -------------------------------------------------------  -->
          <swiper-slide>
            <mm-slide-tipo-consulta
                @change="setServiceMeetingType($event)" 
                @next="nextSlide()" 
                @prev="prevSlide()">
              </mm-slide-tipo-consulta>
          </swiper-slide>
          <!-- -------------------------------------------------------  -->

          <!-- -------------------------------------------------------  -->
          <!-- --- INFORMACION DE CONTACTOS  -------------------------  -->
          <!-- -------------------------------------------------------  -->
         
          <swiper-slide>
            <mm-slide-info-contact
                :user="USER"
                @change="setServiceContactInfo($event)" 
                @next="nextSlide()" 
                @prev="prevSlide()">
                </mm-slide-info-contact>
          </swiper-slide>


          <!-- -------------------------------------------------------  -->
          <!-- --- ARCHIVOS ------------------------------------------  -->
          <!-- -------------------------------------------------------  -->
         
          <swiper-slide>
            <mm-slide-files
                :user="USER"
                @change="setServiceFiles($event)" 
                @next="nextSlide()" 
                @prev="prevSlide()">
            </mm-slide-files>
          </swiper-slide>
        
          <!-- -------------------------------------------------------  -->

          <!-- -------------------------------------------------------  -->
          <!-- --- HORARIO DE CONSULTA -------------------------------  -->
          <!-- -------------------------------------------------------  -->
          <swiper-slide>
            <mm-slide-schedule
                @change="setServiceSchedule($event)" 
                @next="nextSlide()" 
                @prev="prevSlide()">
            </mm-slide-schedule>
          </swiper-slide>
          <!-- -------------------------------------------------------  -->

          <!-- -------------------------------------------------------  -->
          <!-- --- CONFIRMACIÓN DE CONSULTA / PRECIO -----------------  -->
          <!-- -------------------------------------------------------  -->
          
          <swiper-slide>
            <mm-slide-confirm 
                :info="USER"
                @next="nextSlide()" 
                @prev="prevSlide()">
            </mm-slide-confirm>
          </swiper-slide>
         
          <!-- -------------------------------------------------------  -->

          <!-- -------------------------------------------------------  -->
          <!-- --- ENVIAR --------------------------------------------  -->
          <!-- -------------------------------------------------------  -->
          <swiper-slide>
            SUBMIT            
          </swiper-slide>
          <!-- -------------------------------------------------------  -->


          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>
    </section>

    <section style="display:block; position:relative;">
      <mm-footer></mm-footer>
    </section>
  </div>
</template>


<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import DefaultHeaderComponent from "@/shared/layout/headers/default.header.vue";
import LargeTitleComponent from "@/shared/core/titles/large-title.vue";
import LargeTextComponent from "@/shared/core/texts/large-text.vue";
import FooterComponent from "@/shared/layout/footers/default-footer.vue";

import BudgetFormComponent from "./../shared/core/forms/budget-form.vue";
import BookMeetingFormComponent from "./../shared/core/forms/book-meeting-form.vue";
import VIPMemberComponent from "./../shared/core/forms/vip-member-form.vue";

import { swiper, swiperSlide } from "vue-awesome-swiper";

import Swiper from "swiper";
import "swiper/dist/css/swiper.css";


import SwiperSlideWelcome from './components/consulting/slide-welcome.vue';
import SwiperSlideName from './components/consulting/slide-name.vue';
import SwiperSlideCity from './components/consulting/slide-city.vue';
import SwiperSlideGender from './components/consulting/slide-gender.vue';
import SwiperSlideCategory from './components/consulting/slide-category.vue';
import SwiperSlideServices from './components/consulting/slide-services.vue';
import SwiperSlideServicesForm from './components/consulting/slide-services-form.vue';

import SwiperSlideLaboralServices from './components/consulting/slide-laboral-services.vue';
import SwiperSlidePenalServices from './components/consulting/slide-penal-services.vue';
import SwiperSlideTributarioServices from './components/consulting/slide-tributario-services.vue';
import SwiperSlideCivilServices from './components/consulting/slide-civil-services.vue';
import SwiperSlideAmbientalServices from './components/consulting/slide-ambiental-services.vue';
import SwiperSlideAduaneroServices from './components/consulting/slide-aduanero-services.vue';

import SwiperSlideLaboralContratosServices from './components/consulting/slide-laboral-service-contratos.vue';
import SwiperSlideLaboralLiquidacionServices from './components/consulting/slide-laboral-service-liquidacion.vue';
import SwiperSlideLaboralPensionesServices from './components/consulting/slide-laboral-service-pensiones.vue';
import SwiperSlideLaboralRiesgosServices from './components/consulting/slide-laboral-service-riesgos.vue';
import SwiperSlideLaboralOtrosServices from './components/consulting/slide-laboral-service-otros.vue';


import SwiperSlideTipoConsulta from './components/consulting/slide-tipo-consulta.vue';
import SwiperSlideInfoContact from './components/consulting/slide-contact-info.vue';
import SwiperSlideSchedule from './components/consulting/slide-schedule.vue';
import SwiperSlideFiles from './components/consulting/slide-files.vue';
import SwiperSlideConfirm from './components/consulting//slide-confirm.vue';

@Component({
  components: {
    "mm-header": DefaultHeaderComponent,
    "mm-title-large": LargeTitleComponent,
    "mm-text-large": LargeTextComponent,
    "mm-footer": FooterComponent,
    "mm-budget-form": BudgetFormComponent,
    "mm-book-meeting-form": BookMeetingFormComponent,
    "mm-vip-member-form": VIPMemberComponent,
    
    'mm-slide-welcome': SwiperSlideWelcome,
    'mm-slide-name': SwiperSlideName,
    'mm-slide-city': SwiperSlideCity,
    'mm-slide-gender': SwiperSlideGender,
    'mm-slide-category': SwiperSlideCategory,
    'mm-slide-services': SwiperSlideServices,
    'mm-slide-services-form': SwiperSlideServicesForm,

    'mm-slide-laboral-services': SwiperSlideLaboralServices,
    'mm-slide-penal-services': SwiperSlidePenalServices,
    'mm-slide-tributario-services': SwiperSlideTributarioServices,
    'mm-slide-civil-services': SwiperSlideCivilServices,
    'mm-slide-ambiental-services': SwiperSlideAmbientalServices,
    'mm-slide-aduanero-services': SwiperSlideAduaneroServices,

    'mm-slide-laboral-service-contratos': SwiperSlideLaboralContratosServices,
    'mm-slide-laboral-service-liquidacion': SwiperSlideLaboralLiquidacionServices,
    'mm-slide-laboral-service-pensiones': SwiperSlideLaboralPensionesServices,
    'mm-slide-laboral-service-riesgos': SwiperSlideLaboralRiesgosServices,
    'mm-slide-laboral-service-otros': SwiperSlideLaboralOtrosServices ,

    'mm-slide-tipo-consulta': SwiperSlideTipoConsulta,
    'mm-slide-info-contact': SwiperSlideInfoContact,
    'mm-slide-schedule': SwiperSlideSchedule,
    'mm-slide-files': SwiperSlideFiles,
    'mm-slide-confirm': SwiperSlideConfirm,

    swiper,
    swiperSlide
  }
})
export default class ServicesView extends Vue {

  public swiperOption = {
    resistanceRatio: 0,
    allowTouchMove: false
  };

  public USER = {
    name: "",
    gender: "",
    birthdate: "",
    city: "BOGOTA",
    department: "BOGOTA",
    category: "",
    service: "",
    form: {},
    contact: {},
    schedule: {},
    files: {}
  };

  get swiper() {
    return (this.$refs.mySwiper as any).swiper;
  }

  get shortName() {
    return this.USER.name.split(" ")[0].replace(/^\w/, c => c.toUpperCase());
  }

  mounted() {
    this.swiper.slideTo(0, 1000, false);
  }

  nextSlide() {
    this.swiper.slideNext(1000);
    console.log('')
    console.log(' USER.category ')
    console.log(this.USER.category)
    console.log('')
  }
  prevSlide() {
    this.swiper.slidePrev(1000);
  }

  setName(name: string): void {
    this.USER.name = name;
  }

  setCity(cityAndDepartment: { city: string; department: string }): void {
    const city = cityAndDepartment.city;
    const department = cityAndDepartment.department;
    this.USER.city = city;
    this.USER.department = department;
  }

  setGender(gender: string): void {
    this.USER.gender = gender;
  }

  setCategory(category: string): void {
    this.USER.category = category;
  }

  setService(service: string): void {
    this.USER.service = service;
  }

  setServiceForm(form: any): void {
    this.USER.form = form;
  }

  setServiceContactInfo(contact: any): void {
    this.USER.contact = contact;
  }

  setServiceSchedule(schedule: any): void {
    this.USER.schedule = schedule;
  }

  setServiceFiles(files: any): void {
    this.USER.files = files;
  }

}
</script>


<style lang="less">
  @import './styles/consulting/index';
</style>



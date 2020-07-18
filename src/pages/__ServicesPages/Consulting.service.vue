<!-- 
   ----------------------------------------------------------------------------
   -- PAGE : Purchase and Booking a Consulting Meeting. -----------------------
   ----------------------------------------------------------------------------
-->



<!-- ---------------------------------------------------------------------- -->
<!-- -- HTML AND STYLES --------------------------------------------------- -->
<!-- ---------------------------------------------------------------------- -->
  <template src='./Consulting.service.html'></template>
  <style src="./Consulting.service.less" lang="less"></style>
<!-- ---------------------------------------------------------------------- -->



<!-- ---------------------------------------------------------------------- -->
<!-- -- COMPONENT --------------------------------------------------------- -->
<!-- ---------------------------------------------------------------------- -->
<script lang="ts">
  import { Component, Vue } from "vue-property-decorator";

  import Swiper from "swiper";
  import { swiper, swiperSlide } from "vue-awesome-swiper";
  import "swiper/dist/css/swiper.css";

  import DefaultHeaderComponent from "@/shared/layout/headers/default.header.vue"; 
  import DefaultFooterComponent from "@/shared/layout/footers/default-footer.vue";

  import PayUComponent from "@/shared/components/payments-components/payu/checkout.vue";

  import WelcomeSlideComponent from "./components/slides/welcome.slide.vue";
  import ContactFormSlideComponent  from "./components/slides/contact-form.slide.vue";
  import BookingCalendarSlideComponent  from "./components/slides/booking-calendar.slide.vue";

  import uploadFiles from './helpers/upload-files';
  import { createNewMeeting }  from './helpers/meeting-api';

  const RATE = 120000;
  const md5 =  require('md5');
  
  @Component({
    components: {
      swiper,
      swiperSlide,
      
      'mm-header':DefaultHeaderComponent,
      'mm-footer':DefaultFooterComponent,

      'mm-slide-welcome':WelcomeSlideComponent,
      'mm-slide-contact-form':ContactFormSlideComponent ,
      'mm-slide-booking-calendar':BookingCalendarSlideComponent,

      'mm-payu-payment': PayUComponent
    }
  })
  export default class ServicesView extends Vue {

    
    private CONTACT_FORM: any = {};
    private SCHEDULE_FORM: any = {};
    private MEETING_ID = -1;
    private SLIDE_INDEX = 0;
    

    public swiperOption = {
      resistanceRatio: 0,
      allowTouchMove: false
    };

    get SLIDE_BG() {
      return (this.SLIDE_INDEX === 2) ? 'white' : 'blue';
    }
    get swiper() {
      return (this.$refs.ConsultingSwiperRef as any).swiper;
    }

    get meetingRate(): number{
        let price = 0;
        if(this.CONTACT_FORM.typeOfMeeting === 'Skype'){
            //price = 150000;
            price = 150000;
        } 
        if(this.CONTACT_FORM.typeOfMeeting === 'Oficina'){
           //price = 250000; 
           price = 250000; 
        }
        if(this.CONTACT_FORM.typeOfMeeting === 'Domicilio'){
           //price = 350000; 
           price = 350000; 
        }
        return price;
    }

    get payment(){
        return {
            description: 'Consultoria Juridica Mayorga Abogados, ' + this.SCHEDULE_FORM.hours  + ' horas',
            referenceCode: 'MM' + md5('MM-'+(new Date()) + Math.random()+this.CONTACT_FORM.refCode + '-' + this.SCHEDULE_FORM.refCode).slice(0, 10),
            amount: this.SCHEDULE_FORM.hours*this.meetingRate,
            tax: 0.19,
            currency: 'COP',
            email: this.CONTACT_FORM.email,
            phone: this.CONTACT_FORM.phone,
            responseUrl: 'http://server.mayorga.com.co/view/payments/confirm/payu',
            confirmationUrl: 'http://server.mayorga.com.co/api/payments/confirm/payu/type/'+'meeting'+'/id/'+this.MEETING_ID 
        }
    }

    mounted() {
      this.swiper.slideTo(0, 1000, false);
      document.querySelectorAll('.v-cal-header__actions .actions-left').forEach((el: any) => el.style.display = 'none');
    }

    async goToPayU($event: any) {
        this.SCHEDULE_FORM = $event;

        const contactForm = this.CONTACT_FORM;
        const scheduleForm = this.SCHEDULE_FORM;

        // ADD NEW MEETING (payment Pending)
        const meetingId = await createNewMeeting(contactForm, scheduleForm);
        this.MEETING_ID = parseInt(meetingId + '', 10);
        console.log({meetingId, MEETING_ID: this.MEETING_ID})

        // UPLOAD FILES
        let isUploadReady;
        console.log({ files : contactForm.files});

        for(let k = 0; k < contactForm.files.length; k++){
            console.log({ file: contactForm.files[k]})
            isUploadReady = await uploadFiles(contactForm.files[k], (meetingId + ''));
        }

       
         const payu: any = (this.$refs.payu as any);
         console.log({ calendar: this.SCHEDULE_FORM})
         console.log(this.SCHEDULE_FORM.hours*RATE)
         console.log(this.payment)
         setTimeout(() => {
                payu.send();
         }, 500)
 
      
    }
    nextSlide($event: any) {

      if($event && $event.CONTACT_FORM){
        this.CONTACT_FORM = $event.CONTACT_FORM;
  
      }

      if($event && $event.SCHEDULE_FOR){
          this.SCHEDULE_FORM = $event.SCHEDULE_FORM;
      } 

            this.swiper.slideNext(1000);
        this.SLIDE_INDEX++;
        //
      
    }
    prevSlide() {
        this.SLIDE_INDEX--;
      this.swiper.slidePrev(1000);
    }


  }
</script>
<!-- ---------------------------------------------------------------------- -->





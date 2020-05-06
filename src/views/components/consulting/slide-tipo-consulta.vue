<template>

    <div class="swiper-slide-wrapper servicios meetingType">

        <div class="row cards">
            <div class="card-btn blue" v-bind:class="{ 'active' : UX.isMeetingType_Skype}" @click="setServiceMeetingType('SKYPE')">
                SKYPE
            <i class="fas fa-briefcase"></i>
            </div>

            <div class="card-btn blue" v-bind:class="{ 'active' : UX.isMeetingType_Phone}" @click="setServiceMeetingType('PHONE')">
                PHONE
            <i class="fas fa-user-friends"></i>
            </div>

            <div class="card-btn blue" v-bind:class="{ 'active' : UX.isMeetingType_Office}" @click="setServiceMeetingType('OFFICE')">
                Office
            <i class="fas fa-money-check-alt"></i>
            </div>

            <div class="card-btn blue" v-bind:class="{ 'active' : UX.isMeetingType_InHouse}" @click="setServiceMeetingType('INHOUSE')">
                Domicilio
            <i class="fas fa-balance-scale"></i>
            </div>
        </div>


        <button class="prev-slide-btn" @click="prevSlide()">
        <i class="fas fa-arrow-left"></i> volver
        </button>

        <button @click="nextSlide()" class="slide-btn">SIGUIENTE</button>
        
    </div>

</template>


<script lang="ts">
import { Component, Vue } from "vue-property-decorator";


@Component({
  components: {

  }
})
export default class LaboralServicesSlideView extends Vue {
    
    public meetingType = '';

    public UX = {
        isMeetingType_Skype: false,
        isMeetingType_Phone: false,
        isMeetingType_InHouse: false,
        isMeetingType_Office: false
    }


    setServiceMeetingType(meetingType: string){
        this.meetingType = meetingType;
        if(meetingType === 'SKYPE'){
            this.UX.isMeetingType_Skype = true;
            this.UX.isMeetingType_Phone = false;
            this.UX.isMeetingType_InHouse = false;
            this.UX.isMeetingType_Office = false;
        }
        if(meetingType === 'PHONE'){
            this.UX.isMeetingType_Skype = false;
            this.UX.isMeetingType_Phone = true;
            this.UX.isMeetingType_InHouse = false;
            this.UX.isMeetingType_Office = false;
        }
        if(meetingType === 'OFFICE'){
            this.UX.isMeetingType_Skype = false;
            this.UX.isMeetingType_Phone = false;
            this.UX.isMeetingType_InHouse = false;
            this.UX.isMeetingType_Office = true;
        }
        if(meetingType === 'INHOUSE'){
            this.UX.isMeetingType_Skype = false;
            this.UX.isMeetingType_Phone = false;
            this.UX.isMeetingType_InHouse = true;
            this.UX.isMeetingType_Office = false;
        }



    }
    nextSlide(): void {
        this.$emit('next')
    }
    prevSlide(): void {
        this.$emit('prev')
    }

}
</script>




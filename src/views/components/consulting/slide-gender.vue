<template>
<div class="swiper-slide-wrapper username">
              <h1>{{ shortName }}, ¿Cual es tu genero ?</h1>
             
              <div class="row">
                <div class="push-btn blue" v-bind:class="{ 'active' : UX.isGenderMale}" @click="setGender('MALE')">
                  <i class="fas fa-mars"></i>
                </div>
                <div class="push-btn pink" v-bind:class="{ 'active' : UX.isGenderFemale}" @click="setGender('FEMALE')">
                  <i class="fas fa-venus "></i>
                </div>
                <div class="push-btn gray" v-bind:class="{ 'active' : UX.isGenderOther}" @click="setGender('OTHER')">  
                  otro
                </div>
              </div>

              <button class="prev-slide-btn" @click="prevSlide()">
                <i class="fas fa-arrow-left"></i> volver
              </button>
              <button @click="nextSlide()" class="slide-btn">SIGUIENTE</button>
            </div>
</template>


<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";


@Component({
  components: {

  }
})
export default class GenderSlideView extends Vue {

  @Prop({default: 'name'}) public name: string|undefined;

    public USER = {
        gender: "",
    };


  public UX = {
    isGenderMale : false,
    isGenderFemale : false,
    isGenderOther : false,
  };

    nextSlide(): void {
        this.$emit('change', this.USER.gender)
        this.$emit('next');
    }

    prevSlide(){
        this.$emit('change', this.USER.gender)
        this.$emit('prev');
    }

      get shortName() {
        return this.name ? this.name.split(" ")[0].replace(/^\w/, c => c.toUpperCase()) : '';
    }
    
  setGender(gender: string): void {
      this.USER.gender =gender;
    if(gender === 'MALE'){
      this.UX.isGenderMale = true;
      this.UX.isGenderFemale = false;
      this.UX.isGenderOther = false;
    }
     if(gender === 'FEMALE'){
      this.UX.isGenderMale = false;
      this.UX.isGenderFemale = true;
      this.UX.isGenderOther = false;
    }
     if(gender === 'OTHER'){
      this.UX.isGenderMale = false;
      this.UX.isGenderFemale = false;
      this.UX.isGenderOther = true;
    }
  }

}
</script>




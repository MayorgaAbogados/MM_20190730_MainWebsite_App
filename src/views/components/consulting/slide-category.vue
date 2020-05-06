<template>
<div class="swiper-slide-wrapper username">
              <h1>{{ shortName }}, ¿De que tipo es tu consulta?</h1>
             
              <div class="row cards">

                <div class="card-btn blue" v-bind:class="{ 'active' : UX.isLaboralCategory}" @click="setCategory('LABORAL')">
                  LABORAL
                  <i class="fas fa-briefcase"></i>
                </div>

                <div class="card-btn blue" v-bind:class="{ 'active' : UX.isCivilCategory}" @click="setCategory('CIVIL')">
                  CIVIL
                  <i class="fas fa-user-friends"></i>
                </div>

                 <div class="card-btn blue" v-bind:class="{ 'active' : UX.isTributarioCategory}" @click="setCategory('TRIBUTARIO')">
                  TRIBUTARIO
                  <i class="fas fa-money-check-alt"></i>
                </div>

                 <div class="card-btn blue" v-bind:class="{ 'active' : UX.isPenalCategory}" @click="setCategory('PENAL')">
                  PENAL
                  <i class="fas fa-balance-scale"></i>
                </div>

                 <div class="card-btn blue" v-bind:class="{ 'active' : UX.isAduaneroCategory}" @click="setCategory('ADUANERO')">
                     
                  ADUANERO
                  <i class="fas fa-ship"></i>
                </div>

                 <div class="card-btn blue" v-bind:class="{ 'active' : UX.isAmbientalCategory}" @click="setCategory('AMBIENTAL')">
                  AMBIENTAL
                  <i class="fas fa-tree"></i>
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
export default class CategorySlideView extends Vue {

  @Prop({default: 'name'}) public name: string|undefined;

    public USER = {
        category: "",
    };


  public UX = {
    isLaboralCategory: false,
    isCivilCategory: false,
    isTributarioCategory:false,
    isAduaneroCategory: false,
    isPenalCategory: false,
    isAmbientalCategory: false,
  };

    nextSlide(): void {
        this.$emit('change', this.USER.category)
        this.$emit('next');
    }

    prevSlide(){
        this.$emit('change', this.USER.category)
        this.$emit('prev');
    }

      get shortName() {
        return this.name ? this.name.split(" ")[0].replace(/^\w/, c => c.toUpperCase()) : '';
    }
    
  setCategory(category: string): void {
    
    this.USER.category = category;

    if(category === 'LABORAL'){
     this.UX.isLaboralCategory =  true;
     this.UX.isCivilCategory =  false;
     this.UX.isTributarioCategory =  false;
     this.UX.isAduaneroCategory =  false;
     this.UX.isPenalCategory =  false;
     this.UX.isAmbientalCategory =  false;
    }
    
    if(category === 'CIVIL'){
     this.UX.isLaboralCategory =  false;
     this.UX.isCivilCategory =  true;
     this.UX.isTributarioCategory =  false;
     this.UX.isAduaneroCategory =  false;
     this.UX.isPenalCategory =  false;
     this.UX.isAmbientalCategory =  false;
    } 

    if(category === 'TRIBUTARIO'){
     this.UX.isLaboralCategory =  false
     this.UX.isCivilCategory =  false;
     this.UX.isTributarioCategory =  true;
     this.UX.isAduaneroCategory =  false;
     this.UX.isPenalCategory =  false;
     this.UX.isAmbientalCategory =  false;
    } 

    if(category === 'ADUANERO'){
     this.UX.isLaboralCategory =  false
     this.UX.isCivilCategory =  false;
     this.UX.isTributarioCategory =  false;
     this.UX.isAduaneroCategory =  true;
     this.UX.isPenalCategory =  false;
     this.UX.isAmbientalCategory =  false;
    } 

    if(category === 'PENAL'){
     this.UX.isLaboralCategory =  false
     this.UX.isCivilCategory =  false;
     this.UX.isTributarioCategory =  false;
     this.UX.isAduaneroCategory = false;
     this.UX.isPenalCategory =  true;
     this.UX.isAmbientalCategory =  false;
    } 

    if(category === 'AMBIENTAL'){
     this.UX.isLaboralCategory =  false
     this.UX.isCivilCategory =  false;
     this.UX.isTributarioCategory =  false;
     this.UX.isAduaneroCategory = false;
     this.UX.isPenalCategory = false;
     this.UX.isAmbientalCategory =  true;
    } 



  }

}
</script>




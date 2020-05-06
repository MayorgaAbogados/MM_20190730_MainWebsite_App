<template>

    <div class="swiper-slide-wrapper servicios laboral">
        <h1> LABORAL / PENSIONES </h1>
        <div class="row cards">

           <form> 

           </form>

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

    nextSlide(): void {
        this.$emit('next')
    }


    prevSlide(): void {
        this.$emit('prev')
    }

}
</script>




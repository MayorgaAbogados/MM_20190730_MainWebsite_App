<template>

    <div class="swiper-slide-wrapper servicios laboral">
        <h1>Servicios Derecho Ambiental</h1>
        <button @click="nextSlide()" class="slide-btn">CONSULTAR</button>
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

}
</script>




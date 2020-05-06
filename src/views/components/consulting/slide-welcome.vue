<template>

    <div class="swiper-slide-wrapper welcome">
        <h1>¿Tiene algún problema legal?</h1>
        <h2>Consulta con nuestro equipo legal con experiencia</h2>
        <button @click="nextSlide()" class="slide-btn">CONSULTAR</button>
    </div>

</template>


<script lang="ts">
import { Component, Vue } from "vue-property-decorator";


@Component({
  components: {

  }
})
export default class WelcomeSlideView extends Vue {

    nextSlide(): void {
        this.$emit('next')
    }

}
</script>




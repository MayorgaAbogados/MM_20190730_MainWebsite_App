<template>

    <div class="swiper-slide-wrapper welcome">

        <h1>¿Tiene algún problema legal?</h1>
        <h2>Consulta con nuestro equipo legal con experiencia</h2>

        <button @click="nextSlide()" class="slide-btn">COMENZAR</button>

  

    </div>

</template>


<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";


@Component({
  components: {

  }
})
export default class WelcomeSlideView extends Vue {
        @Prop({default: 'isTest'}) public isTest: boolean|undefined;

    nextSlide(): void {
        this.$emit('next')
    }
    prevSlide(): void {
        this.$emit('prev')
    }

}
</script>




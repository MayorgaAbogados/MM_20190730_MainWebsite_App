<template>

    <div class="swiper-slide-wrapper servicios laboral">
        <h1>¿ Que servicio podemos ofrecerte ?</h1>
        <div class="row cards">

            <div class="card-btn" @click="setService('CONTRATOS')" :class="{ 'active': SERVICE === 'CONTRATOS' }">
                <div class="card-title"> CONTRATOS </div>
                <div class="card-picture"><i class="fas fa-balance-scale"></i></div>
                <div class="card-description"></div>
            </div>

            <div class="card-btn" @click="setService('LIQUIDACION')" :class="{ 'active': SERVICE === 'LIQUIDACION' }">
                <div class="card-title"> LIQUIDACIÓN</div>
                <div class="card-picture"><i class="fas fa-balance-scale"></i></div>
                <div class="card-description"></div>
            </div>

            <div class="card-btn" @click="setService('PENSIONES')" :class="{ 'active': SERVICE === 'PENSIONES' }">
                <div class="card-title"> PENSIONES </div>
                <div class="card-picture"><i class="fas fa-balance-scale"></i></div>
                <div class="card-description"></div>
            </div>

            <div class="card-btn" @click="setService('RIESGOS')" :class="{ 'active': SERVICE === 'RIESGOS' }">
                <div class="card-title"> RIESGOS LABORALES </div>
                <div class="card-picture"><i class="fas fa-balance-scale"></i></div>
                <div class="card-description"></div>
            </div>

            <div class="card-btn" @click="setService('OTROS')" :class="{ 'active': SERVICE === 'OTROS' }">
                <div class="card-title"> OTROS </div>
                <div class="card-picture"><i class="fas fa-balance-scale"></i></div>
                <div class="card-description"></div>
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

public SERVICE = '';

setService(service: string): void {
    this.SERVICE = service;
}

        nextSlide(): void {
        this.$emit('change', this.SERVICE)
        this.$emit('next')
    }


    prevSlide(): void {
        this.$emit('prev')
    }

}
</script>




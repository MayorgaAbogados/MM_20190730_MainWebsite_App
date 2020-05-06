<template>

    <div class="swiper-slide-wrapper servicios">
        <h1>¿ Que servicio podemos ofrecerte de nuestro departamento de derecho {{ categoryName }} ?</h1>

        <div class="row cards">

            <div class="card-btn" v-for="service in servicesList" :key="service.name" 
                @click="setService(service.name)" :class="{ 'active': SERVICE === service.name }">
                <div class="card-title"> {{ service.name }} </div>
                <div class="card-picture"><i class="fas fa-balance-scale"></i></div>
                <div class="card-description"> </div>
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
const consulting = require('./../../../assets/consulting.json');


@Component({
  components: {

  }
})
export default class ServicesSlideView extends Vue {
    
    @Prop({default: 'category'}) public category: string|undefined;

    public SERVICE = '';
    public SERVICES = [];


    get categoryName(){
        return (this.category || '').toLowerCase();
    }

    get servicesList(){
        try {
            const category = this.category;
            if(consulting.filter((item: any) => item.category === category)[0]){
                const services: any = consulting.filter((item: any) => item.category === category)[0].services;
                return services;
            } else {
                return [];
            }

        } catch(error){
            console.error(error);
            return [];
        }
    }

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




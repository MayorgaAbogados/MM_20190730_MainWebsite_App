<template>
    <div class="swiper-slide-wrapper usercity">
    <h1>{{ shortName }}, ¿Estas en Bogotá?</h1>

    <div class="row">
    <div
        class="push-btn gray"
        v-bind:class="{ 'active' : UX.isCityBogota}"
        @click="UX.isCityBogota = true"
    >SI</div>
    <div
        class="push-btn gray"
        v-bind:class="{ 'active' : !UX.isCityBogota}"
        @click="UX.isCityBogota = false"
    >NO</div>
    </div>

    <div class="row" v-if="!UX.isCityBogota">
        <multiselect v-model="DATA.cityStr" :options="DATA.citiesStr"></multiselect>
    </div>

    <button class="prev-slide-btn" @click="prevSlide()">
    <i class="fas fa-arrow-left"></i> volver
    </button>
    <button @click="nextSlide()" class="slide-btn">SIGUIENTE</button>
    </div>
</template>


<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import Multiselect from 'vue-multiselect';
import 'vue-multiselect/dist/vue-multiselect.min.css';


@Component({
  components: {
    Multiselect,
  }
})
export default class NameSlideView extends Vue {

    @Prop({default: 'name'}) public name: string|undefined;

    public USER = {
        name: "",
        gender: "",
        birthdate: "",
        city: "",
        department: "",
    };

    
    public UX = {
        isCityBogota: true,
        isGenderMale : false,
        isGenderFemale : false,
        isGenderOther : false,
    };
    

    public DATA: any = {
        cities: [],
        citiesStr: [],
        city: {},
        cityStr: '',
    }

     mounted() {
          
            const departmentsJSON = require("../../../assets/json/municipios.json");
            const citiesJSON = [].concat.apply([], departmentsJSON.map((departmentJSON: any) => departmentJSON.ciudades));
            const cities = citiesJSON.map((cityJSON: any) => { 
                return {
                    value: {
                        city: cityJSON,
                        department: departmentsJSON.filter((departmentJSON: any) =>
                            departmentJSON.ciudades.includes(cityJSON)
                        )[0].departamento
                        },
                    text: cityJSON
                };
             });
            this.DATA.cities = cities;
            this.DATA.citiesStr = cities.map(city => city.value.city);
            this.DATA.city = cities[0];
            this.DATA.cityStr = this.DATA.citiesStr[0];

     }

    nextSlide(): void {
        const city = this.DATA.cityStr;
        const department = this.DATA.cities.filter(((kCities: any) => kCities.text === city))[0].value.department;
        this.$emit('change', { city: city , department: department } )
        this.$emit('next');
    }

    prevSlide(){
        const city = this.USER.city;
        const department = this.DATA.cities.filter(((kCities: any) => kCities.text === city))[0].value.department;
        this.$emit('change', { city: city , department: department } )
        this.$emit('prev');
    }

    get shortName() {
        return this.name ? this.name.split(" ")[0].replace(/^\w/, c => c.toUpperCase()) : '';
    }

}
</script>




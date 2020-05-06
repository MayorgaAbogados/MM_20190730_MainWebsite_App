<template>

 <div class="swiper-slide-wrapper username">
              <h1>¿Como te llamas?</h1>
              <input class="slide-text" type="text" v-model="USER.name" />
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
export default class NameSlideView extends Vue {

    public USER = {
        name: "",
        gender: "",
        birthdate: "",
        city: ""
    };

    nextSlide(): void {
        this.$emit('change', this.USER.name)
        this.$emit('next');
    }

    prevSlide(){
        this.$emit('change', this.USER.name)
        this.$emit('prev');
    }

}
</script>




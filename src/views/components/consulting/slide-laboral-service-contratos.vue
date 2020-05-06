<template>

    <div class="swiper-slide-wrapper servicios laboral">

   
        <form class="mm-form-content" action="" method="post" v-on:submit.prevent="onSubmit">
            <div class="form-row row-cols-2">
                <div class="form-col" style="padding:1em">
                    <div class="input-groups">
                        <div class="input-group">
                            <label for="name">PARAMETRO 1</label>
                            <input type="text" class="form-control" id="name" name="name" v-model="form.param1" required>
                        </div>
                        <div class="input-group">
                            <label for="email">PARAMETRO 2</label>
                            <input type="text" class="form-control" id="email" name="email" v-model="form.param2" required>
                        </div>
                        <div class="input-group">
                            <label for="phone">PARAMETRO 3</label>
                            <input type="text" class="form-control" id="phone" name="phone" v-model="form.param3" required>
                        </div> 
                        <div class="input-group">
                            <label for="skype">PARAMETRO 4</label>
                            <input type="text" class="form-control" id="skype" name="skype" v-model="form.param4">
                        </div>
                    </div>
                </div>
                <div class="form-col" style="padding:1em">
                    <div class="input-groups">
                        <div class="input-group">
                            <label for="category">PARAMETRO 5</label>
                            <select class="form-control" id="category" name="category" v-model="form.param5">
                                <option>PARAMETRO 5, Opcion 1</option>
                                <option>PARAMETRO 5, Opcion 2</option>
                                <option>PARAMETRO 5, Opcion 3</option>
                                <option>PARAMETRO 5, Opcion 4</option>
                                <option>PARAMETRO 5, Opcion 5</option>
                            </select>
                        </div>
                        <div class="input-group">
                            <label for="comment">COMENTARIOS ADICIONALES </label>
                            <textarea id="comment" name="comment" rows="8" v-model="form.comment"></textarea>
                        </div>
                    </div>
                </div>
            </div>
        </form>


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
    
    public form: any = {}

    nextSlide(): void {
        this.$emit('next')
    }


    prevSlide(): void {
        this.$emit('prev')
    }

}
</script>




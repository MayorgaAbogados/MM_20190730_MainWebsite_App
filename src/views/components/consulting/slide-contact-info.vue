<template>

    <div class="swiper-slide-wrapper servicios contact-info">

        <form class="mm-form-content">
            <div class="row">
                <div class="col">

                    <div class="input-groups">
                        <div class="input-group">
                            <label for="name"> Nombre </label>
                            <input type="text" class="form-control" id="name" name="name" v-model="contact.name" required>
                        </div>
                    </div>

                    <div class="input-groups">
                        <div class="input-group">
                            <label for="email"> Correo </label>
                            <input type="email" class="form-control" id="email" name="email" v-model="contact.email" required>
                        </div>
                    </div>

                    <div class="input-groups">
                        <div class="input-group">
                            <label for="cc"> C.C </label>
                            <input type="text" class="form-control" id="cc" name="cc" v-model="contact.cc" required>
                        </div>
                    </div>

                    <div class="input-groups">
                        <div class="input-group">
                            <label for="phone"> Teléfono </label>
                            <input type="text" class="form-control" id="phone" name="phone" v-model="contact.phone" required>
                        </div>
                    </div>

    
          

                </div>
                <div class="col">

                    <div class="input-groups">
                        <div class="input-group">
                            <label for="contact1"> Contact 1 </label>
                            <input type="text" class="form-control" id="contact1" name="contact1" v-model="contact.contact1" required>
                        </div>
                    </div>

                    <div class="input-groups">
                        <div class="input-group">
                            <label for="contact2"> Contact 2 </label>
                            <input type="email" class="form-control" id="contact2" name="contact2" v-model="contact.contact2" required>
                        </div>
                    </div>

                    <div class="input-groups">
                        <div class="input-group">
                            <label for="contact3"> Contact 3 </label>
                            <input type="text" class="form-control" id="contact3" name="contact3" v-model="contact.contact3" required>
                        </div>
                    </div>

                    <div class="input-groups">
                        <div class="input-group">
                            <label for="contact4"> Contact 3 </label>
                            <input type="text" class="form-control" id="contact4" name="contact4" v-model="contact.contact4" required>
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
export default class ContacInfoServicesSlideView extends Vue {
    
    public contact: any = {};
    
    nextSlide(): void {
        this.$emit('change', this.contact)
        this.$emit('next')
    }
    prevSlide(): void {
        this.$emit('change', this.contact)
        this.$emit('prev')
    }

}
</script>




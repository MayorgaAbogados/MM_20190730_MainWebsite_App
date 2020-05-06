<template>

    <div class="swiper-slide-wrapper servicios files">

        <form class="mm-form-content">
            <div class="row">
                <div class="col">

             <div class="input-group upload-multiple-files" style=" display:block;   padding-top: 1.5em;">
                                <label style="display:block">ARCHIVOS ADJUNTOS </label>

                                <input type="file" name="file" id="file" class="inputfile" @change="onChangeUploadFile" ref="mmFileUploadRef" multiple />
                                <label for="file" class="inputfile-label" style="display:block; margin: 0 auto;"> Agregar Archivos </label>
             </div>

                </div>
                <div class="col">

                   <div class="input-groups">
                                <div class="input-group upload-multiple-files" style="    padding-top: 1.5em;">
    
                                <ul class="file-list">
                                   <li v-for="(file, index)  of files" v-bind:key="index"> 

                                       <div class="left">
                                        <span>{{ file.name }} </span>
                                       </div>

                                       <div class="middle">

                                       </div>

                                       <div class="right">
                                           <i class="far fa-trash-alt"></i>
                                       </div>
                                    
                                    </li> 
                                </ul>
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
export default class FilesServicesSlideView extends Vue {
    
    private files: any[] = [];

    private onChangeUploadFile() : void{
        // mmFileUploadRef
        this.files = (this.$refs.mmFileUploadRef as any).files;
        console.log('files')
        console.log(this.files)
    }
    
    nextSlide(): void {
        this.$emit('change', this.files)
        this.$emit('next')
    }
    prevSlide(): void {
        this.$emit('change', this.files)
        this.$emit('prev')
    }

}
</script>




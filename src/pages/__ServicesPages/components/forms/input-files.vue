


<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

import MMInputTextComponent from "./../forms/input-text.vue";


@Component({
  components: {
      'mm-input-text': MMInputTextComponent
  }
})
export default class ContactFormSlideView extends Vue {

    @Prop({default: 'optional'}) public optional: boolean|undefined;
    @Prop({default: 'index'}) public index: number|undefined;
    @Prop({default: 'label'}) public label: string|undefined;
    @Prop({default: 'error'}) public error: string|undefined;
    @Prop({default: 'placeholder'}) public placeholder: string|undefined;

    private isError: boolean = false;
    private isTyping: boolean = false;
    private TEXT: string = '';
    private FILES: any[] = [];

    handleFileUpload(){
        this.FILES = (this.$refs.file as any).files;
        this.$emit('onChange', this.FILES)

    }


    checkError(){
        if(this.optional === true){ } else {
            this.isError = false;
            this.$emit('onChange', this.TEXT)
            if(this.TEXT && this.TEXT.length > 0){
                this.isError = false;
                this.$emit('onChange', this.TEXT)
            } else {
                this.isError = true;
            }
        }
    }

    nextSlide(): void {
        this.$emit('next')
    }
    prevSlide(): void {
        this.$emit('prev')
    }

    isTypingOn(){
        this.isTyping = true;
        this.isError = false;
    }
    isTypingOff(){
        this.isTyping = false;
        this.checkError();
    }

    getFileIcon(type: string){
        return '';
    }

}
</script>


<template>
        
    <div class="mm-input-group">

        <div class="input-group-label">
            <h5>{{ index }} </h5>
            <h2>{{ label }}</h2>
        </div>

        <div class="input-group-input">

                <input type="file" name="file" id="file" ref="file" class="inputfile" multiple v-on:change="handleFileUpload()"  />
                <label for="file" class="inputfile-label" style="display:block; margin: 2em auto;"> Agregar Archivos </label>


                <ul>
                    <li v-for="FILE of FILES" :key="FILE.name"> 

                        <img v-if="getFileIcon(FILE.type)" :src="getFileIcon(FILE.type)">

                        {{ FILE.name }} 
                        
                    </li>
                </ul>
                

            <div class="input-group-input-error" :class="{ 'hidden' : !isError }">
                {{ error }}
            </div>
        </div>

    </div>

</template>

<style scoped lang="less">
      @import './input.styles.less';
    .inputfile {
        width: 0.1px;
        height: 0.1px;
        opacity: 0;
        overflow: hidden;
        position: absolute;
        z-index: -1;
    }

    .inputfile + label {
        font-size: 1.25em;
        font-weight: 700;
        color: #405162;
        background-color: white;
        border-radius: 1em;
        border: 1px solid white;
        display: inline-block;
        max-width: 250px;
        padding: 1em;
        margin: 1em;
    }

    ul{
        max-width: 400px;
        display: block;
        margin: 0 auto;
        padding: 0px;
        list-style-type:none;
    }

.inputfile:focus + label,
.inputfile + label:hover {
    background-color: @color-gray;
}

.inputfile + label {
	cursor: pointer; /* "hand" cursor */
}

.inputfile:focus + label {
	outline: 1px dotted #000;
	outline: -webkit-focus-ring-color auto 5px;
}

.inputfile + label * {
	pointer-events: none;
}
</style>

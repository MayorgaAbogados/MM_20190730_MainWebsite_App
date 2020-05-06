


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

}
</script>


<template>
        
    <div class="mm-input-group">

        <div class="input-group-label">
            <h5>{{ index }} </h5>
            <h2>{{ label }}</h2>
        </div>

        <div class="input-group-input">
            <div class="input-group-input-wrapper" :class="{ 'error' : isError }">
                <textarea v-model="TEXT" @focus="isTypingOn()" @blur="isTypingOff()"></textarea>
            </div>
            <div class="input-group-input-error" :class="{ 'hidden' : !isError }">
                {{ error }}
            </div>
        </div>

    </div>

</template>

<style lang="less">
      @import './input.styles.less';
</style>

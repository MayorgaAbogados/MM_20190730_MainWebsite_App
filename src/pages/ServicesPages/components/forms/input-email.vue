


<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

import MMInputTextComponent from "./../forms/input-text.vue";


@Component({
  components: {
      'mm-input-text': MMInputTextComponent
  }
})
export default class ContactFormSlideView extends Vue {

    @Prop({default: 'index'}) public index: number|undefined;
    @Prop({default: 'label'}) public label: string|undefined;
    @Prop({default: 'error'}) public error: string|undefined;
    @Prop({default: 'placeholder'}) public placeholder: string|undefined;

    private isError: boolean = false;
    private isTyping: boolean = false;
    private TEXT: string = '';


    setText($event: any){
        this.TEXT = $event.target.value;

    }

    checkError(){
        if(this.TEXT && this.TEXT.length > 0 && this.TEXT.includes('@') && this.TEXT.includes('.')){
            this.isError = false;
            this.$emit('onChange', this.TEXT)
        } else {
            this.isError = true;
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
        this.checkError();
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
                <input type="email" required @change="setText" @focus="isTypingOn()" @blur="isTypingOff()">
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
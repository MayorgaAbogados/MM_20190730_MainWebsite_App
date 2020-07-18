<template>
    <div class="mm-input">
        
        <div class="mm-input--row" style="margin-bottom:5px">

            <div class="mm-input--index"> 
                <span> {{ index }}. </span> 
            </div>

            <div class="mm-input--label">
                {{ label }} :
            </div>

        </div>
        

        <div class="mm-input--row">
            <div :class="wrapperClass">
                <textarea rows="5" 
                    v-model="TEXT" 
                    @focus="isTypingOn()" 
                    @blur="isTypingOff()" >

                </textarea>
            </div>
        </div>

        <div class="mm-input--row">
            <span class="mm-input-error" :style="{ 'visibility' : (error ? 'visible':'hidden') }">
                {{ error }} <div v-if="!error">-</div>
            </span>
        </div>  


    </div>
</template>

<script lang="ts">
import { Component, Vue , Prop} from 'vue-property-decorator';

@Component({
  components: {},
})
export default class InputCommentComponent extends Vue {

    public TEXT = '';

    @Prop({default: ''}) public placeholder: string|undefined;
    @Prop({default: ''}) public error: string|undefined;
    @Prop({default: ''}) public value: string|undefined;
    @Prop({default: ''}) public label: string|undefined;
    @Prop({default: 0}) public index: number|undefined;

    isTypingOn(){

    }

    isTypingOff(){
        this.$emit('onChange', this.TEXT)
    }

get wrapperClass(): string{
    return 'mm-input--wrapper ' + (this.error ? 'error' : '')
}

}
</script>

<style  lang="less">

    @import (once) '../input-style';

</style>

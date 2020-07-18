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
           <div class="mm-input-bullets">
            
               <div class="mm-input-bullet" v-for="option of bullets" :key="JSON.stringify(option)">
                   <div class="mm-input-bullet--wrapper" style="cursor:pointer">
                        <input type="radio" 
                        @click="onChange(option)"
                        :name="group" 
                        :value="option.value" 
                        :checked="value.name === option.name"> 
                        <label> {{ option.name }} </label>
                        <p v-html="option.html" v-if="option.html"></p>
                   </div>
               </div>

           </div>
        </div>



    </div>
</template>

<script lang="ts">
import { Component, Vue , Prop} from 'vue-property-decorator';

@Component({
  components: {},
})
export default class InputRadioComponent extends Vue {


    @Prop({default: 0 })  public index: number|undefined;
    @Prop({default: {} }) public value: any|undefined;
    @Prop({default: '' }) public label: string|undefined;
    @Prop({default: '' }) public group: string|undefined;
    @Prop({default: [] }) public bullets: any[]|undefined;

    get wrapperClass(): string{
        return 'mm-input--wrapper '
    }

    private mounted(): void {

    }

    onChange($event: any){
        this.$emit('onChange', $event)
    }

}
</script>

<style lang="less">

    @import (once)  '../input-style';
    

</style>

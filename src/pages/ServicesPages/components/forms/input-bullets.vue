


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
    @Prop({default: 'options'}) public options: string[]|undefined;
    @Prop({default: 'labels'}) public labels: string[]|undefined;
    @Prop({default: 'enableLabels'}) public enableLabels: boolean|undefined;

    private isError: boolean = false;
    private OPTION: any = {};


    setOption($event: any){
        console.warn('')
        console.warn('setOption($event: any){')
        console.warn($event.target.value)
        console.warn('')
        this.$emit('onChange', $event.target.value)
    }

    checkError(){
        
    }

    nextSlide(): void {
        this.$emit('next')
    }
    prevSlide(): void {
        this.$emit('prev')
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


     
                
                <div class="radio-button-row">

                    <div class="radio-button-btn" v-for="(option, index) of options" :key="index">
                            
                            <input type="radio" :id="option+index" :name="option+index" :value="option" v-model="OPTION" @click="setOption">
                            <label :for="option+index">{{ options[index] }}</label><br>
                            <div v-if="enableLabels">
                                <label  :for="option+index" v-html="labels[index]"></label>
                            </div>

                    </div>
                      
                </div>

            

        </div>

    </div>

</template>

<style scoped lang="less">
      @import './input.styles.less';
      .input-group-input-wrapper{
          background-color: none;
          border: none;
          color: white;
      }
      .input-group-input{
        
      }
      .radio-button-btn{
          width: fit-content;
          padding: 1em;
      }
      .radio-button-row{
   display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-justify-content: flex-start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    -webkit-align-content: stretch;
    -ms-flex-line-pack: stretch;
    align-content: stretch;
    -webkit-align-items: flex-start;
    -ms-flex-align: start;
    align-items: flex-start;
      }

  
</style>

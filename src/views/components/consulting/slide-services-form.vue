<template>

    <div class="swiper-slide-wrapper servicios laboral">

   
        <form class="mm-form-content" action="" method="post" v-on:submit.prevent="onSubmit">
            
            <div class="row">
                <div :class="getColClass()" v-for="(col, index) in inputsLayout.cols" :key="index">

                    <div v-for="(input) in inputsFormByCol(col)">

                        <div class="input-groups">

                            <div v-if="input.type === 'text'">
                                <div class="input-group">
                                    <label :for="input.id"> {{ input.name }} </label>
                                    <input type="text" class="form-control" :id="input.id" :name="input.id" v-model="form[input.id]" required>
                                </div>
                            </div>

                            <div v-if="input.type === 'options'">
                                <div class="input-group">
                                    <label :for="input.id" > {{ input.name }} </label>
                                    <select class="form-control" :name="input.id" v-model="form[input.id]" >
                                        <option v-for="option in input.options">
                                            {{ option }}
                                        </option>
                                    </select>
                                </div>
                            </div>

                            <div v-if="input.type === 'textarea'">
                                <div class="input-group">
                                    <label :for="input.id"> {{ input.name }} </label>
                                    <textarea rows="8" :id="input.id" :name="input.id" v-model="form[input.id]"></textarea>
                                </div>
                            </div>

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
import { Component, Vue, Prop } from "vue-property-decorator";
const consulting = require('./../../../assets/consulting.json');

@Component({
  components: {

  }
})
export default class ServicesSlideFormView extends Vue {
    
    @Prop({default: 'category'}) public category: string|undefined;
    @Prop({default: 'service'}) public service: string|undefined;

    public form: any = {}
    public cols: number = 0;

    get categoryName(){
        return (this.category || '').toLowerCase();
    }

    get inputsForm(){
        try{
            const category = this.category;
            const service = this.service;
            if(consulting.filter((item: any) => item.category === category)[0]){
                const services: any = consulting.filter((item: any) => item.category === category)[0].services;
                const form = services.filter((item: any) => item.name === service)[0];
                if(form && form.form){
                    return form.form; 
                } else {
                    return []
                }
                
            } else {
                return [];
            }
            
        }catch(error){
            console.error(error);
            return [];
        }
    }

    get inputsLayout(){
        try{
            const category = this.category;
            const service = this.service;
            const service_filter = consulting.filter((item: any) => item.category === category)[0];
            if(service_filter){
                 const services: any = consulting.filter((item: any) => item.category === category)[0].services;
                const form = services.filter((item: any) => item.name === service)[0];
                if(form && form.layout){
                    const cols = form.layout.cols;
                    this.cols = cols;
                    return {
                        cols : [...Array(cols).keys()]
                    }
                } else {
                    return{
                        cols : []
                    }
                }
                
            } else {
                return {
                    cols: []
                }
            }
           
        }catch(error){
            console.error(error);
            return [];
        }
    }

    inputsFormByCol(col: number){
        return this.inputsForm.filter((item: any) => item.col === col);
    }

    nextSlide(): void {
        this.$emit('change', this.form)
        this.$emit('next')
    }


    prevSlide(): void {
        this.$emit('change', this.form)
        this.$emit('prev')
    }

    getColClass(){
        return 'col-md-' + parseInt((12 / this.cols) + '')
    }

}
</script>


<style lang="less">

    form.mm-form-content{
        width: 100%;
        max-width: 1000px;
        margin: 0 auto;
        box-sizing: border-box;
        padding: 1em;
    }


</style>



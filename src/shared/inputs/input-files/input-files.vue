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
            <div :class="wrapperClass" style=" background-color: rgba(0,0,0,0); border: none ">
                
                <input type="file" name="file" id="file" ref="file" class="inputfile" multiple v-on:change="handleFileUpload()"  />
                
                <label for="file" class="inputfile-label" style="display:block;"> Agregar Archivos </label>


                <ul>
                    <li v-for="FILE of FILES" :key="FILE.name"> 

                        <img v-if="getFileIcon(FILE.type)" :src="getFileIcon(FILE.type)">

                        {{ FILE.name }} 
                        
                    </li>
                </ul>
                


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
export default class InputTextComponent extends Vue {

    @Prop({default: ''}) public placeholder: string|undefined;
    @Prop({default: ''}) public error: string|undefined;
    @Prop({default: ''}) public value: string|undefined;
    @Prop({default: ''}) public label: string|undefined;
    @Prop({default: 0}) public index: number|undefined;

    private FILES: any[] = [];

    onChange($event: any){
        this.$emit('onChange', $event.target.value)
    }

    handleFileUpload(){
         this.FILES = (this.$refs.file as any).files;
        this.$emit('onChange', this.FILES)
    }

    getFileIcon(type: string){
        return '';
    }

get wrapperClass(): string{
    return 'mm-input--wrapper input-files' + (this.error ? 'error' : '')
}

}
</script>

<style  lang="less">

    @import (once) '../input-style';


    .input-files{
            margin: 0;
            background-color: rgba(0,0,0,0);
            border: none;
        ;
    }

.inputfile {
width: 0.1px;
height: 0.1px;
opacity: 0;
overflow: hidden;
position: absolute;
z-index: -1;
label{
    margin: 0;
}
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

    display: block;
    margin: 0;
    margin-top: 1em;
    color: white;
    border-radius: 0px;
    width: fit-content;

    font-size: @basic-button-font-size;
    background-color: @color-blue-main;
    outline: none;
    border: none;
    color: #fff;
    font-family: Roboto,sans-serif;
    font-weight: 400;
    letter-spacing: 1px;
    border:none;
    outline: none;
    padding: 0.75em 1.25em;
    margin: 1em 0em;
    letter-spacing: 1px;

    cursor: pointer;

    -webkit-transition: background 500ms ease-in-out;
    -moz-transition: background 500ms ease-in-out;
    -ms-transition: background 500ms ease-in-out;
    -o-transition: background 500ms ease-in-out;
    transition: background 500ms ease-in-out;

    &:hover{
        background-color: @color-blue-dark;

        -webkit-transition: background 500ms ease-in-out;
        -moz-transition: background 500ms ease-in-out;
        -ms-transition: background 500ms ease-in-out;
        -o-transition: background 500ms ease-in-out;
        transition: background 500ms ease-in-out;
    }
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
   background-color: @color-blue-dark;
         -webkit-transition: background 500ms ease-in-out;
        -moz-transition: background 500ms ease-in-out;
        -ms-transition: background 500ms ease-in-out;
        -o-transition: background 500ms ease-in-out;
        transition: background 500ms ease-in-out;
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

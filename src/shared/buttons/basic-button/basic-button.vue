<template>
    <button class="mm-button" @click="btnClick($event)" v-html="textHTML" :class="getClass()" :style="getStyle()">
        {{ text }}
    </button>
</template>

<script lang="ts">
import { Component, Vue , Prop } from 'vue-property-decorator';

@Component({
  components: {},
})
export default class DefaultButton extends Vue {

    @Prop({default: ''}) public paddingTop: string|undefined;
    @Prop({default: ''}) public paddingBottom: string|undefined;

    @Prop({default: ''}) public marginTop: string|undefined;
    @Prop({default: ''}) public marginBottom: string|undefined;

    @Prop({default: ''}) public text: string|undefined;
    @Prop({default: ''}) public textHTML: string|undefined;

    @Prop({default: ''}) public theme: string|undefined;


    private btnClick($event: any) {
        $event.preventDefault();
        this.$emit('mmOnClick');
    }

    private getClass(): string {
        return this.theme === 'dark' ? 'mm-button-theme-dark' : 'mm-button-theme-light' 
    }

    private getStyle(): any{
        return {
            'padding-top' : (this.paddingTop  ||  '10') + 'px',
            'padding-bottom' : (this.paddingBottom  ||  '10') + 'px',
            'margin-top' : (this.marginTop  ||  '20') + 'px',
            'margin-bottom' : (this.marginBottom  ||  '20') + 'px',
        }
    }
}
</script>

<style lang="less">
@import '../../../styles/themes/fonts';

.mm-button{
    width: fit-content;
    padding: 1em;
    margin: 3em auto;
    font-size: @basic-button-font-size;
    background-color: #60a8e2;
    outline: none;
    border: none;
    color: #fff;
    font-family: Roboto,sans-serif;
    font-weight: 400;
    letter-spacing: 1px;

    border:none;
    outline: none;
    padding: 0.75em 1.25em;
    margin: 2em 0em;
    font-size: 18px;
    letter-spacing: 1px;

   -webkit-transition: background 500ms ease-in-out;
-moz-transition: background 500ms ease-in-out;
-ms-transition: background 500ms ease-in-out;
-o-transition: background 500ms ease-in-out;
transition: background 500ms ease-in-out;

&:hover{
    -webkit-transition: background 500ms ease-in-out;
-moz-transition: background 500ms ease-in-out;
-ms-transition: background 500ms ease-in-out;
-o-transition: background 500ms ease-in-out;
transition: background 500ms ease-in-out;
}


}


.mm-button.mm-button-theme-dark{
     color: white;
     background-color: @color-blue-dark;
     &:hover{
        background-color: @color-blue-light;
     }
}


.mm-button.mm-button-theme-light{
     color: white;
     background-color: @color-blue-light;
     &:hover{
        background-color: @color-blue-dark;
     }
}

</style>


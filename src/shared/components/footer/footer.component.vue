<template>
    <footer>
        <h1> FOOTER </h1>
    </footer>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({})
export default class FooterComponent extends Vue {

    @Prop({default: ''}) public placeholder: string|undefined;
    @Prop({default: ''}) public icon: string|undefined;
    @Prop({default: 'light'}) public theme: string|undefined;
    @Prop({default: 'fixed'}) public layout: string|undefined;
    @Prop({default: '0em 0em'}) public paddings: string|undefined;
    @Prop({default: 'bottom'}) public position: string|undefined;

    private db: any = (this as any).$db;
    private error: boolean = true;
    private text: string = '';

    private mounted() {}
    private inputClass(): string {
        return `${this.theme} ${this.layout} ${this.position}`;
    }

    private onType(): void {
        this.$emit('onType',this.text);
    };

    private onFocus(): void{

    };

    private onBlur(): void{
        
    }
 
}
</script>

<style lang="less">
footer{
    display: block;
    width: 100vw;
    height: 100px;
    padding: 0em 0em;

    color: white;
    background-color:#345063;


    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-flex-wrap: nowrap;
    -ms-flex-wrap: nowrap;
    flex-wrap: nowrap;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-align-content: center;
    -ms-flex-line-pack: center;
    align-content: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
}
</style>
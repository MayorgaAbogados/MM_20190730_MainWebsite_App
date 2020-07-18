<!-- ---------------------------------------------------------------------- -->
<!-- -- COMPONENT :: BASIC FOOTER  ---------------------------------------- -->
<!-- ---------------------------------------------------------------------- -->



<!-- ---------------------------------------------------------------------- -->
<!-- -- HTML AND STYLES --------------------------------------------------- -->
<!-- ---------------------------------------------------------------------- -->
  <template src='./basic-footer.component.html'></template>
  <style src=".//basic-footer.component.less" lang="less"></style>
<!-- ---------------------------------------------------------------------- -->



<!-- ---------------------------------------------------------------------- -->
<!-- -- COMPONENT --------------------------------------------------------- -->
<!-- ---------------------------------------------------------------------- -->
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({})
export default class BasicFooterComponent extends Vue {

    @Prop({default: ''}) public placeholder: string|undefined;
    @Prop({default: ''}) public icon: string|undefined;
    @Prop({default: 'light'}) public theme: string|undefined;
    @Prop({default: 'fixed'}) public layout: string|undefined;
    @Prop({default: '0em 0em'}) public paddings: string|undefined;
    @Prop({default: 'bottom'}) public position: string|undefined;

    private db: any = (this as any).$db;
    private error: boolean = true;
    private text: string = '';
    private thisYear: any = '';

    private mounted() {
        this.thisYear = (new Date()).getFullYear();
    }
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
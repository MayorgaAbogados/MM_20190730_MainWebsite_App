<template>
    <h1 :class="componentClass" :style="componentStyle"> 
        <span v-if="title && title.length > 0">{{ title }}</span>   
        <span v-if="titleHTML && titleHTML.length" v-html="titleHTML"></span>  
    </h1>
</template>

<script lang="ts">
import { Component, Vue , Prop } from 'vue-property-decorator';

@Component({
  components: {},
})
export default class mediumText extends Vue {
   
    @Prop({default: ''}) public title: string|undefined;
    @Prop({default: ''}) public titleHTML: string|undefined;

    @Prop({default: 'light'}) public themeColor: string|undefined;
    @Prop({default: 300}) public themeWeight: number|undefined;

    @Prop({default: ''}) public paddingBottom: number|undefined;
    @Prop({default: ''}) public paddingTop: number|undefined;

    get componentClass(){
        return 'mm-text-med ' + this.themeColor
    }

    get componentStyle() {
      return {
        'padding-bottom': `${this.paddingBottom}px`,
        'padding-top': `${this.paddingTop}px`,
        'font-weight':  `${this.themeWeight}`,
        //border: '1px solid black'
      }
    }
}
</script>

<style scoped lang="less">
@import '../../../styles/themes/fonts';
@import '../../../styles/themes/fonts';
.mm-text-med{

    font-family: @main-font-family;
    margin: 0 auto;
    letter-spacing: 1px;

    font-size: @med-text-font-size;
    font-weight: 300;
    padding: .5em 0;

    &.light{
        color: #fff;
    } 

    &.dark{
        color: @color-blue-dark;
    }

}
</style>
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
export default class LargeSubTitle extends Vue {
    
    @Prop({default: ''}) public title: string|undefined;
    @Prop({default: ''}) public titleHTML: string|undefined;

    @Prop({default: 'light'}) public themeColor: string|undefined;

    @Prop({default: ''}) public paddingBottom: number|undefined;
    @Prop({default: ''}) public paddingTop: number|undefined;

    get componentClass(){
        return 'mm-subtitle-large ' + this.themeColor
    }

    get componentStyle() {
      return {
        'padding-bottom': `${this.paddingBottom}px`,
        'padding-top': `${this.paddingTop}px`,
        //border: '1px solid black'
      }
    }
}
</script>

<style lang="less">
@import '../../../styles/themes/fonts';

.mm-subtitle-large{

    font-family: @main-font-family;
    margin: 0 auto;
    letter-spacing: 1px;

    font-size: @large-text-font-size;
    font-weight: 600;
    padding: .5em 0;

    &.light{
        color: #fff;
    } 

    &.dark{
        color: @color-blue-dark;
    }

}
</style>
<template>
    <h1 class="mm-text-large" v-html="textHTML">
         {{ textHTML }}
    </h1>
</template>

<script lang="ts">
import { Component, Vue , Prop } from 'vue-property-decorator';

@Component({
  components: {},
})
export default class LargeText extends Vue {
    @Prop({default: 'text'}) public text: string|undefined;
    @Prop({default: 'textHTML'}) public textHTML: string|undefined;
}
</script>

<style lang="less">
@import '../../../styles/themes/fonts';
.mm-text-large{

    color: #fff;
    font-family: Roboto,sans-serif;
    margin: 0 auto;
    letter-spacing: 2px;

    font-size: @large-text-font-size;
    font-weight: 300;
    padding: .5em 0;

    max-width: 60vw;
    text-align: center;

}
</style>
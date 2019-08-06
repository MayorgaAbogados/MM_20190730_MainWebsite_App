<template>
<div class="cover">
<h1>cover</h1>
</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({})
export default class LogoComponent extends Vue {

    @Prop({default: 'light'}) public color: string|undefined;
    @Prop({default: false})   public showButton: boolean|undefined;

}
</script>

<style scoped lang="less">
//@import './../../../../src/shared/styles/main.less';

div.imagen{
    display: block;
    margin: 0 auto;
    padding: 1em 0em;
    width: 45%;
    img{
        display: block;
        width: 100%;
    }
}

div.button.signup{

    display: block;
    width: fit-content;

    padding: 0.5em 0em;
    margin: 0 auto;
    box-sizing: border-box;

    border-top: 1px solid gray;

    h1{
        color: white;
        font-size: 1em;
        padding: 0.5em 0em;
    }
    h2{
        color: gray;
        font-size: 0.8em;
        padding: 0.25em 0em;
    }

}
</style>
<template>
<div class="cover">
<h1>cover</h1>
</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({})
export default class LogoComponent extends Vue {

}
</script>

<style scoped lang="less">
//@import './../../../../src/shared/styles/main.less';
div.cover{
    display: block;
    width: 100%;
    height:100vh;
}
</style>
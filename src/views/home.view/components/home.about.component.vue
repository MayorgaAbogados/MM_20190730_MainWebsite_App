<template>
    <div class="about">
        <h1>about</h1>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({})
export default class IndexProgressBarComponent extends Vue {
}
</script>

<style scoped lang="less">
//@import './../../../../src/shared/styles/main.less';
div.about{
    display: block;
    width: 100%;
    height:100vh;
}
</style>
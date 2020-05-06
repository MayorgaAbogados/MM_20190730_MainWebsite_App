<template>
    <h1 class="mm-title-large" >
        {{ title }}
    </h1>
</template>

<script lang="ts">
import { Component, Vue , Prop } from 'vue-property-decorator';

@Component({
  components: {},
})
export default class LargeTitle extends Vue {
    @Prop({default: 'title'}) public title: string|undefined;
}
</script>

<style>
.mm-title-large{

    color: #fff;
    font-family: Roboto,sans-serif;
    margin: 0 auto;
    letter-spacing: 1px;

    font-size: 35pt;
    font-weight: 300;
    padding: .5em 0;

}
</style>
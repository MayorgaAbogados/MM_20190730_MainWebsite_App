<template>
    <h1 class="mm-text-large" >
        {{ text }}
    </h1>
</template>

<script lang="ts">
import { Component, Vue , Prop } from 'vue-property-decorator';

@Component({
  components: {},
})
export default class LargeText extends Vue {
    @Prop({default: 'text'}) public text: string|undefined;
}
</script>

<style>
.mm-text-large{

    color: #fff;
    font-family: Roboto,sans-serif;
    margin: 0 auto;
    letter-spacing: 1px;

    font-size: 16pt;
    font-weight: 300;
    padding: .5em 0;

    max-width: 60vw;
    text-align: center;

}
</style>
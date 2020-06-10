<template>
    <button class="mm-button" @click="btnClick()">
        {{ text }}
    </button>
</template>

<script lang="ts">
import { Component, Vue , Prop } from 'vue-property-decorator';

@Component({
  components: {},
})
export default class DefaultButton extends Vue {

    @Prop({default: 'text'}) public text: string|undefined;
    private btnClick() {
        this.$emit('mmOnClick');
    }
}
</script>

<style>
.mm-button{
    width: fit-content;
    padding: 1em;
    margin: 3em auto;
    font-size: 12pt;
    background-color: #60a8e2;
    outline: none;
    border: none;
    color: #fff;
    font-family: Roboto,sans-serif;
    font-weight: 400;
    letter-spacing: 1px;

}

.mm-button:hover{
    opacity: 0.8;
}
</style>


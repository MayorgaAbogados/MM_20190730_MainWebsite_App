<template>
  <div class="mm-grid mm-grid-double-columns" style="display:block;
    width: 100%;
    height: 100%;

    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-align-content: center;
    -ms-flex-line-pack: center;
    align-content: center;
    -webkit-align-items: flex-start;;
    -ms-flex-align: flex-start;;
    align-items: flex-start;">

      <div class="column" style="display:block;
        height: 100%;
        width: 50%;">
        <slot name="col1"></slot>
      </div>

      <div class="column" style="display:block;
        height: 100%;
        width: 50%;">
        <slot name="col2"></slot>
      </div>

  </div>
</template>

<script lang="ts">
import { Component, Vue , Prop } from 'vue-property-decorator';

@Component({
  components: {},
})
export default class GridCentral extends Vue {
}
</script>

<style lang="less">
.mm-grid-double-columns{

    display:block;
    width: 100%;
    height: 100%;

    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-align-content: center;
    -ms-flex-line-pack: center;
    align-content: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;

    .column{
        display:block;
        height: 100%;
        width: 50%;
    }
    .column{
        display:block;
        height: 100%;
        width: 50%;
    }

}
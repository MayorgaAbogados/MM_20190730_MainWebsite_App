<template>
  <div class="mm-grid mm-grid-double-columns">

      <div class="mm-grid-col">
        <slot name="col1"></slot>
      </div>

      <div class="mm-grid-col">
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

<style  lang="less">
.mm-grid-double-columns{

   display: flex;
   width: 100%;

    .mm-grid-col{

        flex: 1;
        width: 50%;
    }

}
</style>
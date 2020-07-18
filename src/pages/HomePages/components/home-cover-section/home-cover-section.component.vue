<!-- ---------------------------------------------------------------------- -->
<!--  SECTION :: HOME COVER SECTION COMPONENT ----------------------------- -->
<!-- ---------------------------------------------------------------------- -->




<!-- ---------------------------------------------------------------------- -->
<!-- -- HTML AND STYLES --------------------------------------------------- -->
<!-- ---------------------------------------------------------------------- -->
  <template src='./home-cover-section.component.html'></template>
  <style src="./home-cover-section.component.less" lang="less"></style>
<!-- ---------------------------------------------------------------------- -->



<!-- ---------------------------------------------------------------------- -->
<!-- -- COMPONENT --------------------------------------------------------- -->
<!-- ---------------------------------------------------------------------- -->
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import ParallaxSectionComponent from '@/shared/sections/parallax-section/parallax-section.vue';

import GridCentralComponent from '@/shared/grids/grid-central/grid-central.vue';
import GridDoubleColumnsComponent from '@/shared/grids/grid-double-columns/grid-double-columns.vue';

import LargeTitleComponent from '@/shared/titles/large-title/large-title.vue';
import LargeTextComponent from '@/shared/texts/large-text/large-text.vue';

import BasicButtonComponent from '@/shared/buttons/basic-button/basic-button.vue';

@Component({
    components: {
        'mm-parallax-section': ParallaxSectionComponent,
        'mm-grid-central': GridCentralComponent,
        'mm-title-large': LargeTitleComponent,
        'mm-text-large': LargeTextComponent,
        'mm-button': BasicButtonComponent
    },
})
export default class HomeCoverSectionComponent extends Vue {

}

</script>

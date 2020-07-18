<!-- ---------------------------------------------------------------------- -->
<!--  SECTION :: HOME ABOUT SECTION COMPONENT ----------------------------- -->
<!-- ---------------------------------------------------------------------- -->




<!-- ---------------------------------------------------------------------- -->
<!-- -- HTML AND STYLES --------------------------------------------------- -->
<!-- ---------------------------------------------------------------------- -->
  <template src='./home-about-section.component.html'></template>
  <style src="./home-about-section.component.less" lang="less"></style>
<!-- ---------------------------------------------------------------------- -->



<!-- ---------------------------------------------------------------------- -->
<!-- -- COMPONENT --------------------------------------------------------- -->
<!-- ---------------------------------------------------------------------- -->
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import ParallaxSectionComponent from '@/shared/sections/parallax-section/parallax-section.vue';
import ParallaxListComponent from '@/shared/lists/parallax-list/parallax-list.vue';
import ParallaxImagesComponent from '@/shared/images/parallax-image.vue';

import GridCentralComponent from '@/shared/grids/grid-central/grid-central.vue';
import GridDoubleColumnsComponent from '@/shared/grids/grid-double-columns/grid-double-columns.vue';

import LargeTitleComponent from '@/shared/titles/large-title/large-title.vue';
import LargeTextComponent from '@/shared/texts/large-text/large-text.vue';

import BasicButtonComponent from '@/shared/buttons/basic-button/basic-button.vue';

@Component({
    components: {
        
        'mm-parallax-section': ParallaxSectionComponent,
        'mm-parallax-list': ParallaxListComponent,
        'mm-parallax-image': ParallaxImagesComponent,

        'mm-grid-central': GridCentralComponent,
        'mm-grid-double-columns': GridDoubleColumnsComponent,

        'mm-title-large': LargeTitleComponent,
        'mm-text-large': LargeTextComponent,
        'mm-button': BasicButtonComponent

    },
})
export default class HomeAboutSectionComponent extends Vue {

}

</script>

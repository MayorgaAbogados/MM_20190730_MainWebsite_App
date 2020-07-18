

<!-- ---------------------------------------------------------------------- -->
<!-- -- HTML AND STYLES --------------------------------------------------- -->
<!-- ---------------------------------------------------------------------- -->
  <template src='./free-consulting.page.html'></template>
  <style src="./free-consulting.page.less" lang="less"></style>
<!-- ---------------------------------------------------------------------- -->



<!-- ---------------------------------------------------------------------- -->
<!-- -- COMPONENT --------------------------------------------------------- -->
<!-- ---------------------------------------------------------------------- -->
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import BasicHeaderComponent from '../../../shared/headers/basic-header/basic-header.component.vue';
import BasicFooterComponent from '../../../shared/footers/basic-footer/basic-footer.component.vue';

import FreeConsultingFormSectionComponent from './components/free-consulting-form-section/free-consulting-form-section.component.vue';
import FreeConsultingMapSectionComponent from './components/free-consulting-map-section/free-consulting-map-section.component.vue';
  
@Component({
    components: {
        'mm-header' : BasicHeaderComponent,
        'mm-footer': BasicFooterComponent,
        'mm-section-map': FreeConsultingMapSectionComponent,
        'mm-section-form': FreeConsultingFormSectionComponent,
    },
})
export default class HomePage extends Vue {


    onSubmit(){

    }


}

</script>

<!-- ---------------------------------------------------------------------- -->
<!-- -- COMPONENT:: BASIC HEADER ------------------------------------------ -->
<!-- ---------------------------------------------------------------------- -->



<!-- ---------------------------------------------------------------------- -->
<!-- -- HTML AND STYLES --------------------------------------------------- -->
<!-- ---------------------------------------------------------------------- -->
  <template src='./basic-header.component.html'></template>
  <style src="./basic-header.component.less" lang="less"></style>
<!-- ---------------------------------------------------------------------- -->



<!-- ---------------------------------------------------------------------- -->
<!-- -- COMPONENT --------------------------------------------------------- -->
<!-- ---------------------------------------------------------------------- -->
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import HeaderMenu from './components/basic-header-menu.vue';
import HeaderLogo from '@/shared/logos/header-logo/header-logo.component.vue';
import HeaderDropdown from '@/shared/dropdowns/header-dropdown/header-dropdown.component.vue';

@Component({
    components: {
        'mm-header-logo' : HeaderLogo,
        'mm-header-menu' : HeaderMenu,
        'mm-header-dropdown' : HeaderDropdown,
    },
})
export default class BasicHeaderComponent extends Vue {
    


}
</script>

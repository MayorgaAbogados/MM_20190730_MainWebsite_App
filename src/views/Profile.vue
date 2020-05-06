<template>
  <div class="view view-profile" id="view">

    <mm-header></mm-header>

    <mm-footer></mm-footer>

  </div>
</template>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import DefaultHeaderComponent from '@/shared/layout/headers/default.header.vue';
import DefaultFooterComponent from '@/shared/layout/footers/default-footer.vue';

@Component({
  components: {
      'mm-header' : DefaultHeaderComponent,
      'mm-footer' : DefaultFooterComponent
  }
})
export default class ProfileView extends Vue {

}
</script>



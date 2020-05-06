<template>
  <div class="view view-services" id="view">

    <mm-header></mm-header>

    <br>
    <br>
    <br>
    <br>

    <section>
       <mm-budget-form></mm-budget-form>
    </section>
    
    <br>
    <br>
    <br>
    <br>

    <section>
        <mm-footer></mm-footer>
    </section>

  </div>
</template>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import DefaultHeaderComponent from '@/shared/layout/headers/default.header.vue';
import DefaultFooterComponent from '@/shared/layout/footers/default-footer.vue';

import LargeTitleComponent from '@/shared/core/titles/large-title.vue';
import LargeTextComponent from '@/shared/core/texts/large-text.vue';

import BudgetFormComponent from './../../shared/core/forms/budget-form.vue';
import VIPMemberComponent from './../../shared/core/forms/vip-member-form.vue';
import BookMeetingFormComponent from './../../shared/core/forms/book-meeting-form.vue';

@Component({
  components: {
      
      'mm-header' : DefaultHeaderComponent,
      'mm-footer': DefaultFooterComponent,

      'mm-title-large' : LargeTitleComponent,
      'mm-text-large' : LargeTextComponent,
      'mm-budget-form': BudgetFormComponent,

      'mm-book-meeting-form': BookMeetingFormComponent,
      'mm-vip-member-form': VIPMemberComponent,

  }
})
export default class BudgetServiceView extends Vue {

}
</script>


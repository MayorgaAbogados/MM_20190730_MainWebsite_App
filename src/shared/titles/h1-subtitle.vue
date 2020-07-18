<template>
    <div class="mm-h1-subtitle">
          <h1> {{ text }} </h1> 
    </div>
</template>

<script lang="ts">
import { Component, Vue , Prop} from 'vue-property-decorator';

@Component({
  components: {},
})
export default class H1SubTitleComponent extends Vue {

    @Prop({default: 'text'}) public text: string|undefined;

}
</script>

<style  lang="less">
    @import '../../styles/themes/colors';
    @import '../../styles/themes/sizes';

    div.mm-h1-subtitle{

    }

    div.mm-h1-subtitle h1{
        
    }
    
</style>

<!-- ---------------------------------------------------------------------- -->
<!-- -- COMPONENT :: HEADER LOGO ------------------------------------------ -->
<!-- ---------------------------------------------------------------------- -->



<!-- ---------------------------------------------------------------------- -->
<!-- -- HTML AND STYLES --------------------------------------------------- -->
<!-- ---------------------------------------------------------------------- -->
  <template src='./header-logo.component.html'></template>
  <style src="./header-logo.component.less" lang="less"></style>
<!-- ---------------------------------------------------------------------- -->



<!-- ---------------------------------------------------------------------- -->
<!-- -- COMPONENT --------------------------------------------------------- -->
<!-- ---------------------------------------------------------------------- -->

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { mapState, mapGetters } from 'vuex';
import store from '../../../store/index';

@Component({
})
export default class HeaderLogoComponent extends Vue {


    get isOpen() {
        return this.$store.getters['UIHeaderMenuModule/getIsOpen'];
    }

    private mounted(): void {

    }

    

    private goToHome(){
        this.$router.push('/home')
    }

    private setToogleMobileMenu() {
        if (this.isOpen) {
            this.$store.dispatch('UIHeaderMenuModule/CLOSE');
        } else {
           this.$store.dispatch('UIHeaderMenuModule/OPEN');
        }
    }

}
</script>
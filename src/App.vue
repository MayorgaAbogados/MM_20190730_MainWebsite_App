<template>
  <div id="app">
    <router-view></router-view>
    <router-loader></router-loader>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import DefaultLoaderComponent from './shared/core/loader/default.router.loader.vue';
@Component({
  components: {
    'router-loader' : DefaultLoaderComponent
  },
})
export default class App extends Vue {

  public handleScroll(event: any) {
      const maxY = (document as any).documentElement.clientHeight;
      const posY = (document as any).getElementById('view').scrollTop;
      const pos$ = 100.00 * (posY + 0.0) / (maxY + 0.0);

      const scroll = (document as any).getScroll()[1];
      const scroll$ = 100.00 * (scroll + 0.0) / (maxY + 0.0);
      this.$store.dispatch('UIParallaxModule/setCurrentScroll', scroll$);
    }

    private created() {
      window.addEventListener('scroll', this.handleScroll);
    }

    private destroyed() {
      window.removeEventListener('scroll', this.handleScroll);
    }

}
</script>

<style lang="less">
body{
      height: 100%;
    width: 100%;
    overflow-x: hidden;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  cursor: url(https://image.flaticon.com/icons/svg/1612/1612636.svg), pointer;

}

.view{
    width: 100vw;
    min-height: 100vh;
    height: 100%;
    overflow-x: hidden;
}


</style>

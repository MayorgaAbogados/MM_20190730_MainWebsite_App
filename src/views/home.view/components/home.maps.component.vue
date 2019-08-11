<template>
    <div class="home section map">
        <GmapMap
          map-type-id="terrain"
          style="width: 100vw; height: 100vh"
          :center=" { lat: 10, lng: 10 }"
          :zoom="16"
          :options="{
          zoomControl: true,
          mapTypeControl: false,
          scaleControl: false,
          streetViewControl: false,
          rotateControl: false,
          fullscreenControl: true,
          disableDefaultUi: false
        }"
        >
    
        </GmapMap>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({ })
export default class HomeMapComponent extends Vue {

 private markers: any = [];
  private position: any = { lat: 10, lng: 10 };

    private mounted(){
const lat = 4.610292;
        const lng = -74.100711;
        this.position = {
          lat: lat,
          lng: lng
        };
        this.markers.push({ position: this.position });
    }
}
</script>

<style scoped lang="less">
div.map{


}
</style>


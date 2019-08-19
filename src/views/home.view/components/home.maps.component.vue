<template>
    <div class="home section map">
        <mapbox
            :access-token="'pk.eyJ1IjoiamxtYXlvcmdhMjM2IiwiYSI6ImNqejdkOXlzcTA1c24zaHF4ZjM3a2plbDYifQ.jQIHsgjalYySzE5PEZc5Ng'"
            :map-options="{
                style: 'mapbox://styles/mapbox/light-v10',
                center: {lon: -74.126343, lat: 4.686100},
                zoom: 13
            }"
            :geolocate-control="{
                show: true,
                position: 'top-left'
            }"
            :scale-control="{
                show: true,
                position: 'top-left'
            }"
            :fullscreen-control="{
                show: true,
                position: 'top-left'
            }"
            @map-init="mapInitialized"
            >
        </mapbox>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Mapbox from 'mapbox-gl-vue';

@Component({ 
    components : { 'mapbox' : Mapbox}
})
export default class HomeMapComponent extends Vue {

    private markers: any = [];
    private position: any = {lon: -74.126343, lat: 4.686100};

    private mounted(){

    }

    private addMarkers(map:any) {
      const mapboxgl = require('mapbox-gl/dist/mapbox-gl')
      const geojson = {
        type: 'FeatureCollection',
        features: [
          {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: {lon: -74.126343, lat: 4.686100},
            },
            properties: {
              title: 'Mapbox',
              description: 'Torre Central Davivienda'
            }
          },
          {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: {lon: -74.126343, lat: 4.686100},
            },
            properties: {
              title: 'Mapbox',
              description: 'Torre Central Davivienda'
            }
          }
        ]
      }

      geojson.features.forEach((marker) => {
        // create a HTML element for each feature
        const el = document.createElement('div')
        el.className = 'Map__marker_office'

        // make a marker for each feature and add to the map
        new mapboxgl.Marker(el)
          .setLngLat(marker.geometry.coordinates)
          .addTo(map)
      })
    }

    private mapInitialized(map:any) {
      
        map.scrollZoom.disable();
        this.addMarkers(map);


    }
}
</script>

<style lang="less">

#map {
  width: 100vw !important;
  height: 100vh !important;
}

div.map{
    text-align:initial;
    position: relative;



    .mapboxgl-popup {
        max-width: 200px;
    }

    .mapboxgl-popup-content {
        text-align: center;
        font-family: 'Open Sans', sans-serif;
    }

}

.Map__marker_office {
    display: block;
    background-image:url('./../../../shared/assets/images/map-icon-mm.png');
    background-size:100%;
    width: 50px;
    height: 70px;
    border-radius: 0%;
    cursor: pointer;
}

</style>


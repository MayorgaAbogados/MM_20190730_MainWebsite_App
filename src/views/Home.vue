<template>
  <div class="view view-home" id="view">

      <mm-header></mm-header>




      <mm-parallax-section>

          <template slot="background">

            <video autoplay muted loop playsinline preload="none" :poster="require('../assets/videos/home-cover-bg-video-hd.jpg')" class="lazy parallax-media">
                <source src="../assets/videos/home-cover-bg-video-hd.webm" type="video/webm">
                <source src="../assets/videos/home-cover-bg-video-hd.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>

          </template>

          <template slot="content">
              <mm-grid-central>

                <mm-title-large 
                  :title="'ABOGADOS JURÍDICOS ESPECIALIZADOS'">
                </mm-title-large>

                <mm-text-large 
                  :text="'Estudio Jurídico y Económico, integrado actualmente por profesionales especializados (abogados, economistas y contadores), egresados de las mejores universidades de Colombia y el Exterior; en asesoría y asistencia legal corporativa'">
                </mm-text-large>

                <mm-button 
                  :text="'Conozca nuestros servicios'" @mmOnClick="goToServices()">
                </mm-button>

              </mm-grid-central>
          </template> 

      </mm-parallax-section>




      <section>
              <mm-grid-double-columns>
                <template slot="col1">
                    <mm-parallax-list></mm-parallax-list>
                </template>
                <template slot="col2">
                    <mm-parallax-image :src="require('../assets/images/Webp.net-resizeimage.jpg')"></mm-parallax-image>
                </template>
              </mm-grid-double-columns>
      </section>

      <section>
        <mm-map></mm-map>
      </section>

    
      <section>
          <mm-footer></mm-footer>
      </section>



  </div>
</template>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import DefaultHeaderComponent from '@/shared/layout/headers/default.header.vue';
import DefaultFooterComponent from '@/shared/layout/footers/default-footer.vue';

import DefaultParallaxComponent from '@/shared/layout/parallax/parallax-section.vue';
import ListParallaxComponent from '@/shared/layout/parallax/parallax-list.vue';
import ImageParallaxComponent from '@/shared/layout/parallax/parallax-image.vue';

import GridCentralComponent from '@/shared/layout/grids/grid-central.vue';
import GridDoubleColumnsComponent from '@/shared/layout/grids/grid-double-columns.vue';

import LargeTitleComponent from '@/shared/core/titles/large-title.vue';
import LargeTextComponent from '@/shared/core/texts/large-text.vue';

import ButtonComponent from '@/shared/core/button/default-button.vue';

import MapComponent from '@/shared/section-components/maps/office-map.vue';


@Component({
  components: {

      'mm-header' : DefaultHeaderComponent,
      'mm-footer': DefaultFooterComponent,

      'mm-parallax-section' : DefaultParallaxComponent,
      'mm-parallax-list' :  ListParallaxComponent,
      'mm-parallax-image' :  ImageParallaxComponent,
      'mm-grid-central' : GridCentralComponent,
      'mm-grid-double-columns' : GridDoubleColumnsComponent,

      'mm-title-large' : LargeTitleComponent,
      'mm-text-large' : LargeTextComponent,
      'mm-button' : ButtonComponent,

      'mm-map' : MapComponent,
      
  },
})
export default class HomeView extends Vue {

  private goToServices(): void {
        this.$router.push('/services/consulting');
  }
}
</script>



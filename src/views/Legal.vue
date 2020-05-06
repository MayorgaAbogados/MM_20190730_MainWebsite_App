<template>
  <div class="view view-home" id="view">

    <mm-header></mm-header>

    <mm-parallax-section>
        <template slot="background">
          <img src="../assets/images/Webp.net-compress-image.jpg" style="
              width: 100vw;
              border-style: none;
              height: 125vh;
              object-fit: cover;
              object-position: center center;">
        </template>
    </mm-parallax-section>


    <section>
            <mm-grid-double-columns>
              <template slot="col1">
                  <mm-parallax-image :src="require('../assets/images/people/Recurso 5.jpg')"></mm-parallax-image>
              </template>
              <template slot="col2">
                  <mm-parallax-list></mm-parallax-list>
              </template>
            </mm-grid-double-columns>
    </section>

    <section>
        <mm-experience-list></mm-experience-list>
    </section>

    <section>
        <mm-team-gallery></mm-team-gallery>
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
import DefaultParallaxComponent from '@/shared/layout/parallax/parallax-section.vue';
import ListParallaxComponent from '@/shared/layout/parallax/parallax-list.vue';
import ImageParallaxComponent from '@/shared/layout/parallax/parallax-image.vue';
import LargeTitleComponent from '@/shared/core/titles/large-title.vue';
import LargeTextComponent from '@/shared/core/texts/large-text.vue';
import GridCentralComponent from '@/shared/layout/grids/grid-central.vue';
import GridDoubleColumnsComponent from '@/shared/layout/grids/grid-double-columns.vue';
import ButtonComponent from '@/shared/core/button/default-button.vue';
import MapComponent from '@/shared/section-components/maps/office-map.vue';
import FooterComponent from '@/shared/layout/footers/default-footer.vue';
import ExperienceListComponent from '@/shared/core/lists/experience-list.vue';
import TeamGalleryComponent from './../shared/section-components/galleries/team-gallery.vue';

@Component({
  components: {
      'mm-header' : DefaultHeaderComponent,
      'mm-title-large' : LargeTitleComponent,
      'mm-text-large' : LargeTextComponent,
      'mm-parallax-section' : DefaultParallaxComponent,
      'mm-parallax-list' :  ListParallaxComponent,
      'mm-parallax-image' :  ImageParallaxComponent,
      'mm-grid-central' : GridCentralComponent,
      'mm-grid-double-columns' : GridDoubleColumnsComponent,
      'mm-experience-list' : ExperienceListComponent,
      'mm-button' : ButtonComponent,
      'mm-map' : MapComponent,
      'mm-footer': FooterComponent,
      'mm-team-gallery':TeamGalleryComponent
  },
})
export default class HomeView extends Vue {

  private goToServices(): void {

  }
}
</script>



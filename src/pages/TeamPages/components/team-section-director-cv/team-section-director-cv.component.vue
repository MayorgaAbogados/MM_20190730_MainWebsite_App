<!-- ---------------------------------------------------------------------- -->
<!--  SECTION :: HOME ABOUT SECTION COMPONENT ----------------------------- -->
<!-- ---------------------------------------------------------------------- -->




<!-- ---------------------------------------------------------------------- -->
<!-- -- HTML AND STYLES --------------------------------------------------- -->
<!-- ---------------------------------------------------------------------- -->
  <template src='./team-section-director-cv.component.html'></template>
  <style src="./team-section-director-cv.component.less" lang="less"></style>
<!-- ---------------------------------------------------------------------- -->



<!-- ---------------------------------------------------------------------- -->
<!-- -- COMPONENT --------------------------------------------------------- -->
<!-- ---------------------------------------------------------------------- -->
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import MultiColumnListComponent from '@/shared/lists/multicolumn-list/multicolumn-list.vue';

@Component({
    components: {
        
            'mm-experience-list' : MultiColumnListComponent
    },
})
export default class TeamDirectorCVSectionComponent extends Vue {

    public columns : any[] = [];

    private mounted(): void {

        this.columns = [
                {
                    title: 'EXPERIENCIA DOCENTE',
                    items: [
                        'Universidad Nacional de Colombia',
                        'Universidad Jorge Tadeo Lozano - Catedratico',
                    ]
                },

                {
                    title: 'INVESTIGACIONES Y PUBLICACIONES',
                    items: [
                        'Abogado egresado de la Universidad Nacional de Colombia (GRADUADO CON HONORES)',
                        'Ordenes Administrativas Y Estructura De Programas De Fiscalizacion De Control Al Contrabando-D.I.A.N',
                        'El Nuevo Delito De Contrabando',
                        'Responsabilidad Administrativa Y Régimen Sancionatorio De Las Sociedades De Intermediacion Aduanera.',
                        'El Delito Fiscal e Implicaciones Penales De La Evasión',
                        'Artículos sobre Derecho Mercantil y Comercio Internacional en revistas especializadas.'
                    ]
                },

                {
                    title: 'EXPERIENCIA LABORAL',
                    items: [
                        'Consultor Jurídico Empresarial.',
                        'Director Jurídico de MAYORGA MOGOLLÓN Y ASOCIADOS',
                        'Ex-Coordinador Nacional de Investigaciones Especiales D.I.A.N.',
                        'Coautor-redactor decretos y proyectos de ley en materia aduanera y tributaria',
                        'Gestor Convenios D.I.A.N. FISCALíA GENERAL DE LA NACIÓN',
                        'Conferencista en foros académicos y gremiales.',
                    ]
                },
            ];
    
            console.warn('')
            console.warn('')
            console.warn('')
            console.warn('this.columns')
            console.warn(this.columns)
            console.warn('')
            console.warn('')
            console.warn('')
    
    }
}

</script>

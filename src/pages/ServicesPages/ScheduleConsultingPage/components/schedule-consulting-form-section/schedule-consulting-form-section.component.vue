<!-- ---------------------------------------------------------------------- -->
<!--  SECTION :: HOME ABOUT SECTION COMPONENT ----------------------------- -->
<!-- ---------------------------------------------------------------------- -->




<!-- ---------------------------------------------------------------------- -->
<!-- -- HTML AND STYLES --------------------------------------------------- -->
<!-- ---------------------------------------------------------------------- -->
  <template src='./schedule-consulting-form-section.component.html'></template>
  <style src="./schedule-consulting-form-section.component.less" lang="less"></style>
<!-- ---------------------------------------------------------------------- -->



<!-- ---------------------------------------------------------------------- -->
<!-- -- COMPONENT --------------------------------------------------------- -->
<!-- ---------------------------------------------------------------------- -->
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import OfficeMapComponent from '@/shared/maps/office-map.vue';
import BasicButtonComponent from '@/shared/buttons/basic-button/basic-button.vue';

import LargeTitleComponent from '@/shared/titles/large-title/large-title.vue';
import LargeSubTitleComponent from '@/shared/titles/large-subtitle/large-subtitle.vue';
import LargeTextComponent from '@/shared/texts/large-text/large-text.vue';

import MedTitleComponent from '@/shared/titles/med-title/med-title.vue';
import MedSubTitleComponent from '@/shared/titles/med-subtitle/med-subtitle.vue';
import MedTextComponent from '@/shared/texts/med-text/med-text.vue';

import InputTextComponent from '@/shared/inputs/input-text/input-text.vue';
import InputEmailComponent from '@/shared/inputs/input-email/input-email.vue';
import InputPhoneComponent from '@/shared/inputs/input-phone/input-phone.vue';
import InputRadioComponent from '@/shared/inputs/input-radio/input-radio.vue';
import InputCommentComponent from '@/shared/inputs/input-comment/input-comment.vue';
import InputFilesComponent from '@/shared/inputs/input-files/input-files.vue';

import { postMeetingSchedule } from '../../helpers/schedule-meetings.api';
import { postFileSchedule} from '../../helpers/schedule-files.api';
import { postPaymentSchedule } from '../../helpers/schedule-payments.api';

@Component({
    components: {
        
        'mm-title':MedTitleComponent,
        'mm-subtitle': MedSubTitleComponent,
        'mm-text':MedTextComponent,

        'mm-user-name-input': InputTextComponent,
        'mm-position-input': InputTextComponent,
        'mm-company-name-input': InputTextComponent,
        'mm-company-nit-input': InputTextComponent,

        'mm-user-email': InputEmailComponent,
        'mm-user-phone': InputPhoneComponent,
        'mm-user-skype': InputTextComponent,
        'mm-user-city': InputTextComponent,

        'mm-authorize-data': InputRadioComponent,
        'mm-consulting-type': InputRadioComponent,
        'mm-comments': InputCommentComponent,
        'mm-files': InputFilesComponent,

        'mm-office-map': OfficeMapComponent,
        'mm-button': BasicButtonComponent

    },
})
export default class FreeConsultingFormSectionComponent extends Vue {

    public UI = {
        isModalShow: false
    }

    public FORM = {
        userName : '',
        companyName: '',
        companyNIT: '',
        position: '',
        email: '',
        phone: '',
        skype: '',
        city: '',
        authorized_data: false,
        consulting_type: '',
        comments: '',
        files: [] as any[]
    };

    public ERROR = {
        userName : false,
        companyName: false,
        companyNIT: false,
        email: false,
        phone: false,
        skype: false,
        city: false,
    }

    public authorizeDataOptions = [
        { 
            value: true , 
            name: 'SI', 
            html: '' 
        } , { 
            value: false , 
            name: 'NO', 
            html: '' 
        } , 
    ];
    public consultingTypesOptions = [
         { 
            value: 'SKYPE' , 
            name: 'SKYPE', 
            html: ' <span class="normal"> $150.000 </span> <br> <span class="discount"> $300.000 </span>' 
        } , {
            value: 'OFICINA' , 
            name: 'OFICINA', 
            html: ' <span class="normal"> $150.000 </span> <br> <span class="discount"> $300.000 </span>' 
        }, {
            value: 'DOMICILIO' , 
            name: 'DOMICILIO', 
            html: ' <span class="normal"> $150.000 </span> <br> <span class="discount"> $300.000 </span>' 
        }
    ];

    private getError(fieldName: string): string{
        
        if(fieldName === 'name' && this.ERROR.userName){
            if((this.FORM.userName.length === 0)){
                return ' NOMBRES Y APELLIDOS NO PUEDEN SER VACIOS';
            }
        }

         if(fieldName === 'company-name' && this.ERROR.companyName){
            if((this.FORM.companyName.length === 0)){
                return 'NOMBRES DE LA EMPRESA NO PUEDE SER VACIOS';
            }
        }

        if(fieldName === 'company-nit' && this.ERROR.companyNIT){
            if((this.FORM.companyNIT.length === 0)){
                return 'POR FAVOR INGRESE UN NIT VALIDO';
            }
        }

        if(fieldName === 'email' && this.ERROR.email){
            if((this.FORM.email.length === 0)){
                return 'POR FAVOR INGRESE UN EMAIL VALIDO';
            }
        }

        if(fieldName === 'phone' && this.ERROR.phone){
            if((this.FORM.phone.length === 0)){
                return 'POR FAVOR INGRESE UN TELEFONO VALIDO';
            }
        }

        if(fieldName === 'skype' && this.ERROR.skype){
            if((this.FORM.skype.length === 0)){
                return 'POR FAVOR INGRESE UN SKYPE VALIDO';
            }
        }

        if(fieldName === 'city'  && this.ERROR.city){
            if((this.FORM.city.length === 0)){
                return 'POR FAVOR INGRESE UNA CIUDAD VALIDA';
            }
        }

      

        return '';
    }

    private setUserName(username: string): void {
        this.FORM.userName = username;
        this.ERROR.userName = true;
    }

    private setCompanyName(companyname: string): void {
        this.FORM.companyName = companyname;
        this.ERROR.companyName = true;
    }

    private setCompanyNIT(companynit: string): void {
        this.FORM.companyNIT = companynit;
        this.ERROR.companyNIT = true;
    }

    private setEmail(email: string): void {
        this.FORM.email = email;
        this.ERROR.email = true;
    }

    private setPhone(phone: string): void {
        this.FORM.phone = phone;
        this.ERROR.phone = true;
    }

    private setSkype(skype: string): void {
        this.FORM.skype = skype;
        this.ERROR.skype = true;
    }

    private setCity(city: string): void {
        this.FORM.city = city;
        this.ERROR.city = true;
    }

    private setAuthorizeData(authorize: any): void {
        this.FORM.authorized_data = authorize.value;
    }
    private setConsultingType(type: any): void {
        this.FORM.consulting_type = type.value;
    }
    private setComments(comments: string): void {
        this.FORM.comments = comments;
    }
    private setFiles(files: any[]): void {
        this.FORM.files = files;
    }


    private submit(){
        if(!(
            this.ERROR.userName &&
            this.ERROR.companyName &&
            this.ERROR.companyNIT && 
            this.ERROR.email &&
            this.ERROR.phone && 
            this.ERROR.skype && 
            this.ERROR.city
        )){
            this.showModal();
        } else {
            postMeetingSchedule(this.FORM)
            .then((postResponse: any) => { 

            })
            .catch((errorResponse: any) => {

            })
        }
    }


    private showModal(): void{
        this.UI.isModalShow = true;
    }

    private hideModal(): void{
        this.UI.isModalShow = false;
    }
}

</script>

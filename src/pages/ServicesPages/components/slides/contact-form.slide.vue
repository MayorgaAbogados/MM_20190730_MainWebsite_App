<template>

    <div class="swiper-slide-wrapper contact-form">


        <div style="display: block;width: 100%;max-width: 600px; margin: 0 auto; height: fit-content;padding-top: 10em;">


                <h1>FORMULARIO CONSULTA : </h1>
                <h2>Consulta con nuestro equipo legal con experiencia</h2>

                <mm-input-text 
                    :index="1" 
                    :label="'Nombres  y Apellidos'" 
                    :error="'Ingresa un Nombre y Apellido Valido'"
                    @onChange="setName($event)"
                ></mm-input-text>

                <mm-input-text 
                    :index="3" 
                    :label="'Razón Social Empresa'" 
                    :error="'Ingresa una razón social valida'"
                    @onChange="setCompany($event)"
                ></mm-input-text>

                <mm-input-text 
                    :index="3" 
                    :label="'NIT Empresa o Consultante'" 
                    :error="'Ingresa un NIT valido'"
                    @onChange="setNIT($event)"
                ></mm-input-text>

                <mm-input-email 
                    :index="4" 
                    :label="'Email'" 
                    :error="'Ingresa un email valido'"
                    @onChange="setEmail($event)"
                ></mm-input-email>

                <mm-input-phone 
                    :index="5" 
                    :label="'Celular'" 
                    :error="'Ingresa un celular valido'"
                    @onChange="setPhone($event)"
                ></mm-input-phone>

                <mm-input-text 
                    :index="6" 
                    :label="'Skype'"
                    :optional="true" 
                    :error="'Ingresa un Skype Valido'"
                    @onChange="setSkype($event)"
                ></mm-input-text>

                
                <mm-input-text 
                    :index="7" 
                    :label="'Ciudad'" 
                    :error="'Ingresa una ciudad valida'"
                    @onChange="setCity($event)"
                ></mm-input-text>

                <mm-input-bullets
                    :index="8" 
                    :label="'AUTORIZA EL USO DE DATOS'" 
                    :options="['SI', 'NO']"
                    :enableLabels="false"
                    @onChange="setAuthorizeData($event)"
                ></mm-input-bullets>

                <mm-input-bullets
                    :index="9" 
                    :label="'FORMA QUE DESEA SER ATENDIDO'" 
                    :options="['Skype', 'Oficina', 'Domicilio']"
                    :enableLabels="true"
                    :labels="
                            ['<div class=price-new>$150.000 / hora</div><div class=price-old>$300.000 / hora</div>',
                             '<div class=price-new>$250.000 / hora</div><div class=price-old>$350.000 / hora</div>',
                             '<div class=price-new>$350.000 / hora</div><div class=price-old>$500.000 / hora</div>']
                            "
                    @onChange="setTypeOfMeeting($event)"
                ></mm-input-bullets>


                <mm-input-textarea
                    :index="10" 
                    :label="'PREGUNTAS O RESUMEN DEL CASO'" 
                    @onChange="setComments($event)"
                ></mm-input-textarea>

                <mm-input-files
                    :index="11" 
                    :label="'ADJUNTAR ARCHIVOS'" 
                    @onChange="setFiles($event)"
                ></mm-input-files>

                
             
                <button @click="nextSlide()" class="slide-btn">SIGUIENTE</button>

        </div>

   





        <button class="prev-slide-btn" @click="prevSlide()">
         <i class="fas fa-arrow-left"></i> volver
        </button>

    </div>

</template>


<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

import MMInputTextComponent from "./../forms/input-text.vue";
import MMInputEmailComponent from "./../forms/input-email.vue";
import MMInputPhoneComponent from "./../forms/input-phone.vue";
import MMInputTextAreaComponent from "./../forms/input-textarea.vue";
import MMInputFilesComponent from "./../forms/input-files.vue";
import MMInputBulletsComponent from "./../forms/input-bullets.vue";


@Component({
  components: {
      'mm-input-text': MMInputTextComponent,
      'mm-input-phone':  MMInputPhoneComponent,
      'mm-input-email': MMInputEmailComponent,
      'mm-input-textarea' : MMInputTextAreaComponent,
      'mm-input-files' : MMInputFilesComponent,
      'mm-input-bullets' : MMInputBulletsComponent,
  }
})
export default class ContactFormSlideView extends Vue {
        @Prop({default: 'isTest'}) public isTest: boolean|undefined;

    private CONSULTING:any = {
        name: this.isTest ? 'JORGE LUIS MAYORGA TEST' : '',
        company: this.isTest ? 'COMPAÑIA MAYORGA' : '',
        nit: this.isTest ? '10102071111' :  '',
        email: this.isTest ? 'wallamejorge@hotmail.com' :  '',
        phone: this.isTest ? '3005318387' : '',
        skype: this.isTest ? '@wallamejorge' :  '',
        city: this.isTest ? 'BOGOTA' :  '',
        authorized_data: this.isTest ? true : false,
        typeOfMeeting: 'Skype',
        comments: this.isTest ? 'ESTE ES UN COIMENTARIO DE PRUEBA' : ' - ',
        files: [],
        refCode: ''
    }

    setName(name: string){
        this.CONSULTING.name = name;
    }
    setCompany(company: string){
        this.CONSULTING.company =company;
    }  
    setNIT(nit: string){
        this.CONSULTING.nit = nit;
    }
    setEmail(email: string){
        this.CONSULTING.email = email;
    }
    setPhone(phone: string){
        this.CONSULTING.phone = phone;
    }
    setSkype(skype: string){
        this.CONSULTING.skype = skype;
    }
    setCity(city: string){
        this.CONSULTING.city = city;
    }
    setAuthorizeData(authorized: string){
        this.CONSULTING.authorized_data = authorized;
    }
    setTypeOfMeeting(typeOfMeeting: string){
       this.CONSULTING.typeOfMeeting = typeOfMeeting;
    }
    setComments(comments: string){
        this.CONSULTING.comments = comments;
    }
    setFiles(files: any[]){
        this.CONSULTING.files = files;
    }
    






    nextSlide(): void {
        console.error()
        this.CONSULTING.refCode = this.CONSULTING.name + ':' + this.CONSULTING.nit;
        if(
            this.CONSULTING.name.length > 0 &&
            this.CONSULTING.company.length > 0 &&
            this.CONSULTING.nit.length > 0 &&
            this.CONSULTING.email.length > 0 && this.CONSULTING.email.includes('@') &&
            this.CONSULTING.phone.length > 0 &&
            this.CONSULTING.skype.length > 0 &&
            this.CONSULTING.city.length > 0 &&
            this.CONSULTING.authorized_data === 'SI' &&
            this.CONSULTING.typeOfMeeting.length > 0 &&
            this.CONSULTING.comments.length > 0
        ) {
             this.$emit('next', { 
            CONTACT_FORM: this.CONSULTING
        });
        } else {
            console.error(this.CONSULTING.name.length > 0)
            console.error(this.CONSULTING.company.length> 0)
            console.error(this.CONSULTING.nit.length > 0)
            console.error(this.CONSULTING.email.length > 0 && this.CONSULTING.email.includes('@'))
            console.error(this.CONSULTING.phone.length> 0)
            console.error(this.CONSULTING.skype.length> 0)
            console.error(this.CONSULTING.city.length> 0)
            console.error(this.CONSULTING.authorized_data === 'SI')
            console.error(this.CONSULTING.typeOfMeeting.length > 0)
            console.error(this.CONSULTING.typeOfMeeting)
            console.error(this.CONSULTING.comments.length> 0)
            console.error(this.CONSULTING.comments)
            console.error(this.CONSULTING)

            alert(' FAVOR INGRESAR LOS VALORES CORRECTOS EN EL FORMULARIO ')
        }
       
    }
    prevSlide(): void {
        this.$emit('prev')
    }

}
</script>


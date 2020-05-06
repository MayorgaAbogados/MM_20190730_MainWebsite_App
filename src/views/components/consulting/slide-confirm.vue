<template>

    <div class="swiper-slide-wrapper servicios confirm">

        <form class="mm-form-content">

            <h1 style="text-align: center; margin: 0 auto"> CONFIRMAR </h1>

            <div class="row">
                <div class="col" >
                 
                     <div class="input-groups">
                        <div class="input-group">
                            <label for="name"> Nombre </label>
                            <input type="text" class="form-control" id="name" name="name" :value="info.name" disabled>
                        </div>
                    </div>

                    <div class="input-groups">
                        <div class="input-group">
                            <label for="city"> Ciudad </label>
                            <input type="text" class="form-control" id="city" name="city" :value="info.city" disabled>
                        </div>
                    </div>

                    <div class="input-groups">
                        <div class="input-group">
                            <label for="department"> Departamento </label>
                            <input type="text" class="form-control" id="department" name="department" :value="info.department" disabled>
                        </div>
                    </div>

                    <div class="input-groups">
                        <div class="input-group">
                            <label for="category"> Categoria </label>
                            <input type="text" class="form-control" id="category" name="category" :value="info.category" disabled>
                        </div>
                    </div>

                    <div class="input-groups">
                        <div class="input-group">
                            <label for="service"> Servicio </label>
                            <input type="text" class="form-control" id="service" name="service" :value="info.service" disabled>
                        </div>
                    </div>

                    <div class="input-groups">
                        <div class="input-group">
                            <label for="form"> Form </label>
                            <input type="text" class="form-control" id="form" name="form" :value="info.form" disabled>
                        </div>
                    </div>

                   
                </div>
                <div class="col">

                     <div class="input-groups">
                        <div class="input-group">
                            <label for="contact-name"> Contact Name </label>
                            <input type="text" class="form-control" id="contact-name" name="contact-name" :value="info.contact.name" disabled>
                        </div>
                    </div>
                    <div class="input-groups">
                        <div class="input-group">
                            <label for="contact-email"> Contact Email</label>
                            <input type="text" class="form-control" id="contact-email" name="contact-email" :value="info.contact.email" disabled>
                        </div>
                    </div>
                    <div class="input-groups">
                        <div class="input-group">
                            <label for="contact-cc"> Contact CC</label>
                            <input type="text" class="form-control" id="contact-cc" name="contact-cc" :value="info.contact.cc" disabled>
                        </div>
                    </div>
                    <div class="input-groups">
                        <div class="input-group">
                            <label for="contact-phone"> Contact Phone</label>
                            <input type="text" class="form-control" id="contact-phone" name="contact-phone" :value="info.contact.phone" disabled>
                        </div>
                    </div>
                    
                    <div class="input-groups">
                        <div class="input-group">
                            <label for="schedule"> Agenda</label>
                            <input type="text" class="form-control" id="schedule" name="schedule" :value="info.schedule" disabled>
                        </div>
                    </div>
                    <div class="input-groups">
                        <div class="input-group">
                            <label for="files"> Files</label>
                            <input type="text" class="form-control" id="files" name="files" :value="info.files" disabled>
                        </div>
                    </div>

                </div>
            </div>

    
           
        </form>


         <mm-payu :isTest="true" :payment="payment" ref="payUForm"></mm-payu>


        <button class="prev-slide-btn" @click="prevSlide()">
            <i class="fas fa-arrow-left"></i> volver
        </button>

        <button @click="submit()" class="slide-btn">CONFIRMAR</button>
        
    </div>

</template>


<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import FormPayU from './../../../shared/components/payments-components/payu/checkout.vue';

@Component({
  components: {
      'mm-payu' : FormPayU
  }
})
export default class ConfirmServicesSlideView extends Vue {

    @Prop({default: 'info'}) public info: string|undefined;

    public ref_code: string = '';
    public email: string = '';

    get payment(){
        return {
                description: ((this.info as any).category || '') + ' ' + ((this.info as any).service || ''),
                referenceCode: this.ref_code,
                amount: '250000',
                currency: 'COP',
                tax: 0.19,
                email: this.email,
                responseUrl: `http://server.mayorga.com.co/api/payments/add/payu/type/${'consulting'}/refCode/${this.ref_code}`,
                confirmationUrl: `http://server.mayorga.com.co/api/payments/add/payu/type/${'consulting'}/refCode/${this.ref_code}`
            }
    }

    get getInfo(){
        console.warn(' ==== > ')
        console.warn(this.info)
        return this.info;
    }

    submit(): void {
       
       this.$store.dispatch('LoaderModule/OPEN');

       fetch("http://server.mayorga.com.co/api/consulting",{ 
            method: 'POST',
            body: JSON.stringify( this.info )
        })
            .then(function(response) {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                return response.json();
            }).then((body) => {

                const ref_code = body.ref_code;
                this.ref_code = ref_code;
                this.email =  this.info ? (this.info as any).contact.email : '' ;
             
                const payu: any = (this.$refs.payUForm as any);
                payu.send();

            }).catch((error) => {
                console.log(error);
            });

    }

    prevSlide(): void {
        this.$emit('prev')
    }

}
</script>




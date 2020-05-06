<template>
  <div class="mm-form budget-form init-form">

      <div class="mm-form-background">

      </div>
      <div class="mm-form-content">
          <form action="" method="post" v-on:submit.prevent="onSubmit">
                <div class="form-header">
                    COTICE NUESTROS SERVICIOS
                </div>
                <div class="form-body">
                    <div class="form-row">
                        <p style="padding: 0em 1em">
                            Si desea conocer y cotizar nuestros servicios de asistencia legal, 
                            por favor seleccione las opciones de su interés.
                        </p>
                    </div>
                    <div class="form-row row-cols-2">
                        <div class="form-col">
                            <div class="input-groups">
                                <div class="input-group">
                                    <label for="name">NOMBRES Y APELLIDOS</label>
                                    <input type="text" class="form-control" id="name" name="name" v-model="form.name" required>
                                </div>
                                <div class="input-group">
                                    <label for="email">EMAIL</label>
                                    <input type="text" class="form-control" id="email" name="email" v-model="form.email" required>
                                </div>
                                <div class="input-group">
                                    <label for="phone">TELÉFONO</label>
                                    <input type="text" class="form-control" id="phone" name="phone" v-model="form.phone" required>
                                </div> 
                                <div class="input-group">
                                    <label for="skype">SKYPE</label>
                                    <input type="text" class="form-control" id="skype" name="skype" v-model="form.skype">
                                </div>
                            </div>
                        </div>
                        <div class="form-col">
                            <div class="input-groups">
                                <div class="input-group">
                                    <label for="category">ESPECIALIDAD DE LA CONSULTA</label>
                                    <select class="form-control" id="category" name="category" v-model="form.category">
                                        <option>Derecho Aduanero Administrativo</option>
                                        <option>Derecho Tributario Administrativo</option>
                                        <option>Derecho Penal Aduanero</option>
                                        <option>Derecho Penal Tributario</option>
                                        <option>Derecho cambiario</option>
                                        <option>Derecho comercial</option>
                                        <option>Derecho Tributario</option>
                                    </select>
                                </div>
                                <div class="input-group">
                                    <label for="comment">CONSULTA</label>
                                    <textarea id="comment" name="comment" rows="8" v-model="form.comment"></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="form-row row-cols-2">
                        <div class="form-col">
                            <div class="input-groups">
                                <div class="input-group">
                                    <label for="company">RAZON SOCIAL EMPRESA</label>
                                    <input type="text" class="form-control" id="company" name="company" v-model="form.company" required> 
                                </div>
                                <div class="input-group">
                                    <label for="nit">NIT EMPRESA O CONSULTANTE</label>
                                    <input type="text" class="form-control" id="nit" name="nit" required v-model="form.uid"> 
                                </div>
                                <div class="input-group">
                                    <label for="city">CIUDAD / MUNICIPIO </label>
                                    <!-- string value -->
                                    <model-select :options="cities"
                                    v-model="city"
                                    placeholder="Selecciona una ciudad">
                                    </model-select>
                                </div>
                            </div>
                        </div>
                        <div class="form-col">
                            <div class="input-groups">
                                <div class="input-group upload-multiple-files" style="    padding-top: 1.5em;">
                                <label>ARCHIVOS ADJUNTOS </label>

                                <input type="file" name="file" id="file" class="inputfile" @change="onChangeUploadFile" ref="mmFileUploadRef" multiple />
                                <label for="file" class="inputfile-label" > Agregar Archivos </label>

                                <ul class="file-list">
                                   <li v-for="(file, index)  of files" v-bind:key="index"> 

                                       <div class="left">
                                        <span>{{ file.name }} </span>
                                       </div>

                                       <div class="middle">

                                       </div>

                                       <div class="right">
                                           <i class="far fa-trash-alt"></i>
                                       </div>
                                    
                                    </li> 
                                </ul>
                            </div>
                            </div>
                        </div>
                    </div>

                    <div class="form-row">
                        <p style="padding: 1em">
                            Con gusto, MAYORGA ABOGADOS, brindará respuesta telefónica por abogado experto, dentro de las 72 horas hábiles siguientes al recibo de su pago a través de experto, en conversación de veinte (20) minutos. Factura se emitirá con posterioridad y se allegará en forma electrónica.
                        </p>
                    </div>
                </div>
                 <div class="form-footer">
                     <button type="button" class="btn btn-secondary" style="margin-right: 1pc; padding: 1.25em">CANCELAR COTIZACIÓN</button>
                     <input type="submit" class="btn btn-success" style="marging:0em;  padding: 1.25em" value="SOLICITAR COTIZACIÓN">
                </div>
          </form>
      </div>

      <mm-payu :isTest="true" :payment="payment" ref="payUForm"></mm-payu>

  </div>
</template>


<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { ModelSelect } from 'vue-search-select';
import FormPayU from '../../components/payments-components/payu/checkout.vue';

const md5 = require('md5');
const confirmAPI = 'http://server.mayorga.com.co/api/payments/add/payu';
@Component({
  components: {
      'model-select' : ModelSelect,
      'mm-payu' : FormPayU
  }
})
export default class MeetingBookingView extends Vue {

    private isTest= true;
    private city: any = {};
    private cities: any[] = [];
    private files: any[] = [];
    private form: any = {
        name: '',
        email: '',
        phone: '',
        skype: '',
        company: '',
        uid: '',
        city: '',
        department:'',
        category: '',
        comment: '',
        payment: 'PENDING',
        ref_code: '',
        files: []
    }

    private payment: any = {
        description: '',
        referenceCode: '',
        amount: '',
        currency: 'COP',
        tax: 0.19,
        email: '',
        responseUrl: '',
        confirmationUrl: '' 
    }
    private mounted(): void {

        const departmentsJSON = require("../../../assets/json/municipios.json");
        const citiesJSON = [].concat.apply([],departmentsJSON.map((departmentJSON: any) => departmentJSON.ciudades));
        const cities = citiesJSON.map((cityJSON: any) => {

            const city = {
                value : {
                    city : cityJSON,
                    department: departmentsJSON.filter((departmentJSON: any) => departmentJSON.ciudades.includes(cityJSON))[0].departamento
                },
                text: cityJSON
            }

            return city;
        })

        this.cities = cities;



        const isTest = true;
        if(isTest){
            const formString = '{"name":"Jorge Luis Mayorga","email":"wallamejorge@hotmail.com","phone":"3005318387","skype":"wallamejorge","company":"Mayorga SAS","uid":"2234242424232","city":"Leticia","department":"Amazonas","category":"Derecho Penal Aduanero","comment":"Con gusto, MAYORGA ABOGADOS, brindará respuesta telefónica por abogado experto, dentro de las 72 horas hábiles siguientes al recibo de su pago a través de experto, en conversación de veinte (20) minutos. Factura se emitirá con posterioridad y se allegará en forma electrónica.fg","files":{}}';
            this.form = JSON.parse(formString);
            this.city = {
                text: "Abriaquí",
                value: {
                    city: "Abriaquí",
                    department: "Antioquia"
                }
            }
        }
    }


    private onChangeUploadFile() : void{
        // mmFileUploadRef
        this.files = (this.$refs.mmFileUploadRef as any).files;
        console.log('files')
        console.log(this.files)
    }




    private onSubmit(): void{

        this.payment.description = 'COTIZACIÓN DE SERVICIO';
        this.payment.referenceCode = md5('BUDGET ==> DATE::' + (new Date()) + ' SEED::' + Math.random() + ' DESCRIPTION::' +this.payment.description + '@!.');
        this.payment.amount = '160000';
        this.payment.email = this.form.email;
        this.payment.responseUrl =  confirmAPI + '/type/' + 'budget' + '/refCode/'+ this.payment.referenceCode  +'';

        this.form.city = (this.city as any).value.city;
        this.form.department = (this.city as any).value.department;
        this.form.files = this.files;
        this.form.payment_status = 'PENDING';
        this.form.ref_code = this.payment.referenceCode;

        this.$store.dispatch('LoaderModule/OPEN');

        fetch("http://server.mayorga.com.co/api/budgets",{ 
            method: 'POST',
            body: JSON.stringify( this.form )
        })
            .then(function(response) {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                return response;
            }).then((response) => {

                console.warn(response);
                console.warn('')
                console.warn('')
                console.warn('this.payU.form')
                console.warn(this.payment)
                console.warn((this.$refs.payUForm as any))
                console.warn('')

                const payu: any = (this.$refs.payUForm as any);
                payu.send();

            }).catch((error) => {
                console.log(error);
            });

    }

}

</script>


<style lang="less">
    @import './styles/form.style.less';
    @import './styles/inputs.style.less';
</style>



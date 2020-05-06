<template>
  <div class="booking-calendar" id="booking-calendar-section">
      <div class="booking-calendar-bg"></div>
      <div class="booking-calendar-content">
          <form class="calendar-form">

                <div class="calendar-form-header" style="text-transform: capitalize">
                    CONVIERTACE  EN MIEMBRO VIP
                </div>

                <div class="calendar-form-content">


                     <div class="content-row">

                        <div class="content-col form-inputs">
                            <div class="input-group">
                                <label for="name">NOMBRES Y APELLIDOS</label>
                                <input type="text" class="form-control" id="name" name="name" required>
                            </div>
                            <div class="input-group">
                                <label for="email">EMAIL</label>
                                <input type="text" class="form-control" id="email" name="email" required>
                            </div>
                            <div class="input-group">
                                <label for="phone">TELÉFONO</label>
                                <input type="text" class="form-control" id="phone" name="phone" required>
                            </div> 
                            <div class="input-group">
                                <label for="skype">SKYPE</label>
                                <input type="text" class="form-control" id="skype" name="skype">
                            </div>
                        </div>
                        <div class="content-col form-inputs ">
                            
                            <div class="input-group">
                                <label for="company">RAZON SOCIAL EMPRESA</label>
                                <input type="text" class="form-control" id="company" name="company" required> </div>
                            <div class="input-group">
                                <label for="nit">NIT EMPRESA O CONSULTANTE</label>
                                <input type="text" class="form-control" id="nit" name="nit" required> </div>
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

                    <hr>

                    <div class="content-row">
                        <div class="content-col form-inputs meeting-info">
                            <div class="input-group">
                                <label for="category">ESPECIALIDAD DE LA CONSULTA</label>
                                <select class="form-control" id="category" name="category">
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
                                <textarea id="comment" name="comment" rows="8"></textarea>
                            </div>

                     

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
                        <div class="content-col form-calendar"> </div>
                    </div>

                   
                </div>

              <div class="calendar-form-footer">
                    <button type="button" class="btn btn-secondary" style="margin-right: 1pc; padding: 1.25em">CANCELAR COTIZACIÓN</button>
                    <button type="button" class="btn btn-success" style="marging:0em;  padding: 1.25em">SOLICITAR COTIZACIÓN</button>
              </div>
          </form>
      </div>
  </div>
</template>


<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { ModelSelect } from 'vue-search-select';

@Component({
  components: {
      'model-select' : ModelSelect
  }
})
export default class MeetingBookingView extends Vue {

    private city: string = '';
    private cities: any[] = [];
    private files: any[] = [];
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
    }


    private onChangeUploadFile() : void{
        // mmFileUploadRef
        this.files = (this.$refs.mmFileUploadRef as any).files;
        console.log('files')
        console.log(this.files)
    }


   

}
</script>


<style lang="less">
div.booking-calendar{

    cursor: default;

    hr{
        -moz-border-bottom-colors: none;
        -moz-border-image: none;
        -moz-border-left-colors: none;
        -moz-border-right-colors: none;
        -moz-border-top-colors: none;
        border-color: #EEEEEE -moz-use-text-color #FFFFFF;
        border-style: solid none;
        border-width: 1px 0;
        margin: 18px 0;
    }
}
div.booking-calendar{

    display: block;
    position: relative;
    width: 100vw;
    min-height: 100vh;

    &-bg{
        display: block;
        width: 100vw;
        min-height: 100vh;
        position: absolute;
        top: 0px;
        left: 0px;


        /* Add the blur effect */
        filter: blur(35px);
        -webkit-filter: blur(35px);

        opacity: 0.5;

        /* Full height */
        height: 100%;

        /* Center and scale the image nicely */
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;

        background-image: url('https://images.pexels.com/photos/1560932/pexels-photo-1560932.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')
    }
    &-content{
        display: block;
        width: 100vw;
        min-height: 100vh;
        position: absolute;
        top: 0px;
        left: 0px;

            display: -ms-flexbox;
            display: -webkit-flex;
            display: flex;
            -webkit-flex-direction: row;
            -ms-flex-direction: row;
            flex-direction: row;
            -webkit-flex-wrap: wrap;
            -ms-flex-wrap: wrap;
            flex-wrap: wrap;
            -webkit-justify-content: center;
            -ms-flex-pack: center;
            justify-content: center;
            -webkit-align-content: center;
            -ms-flex-line-pack: center;
            align-content: center;
            -webkit-align-items: center;
            -ms-flex-align: center;
            align-items: center;
    }
    form.calendar-form{
        width: calc(100% - 2em);
        box-sizing: border-box;
        padding: 0em;
        margin-top: 100px;
        max-width: 900px;
        height: fit-content;
        background-color: white;
        border:1px solid gray;
        -webkit-box-shadow: 0px 0px 2px 2px rgba(0,0,0,0.22);
        -moz-box-shadow: 0px 0px 2px 2px rgba(0,0,0,0.22);
        box-shadow: 0px 0px 2px 2px rgba(0,0,0,0.22);
    }
    div.calendar-form-header{
        display:block; 
        width: 100%; 
        padding: 0.5em 1em; 
        box-sizing: border-box; 
        background-color: #fff; 
        border-bottom: 1px solid #e7ebed;
        font-size: 25px;
        font-weight: 300;
        letter-spacing: 0px;
        text-align: left;
    }
    div.calendar-form-content{ 
        display:block; 
        width: 100%; 
        padding: 1em; 
        box-sizing: border-box; 
        background-color: #f4f6f7;
    }
    div.calendar-form-footer{ 
        display:block; 
        width: 100%; 
        padding: 1em; 
        box-sizing: border-box; 
        background-color: #fff;
    }
    div.calendar-form-content{
        width: 100%;
        box-sizing: border-box;
        padding: 1em;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        -webkit-flex-direction: row;
        -ms-flex-direction: row;
        flex-direction: row;
        -webkit-flex-wrap: nowrap;
        -ms-flex-wrap: nowrap;
        flex-wrap: nowrap;
        -webkit-justify-content: space-between;
        -ms-flex-pack: justify;
        justify-content: space-between;
        -webkit-align-content: stretch;
        -ms-flex-line-pack: stretch;
        align-content: stretch;
        -webkit-align-items: flex-start;
        -ms-flex-align: start;
        align-items: flex-start;
        div.content-col{
            display: -ms-flexbox;
            display: -webkit-flex;
            display: flex;
            -webkit-flex-direction: column;
            -ms-flex-direction: column;
            flex-direction: column;
            -webkit-flex-wrap: nowrap;
            -ms-flex-wrap: nowrap;
            flex-wrap: nowrap;
            -webkit-justify-content: flex-start;
            -ms-flex-pack: start;
            justify-content: flex-start;
            -webkit-align-content: stretch;
            -ms-flex-line-pack: stretch;
            align-content: stretch;
            -webkit-align-items: flex-start;
            -ms-flex-align: start;
            align-items: flex-start;

            box-sizing: border-box;
            padding: 1em;
            &.form-inputs{
                label{
                    display: block;
                    width: 100%;
                    text-align: left;
                    font-weight: 900;
                    font-size: 1em;
                    padding-left:5px;
                    margin-top: 0.5rem;
                    margin-bottom: 0.5rem;
                }
                input, textarea{
                    display: block;
                    width: 100%;
                }
                select{
                    display: block;
                    width: 100%;
                }
            }
            &.form-calendar{

            }
        }
    }


}
div.booking-calendar{
    div.upload-multiple-files{
    .inputfile {
        width: 0.1px;
        height: 0.1px;
        opacity: 0;
        overflow: hidden;
        position: absolute;
        z-index: -1;
    }   
    .inputfile + label {
        font-size: 1.25em;
        font-weight: 700;
        color: white;
        background-color: #fff;
        display: inline-block;
       
    }

    .inputfile-label{
        display: block !important;
        width: fit-content !important;
        box-sizing: border-box !important;
        padding: 1em !important;
        border-radius: 0.5em !important;
        color: #d0d0d0 !important;
        border: 1px solid #ced4da !important;
    }

    .inputfile:focus + label,
    .inputfile + label:hover {
        background-color: #d0d0d0 !important;;
        color: #fff !important;;
    }
    .inputfile + label {
    cursor: pointer; /* "hand" cursor */
    }
    .inputfile:focus + label {
    outline: 1px dotted #000;
    outline: -webkit-focus-ring-color auto 5px;
    }
    .inputfile + label * {
    pointer-events: none;
    }
    }


    ul.file-list{
        
        display: block;
        width: 100%;

        list-style-type: lower-latin; 
        list-style-position: inside; 
        margin: 0px; 
        padding: 0px;

        list-style-type: none; 
        list-style-position: inside; 

        li{
            display: block;
            width: 100%;
            text-align: left;
            padding-left: 5px;
            box-sizing: border-box;

    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-flex-wrap: nowrap;
    -ms-flex-wrap: nowrap;
    flex-wrap: nowrap;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-align-content: center;
    -ms-flex-line-pack: center;
    align-content: center;
    -webkit-align-items: flex-start;
    -ms-flex-align: start;
    align-items: flex-start

        }
    }
}
</style>



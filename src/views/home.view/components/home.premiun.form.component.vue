<template>
    <div class="home floating form">

        <div class="on-collapsed" @click="UXToogleCollapsed()">
            <h2>Sea nuestro Cliente Premium</h2>
            <img src="./../../../shared/assets/images/up-icon.png">
        </div>

        <div class="on-expanded" v-if="UX.isCollapsed">
            <div class="row">
                <p class="info"> Si desea contar con SU PROPIO DEPARTAMENTO JURIDICO,
                    por solo $1.000.000 más IVA por mes, 
                    cuente con ATENCION PRIORITARIA en las especialidades de: 
                <p/>
            </div>
            <div class="row">
                <ul>
                    <li>DERECHO ADUANERO </li>
                    <li>DERECHO TRIBUTARIO  </li>                                                 
                    <li>DERECHO CAMBIARIO  </li>                                                                                    
                    <li>DERECHO COMERCIAL </li>
                    <li>DERECHO PENAL </li>
                </ul>
                <p class="discounts">
                    DESCUENTOS del 20% en seminarios, talleres y conferencias.
                    <br>
                    REDUCCION del 15% en honorarios en asuntos litigiosos
                </p>
            </div>

            <div class="">
                <h2>Favor diligencie los siguientes campos para que uno de nuestros asesores le contacte y/o programe su visita</h2>
                <form>

                    <input type="text" name="name" v-model="DATA.name" placeholder="NOMBRES Y APELLIDOS (*)" required autocomplete="on">
                    <input type="text" name="company" v-model="DATA.company" placeholder="RAZON SOCIAL EMPRESA (*)" required autocomplete="on">
                    <input type="text" name="nit" v-model="DATA.nit" placeholder="NIT EMPRESA O CONSULTANTE (*)" required autocomplete="on">
                    <input type="text" name="position" v-model="DATA.position" placeholder="CARGO (*)" required autocomplete="on">

                    <input type="text" name="email" v-model="DATA.email" placeholder="EMAIL: (*)" required autocomplete="on">
                    <input type="text" name="phone" v-model="DATA.phone" placeholder="CELULAR: (*)" required autocomplete="on">
                    <input type="text" name="skype" v-model="DATA.skype" placeholder="SKYPE">
                    <input type="text" name="city" v-model="DATA.city" placeholder="CIUDAD: (*)" required autocomplete="on">
                       
                       <br>
                    <br>

                    <div @click="HTTPSendForm">ENVIAR</div>
 
                    <br>
                    <br>

                </form>


            </div>
        </div>  
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({})
export default class FloatinVIPFormComponent extends Vue {


    private UX:any = {
        isCollapsed: false
    };

    private DATA: any = {
        name: '',
        company: '',
        nit: '',
        position: '',
        email: '',
        phone: '',
        skype: '',
        city: '',
        message: 'TENGO UNA DUDA '
    }

    private mounted() {}


    private UXToogleCollapsed():void{
        this.UX.isCollapsed = !this.UX.isCollapsed;
    }

    private HTTPSendForm():void{
        const uri_base = 'https://us-central1-mm-ui-app.cloudfunctions.net/';
        const uri_function = 'formVIP';
        const uri_body = JSON.parse(JSON.stringify(this.DATA) + '');
        this.$http.post(`${uri_base}${uri_function}`, uri_body ).then((response) => {
            console.log(response.data)
        }).catch( error => console.error(error))
    }


 
}
</script>

<style lang="less">
@color-main-blue: #60A8E2;
@color-main-gray: #B3B3B3;
@color-dark-blue: #345063;

div.home.floating.form{
    display:block;
    width: 30em;;
    position: fixed;
    bottom: 0px;
    right: 0px;

    background-color: white;
    border:1px solid @color-dark-blue;
}
div.on-collapsed{

    display:block;
    width: 100%;
    box-sizing: border-box;
    padding: 1.5em 1.5em;
    background-color: @color-dark-blue;

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
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;

    cursor:pointer;
      color: white;
    &:hover{
        color: #fbfbfb;
    }
    

    h2{
        display: inline-block;
        vertical-align: middle;

        font-family: 'Roboto', sans-serif;
        font-weight: 300;
        letter-spacing: 1px;

        font-size: 18px;
        padding: 0px;
        margin: 0px;
      
    }
    img{
        display: inline-block;
        vertical-align: middle;
        width: 1em;
    }
}

div.on-expanded{


    font-size: 15px;
    letter-spacing: 1px;
    color:@color-dark-blue;
    font-family: 'Roboto', sans-serif;

    .row{
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        -webkit-flex-direction: row;
        -ms-flex-direction: row;
        flex-direction: row;
        -webkit-flex-wrap: wrap;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        -webkit-justify-content: space-between;
        -ms-flex-pack: justify;
        justify-content: space-between;
        -webkit-align-content: flex-start;
        -ms-flex-line-pack: start;
        align-content: flex-start;
        -webkit-align-items: flex-start;
        -ms-flex-align: start;
    }

    p{
        &.info{
            display: block;
            width: 100%;
            box-sizing: border-box;
            line-height: 1.5em;
            text-align:justify;
            padding: 1em;
        }
        &.discounts{
            display: block;
            width: 50%;
            box-sizing: border-box;
            line-height: 1.5em;
            text-align:justify;
            padding: 0em;
            padding-right: 1em;
        }
    }   

    ul{
        display: block;
        width: 50%;
        box-sizing: border-box;
        line-height: 1.5em;
        text-align:justify;
        padding: 0em;
         padding-left: 1em;
    }


    h2{
        width: 100%;
        box-sizing: border-box;
        padding: 1em;

        font-family: 'Roboto', sans-serif;
        font-weight: 300;
        letter-spacing: 1px;

        font-size: 18px;
        margin: 0px;
    }
    form{
            width: 100%;
        box-sizing: border-box;
        padding: 1em;
    }
    input{
        display: block;
        width: 100%;
        box-sizing: border-box;
        padding: 1em;
        border-bottom:1px solid @color-dark-blue;
        color:@color-dark-blue;
        font-size: 0.8em;
    }

}
</style>
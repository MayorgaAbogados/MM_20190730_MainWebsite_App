<template>
  <div class="view view-signin" id="view">

    <mm-header></mm-header>


    <br>
    <br>
    <br>
    <br>


    <section>

            <div id="login-box" class="col-md-12">
                <form id="login-form" class="form-signin" action="" method="post" v-on:submit.prevent>
                    <h3 class="text-center text-info">Login</h3>
                    <div class="form-group">
                        <label for="username" class="text-info">Correo Electrónico:</label><br>
                        <input type="text" name="username" id="username" class="form-control" v-model="form.email">
                    </div>
                    <div class="form-group">
                        <label for="password" class="text-info">Contraseña:</label><br>
                        <input type="password" name="password" id="password" class="form-control" v-model="form.password">
                    </div>
              
                    <div class="icons" style="width:100%;">
                        <button class="loginBtn loginBtn--facebook">
                            Ingresar con Facebook
                        </button>
                        <button class="loginBtn loginBtn--google">
                            Ingresar con Google
                        </button>
                    </div>

                    <br>

                    <div class="form-group" style="text-align: right">
                        <input type="submit" name="submit" class="btn btn-infox btn-md" value="submit" @click="doLogin()">
                    </div>
                    <div id="register-link" class="text-right">
                        <a href="#" class="text-info">Register here</a>
                    </div>
                </form>
            </div>
    
      
    </section>



    <mm-footer></mm-footer>

  </div>
</template>





<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import DefaultHeaderComponent from '@/shared/layout/headers/default.header.vue';
import DefaultFooterComponent from '@/shared/layout/footers/default-footer.vue';

@Component({
  components: {
      'mm-header' : DefaultHeaderComponent,
      'mm-footer' : DefaultFooterComponent
  }
})
export default class SignInView extends Vue {
    private form: any = {
        email: '',
        password: ''
    }

    private doLogin(): void{
        console.log(this.form)
    }
}
</script>




<style lang="less">

div.view-signin{



    section{

            display: block;
            width: 100vw;
            height: calc(100vh - 205px - 196px);

            background-color: #f3f3f3;

            display: -ms-flexbox;
            display: -webkit-flex;
            display: flex;
            -webkit-flex-direction: row;
            -ms-flex-direction: row;
            flex-direction: row;
            -webkit-flex-wrap: nowrap;
            -ms-flex-wrap: nowrap;
            flex-wrap: nowrap;
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
    .text-info{
        color: #414141 !important
    }
    #login-box{
        display: block;
        width: 500px;
        max-width: 550px;
        color: #414141;
        border: 1px solid #d2d0d0;
        border-radius: 1em;
        padding: 2em;
        background-color: white;
    }
    #login .container #login-row #login-column #login-box {
        margin-top: 120px;
        max-width: 600px;
        height: 320px;
        border: 1px solid #9C9C9C;
        background-color: #EAEAEA;
        border:1px solid #414141;
        border-radius: 1em;
    }
    #login .container #login-row #login-column #login-box #login-form {
        padding: 20px;
        text-align: left;
    }
    #login .container #login-row #login-column #login-box #login-form #register-link {
        margin-top: -85px;
    }

    .form-group{
        text-align: left;
    }


    .btn-infox{
            color: #fff;
    background-color: #414141;
    border-color: #909090;
    }

}


div.view-signin{




    /* Shared */
    .loginBtn {
    box-sizing: border-box;
    position: relative;
    /* width: 13em;  - apply for fixed size */
    margin: 0.2em;
    padding: 0 15px 0 46px;
    border: none;
    text-align: left;
    line-height: 34px;
    white-space: nowrap;
    border-radius: 0.2em;
    font-size: 16px;
    color: #FFF;
    }
    .loginBtn:before {
    content: "";
    box-sizing: border-box;
    position: absolute;
    top: 0;
    left: 0;
    width: 34px;
    height: 100%;
    }
    .loginBtn:focus {
    outline: none;
    }
    .loginBtn:active {
    box-shadow: inset 0 0 0 32px rgba(0,0,0,0.1);
    }


    /* Facebook */
    .loginBtn--facebook {
    background-color: #4C69BA;
    background-image: linear-gradient(#4C69BA, #3B55A0);
    /*font-family: "Helvetica neue", Helvetica Neue, Helvetica, Arial, sans-serif;*/
    text-shadow: 0 -1px 0 #354C8C;
    }
    .loginBtn--facebook:before {
    border-right: #364e92 1px solid;
    background: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/14082/icon_facebook.png') 6px 6px no-repeat;
    }
    .loginBtn--facebook:hover,
    .loginBtn--facebook:focus {
    background-color: #5B7BD5;
    background-image: linear-gradient(#5B7BD5, #4864B1);
    }


    /* Google */
    .loginBtn--google {
    /*font-family: "Roboto", Roboto, arial, sans-serif;*/
    background: #DD4B39;
    }
    .loginBtn--google:before {
    border-right: #BB3F30 1px solid;
    background: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/14082/icon_google.png') 6px 6px no-repeat;
    }
    .loginBtn--google:hover,
    .loginBtn--google:focus {
    background: #E74B37;
    }



}



div.view-signin section .icons{
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
 }
</style>



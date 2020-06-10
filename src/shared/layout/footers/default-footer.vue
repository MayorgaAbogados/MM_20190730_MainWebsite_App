<template>
   <footer class="footer">
  <div class="footer-left col-md-4 col-sm-6">
    <p class="about">
      <span> MAYORGA ABOGADOS </span>  Estudio Jurídico y Económico, creado en 2005, integrado actualmente por profesionales especializados (abogados, economistas y contadores), egresados de las mejores universidades de Colombia y el Exterior; con éxitos totalmente verificables, en asesoría y asistencia legal corporativa
    </p>
    <div class="icons">
      <a href="#"><i class="fa fa-facebook" ></i></a>
      <a href="#"><i class="fa fa-twitter"></i></a>
      <a href="#"><i class="fa fa-linkedin" ></i></a>
      <a href="#"><i class="fa fa-google-plus"></i></a>
      <a href="#"><i class="fa fa-instagram"></i></a>
    </div>
  </div>
  <div class="footer-center col-md-4 col-sm-6">
    <div>
      <i class="fa fa-map-marker" style="display:inline-block;"></i>
      <p><span>  Av. El Dorado, # 68 C 61, Teusaquillo </span> Bogotá, Colombia</p>
    </div>
    <div>
      <i class="fa fa-phone"></i>
      <p> (+57) 4322595</p>
    </div>
    <div>
      <i class="fa fa-envelope"></i>
      <p><a href="#"> info@mayorga.com.co</a></p>
    </div>
  </div>
  <div class="footer-right col-md-4 col-sm-6">
     <div class="footer-middle-logo">
        <img class="m-logo" src="./../../../assets/images/m-logo.png">
        <img class="m-text" src="./../../../assets/images/m-text.png">
    </div>
    <p class="menu">
      <a href="#"> Home</a> |
      <a href="#"> ¿Quienes Somos?</a> |
      <a href="#"> Servicios</a> |
      <a href="#"> Clientes</a> |
      <a href="#"> Publicaciones</a> |
      <a href="#"> Contacto</a>
    </p>
    <p class="name"> Mayorga Abogados &copy; {{ thisYear }}</p>
  </div>
</footer>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({})
export default class FooterComponent extends Vue {

    @Prop({default: ''}) public placeholder: string|undefined;
    @Prop({default: ''}) public icon: string|undefined;
    @Prop({default: 'light'}) public theme: string|undefined;
    @Prop({default: 'fixed'}) public layout: string|undefined;
    @Prop({default: '0em 0em'}) public paddings: string|undefined;
    @Prop({default: 'bottom'}) public position: string|undefined;

    private db: any = (this as any).$db;
    private error: boolean = true;
    private text: string = '';
    private thisYear: any = '';

    private mounted() {
        this.thisYear = (new Date()).getFullYear();
    }
    private inputClass(): string {
        return `${this.theme} ${this.layout} ${this.position}`;
    }

    private onType(): void {
        this.$emit('onType',this.text);
    };

    private onFocus(): void{

    };

    private onBlur(): void{
        
    }
 
}
</script>

<style lang="less">
footer{
    display: block;
    width: 100vw;
    height: fit-content;
    padding: 0em 0em;

    p{
      width: fit-content;
    }

    color: white;
    background-color:#345063;


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
.footer-middle-logo{
    width: 100%;
    max-width: 200px;
    min-width: 100px;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-flex-wrap: nowrap;
    -ms-flex-wrap: nowrap;
    flex-wrap: nowrap;
    -webkit-justify-content: flex-start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    -webkit-align-content: stretch;
    -ms-flex-line-pack: stretch;
    align-content: stretch;
           img.m{
        &-logo{
            display: block;
            width: 3.5em;
            padding: 0em;
            padding-right: 0.5em;
            box-sizing: content-box;
        }
        &-text{
            display: block;
            width: 7em;
            padding: 0em;
            box-sizing: content-box;
        }
    }
}
.footer {
  background-color: #414141;
  width: 100%;
  text-align: left;
  font-family: sans-serif;
  font-weight: bold;
  font-size: 16px;
  padding: 50px;
  margin-top: 0px;
}

.footer .footer-left,
.footer .footer-center,
.footer .footer-right {
  display: inline-block;
  vertical-align: top;
}


/* footer left*/

.footer .footer-left {
  width: 33%;
  padding-right: 15px;
}

.footer .about {
  line-height: 20px;
  color: #ffffff;
  font-size: 13px;
  font-weight: normal;
  margin: 0;
}

.footer .about span {
  display: block;
  color: #ffffff;
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 20px;
}

.footer .icons {
  margin-top: 25px;
}

.footer .icons a {
  display: inline-block;
  width: 35px;
  height: 35px;
  cursor: pointer;
  background-color: #ffffff;
  border-radius: 2px;
  font-size: 20px;
  color: #33383b;
  text-align: center;
  line-height: 35px;
  margin-right: 3px;
  margin-bottom: 5px;

  &:hover{
      i{
        color: #60A8E2
      }
  }
  i{
    color: #33383b;
  }
}


/* footer center*/

.footer .footer-center {
  width: 30%;
}

.footer .footer-center i {
  background-color: #ffffff;
  color: #33383b;
  font-size: 25px;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  text-align: center;
  line-height: 42px;
  margin: 10px 15px;
  vertical-align: middle;

}

.footer .footer-center i.fa-envelope {
  font-size: 17px;
  line-height: 38px;
}

.footer .footer-center p {
  display: inline-block;
  color: #ffffff;
  vertical-align: middle;
  margin: 0;
}

.footer .footer-center p span {
  display: block;
  font-weight: normal;
  font-size: 14px;
  line-height: 2;
}

.footer .footer-center p a {
  color: white;
  text-decoration: none;
}


/* footer right*/

.footer .footer-right {
  width: 35%;
}

.footer h2 {
  color: #ffffff;
  font-size: 36px;
  font-weight: normal;
  margin: 0;
}

.footer h2 span {
  color: #0099ff;
}

.footer .menu {
  color: #ffffff;
  margin: 20px 0 12px;
  padding: 0;
}

.footer .menu a {
  display: inline-block;
  line-height: 1.8;
  text-decoration: none;
  color: inherit;
}

.footer .menu a:hover {
  color: #60a8e2;
}

.footer .name {
  color: white;
  font-size: 14px;
  font-weight: normal;
  margin: 0;
}

@media (max-width: 767px) {
  .footer {
    font-size: 14px;
  }
  .footer .footer-left,
  .footer .footer-center,
  .footer .footer-right {
    display: block;
    width: 100%;
    margin-bottom: 40px;
    text-align: center;
  }
  .footer .footer-center i {
    margin-left: 0;
  }
}
</style>
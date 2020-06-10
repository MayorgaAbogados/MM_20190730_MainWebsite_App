<template>
    <div class="mm-logo" >
        <img class="mm-icon-logo" src="./icons/m-icon-logo.png" @click="goToHome()">
        <img class="mm-icon-text" src="./icons/m-icon-text.png" @click="goToHome()">
        <div class="mm-icon-hamburger hamburger-menu" @click="setToogleMobileMenu()" > 
                <div class="hamburger-wrapper">
                <div class="main-item menu" :class="{ 'close' : !isOpen}">
                <span class="line line01"></span>
                <span class="line line02"></span>
                <span class="line line03"></span>
                </div>
                </div>
        </div>
    </div>
</template>

<style  lang="less">
@import '../../../styles/vendor/flexbox.less';
@import '../../../styles/vendor/hamburger.less';




    div.mm-logo{
        
        width: 100%;
        height: 60px;
        box-sizing: border-box;
        padding: 6px 6px; 
        border-bottom: 1px solid #bcbcbe ;
        z-index: 100;
        background-color: white;

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
        -webkit-align-content: center;
        -ms-flex-line-pack: center;
        align-content: center;
        -webkit-align-items: center;
        -ms-flex-align: center;
        align-items: center;

        &:hover{
            opacity: 0.8;
        }
    }

    div.mm-logo img.mm-icon-logo{
         display: block;
        box-sizing: border-box;
        width: 70px;
        height: 60px;
        object-fit: contain;
        padding: 10px 10px;
        padding-right: 5px;
        max-width: 4em;
    }

    div.mm-logo img.mm-icon-text{
        display: none;
        box-sizing: border-box;
          width: 50%;
        height: 60px;
        object-fit: contain;
        padding: 10px 0px;
    }

    div.mm-icon-hamburger{
            display:block;
            padding-left: calc(100vw - 120px);
             display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
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

    @media only screen and (min-width: 1200px) {
        div.mm-logo{
            width: 20em;
            height: 85px;
            padding: 5px;
                    border-bottom: 0px solid #bcbcbe ;

        }
        div.mm-logo img.mm-icon-text {
          display: block;
        }
          div.mm-icon-hamburger{
           display: none;
    }
    }
</style>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import store from '../../../store/index';
import { mapState, mapGetters } from 'vuex';

@Component({
})
export default class Logo extends Vue {


    private goToHome(){
        this.$router.push('/home')
    }

    get isOpen() {
        return this.$store.getters['UIHeaderMenuModule/getIsOpen'];
    }

    // private mounted(): void {}

    private setToogleMobileMenu() {
        if (this.isOpen) {
            this.$store.dispatch('UIHeaderMenuModule/CLOSE');
        } else {
           this.$store.dispatch('UIHeaderMenuModule/OPEN');
        }
    }

}
</script>
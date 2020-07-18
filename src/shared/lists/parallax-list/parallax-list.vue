<template>
    <section class="mm-parallax mm-parallax-list" >
        
         <div class="wrapper" >
          
                <div class="title-line" 
                    :style="{ marginTop : marginTop + 'px' }" 
                    v-scroll-show="rScroll > scrollInit" >
                </div>
                
                <h1 class="title-text"  v-scroll-show="rScroll > scrollInit + 5" v-html="listTitle"></h1>
                
                <h1 class="subtitle-text"  v-if="listSubtitle" v-scroll-show="rScroll > scrollInit + 7" v-html="listSubtitle"></h1>
                
                <p v-if="listDescription" v-scroll-show="rScroll > scrollInit + 10" v-html="listDescription">
                </p>

                <ul>
                    <li v-bind:style="{ width: (listWidth || '22em')}"
                        v-scroll-show="rScroll > scrollInit + 40 + 5*kItem" 
                        v-for="(listItem, kItem) of listItems" v-bind:key="listItem">
                        <img class="li-bullet" src="@/assets/images/blue-square-bullet.jpg">
                        <div class="li-wrapper" v-html="listItem">
                           
                        </div>
                    </li>
                </ul>

                <mm-button 
                    v-scroll-show="rScroll > scrollInit + 40 + 5*listItems.length"
                    :textHTML = "buttonText"
                    >
                </mm-button>

        </div>

    
    </section>
</template>


<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import BasicButtonComponent from './../../buttons/basic-button/basic-button.vue';

@Component({
   components: {
        'mm-button' : BasicButtonComponent
   }
})
export default class ParallaxList extends Vue {

    @Prop({default: 'marginTop'}) public marginTop: number|undefined;
    @Prop({default: 'scrollInit'}) public scrollInit: number|undefined;
    @Prop({default: 'listTitle'}) public listTitle: string|undefined;
    @Prop({default: 'listWidth'}) public listWidth: string|undefined;
    @Prop({default: 'listSubtitle'}) public listSubtitle: string|undefined;
    @Prop({default: 'listDescription'}) public  listDescription: string|undefined;
    @Prop({default: 'listItems'}) public  listItems: string[]|undefined;
    @Prop({default: 'buttonText'}) public  buttonText: string|undefined;
    @Prop({default: 'buttonPath'}) public  buttonPath: string|undefined;

    get gScroll(): number {
        return this.$store.getters['UIParallaxModule/getPosition'];
    }

    get rScroll(): number {
        const initPosY = '0px';
        const finalPosY = '100px';
        return (1.25 * this.gScroll / 122)*100;
    }

}
</script>


<style  lang="less">
@import '../../../styles/vendor/flexbox.less';
@import '../../../styles/vendor/hamburger.less';
@import '../../../styles/animations/scroll-reveal.less';

@import '../../../styles/themes/fonts';
@import '../../../styles/themes/colors';

.mm-parallax-list{
div.wrapper{
    display: block;
    width: 100%;
    height: 100%;
    box-sizing:border-box;
    padding: 2.5em;
}
    div.title-line{
        display: block;
        width: 1.25em;
        height: 2px;
        font-size: @med-title-font-size;
        background-color:@color-blue-main;
    }

    h1.title-text{

        display: block;
        width: fit-content;
        padding: 0em 0em;
        margin-bottom: 0em;
        
        color: @color-blue-dark;
        font-family: 'Roboto', sans-serif;
        font-size: @med-title-font-size;
        font-weight: 700;
        letter-spacing: 1px;

        #scroll-show-fade();    

    }
    h1.subtitle-text{

        display: block;
        width: fit-content;
        padding: 0em 0em;
        margin-bottom: 0em;

        color: @color-blue-light;
        font-family: 'Roboto', sans-serif;
        font-size: @med-title-font-size;
        font-weight: 700;
        letter-spacing: 1px;

        #scroll-show-fade();    

    }

    p{
        display: block;
        width: 28.5em;

        padding: 0.5em 0em;

        text-align: left;
        line-height: 1.25em;
        letter-spacing: 1px;
        
        color: @color-blue-dark;
        font-family: 'Roboto', sans-serif;
        font-size: @med-text-font-size;
        font-weight: 300;
        
    }

    ul{

        display: block;
        width: fit-content;
        padding: 0.5em 0em;

        text-align: left;
        width: 28.5em;
        line-height: 1.25em;
        
        color: @color-blue-dark;
        font-family: 'Roboto', sans-serif;
        font-size: @med-text-font-size;
        font-weight: 300;
        letter-spacing: 1px;
    }

    li{
        width: 22em;
        padding: 0.25em 0em;
        display: block;
        img.li-bullet{
           display: inline-block;
           vertical-align: top;
           width: 0.75em; 
            padding-top: 0.5em;
        }
        div.li-wrapper{
            display: inline-block;
            vertical-align: middle;
            width: ~"calc(100% - 2em)";
            padding-left: 0.5em;
            margin-left: 1em;
            padding: 0.25em 0em;
            border-bottom: 2px solid @color-blue-light;
            strong{
                font-weight: 900;
            }
        }
    }

    button{

        display: block;
       
    }
}
@media only screen and (min-width: 1200px) {
    
}
</style>


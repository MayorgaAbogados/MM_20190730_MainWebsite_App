<template>
    <section class="mm-parallax mm-parallax-list" >
        
         <div class="wrapper">

                <div class="title-line" v-scroll-show="rScroll > scrollInit"></div>
                
                <h1 class="title-text"  v-scroll-show="rScroll > scrollInit + 5" v-html="listTitle"></h1>
                
                <h1 class="subtitle-text"  v-if="listSubtitle" v-scroll-show="rScroll > scrollInit + 7" v-html="listSubtitle"></h1>
                
                <p v-if="listDescription" v-scroll-show="rScroll > scrollInit + 10" v-html="listDescription">
                </p>

                <ul>
                    <li v-scroll-show="rScroll > scrollInit + 40 + 5*kItem" v-for="(listItem, kItem) of listItems" v-bind:key="listItem">
                        <img class="li-bullet" src="@/assets/images/blue-square-bullet.jpg">
                        <div class="li-wrapper" v-html="listItem">
                           
                        </div>
                    </li>
                </ul>
                <button v-scroll-show="rScroll > scrollInit + 40 + 5*listItems.length">
                    {{ buttonText }}
                </button>
        </div>

        {{ rScroll }} , {{ scrollInit }}
    
    </section>
</template>

<style  lang="less">
@import '../../../styles/vendor/flexbox.less';
@import '../../../styles/vendor/hamburger.less';
@import '../../../styles/animations/scroll-reveal.less';

@color-dark-blue: #345063;
@color-main-blue: #578ABE;
@color-light-blue: #60A8E2;
@font-title-size: 40px;
@font-text-size: 18px;
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
        font-size: @font-title-size;
        background-color:@color-main-blue;
    }

    h1.title-text{

        display: block;
        width: fit-content;
        padding: 0.5em 0em;
        
        color: @color-dark-blue;
        font-family: 'Roboto', sans-serif;
        font-size: @font-title-size;
        font-weight: 700;
        letter-spacing: 1px;

        #scroll-show-fade();    

    }
    h1.subtitle-text{

        display: block;
        width: fit-content;
        padding: 0.5em 0em;
        
        color: @color-light-blue;
        font-family: 'Roboto', sans-serif;
        font-size: @font-title-size;
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
        
        color: @color-dark-blue;
        font-family: 'Roboto', sans-serif;
        font-size: @font-text-size;
        font-weight: 300;
        
    }

    ul{

        display: block;
        width: fit-content;
        padding: 0.5em 0em;

        text-align: left;
        width: 28.5em;
        line-height: 1.25em;
        
        color: @color-dark-blue;
        font-family: 'Roboto', sans-serif;
        font-size: @font-text-size;
        font-weight: 300;
        letter-spacing: 1px;
    }

    li{
        width: 22em;
        padding: 0.25em 0em;
        display: block;
        img.li-bullet{
           display: inline-block;
           vertical-align: middle;
           width: 0.75em; 
        }
        div.li-wrapper{
            display: inline-block;
            vertical-align: middle;
            width: ~"calc(100% - 2em)";
            padding-left: 0.5em;
            margin-left: 1em;
            padding: 0.25em 0em;
            border-bottom: 2px solid @color-light-blue;
            strong{
                font-weight: 900;
            }
        }
    }

    button{
        display: block;
        color: #fff;
        border:none;
        outline: none;
        padding: 0.75em 1.25em;
        margin: 2em 0em;
        font-size: 18px;
        letter-spacing: 1px;
 
        background-color: @color-dark-blue;

        &:hover{
            opacity: 0.8;
            cursor: pointer;
        }
    }
}
@media only screen and (min-width: 1200px) {
    
}
</style>


<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
@Component({})
export default class ParallaxList extends Vue {

    @Prop({default: 'scrollInit'}) public scrollInit: number|undefined;
    @Prop({default: 'listTitle'}) public listTitle: string|undefined;
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
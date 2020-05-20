<template>
    <div class="mm-dropdown" @mouseenter="setHover(true)" @mouseleave="setHover(false)" 
    :class="getHeaderSizeClass() + ' ' +  getIsActiveClass()">
        

        <div class="mm-dropdown-header" :class="onHoverClass()" @click="setCurrentTab(title)" >
            <div class="wrapper">
                <h1 class="mm-subtitle" > {{ title }}</h1> 
            </div>
        </div>


        <div class="mm-dropdown-content" :class="onHoverClass()" >
            <ul style="padding: 0px; padding: 0px;width: width: 100%;">
                <li v-for="(item, keys) of items" v-bind:key="keys" style="width: 100%;
    padding: 0px; text-align:center; width:100%">
                    <a @click="setCurrentSection(title,item.path)">
                        <h1 class="mm-subtitle" > {{ item.text }}</h1> 
                    </a>
                </li>
            </ul>
        </div>

        

    </div>
</template>

<script lang="ts">
import { Component, Vue , Prop} from 'vue-property-decorator';
import { DropdownItem, DropdownMenu} from './dropdown.interfaces';
@Component({
  components: {},
})
export default class DefaultDropdown extends Vue {

    @Prop({default: 'title'}) public title: string|undefined;
    @Prop({default: 'items'}) public items: DropdownItem[]|undefined;
    @Prop({default: 'isActive'}) public isActive: boolean|undefined;

    private isHover: boolean = false;

    private setHover(isHover: boolean): void {
        this.isHover = isHover;
    }
    private onHoverClass(): string {
        return (this.isHover) ? 'show' : 'hide';
    }
    private getHeaderSizeClass(): string {
        const titleSize: number = ((this.title + '').length);
        const titleExlarge: string = (titleSize >= 14) ? 'mm-dq-size-exlarge' : '' ;
        const titleLarge: string = (titleSize >= 12 && titleSize < 14) ? 'mm-dq-size-large' : '' ;
        const titleMiddle: string = (titleSize >= 8 && titleSize < 12) ? 'mm-dq-size-middle' : '' ;
        const titleSmall: string = (titleSize < 8) ? 'mm-dq-size-small' : '' ;
        return titleExlarge + titleLarge + titleMiddle + titleSmall;
    }

    private getIsActiveClass(): string {
        return this.isActive ? 'mm-dq-is-active' : 'mm-dq-not-active';
    }

    private setCurrentTab(tab: string): void {
        this.$store.dispatch('UIHeaderMenuModule/SET_CURRENT_TAB', tab);
        console.log('AFTER COMMIT');
    }

    private setCurrentSection(tab: string, section: string){
         this.$store.dispatch('UIHeaderMenuModule/SET_CURRENT_TAB', tab);
         if(section.includes('http')){
             location.href = section;
         } else {
            this.$router.push(section);
         }
    }

}
</script>

<style  lang="less">

.mm-subtitle{

    width: fit-content;
    box-sizing: border-box;

    font-family: Roboto,sans-serif;
    font-size: 16px;
    font-weight: 300;
    letter-spacing: 1px;

    padding: 5px;
    margin: 0px;

    color: #b3b3b3;
}
div.mm-dropdown{
    display: block;
    max-width: 200px;
    position: relative;
    z-index: 50;
    a{
        &:hover{
       color: inherit; /* blue colors for links too */
        text-decoration: inherit; /* no underline */

        }
        &:active{
        color: inherit; /* blue colors for links too */
        text-decoration: inherit; /* no underline */
        }
    }
}
div.mm-dropdown-header{
    display: block;
     background-color: white;
    z-index: 100;
     position: relative;
    top:0px;
        height: 85px;
}

div.mm-dropdown-header .wrapper{

    display: block;
    z-index: 100;
    width: 100%;
    height: 85px;
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
div.mm-dropdown-content li{

    margin:0;
    padding: 0;
    text-indent: 0;
    list-style: none;
    list-style-type: 0;
    padding: 0em 1em;

     width: 100%;
        height: 85px;
        display: block;
    // border: 1px solid gray;

    a{



        width: 100%;
        height: 60px;
        display: block;
        color: gray;
            
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

}
h1{

    border-top: 2px solid transparent;
    border-bottom: 2px solid transparent;

    padding: 1em .5em;
    padding: 5px;

 text-align: center;
}

div.mm-dropdown{

        cursor: pointer;
        .mm-dropdown-content.hide{
           
                -webkit-transition: all 500ms ease-in-out;
                -moz-transition: all 500ms ease-in-out;
                -ms-transition: all 500ms ease-in-out;
                -o-transition: all 500ms ease-in-out;
                transition: all 500ms ease-in-out;
        
                position: relative;
                top: -400px;
                height: 0px;


                 .mm-subtitle{ color: #b3b3b3; &:hover{color: #b3b3b3;} }
            
        }
      
        .mm-dropdown-content.show{

                -webkit-transition: all 500ms ease-in-out;
                -moz-transition: all 500ms ease-in-out;
                -ms-transition: all 500ms ease-in-out;
                -o-transition: all 500ms ease-in-out;
                transition: all 500ms ease-in-out;
            
                position: relative;
                top: 0px;
                height: fit-content;

                  .mm-subtitle{ color: white; &:hover{color: white;} }
           
        }
}

div.mm-dq-size-exlarge{ width:12em;}
div.mm-dq-size-large{ width:10em;}
div.mm-dq-size-middle{width: 8em;}
div.mm-dq-size-small{width: 5em;}

div.mm-dq-is-active{
    div.mm-dropdown-header .wrapper h1{
        border-top: 2px solid #60a8e2;
        border-bottom: 2px solid #ffffff;
    }
    .hide{
       background-color: white;
    }
    .show{
        background-color: #60a8e2;
        h1{
            color: white !important;
        }
    }
}
div.mm-dq-not-active{
     div.mm-dropdown-header .wrapper h1{
         padding: 5px;
        border-top: 2px solid #ffffff;
        border-bottom: 2px solid #ffffff;
    }
    .hide{
       background-color: white;
    }
    .show{
        background-color: #60a8e2;
       
    }

     div.mm-dropdown-header.show h1{
            padding: 5px;
            color: white !important;
            border-top: 2px solid #60a8e2 !important;
            border-bottom: 2px solid #ffffff !important;
        }
}


.mm-dropdown-content.show li{ 
    opacity: 1;
}
.mm-dropdown-content.show li:hover{ 
        opacity: 0.5;
}

div.mm-dropdown-content{
    display: block;
    width: 100%;
    background-color: white;
    z-index: 50;
    position: relative;
    top:0px;
    h1 {border-color:rgba(0,0,0,0) !important;}
}
@media only screen and (min-width: 1200px) {
  


}
</style>

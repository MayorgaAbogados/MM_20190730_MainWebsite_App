<template>
    <div class="dropdown-menu">
        
        <div class="dropdown-menu--header" :class="`${hoverClass} ${selectedClass}`">  
             <h2>{{ title }}</h2> 
        </div>
        <ul class="dropdown-menu--items" :class="`${hoverClass} ${selectedClass}`">
            <li class="dropdown-menu--item" v-for="(item,index) of options" v-bind:key="index">
               <a v-if="item.link.includes('http')" :href="item.link" > {{ item.text }} </a>
               <router-link v-if="!item.link.includes('http')"  :to="item.link" > {{ item.text }} </router-link>
            </li>
        </ul>
          
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
export interface IDropdownOption {
    text : string;
    link : string;
}
@Component({})
export default class DropdownComponent extends Vue {

    @Prop({default: ''}) public title: string |undefined;
    @Prop({default: []}) public options: IDropdownOption[] |undefined;
    
    @Prop({default: 'default'}) public hoverClass: string |undefined;
    @Prop({default: 'default'}) public selectedClass: string |undefined;




    private mounted() {}
 
}
</script>

<style lang="less">
@color-main-blue: #60A8E2;
@color-main-gray: #B3B3B3;

#anim(@time){
    -webkit-transition: all @time ease-in-out;
    -moz-transition: all @time ease-in-out;
    -o-transition: all @time ease-in-out;
    transition: all @time ease-in-out;
}


div.dropdown-menu{
    display: block;
    width: 100%;
    position: relative;
}


div.dropdown-menu--header{
    display: block;
    width: 100%;
    height: 87px;

    position: relative;

    padding: 0em;
    margin: 0em;

    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    letter-spacing: 1px;

    cursor: pointer;

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
    -webkit-align-content: center;
    -ms-flex-line-pack: center;
    align-content: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;

    h2{
        margin: 0px 1em;
        padding: 0px;
        display: inline-block;
        vertical-align: middle;
    }

    &.selected-default.hover-default{ 
        h2{
            border-top: 2px solid rgba(0,0,0,0);
            border-bottom: 2px solid rgba(0,0,0,0);
            padding-top: 0.5em;
            padding-bottom: 0.5em;

            color: @color-main-gray;
        }

         padding-top: 0.5em;
         background-color: #ffffff;
         color: #B3B3B3;
    
    }
    &.selected-default.hover-active{ 
        h2{
            border-top: 2px solid rgba(0,0,0,0);
            border-bottom: 2px solid rgba(0,0,0,0);
            padding-top: 0.5em;
            padding-bottom: 0.5em;

            color: white;
        }

         padding-top: 0.5em;
         background-color: @color-main-blue;
         color: white;
   
    }
    &.selected-active.hover-default{ 
        h2{
            border-top: 2px solid @color-main-blue;
            border-bottom: 2px solid rgba(0,0,0,0);
            padding-top: 0.5em;
            padding-bottom: 0.5em;
            color: @color-main-blue;
        }
               padding-top: 0.5em;
         background-color: #ffffff;
         color: #B3B3B3;
    }
    &.selected-active.hover-active{ 
        h2{
            border-top: 2px solid rgba(0,0,0,0);
            border-bottom: 2px solid white;
            padding-top: 0.5em;
            padding-bottom: 0.5em;
            color: white;
        }
         padding-top: 0.5em;
         background-color: @color-main-blue;
         color: white;
    }

}


ul.dropdown-menu--items{
        display: block;
        position: relative;
        height: fit-content;
    &.hover-default{ 
        #anim(0.25s);
        height: 0px;
        overflow: hidden;
    }
    &.hover-active{
        #anim(0.25s);
        height: 200px;
        background-color: @color-main-blue;
        color:white;
    }
}
li.dropdown-menu--item{
    display: block;
    padding: 1em 0em;
    position: relative;
    a{
        text-decoration: none;
        color: white;
        &:hover{
            color: @color-main-gray;
        }
    }

}
</style>
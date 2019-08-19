<template>
    <div class="dropdown-menu">
        
        <div class="dropdown-menu--header"> {{ header}} </div>
        <ul class="dropdown-menu--items">
            <li class="dropdown-menu--item" v-for="(item,index) of list" v-bind:key="index">
                {{ item }}
            </li>
        </ul>
          
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({})
export default class DropdownComponent extends Vue {

    @Prop({default: ''}) public header: string |undefined;
    @Prop({default: ''}) public list: string[] |undefined;


    private mounted() {}


 
}
</script>

<style lang="less">
@color-main-blue: #60A8E2;
@color-main-gray: #B3B3B3;
div.dropdown-menu{
    display: block;
    height: 100px;
    position: relative;


}
div.dropdown-menu--header{
    display: block;
    position: relative;

}
ul.dropdown-menu--items{
    display: block;
    position: relative;
    height: fit-content;
}
li.dropdown-menu--item{
    display: block;
    padding: 1em 0em;
    position: relative;

}
</style>
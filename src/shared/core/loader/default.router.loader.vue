<template>  
    <div class="loader" v-if="isOpen">

        <img src="https://thumbs.gfycat.com/ArtisticShoddyKudu-small.gif" width="100px">
          
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';


@Component({

})
export default class DefaultLoaderComponent extends Vue {


    get isOpen() {
        return this.$store.getters['LoaderModule/getIsOpen'];
        //return true;
    }

}
</script>

<style>
div.loader{
    display: block;
    position: fixed;
    z-index: 1000000000;
    background-color: white;
    opacity: 0.85;

    top: 0px;
    left: 0px;
    width: 100vw;
    height: 100vh;

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
div.loader img{
    width: 150px;
    height: auto;
    display: block;
    position: absolute;
    top: calc(50vh - 75px);
}
</style>
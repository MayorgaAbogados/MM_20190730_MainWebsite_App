<template>
    <div class="image">


        <div class="webp" v-if="FORMAT === FORMAT_TYPES.WEBP">

            <img class="webp-thumb"  :alt="alt"  :src="`${path}${file}/${file}-thumb.webp`"  v-if="STATE == STATE_TYPES.THUMB" @load="upResolution()"/>
            <img class="webp-normal" :alt="alt"  :src="`${path}${file}/${file}-normal.webp`" v-if="STATE <= STATE_TYPES.NORMAL" @load="upResolution()"/>
            <img class="webp-hd"     :alt="alt"  :src="`${path}${file}/${file}-hd.webp`"     v-if="STATE <= STATE_TYPES.HD" @load="upResolution()"/>
            <img class="webp-4k"     :alt="alt"  :src="`${path}${file}/${file}-4k.webp`"     v-if="STATE <= STATE_TYPES.K4" @load="upResolution()"/>

        </div>

        <div class="jpg" v-if="FORMAT === FORMAT_TYPES.JPG">

            <img class="jpg-thumb"  :alt="alt"  :src="`${path}${file}/${file}-thumb.jpg`"    v-if="STATE <= STATE_TYPES.THUMB" @load="upResolution()"/>
            <img class="jpg-normal" :alt="alt"  :src="`${path}${file}/${file}-normal.jpg`"   v-if="STATE <= STATE_TYPES.NORMAL" @load="upResolution()"/>
            <img class="jpg-hd"     :alt="alt"  :src="`${path}${file}/${file}-hd.jpg`"       v-if="STATE <= STATE_TYPES.HD" @load="upResolution()"/>
            <img class="jpg-4k"     :alt="alt"  :src="`${path}${file}/${file}-4k.jpg`"       v-if="STATE <= STATE_TYPES.K4" @load="upResolution()"/>

        </div>
        -
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({ })
export default class BasicLazyImageComponent extends Vue {

    @Prop({default: '/pictures/'}) public path: string|undefined;
    @Prop({default: 'Mayorga Abogados Image'}) public alt: string|undefined;
    @Prop({default: 'home-cover-bg'}) public file: string|undefined;

    private FORMAT_TYPES = {
        JPG:0,
        WEBP:1
    };
    private STATE_TYPES = {
        THUMB: 0,
        NORMAL: 1,
        HD: 2,
        K4: 3,
    };  

    private FORMAT: number = -1;
    private STATE: number = -1;


    private upResolution(): void{
        if(this.STATE === 0){
            this.STATE = 1;
        }
        if(this.STATE === 1){
            this.STATE = 2;
        }
        if(this.STATE === 3){
            this.STATE = 3;
        }
    }

    private mounted(){

        const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
        this.FORMAT = isSafari ? this.FORMAT_TYPES.JPG : this.FORMAT_TYPES.WEBP;
        this.STATE = this.STATE_TYPES.THUMB;

        setTimeout( () => this.STATE = 1, 2000)
    }
}
</script>

<style scoped lang="less">
div.image{

    display: block;
    width: 100%;
    height: 100%;
    
    .webp,.jpg,img{
        display: block;
        position: relative;
        width: 100%;
        height: 100%;
        img{
            position: absolute;
            top: 0px;
            left: 0px;
        }
    }

    .webp-thumb,.jpg-thumb{
          filter: blur(10px);
          transition: filter 0.7s;
    }


}
</style>
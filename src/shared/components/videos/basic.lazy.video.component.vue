<template>
    <div class="image" :class="getClass()">
        
 
        <video  class="webp-video" 
                preload="auto"
                loop
                autoplay>
                <source :src="`${path}${file}/${file}-video-hd.mp4`" type="video/mp4">
                Your browser does not support the video tag.
        </video>

            <!--                 :poster="`${path}${file}/${file}-4k.webp`"


        <div class="webp" v-if="FORMAT === FORMAT_TYPES.WEBP">

            <img class="webp-thumb"  :alt="alt"  :src="`${path}${file}/${file}-thumb.webp`"  v-if="STATE >= STATE_TYPES.THUMB && !REMOVE.THUMB" @load="upResolution()"/>
            <img class="webp-normal" :alt="alt"  :src="`${path}${file}/${file}-normal.webp`" v-if="STATE >= STATE_TYPES.NORMAL && !REMOVE.NORMAL" @load="upResolution()"/>
            <img class="webp-hd"     :alt="alt"  :src="`${path}${file}/${file}-hd.webp`"     v-if="STATE >= STATE_TYPES.HD && !REMOVE.HD" @load="upResolution()"/>
            <img class="webp-4k"     :alt="alt"  :src="`${path}${file}/${file}-4k.webp`"     v-if="STATE === STATE_TYPES.K4  && !REMOVE.K4" @load="upResolution()"/>
          
        </div>

        <div class="jpg" v-if="FORMAT === FORMAT_TYPES.JPG">

            <img class="jpg-thumb"  :alt="alt"  :src="`${path}${file}/${file}-thumb.jpg`"    v-if="STATE >= STATE_TYPES.THUMB && !REMOVE.THUMB" @load="upResolution()"/>
            <img class="jpg-normal" :alt="alt"  :src="`${path}${file}/${file}-normal.jpg`"   v-if="STATE >= STATE_TYPES.NORMAL  && !REMOVE.NORMAL" @load="upResolution()"/>
            <img class="jpg-hd"     :alt="alt"  :src="`${path}${file}/${file}-hd.jpg`"       v-if="STATE >= STATE_TYPES.HD && !REMOVE.HD" @load="upResolution()"/>
            <img class="jpg-4k"     :alt="alt"  :src="`${path}${file}/${file}-4k.jpg`"       v-if="STATE === STATE_TYPES.K4  && !REMOVE.K4" @load="upResolution()"/>

        </div>

        -->


       
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({ })
export default class BasicLazyImageComponent extends Vue {

    @Prop({default: '/pictures/'}) public path: string|undefined;
    @Prop({default: 'Mayorga Abogados Image'}) public alt: string|undefined;
    @Prop({default: 'home-cover-bg'}) public file: string|undefined;
    @Prop({default: 'full-w'}) public size: string|undefined;

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
    private REMOVE: any = {
        THUMB: false,
        NORMAL: false,
        HD: false,
        K4: false 
    }


    private upResolution(): void{

       if(this.STATE == this.STATE_TYPES.THUMB){
           this.STATE = this.STATE_TYPES.NORMAL;
       }

       if(this.STATE == this.STATE_TYPES.NORMAL){
           this.STATE = this.STATE_TYPES.HD;
           setTimeout( () => this.REMOVE.THUMB = true , 5000);
       }

       if(this.STATE == this.STATE_TYPES.HD){
           this.STATE = this.STATE_TYPES.K4;
           setTimeout( () => this.REMOVE.NORMAL = true , 5000);
       }

        if(this.STATE == this.STATE_TYPES.K4){
           this.STATE = this.STATE_TYPES.K4;
           setTimeout( () => this.REMOVE.HD = true , 5000);
       }

    }

    private getClass(): string{
        return `${this.size}`;
    }

    private mounted(){

        const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
        this.FORMAT = isSafari ? this.FORMAT_TYPES.JPG : this.FORMAT_TYPES.WEBP;
        this.STATE = this.STATE_TYPES.THUMB;

        //var vid:any = document.getElementById("myVideo");
        //vid.playbackRate = 1;

    }
}
</script>

<style scoped lang="less">
div.image{

    display: block;
    width: 100%;
    height: 100%;
    
    .webp,.jpg{
        display: block;
        position: relative;
        width: 100%;
        height: 100%;
        img,video{
            position: absolute;
            top: 0px;
            left: 0px;
        }
    }

    .webp-thumb,.jpg-thumb{
          filter: blur(10px);
          transition: filter 0.7s;
    }

    &.cover{
        img,video{
            display: block;
            width: 100%;
            height: 100%;
            object-fit: cover !important;
            object-position: center !important;
        }
    }

    &.full-w{
        img,video{
            display: block;
            width: 100%;
            height: 100%;
             object-fit: cover !important;
            object-position: center !important;
        }
    }


}
</style>
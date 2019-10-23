<template>
    <div class="people team">

        
       <div class="title-line center"></div>

       <h1 class="title-text"> NUESTROS ABOGADOS </h1>

        <div class="cols">
            <div class="col" v-for="person of PERSONS" v-bind:key="person.picture">
                <div class="wrapper">
                    <div class="wrapper-back">
                        <img :src="person.picture">
                    </div>
                    <div class="wrapper-front">
                        <h5>{{person.name}}</h5>
                    </div>
                </div>
            </div>
        </div>
      
    </div>  
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({})
export default class PeopleExperienceComponent extends Vue {

@Prop({default: 'scrollPosition'}) public scrollPosition: number|undefined;
public PERSONS: any[] = []

private mounted(){
    fetch('https://randomuser.me/api/?results=9')
    .then((response) => {
        return response.json();
    })
    .then((myJson) =>  {
        const results = myJson.results.map((result:any) => {
            return {
                picture : result.picture.large,
                name : `${result.name.first} ${result.name.last} `
            }
        });
        this.PERSONS = results;
    });
}
 
}
</script>

<style lang="less">
@import './../../../../src/shared/styles/main.less';
@card-height: 300px;
div.people.team{

    display: block;


    width: 100%;
    padding: 1em 0em;
    box-sizing: border-box;
    z-index: 0;

    div.cols{

        width: 100%;
        padding: 1em;
        padding-right: 2em;
        box-sizing: border-box;

        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-auto-rows: 1fr;
        grid-column-gap: 2em;
        grid-row-gap:  2em;
 
    }

    div.col{

        display: inline-block;
        position: relative;

        height: calc(@card-height + 50px);
        width: 100%;
        margin-left: 0px;

        background-color: #F5F7FA;
        &:nth-child(2) {
            background: rgba(96, 96, 96, 0.1)
        }

        div.wrapper{
            display: block;         /* new */
            padding: 0px;
            width: 100%;
            height: calc(@card-height + 50px);
            background-color: white;
            box-sizing: border-box;
            border: 1px solid white;
        }
    }

    div.title-line{
        display: block;
        margin: 0 auto;
        width: 1.25em;
        height: 2px;
        font-size: @font-subtitle-size;
        background-color:@color-main-blue;
    }

    h1.title-text{

        display: block;
        width: 100%;
        padding: 0.5em 0em;
       
        
        color: @color-dark-blue;
        font-family: 'Roboto', sans-serif;
        font-size: calc(1  * @font-title-size);
        text-align: center;
        font-weight: 700;
        letter-spacing: 1px;

        #scroll-show-fade();    

    }

    h2.subtitle-text{
        display: block;
        width: fit-content;
        padding: 0.5em 0em;
        
        color: @color-light-blue;
        font-family: 'Roboto', sans-serif;
        font-size: @font-subtitle-size;
        font-weight: 700;
        letter-spacing: 1px;

        #scroll-show-fade()
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
        width: 100%;
        padding: 0.5em 0em;

        text-align: left;
        line-height: 1.25em;
        
        color: @color-dark-blue;
        font-family: 'Roboto', sans-serif;
        font-size: @font-text-size;
        font-weight: 300;
        letter-spacing: 1px;
    }

    li{
        width: 100%;
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
            border-bottom: 2px solid @color-main-blue;
        }
    }

    div.wrapper-back{
        display:block;
        position: absolute;
        top: 0px;
        left: 0px;
         width: 100%;
        height: calc(@card-height + 0px);
        background-color: rgba(0,0,0,1);
        color: white;
        img{
            display:block;
            width: 100%;
        }
    }
    div.wrapper-front{
       display:block;
        position: absolute;
        top: 0px;
        left: 0px;
       width: 100%;
       height: calc(@card-height + 50px);    
       h5{
           padding: 1em;
           box-sizing: border-box;
           position: absolute;
           bottom:0px;
           width: 100%;
           text-align: center;
       } 
        background-color: rgba(0,0,0,0);
        color: black;

       
    }

    div.col div.wrapper {
        &:hover{
                img{
                    opacity: 0.4;
                }
            
            div.wrapper-front{
                h5{
                    bottom: calc(150px + 1em);
                }
            }
        } 
     }


}
</style>
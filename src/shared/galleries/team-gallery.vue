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

public PERSONS: any[] = []

private mounted(){
    
    const results = [];
    results.push({
        name: 'Juan Ricardo Gonzales',
        picture: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
    });
    results.push({
        name: 'Diana Schummert Torrer',
        picture: 'https://images.pexels.com/photos/1024311/pexels-photo-1024311.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
    });
    results.push({
        name: 'Diana Katherin Gómez',
        picture: 'https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
    });
    results.push({
        name: 'Oscar Sierra Fajardo',
        picture: 'https://images.pexels.com/photos/834863/pexels-photo-834863.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
    });
    results.push({
        name: 'Magaldi Garcia',
        picture: 'https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
    });
    results.push({
        name: 'María Fernanda Tolosa',
        picture: 'https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
    });
    results.push({
        name: 'Nicolás Alviar',
        picture: 'https://images.pexels.com/photos/32976/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
    });
    results.push({
        name: 'Juan Felipe Rosillo',
        picture: 'https://images.pexels.com/photos/937481/pexels-photo-937481.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
    });
    results.push({
        name: 'Katherine Olaya',
        picture: 'https://images.pexels.com/photos/1181293/pexels-photo-1181293.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
    });

    this.PERSONS = results;

    }
 
}
</script>

<style lang="less">

@import '../../styles/themes/colors';
@import '../../styles/themes/sizes';
@import '../../styles/themes/fonts';

@import '../../styles/vendor/flexbox.less';
@import '../../styles/vendor/hamburger.less';
@import '../../styles/animations/scroll-reveal.less';

@color-dark-blue: @color-blue-dark;
@color-main-blue: @color-blue-main;
@color-light-blue: @color-blue-light;

@font-title-size: @med-title-font-size;
@font-subtitle-size: @med-subtitle-font-size;
@font-text-size: @med-text-font-size;

@card-height: 450px;

div.people.team{

    display: block;


    width: 100%;
    padding: 1em 0em;
    box-sizing: border-box;
    z-index: 0;

    div.cols{

        width: 100%;
        max-width: 1400px;
        margin: 0 auto;

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
     
        background-color: #F5F7FA;
            overflow: hidden;
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
        height: calc(@card-height + 100px);
        background-color: rgba(0,0,0,1);
        color: white;

        

        -webkit-transition: all 500ms ease-in-out;
        -moz-transition: all 500ms ease-in-out;
        -ms-transition: all 500ms ease-in-out;
        -o-transition: all 500ms ease-in-out;
        transition: all 500ms ease-in-out;
        img{
            display:block;
            width: 100%;
              -webkit-transition: all 500ms ease-in-out;
                -moz-transition: all 500ms ease-in-out;
                -ms-transition: all 500ms ease-in-out;
                -o-transition: all 500ms ease-in-out;
                transition: all 500ms ease-in-out;

                display: block;
    width: 100%;
    height: 100%;
    -webkit-transition: all 500ms ease-in-out;
    transition: all 500ms ease-in-out;
    object-fit: cover;
    object-position: center;
        }
    }
    div.wrapper-front{

        display:block;
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
        height: calc(@card-height + 50px);    
        background-color: rgba(0,0,0,0);
        color: black;

       h5{
           padding: 1em;
           box-sizing: border-box;
           position: absolute;
           bottom:0px;
           width: 100%;
           text-align: center;

            color: white;
            font-size: 2.2em;
            letter-spacing: 2px;

            -webkit-transition: all 500ms ease-in-out;
            -moz-transition: all 500ms ease-in-out;
            -ms-transition: all 500ms ease-in-out;
            -o-transition: all 500ms ease-in-out;
            transition: all 500ms ease-in-out;

       } 


       
    }

    div.col div.wrapper {

                -webkit-transition: all 500ms ease-in-out;
                -moz-transition: all 500ms ease-in-out;
                -ms-transition: all 500ms ease-in-out;
                -o-transition: all 500ms ease-in-out;
                transition: all 500ms ease-in-out;
        &:hover{

              
                img{
                    opacity: 0.4;
                      -webkit-transition: all 500ms ease-in-out;
                        -moz-transition: all 500ms ease-in-out;
                        -ms-transition: all 500ms ease-in-out;
                        -o-transition: all 500ms ease-in-out;
                        transition: all 500ms ease-in-out;
                }
            
            div.wrapper-front{
                h5{
                    bottom: calc(150px + 1em);
                             -webkit-transition: all 500ms ease-in-out;
                        -moz-transition: all 500ms ease-in-out;
                        -ms-transition: all 500ms ease-in-out;
                        -o-transition: all 500ms ease-in-out;
                        transition: all 500ms ease-in-out;
                }
            }
        } 
     }


}
</style>
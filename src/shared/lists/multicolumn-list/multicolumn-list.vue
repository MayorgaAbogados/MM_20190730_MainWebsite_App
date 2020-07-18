<template>
  <div class="people experience">

 
    <div class="row" v-if="columns && columns[0]">

      <div class="col" v-for="column of columns" v-bind:key="column.title"> 

        <div class="wrapper">

          <div class="title-line"></div>
          <h1 class="title-text">{{ column.title }}</h1>

          <ul>
            <li v-for="item of column.items" v-bind:key="item.title">
              <img class="li-bullet" src="@/assets/images/blue-square-bullet.jpg" />
              <div class="li-wrapper">{{ item }}</div>
            </li>
          </ul>
          
        </div>

      </div>


    </div>

  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({})
export default class MultiColumnListComponent extends Vue {

  @Prop({ default: "scrollPosition" }) public scrollPosition:
    | number
    | undefined;

  @Prop({ default: "columns" }) public columns: Array<{ title: string; items: string[] }>  | undefined;
}
</script>

<style lang="less">
@import "../../../styles/themes/colors";
@import "../../../styles/themes/sizes";
@import "../../../styles/themes/fonts";

@import "../../../styles/vendor/flexbox.less";
@import "../../../styles/vendor/hamburger.less";
@import "../../../styles/animations/scroll-reveal.less";

@color-dark-blue: @color-blue-dark;
@color-main-blue: @color-blue-main;
@color-light-blue: @color-blue-light;

@font-title-size: @med-title-font-size;
@font-subtitle-size: @med-subtitle-font-size;
@font-text-size: @med-text-font-size;

div.people.experience {
  width: 100%;
  z-index: 0;

  display: block;

  background-color: #f5f7fa;

  div.row {
    width: 100%;
    z-index: 0;
    max-width: 1400px;
    margin: 0 auto;

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 1fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
  }

  div.col {
    display: inline-block;
    height: 100%;
    width: 100%;
    margin-left: 0px;

    background-color: #f5f7fa;
    &:nth-child(2) {
      background: rgba(96, 96, 96, 0.1);
    }

    div.wrapper {
      display: block; /* new */
      padding: 24px;
      width: 100%;
      box-sizing: border-box;
      border: 1px solid none;
    }
  }

  div.title-line {
    display: block;
    width: 1.25em;
    height: 2px;
    font-size: @font-subtitle-size;
    background-color: @color-main-blue;
  }

  h1.title-text {
    display: block;
    width: fit-content;
    padding: 0.5em 0em;
    padding-bottom: 0px;

    color: @color-dark-blue;
    font-family: "Roboto", sans-serif;
    font-size: @font-subtitle-size;
    text-align: left;
    font-weight: 700;
    letter-spacing: 1px;

    #scroll-show-fade();
  }

  h2.subtitle-text {
    display: block;
    width: fit-content;
    padding: 0.5em 0em;

    color: @color-light-blue;
    font-family: "Roboto", sans-serif;
    font-size: @font-subtitle-size;
    font-weight: 700;
    letter-spacing: 1px;

    #scroll-show-fade();
  }

  p {
    display: block;
    width: 28.5em;

    padding: 0.5em 0em;

    text-align: left;
    line-height: 1.25em;
    letter-spacing: 1px;

    color: @color-dark-blue;
    font-family: "Roboto", sans-serif;
    font-size: @font-text-size;
    font-weight: 300;
  }

  ul {
    display: block;
    width: 100%;
    padding: 0.5em 0em;

    text-align: left;
    line-height: 1.25em;

    color: @color-dark-blue;
    font-family: "Roboto", sans-serif;
    font-size: @font-text-size;
    font-weight: 300;
    letter-spacing: 1px;
  }

  li {
    width: 100%;
    padding: 0.25em 0em;
    display: block;
    img.li-bullet {
      display: inline-block;
      vertical-align: top;
      padding-top: 0.5em;
      width: 0.75em;
    }
    div.li-wrapper {
      display: inline-block;
      vertical-align: top;
      width: ~"calc(100% - 2em)";
      padding-left: 0.5em;
      margin-left: 1em;
      padding: 0.25em 0em;
      border-bottom: 2px solid @color-main-blue;
    }
  }
}
</style>
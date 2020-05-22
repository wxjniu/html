<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style>
  /*reset*/
  html {
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
  }

  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  ul,
  ol,
  form {
    margin: 0;
  }

  ul,
  ol {
    padding-left: 0;
    list-style-type: none;
  }



  a {
    cursor: pointer;
    color: #333;
    text-decoration: none;
    /*消除ie10灰色背景*/
    /* background-color: transparent; */
    /*消除火狐虚线*/
    outline: none;
    transition: all 0.2s ease-in-out;
    -o-transition: all 0.2s ease-in-out;
    -webkit-transition: all 0.2s ease-in-out;
    -moz-transition: all 0.2s ease-in-out;
  }

  a:hover {
    opacity: 0.9;
  }

  img {
    max-width: 100%;
    cursor: pointer;
    vertical-align: middle;
    border: 0 none;
    line-height: 0;
  }

  body,
  button,
  input,
  select,
  textarea {
    padding: 0;
    margin: 0;
    font-size: 12px;
    font-family: PingFang SC, Source Sans Pro, Hiragino Sans GB, Helvetica Neue, Helvetica, Microsoft Yahei, arial, sans-serif;
    color: #333;
  }

  button,
  input {
    /* 让 input 和 button 一样高 */
    line-height: normal;
  }

  button::-moz-focus-inner,
  input::-moz-focus-inner {
    padding: 0;
    border: 0;
  }

  button,
  html input[type="button"],
  input[type="reset"],
  input[type="submit"] {
    -webkit-appearance: none;
    cursor: pointer;
  }

  a,
  button,
  input {
    -webkit-tap-highlight-color: rgba(255, 0, 0, 0);
    outline: 0;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
    width: 100%;
    empty-cells: show;
  }

  table td,
  table th {
    padding: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: normal;
  }

  em {
    font-style: normal;
  }


  input[type="checkbox"],
  input[type="radio"] {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    padding: 0;
  }

  * {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  *:before,
  *:after {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  .trans {
    transition: 0.4s ease-out;
    -moz-transition: 0.4s ease-out;
    -webkit-transition: 0.4s ease-out;
    -o-transition: 0.4s ease-out;
  }

  .ellipsis {
    display: block;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .ellips_line2,
  .ellips_line3 {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .ellips_line2 {
    -webkit-line-clamp: 2;
  }

  .ellips_line3 {
    -webkit-line-clamp: 3;
  }

  .black {
    color: #000;
  }

  .white {
    color: #fff;
  }

  .upper {
    text-transform: uppercase;
  }

  .clear {
    clear: both;
    display: block;
    overflow: hidden;
    visibility: hidden;
    width: 0;
    height: 0;
  }

  .fl {
    float: left;
  }

  .fr {
    float: right;
  }

  .clearfix:after {
    content: ".";
    display: block;
    height: 0;
    clear: both;
    visibility: hidden
  }

  .ta-c {
    text-align: center;
  }

  .ta-r {
    text-align: right;
  }

  .ta-l {
    text-align: left;
  }

  .dtbc {
    display: table-cell;
    *display: inline-block;
    text-align: center;
    vertical-align: middle;
  }

  i {
    font-style: normal;
  }

  .pub_list {
    position: relative;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
  }

  .pub_list .pub_list_bd {
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    flex: 1;
  }


  ::-webkit-scrollbar {
    width: 5px;
    height: 10px;
  }

  ::-webkit-scrollbar-button {
    /*background-color:#f5f5f5;*/
  }

  ::-webkit-scrollbar-track {
    background: #f5f5f5;
  }

  ::-webkit-scrollbar-track-piece {
    background: #ccc;
  }

  ::-webkit-scrollbar-thumb {
    background: #a3a3a3;
    border-radius: 4px;
  }

  ::-webkit-scrollbar-corner {
    background: #f5f5f5;
  }

  ::-webkit-scrollbar-resizer {
    background: #a3a3a3;
  }

  /**
 * 以上为基础样式
 */
</style>

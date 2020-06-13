<template>
  <div id="app">
    <div class="box">{{num}}</div>
    <div class="box">{{num}}</div>
    <a-button type="primary">Primary</a-button>
    <a-button @click="btn">Default</a-button>
    <a-button type="dashed">Dashed</a-button>
    <a-button type="danger">Danger</a-button>
    <a-button type="primary">按钮</a-button>
    <a-button type="primary">按钮</a-button>
    <img src="./assets/images/test.png" />
    <img src="./assets/images/dianzan.png" />
  </div>
</template>

<script>
import { getGlobalMenu } from '@/api/common.js'
export default {
  name: "App",
  data() {
    return {
      num:0
    }
  },
  methods: {
    btn(){
      console.log(111)
      let arr = ['react', 'angular', 'vue']
      if (arr.includes('react')) {
        console.log('Can use React')
      }
      let a = 10
      this.num = a
    }
  },
  mounted() {
    getGlobalMenu({ level: 1}).then(res => {
      console.log(res)
    })
  },
};
</script>

<style>
  .box{
    color:red;
    background-color:black;
  }
</style>
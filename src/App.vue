<template>
  <div id="app">
     
    <router-view/>
   
  </div>
</template>

<script>
export default {
  name: 'App',
  data:function(){
    return {
      clientHeight:"",
    }
  },
 methods:{
 }
}
</script>

<style>
#app{
    height: 100%;
    width: 100%;
  }
</style>

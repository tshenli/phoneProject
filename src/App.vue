<template>
  <div id="app">

    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
  }
}
</script>

<style>
html,body,div,span,i,p,a,img,ul,li{
  margin: 0;
  padding: 0;
}
html,body{
  background: rgba(240,242,245, 1);
}
i{
  font-style: normal;
}
a{
  display:inline-block;
  text-decoration: none;
}
ul,li{
  list-style: none;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

</style>

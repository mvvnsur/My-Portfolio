<template>
  <div id="app">
    <div class="app__content d-flex align-items-start">
      <sidebar/>
      <div class="app__content-pages w-100">
        <navbar/>
        <div class="app__pages mx-5">
          <router-view/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from './general/navbar.vue';
import Sidebar from '@/general/sidebar.vue'
export default{
  components:{
    Navbar,
    Sidebar,
  },
}
</script>

<style lang="scss">
#app{
  font-family: 'Oswald', sans-serif;
  *{
    margin: 0;
    padding: 0px;
    box-sizing: border-box;
  }
}
</style>

<template>
  <div id="app">

    <navbar :current-comp="currentComp"></navbar>

    <div class="container">
      <component :is="currentComp"></component>
    </div>
  </div>
</template>


<script>
import navbar from '@/components/Navbar.vue';
import karta from '@/components/Map.vue';
import google from '@/components/google.vue';
import { bus } from '@/main.js';

export default {
  data() {
    return {
      currentComp: 'karta'
    };
  },

  created() {
      bus.$on('switchComp', comp => {
           this.currentComp = comp;
      })
  },

  components: {
    'navbar': navbar,
    'karta':karta,
    'google':google
  }
}
</script>

<style scoped>
.container {
  width: 99%;
  border: 1px solid blue;
}
</style>

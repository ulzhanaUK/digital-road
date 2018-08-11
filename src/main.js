// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuikit from 'vuikit'
import VuikitIcons from '@vuikit/icons'
import axios from 'axios'
import VueAxios from 'vue-axios'
import moment from "moment";
import VueMomentJS from "vue-momentjs";
 
Vue.use(VueMomentJS, moment);
 
Vue.use(VueAxios, axios)

import '@vuikit/theme'
Vue.use(Vuikit)
Vue.use(VuikitIcons)
// register globally
const YmapPlugin =  require('vue-yandex-maps');
Vue.use(YmapPlugin)

// or for a single instance
const { yandexMap, ymapMarker } = require('vue-yandex-maps');
new Vue({
  components: { yandexMap, ymapMarker }
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

import Vue from 'vue'
import App from './App.vue'
import LangFlag from 'vue-lang-code-flags';


import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

Vue.component('lang-flag', LangFlag);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

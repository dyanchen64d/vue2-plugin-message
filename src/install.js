import Vue from 'vue'
import Message from './message.vue'

export default {
  install (Vue, opts) {
    const CONSTRUCTOR = Vue.extend(Message)

    Vue.message = function () {
      // new CONSTRUCTOR().$mount('#app')
      console.log("vue plugin message....");
    }
  }
}

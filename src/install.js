import Vue from 'vue'
import VueMessage from './message.vue'

export default {
  install (Vue, opts = {}) {

    let CONSTRUCTOR = Vue.extend(VueMessage)
    let Message = new CONSTRUCTOR()

    Message.options = Object.assign(Message.options, opts)

    let vm = Message.$mount()
    // console.log(vm.$el);

    // Add it to the Vue application
    document.querySelector('body').appendChild(vm.$el)

    Vue.$message = Vue.prototype.$message = function (msg, type) {
      Message.showMsg(msg, type)
    }
  }
}

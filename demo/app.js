const Message = window['vue2-plugin-message'].default

Vue.use(Message)

var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  },
  methods: {
    msgInfo () {
      this.$message('msgInfo', 'info')
    },
    msgWarning () {
      this.$message('msgWarning', 'warning')
    }
  }
})

// console.log(Vue);

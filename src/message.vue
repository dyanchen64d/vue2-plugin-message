<template lang="html">
  <p v-if="visibility">{{messageStr}}</p>
</template>

<script>
export default {
  data: function () {
    return {
      messageStr: '',
      visibility: false,
      timeout: 2000,
      options: {
        type: 'something'
      }
    }
  },
  methods: {
    showMsg (msg) {
      this.messageStr = msg
      this.visibility = true

      window.setTimeout(() => {
        this.visibility = false
      }, this.timeout);
    }
  }
}
</script>

<style lang="css">
</style>

<template lang="html">
  <transition name="msgAnim">
    <div v-show="visibility" class="msgWrapper" :class="bgColor">{{messageStr}}</div>
  </transition>
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
      },
      bgColor: { bgWarning: false, bgInfo: false }
    }
  },
  methods: {
    showMsg (msg, type) {
      if (this.visibility) return;
      console.log(msg);

      // bg color
      if (type === 'warning') {
        this.bgColor = { bgWarning: true, bgInfo: false }
      } else if (type === 'info') {
        this.bgColor = { bgWarning: false, bgInfo: true }
      }

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
.msgAnim-enter-active {
  transition: all .5s ease;
}

.msgAnim-leave-active {
  transition: all 1.5s ease;
}

.msgAnim-enter {
  transform: translateX(210px);
  /* opacity: 0; */
}

.msgAnim-leave-to {
  transform: translateY(-90px);
  opacity: 0;
}

.msgWrapper {
  position: absolute;
  top: 0;
  right: 0;
  color: white;
  width: 200px;
  height: 80px;
  text-align: center;
  line-height: 80px;
  margin: 10px;
}

.bgWarning {
  background-color: red;
}

.bgInfo {
  background-color: green;
}
</style>

<template lang="html">
  <p>{{firstName}} {{lastName}} aka {{alias}}</p>
</template>

<script>
export default {
  data: function () {
    return {
      firstName: 'Walter',
      lastName: 'White',
      alias: 'Heisenberg'
    }
  }
}
</script>

<style lang="css">
</style>

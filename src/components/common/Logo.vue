<template>

  <div class="logo">
    <img v-if="dark" src="../../assets/logo-museum2.png" alt="dark logo"/>
    <img v-else src="../../assets/logo-museum.png" alt="light logo"/>
  </div>

</template>

<script>

export default {
  name: "Logo",
  props: ['dark']
}
</script>

<style scoped lang="scss">

.logo {
  width: 48px;
  height: 48px;
}

</style>
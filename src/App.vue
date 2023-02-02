<script setup>
import Header from "./components/Header/Header.vue";
import Footer from "./components/Footer/Footer.vue";
import Content from "./components/Content.vue";
</script>

<template>
  <Header/>
  <Content/>
  <Footer/>
</template>

<style scoped lang="scss">
.main-content {
  flex-grow: 1;
}

</style>
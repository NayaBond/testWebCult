<template>
  <div class="main-content container">
    <h1>Картины эпохи возраждения</h1>
    <div class="painting-container">
      <Paint v-for="painting in paintings" :paint="painting" v-bind="painting"/>
    </div>
  </div>
</template>

<script>
import Paint from "./common/Paint/Paint.vue";
import {getItems, search} from "../route"

export default {
  name: "Content",
  components: {Paint},
  computed: {
    searchQuery() {
      return this.$store.state.searchQuery;
    },
  },
  data() {
    return {
      paintings: getItems()
    }
  },
  watch: {
    searchQuery(oldValue, newValue) {
      this.paintings = search({query: this.searchQuery}).concat();
    }
  },
  beforeMount() {
    const cardItems = this.$store.state.card;
    this.paintings.forEach(paint => {
      paint.in_card = (!paint.sold && cardItems && cardItems.indexOf(paint.id) > -1);
    })
  }

}
</script>

<style scoped lang="scss">
.painting-container {
  margin-bottom: 45px;
  display: inline-flex;
}
</style>
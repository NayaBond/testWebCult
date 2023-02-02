<template>
  <div class="search">
    <input type="text" placeholder="Поиск по названию картины" v-model="searchQuery"/>
    <button class="btn" @click="searchClicked">Найти</button>
  </div>
</template>

<script>
export default {
  name: "Search",
  data() {
    return {
      searchQuery: ''
    }
  },
  methods: {
    searchClicked(event) {
      this.$store.state.searchQuery = this.searchQuery;
    }
  }
}
</script>
<style lang="scss" scoped>
.search {
  margin-left: 90px;

  input {
    border: 1px solid #E1E1E1;
    height: 48px;
    width: 265px;
    background-color: #F6F3F3;
    padding-left: 20px;
    font-family: Merriweather;

    &:active, &:focus-visible {
      border-color: #B5B5B5;
      outline: 0;
    }

    &::placeholder {
      color: #9F9F9F;
      opacity: 1;
    }

    &:-ms-input-placeholder {
      color: #9F9F9F;
    }

    &::-ms-input-placeholder {
      color: #9F9F9F;
    }
  }
}

</style>
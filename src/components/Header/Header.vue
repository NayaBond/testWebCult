<template>
  <div class="header">
    <div class="container header-container">
      <Logo :dark="false"/>
      <Menu/>
      <Search/>
      <div class="card">
        <svg width="21" height="23" viewBox="0 0 21 23" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
              d="M5.75 7.33333V5.75C5.75 4.49022 6.25045 3.28204 7.14124 2.39124C8.03204 1.50045 9.24022 1 10.5 1C11.7598 1 12.968 1.50045 13.8588 2.39124C14.7496 3.28204 15.25 4.49022 15.25 5.75V7.33333M2.79167 7.33333C2.5817 7.33333 2.38034 7.41674 2.23187 7.56521C2.08341 7.71368 2 7.91504 2 8.125L1 18.8125C1 20.3088 2.27458 21.5833 3.77083 21.5833H17.2292C18.7254 21.5833 20 20.3706 20 18.8744L19 8.125C19 7.91504 18.9166 7.71368 18.7681 7.56521C18.6197 7.41674 18.4183 7.33333 18.2083 7.33333H2.79167Z"
              stroke="#1F1F1F" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <div class="card-count">
          <span id="card-count">{{ cardCount }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from "../common/Logo.vue"
import Menu from "../common/Menu.vue"
import Search from "../common/Search.vue";
import "./Header.scss"

export default {
  name: "Header",
  components: {Search, Logo, Menu},
  data() {
    return {
      searchQuery: ''
    }
  },
  computed: {
    cardCount() {
      return (this.$store.state.card) ? this.$store.state.card.length : 0;
    },
    card() {
      return this.$store.state.card;
    }
  }
}
</script>

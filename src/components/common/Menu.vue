<template>
  <div class="menu">
    <ul>
      <li v-for="item in menu">
        <a :href="item.url">{{ item.label }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
import {getMenuItems} from "../../route"
export default {
  name: "Menu",
  data() {
    return {
      menu: getMenuItems()
    }
  }
}
</script>

<style scoped lang="scss">

.menu {
  ul {
    display: flex;

    li {
      display: inline-flex;
      font-weight: 400;
      font-size: 14px;
      line-height: 150%;
      margin: 0 20px 0 25px;
      cursor: pointer;

      a {
        text-decoration: none;
        color: #343030;

        &:hover {
          color: #9F9F9F;
        }
      }
    }
  }
}

</style>
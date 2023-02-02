<template>
  <div v-if="paint.show" class="paint"
       :class="paint.sold?'paint-sold':''"
  >
    <div class="loader" :id="'loader'+paint.id">
      <p>Обработка...</p>
    </div>
    <img :src="paint.img" :alt='paint.title'/>
    <div class="description">
      <h2>&lt;&lt;{{ paint.title }}&gt;&gt;</h2>
      <h2>{{ paint.author }}</h2>
      <div class="sold-text" v-if="!paint.sold">
        <div class="price">
          <div class="old-price" v-if="paint.oldPrice"><h4>{{ getOldPrice }} $</h4></div>
          <div class="new-price"><h5>{{ getNewPrice }} $</h5></div>
        </div>
        <button v-if="!paint.in_card" class="btn" @click="Buy">Купить</button>
        <button v-else class="btn in-card" @click="Buy"><img src="/src/assets/Vector.png"/>В корзине</button>
      </div>
      <div class="sold-text" v-else>
        <h3>Продана на аукционе</h3>
      </div>
    </div>
  </div>
</template>

<script>
import './Paint.scss'
import {BuyThing} from "../../../route.js";

export default {
  name: "Paint",
  props: ["paint"],
  computed: {
    getOldPrice() {
      return this.paint.oldPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    },
    getNewPrice() {
      return this.paint.newPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    },
  },
  methods: {
    Buy(event) {
      const self = this;

      startLoading(self.paint.id);

      BuyThing()
          .then(function (response) {
            self.paint.in_card = !self.paint.in_card;

            if (self.paint.in_card) {
              self.$store.commit('addToCard', self.paint.id);
            } else {
              self.$store.commit("deleteFromCard", self.paint.id);
            }
            alert("Success");
          })
          .catch(function (error) {
            alert("Error");
          })
          .then(function () {
            endLoading(self.paint.id);
          });
    }
  }
}

function startLoading(id) {
  document.getElementById("loader" + id).style.display = 'block';
}

function endLoading(id) {
  document.getElementById("loader" + id).style.display = 'none';
}
</script>

import {createApp} from 'vue'
import {createStore} from 'vuex'
import './main.scss'
import App from './App.vue'

const store = createStore({
    state() {
        return {
            card: localStorage.getItem('card') ? JSON.parse(localStorage.getItem('card')) : [],
            searchQuery: "",
        }
    },
    mutations: {
        addToCard(state, id) {
            state.card.push(id);
            localStorage.setItem("card", JSON.stringify(state.card));
        },
        deleteFromCard(state, id) {
            const index = state.card.indexOf(id);
            if (index > -1) {
                state.card.splice(index, 1);
            }
            localStorage.setItem("card", JSON.stringify(state.card));
        }
    },
})

const app = createApp(App);
app.use(store);
app.mount('#app')
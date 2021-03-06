import { createApp } from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import router from './router'
import store from './store'

createApp(App).use(router).use(Vuex).use(store).mount('#app')
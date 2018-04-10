// -------------
// Library
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)


// -------------
// Component
import App from './app.vue'
import Tasks from './compornents/tasks.vue'
import Form from './compornents/form.vue'
import TopButtons from './compornents/top-buttons.vue'

Vue.component('tasks', Tasks)
Vue.component('modal-form', Form)
Vue.component('top-buttons', TopButtons)


// -------------
// Vue App
const app = new Vue({
  el: '#app',
  render: h => h(App)
})

// -------------
// Library
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Vuex from 'vuex'
import moment from 'moment'

Vue.use(VueAxios, axios)
Vue.use(Vuex)
Vue.use(require('vue-moment'))


// -------------
// Component
import App from './app.vue'
import Tasks from './compornents/tasks.vue'
import Form from './compornents/form.vue'
import TopButtons from './compornents/top-buttons.vue'
import DeleteConfirm from './compornents/delete-confirm.vue'
import NewForm from './compornents/new.vue'
import EditForm from './compornents/edit.vue'

Vue.component('tasks', Tasks)
Vue.component('modal-form', Form)
Vue.component('top-buttons', TopButtons)
Vue.component('delete-confirm', DeleteConfirm)
Vue.component('edit-modal', NewForm)
Vue.component('new-modal', EditForm)


// -------------
// Store
let store = new Vuex.Store({
  state: {
    publishing_tasks: {},
    now_form_id: '',
    now_form_title: '',
    now_form_published_at: '',
    now_form_recorded: false,
    now_form_edited: false,
    now_form_reviewed: false,
    now_form_drew_thumbnail: false,
    now_form_reserved: false,
    now_form_released: false,
    now_form_drew_comic: false,
    now_form_tweeted: false,
    now_form_folder_id: '',
    now_form_record_url: '',
    now_form_thumbnail_url: '',
    now_form_comic_url: '',
  },

  getters: {
    getTasks(state) {
      return state.publishing_tasks
    }
  },

  mutations: {
    getAPITasks(state) {
      axios.get('http://0.0.0.0:3000/api/v1/publishing_task/')
      .then(function (response) {
        state.publishing_tasks = response.data
      })
      .catch(function (error) {
        console.log(error);
      })
    },
    updateNowForm (state, obj) {
      state[obj.key] = obj.value
    },
    clearNowForm (state) {
      state.now_form_id = '';
      state.now_form_title = '';
      state.now_form_published_at = '';
      state.now_form_recorded = false;
      state.now_form_edited = false;
      state.now_form_reviewed = false;
      state.now_form_drew_thumbnail = false;
      state.now_form_reserved = false;
      state.now_form_released = false;
      state.now_form_drew_comic = false;
      state.now_form_tweeted = false;
      state.now_form_folder_id = '';
      state.now_form_record_url = '';
      state.now_form_thumbnail_url = '';
      state.now_form_comic_url = '';
    }
  },
})


// -------------
// Vue App
const app = new Vue({
  el: '#app',
  store: store,
  render: h => h(App)
})

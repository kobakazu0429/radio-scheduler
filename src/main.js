// -------------
// Config
import config from 'config'

// -------------
// Library
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Vuex from 'vuex'
import VueMoment from 'vue-moment'

Vue.use(VueAxios, axios)
Vue.use(Vuex)
Vue.use(VueMoment)

// -------------
// Component
import App from './app.vue'
import Tasks from './components/tasks.vue'
import Form from './components/form.vue'
import TopButtons from './components/top-buttons.vue'
import DeleteConfirm from './components/delete-confirm.vue'
import NewForm from './components/new.vue'
import EditForm from './components/edit.vue'

Vue.component('tasks', Tasks)
Vue.component('modal-form', Form)
Vue.component('top-buttons', TopButtons)
Vue.component('delete-confirm', DeleteConfirm)
Vue.component('edit-task', NewForm)
Vue.component('new-task', EditForm)

// -------------
// Store
let store = new Vuex.Store({
  state: {
    API_URL: config.candidateUrl,
    all_tasks: {},
    now_form_id: '',
    now_form_time: '',
    now_form_title: '',
    now_form_manager: '',
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
    now_form_comic_url: ''
  },

  getters: {
    APIURL(state) {
      return state.API_URL
    },

    Tasks(state) {
      return state.all_tasks
    }
  },

  mutations: {
    APITasks(state) {
      axios
        .get(store.getters.APIURL)
        .then(function(response) {
          state.all_tasks = response.data
        })
        .catch(function(error) {
          console.log(error)
        })
    },
    updateNowForm(state, obj) {
      state[obj.key] = obj.value
    },
    clearNowForm(state) {
      state.now_form_id = ''
      state.now_form_time = ''
      state.now_form_title = ''
      state.now_form_manager = ''
      state.now_form_published_at = ''
      state.now_form_recorded = false
      state.now_form_edited = false
      state.now_form_reviewed = false
      state.now_form_drew_thumbnail = false
      state.now_form_reserved = false
      state.now_form_released = false
      state.now_form_drew_comic = false
      state.now_form_tweeted = false
      state.now_form_folder_id = ''
      state.now_form_record_url = ''
      state.now_form_thumbnail_url = ''
      state.now_form_comic_url = ''
    },
    setNowForm(state, value) {
      state.now_form_id = value.id
      state.now_form_time = value.time
      state.now_form_title = value.title
      state.now_form_manager = value.manager
      state.now_form_published_at = value.published_at
      state.now_form_recorded = value.recorded
      state.now_form_edited = value.edited
      state.now_form_reviewed = value.reviewed
      state.now_form_drew_thumbnail = value.drew_thumbnail
      state.now_form_reserved = value.reserved
      state.now_form_released = value.released
      state.now_form_drew_comic = value.drew_comic
      state.now_form_tweeted = value.tweeted
      state.now_form_folder_id = value.folder_id
      state.now_form_record_url = value.record_url
      state.now_form_thumbnail_url = value.thumbnail_url
      state.now_form_comic_url = value.comic_url
    }
  }
})

// -------------
// Vue App
const app = new Vue({
  el: '#app',
  store: store,
  render: h => h(App)
})

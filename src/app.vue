<template>
  <div id="app">
    <h4>ちょっくれ スケジューラー</h4>
    <div class="container">
      <top-buttons></top-buttons>
      <modal-form></modal-form>
      <delete-confirm></delete-confirm>
      <div class="row">
        <tasks
        v-for="json in axiosJsons"
        :id = "json.id"
        :title = "json.title"
        :published_at = "json.published_at"
        :recorded = "json.recorded"
        :edited = "json.edited"
        :reviewed = "json.reviewed"
        :drew_thumbnail = "json.drew_thumbnail"
        :reserved = "json.reserved"
        :released = "json.released"
        :drew_comic = "json.drew_comic"
        :tweeted = "json.tweeted"
        :folder_id = "json.folder_id"
        :record_url = "json.record_url"
        :thumbnail_url = "json.thumbnail_url"
        :comic_url = "json.comic_url"
        ></tasks>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data: function () {
      return {
        axiosJsons: {}
      }
    },
    methods: {
      getJson: function() {
        var that = this
        this.axios.get('http://0.0.0.0:3000/api/v1/publishing_task/')
        .then(function (response) {
          that.axiosJsons = response.data
        })
        .catch(function (error) {
          console.log(error);
        })
      }
    },
    mounted: function() {
      this.getJson()
    }
  }
</script>

<style>
/*#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  }*/

  html, body {
    margin: 0;
    padding: 0;
    font-size: 18px;
  }

  .container {
    margin-top: 5rem;
  }

  #a01 {
    background-color: rgba(255, 0, 0, 0.2);
  }

  #a02 {
    background-color: rgba(0, 255, 0, 0.2);
  }

  #a03 {
    background-color: rgba(0, 0, 255, 0.2);
  }

  #a04 {
    background-color: rgba(0, 0, 0, 0.2);
  }
</style>

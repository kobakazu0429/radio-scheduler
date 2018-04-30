<template>
  <div id="app">
    <h4>ちょっくれ スケジューラー</h4>
    <div class="container">
      <new-modal></new-modal>
      <edit-modal></edit-modal>
      <delete-confirm></delete-confirm>
      <top-buttons></top-buttons>
      <div class="row">
        <tasks
        v-for="task in publishing_tasks"
        :id = "task.id"
        :title = "task.title"
        :published_at = "task.published_at"
        :recorded = "task.recorded"
        :edited = "task.edited"
        :reviewed = "task.reviewed"
        :drew_thumbnail = "task.drew_thumbnail"
        :reserved = "task.reserved"
        :released = "task.released"
        :drew_comic = "task.drew_comic"
        :tweeted = "task.tweeted"
        :folder_id = "task.folder_id"
        :record_url = "task.record_url"
        :thumbnail_url = "task.thumbnail_url"
        :comic_url = "task.comic_url"
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
        publishing_tasks: {}
      }
    },
    methods: {
      getJson: function() {
        var that = this
        this.axios.get('http://0.0.0.0:3000/api/v1/publishing_task/')
        .then(function (response) {
          that.publishing_tasks = response.data
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
  html, body {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
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

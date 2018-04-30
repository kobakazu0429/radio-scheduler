<template>
  <div class="row">
    <div class="col s12" id="buttons">
      <div class="buttons">
        <button class="waves-effect waves-light btn modal-trigger add" href="#new-modal" @click="resetForm">
          <i class="material-icons left">add</i>
          新規追加
        </button>
        <button class="waves-effect waves-light btn modal-trigger add" href="#modal2">
          <i class="material-icons left">delete</i>
          削除
        </button>
        <button class="waves-effect waves-light btn"><i class="material-icons left">add</i>button</button>
      </div>
    </div>
  </div>
</template>

<script>
  module.exports = {
    methods: {
      resetForm: function() {
        document.getElementById('title').value            = '';
        document.getElementById('published_at').value     = 0;
        document.getElementById('recorded').checked       = false;
        document.getElementById('edited').checked         = false;
        document.getElementById('reviewed').checked       = false;
        document.getElementById('drew_thumbnail').checked = false;
        document.getElementById('reserved').checked       = false;
        document.getElementById('released').checked       = false;
        document.getElementById('drew_comic').checked     = false;
        document.getElementById('tweeted').checked        = false;
        document.getElementById('folder_id').value        = '';
        // document.getElementById('record_url').value       = '';
        // document.getElementById('thumbnail_url').value    = '';
        // document.getElementById('comic_url').value        = '';
      }
    }
  }
</script>

<template>
  <form>
    <input type="text" id="folder_id">
    <div class="modal-content">
      <div class="row" id="title-row">
        <div class="input-field col s12">
          <input id="title" type="text" class="validate" v-model="title">
          <label for="title">タイトル</label>
        </div>
      </div>
      <div class="row">
        <div class="col s12">
          <label for="published_at">公開日</label><input type="date" id="published_at" v-model="published_at">
        </div>

        <div class="col s2">
          <label for="recorded">収録</label>
        </div>
        <div class="col s10">
          <div class="switch"><label><i class="fas fa-times"></i><input type="checkbox" id="recorded" v-model="recorded"><span class="lever"></span><i class="fas fa-check"></i></label></div>
        </div>

        <div class="col s2">
          <label for="edited">編集</label>
        </div>
        <div class="col s10">
          <div class="switch"><label><i class="fas fa-times"></i><input type="checkbox" id="edited" v-model="edited"><span class="lever"></span><i class="fas fa-check"></i></label></div>
        </div>

        <div class="col s2">
          <label for="reviewed">検閲</label>
        </div>
        <div class="col s10">
          <div class="switch"><label><i class="fas fa-times"></i><input type="checkbox" id="reviewed" v-model="reviewed"><span class="lever"></span><i class="fas fa-check"></i></label></div>
        </div>

        <div class="col s2">
          <label for="drew_thumbnail">サムネイル画像</label>
        </div>
        <div class="col s10">
          <div class="switch"><label><i class="fas fa-times"></i><input type="checkbox" id="drew_thumbnail" v-model="drew_thumbnail"><span class="lever"></span><i class="fas fa-check"></i></label></div>
        </div>

        <div class="col s2">
          <label for="reserved">予約投稿</label>
        </div>
        <div class="col s10">
          <div class="switch"><label><i class="fas fa-times"></i><input type="checkbox" id="reserved" v-model="reserved"><span class="lever"></span><i class="fas fa-check"></i></label></div>
        </div>

        <div class="col s2">
          <label for="released">公開</label>
        </div>
        <div class="col s10">
          <div class="switch"><label><i class="fas fa-times"></i><input type="checkbox" id="released" v-model="released"><span class="lever"></span><i class="fas fa-check"></i></label></div>
        </div>

        <div class="col s2">
          <label for="drew_comic">4コマ漫画</label>
        </div>
        <div class="col s10">
          <div class="switch"><label><i class="fas fa-times"></i><input type="checkbox" id="drew_comic" v-model="drew_comic"><span class="lever"></span><i class="fas fa-check"></i></label></div>
        </div>

        <div class="col s2">
          <label for="tweeted">ツイート</label>
        </div>
        <div class="col s10">
          <div class="switch"><label><i class="fas fa-times"></i><input type="checkbox" id="tweeted" v-model="tweeted"><span class="lever"></span><i class="fas fa-check"></i></label></div>
        </div>
      </div>
      <!-- <div class="row upload-row">
        <div class="col s2">
          <label for="record_url">ラジオ音源</label>
        </div>
        <div class="col s10">
          <input type="file" id="record_url" @change="convert('record_url')">
        </div>
      </div>
      <div class="row upload-row">
        <div class="col s2">
          <label for="thumbnail_url">サムネイル画像</label>
        </div>
        <div class="col s10">
          <input type="file" id="thumbnail_url" @change="convert('thumbnail_url')">
        </div>
      </div>
      <div class="row upload-row">
        <div class="col s2">
          <label for="comic_url">4コマ漫画</label>
        </div>
        <div class="col s10">
          <input type="file" id="comic_url" @change="convert('comic_url')">
        </div>
      </div> -->
    </div>
  </form>
</template>

<script>
  module.exports = {
    data: function() {
      return {
        id            : 0,
        title         : '',
        published_at  : '',
        recorded      : 0,
        edited        : 0,
        reviewed      : 0,
        drew_thumbnail: 0,
        reserved      : 0,
        released      : 0,
        drew_comic    : 0,
        tweeted       : 0,
        folder_id     : '',
        // record_url    : '',
        // thumbnail_url : '',
        // comic_url     : '',
      }
    },
  }
</script>

<style scoped>
.modal {
  height: 80%;
  overflow: hidden;
}

.modal-content {
  padding-top: 0;
  padding-bottom: 0;
}

#title-row {
  margin-bottom: 0;
}

.upload-row {
  margin-bottom: 5px;
}

#folder_id {
  display: none;
}
</style>

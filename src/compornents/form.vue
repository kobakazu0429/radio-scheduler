<template>
  <form>
    <input type="text" id="folder_id">
    <div class="modal-content">
      <div class="row" id="title-row">
        <div class="input-field col s12">
          <input id="title" type="text" class="validate" :value="this.$store.state.now_form_title" @input="updateNowForm('now_form_title', $event.target.value)">
          <label for="title">タイトル</label>
        </div>
      </div>
      <div class="row">
        <div class="col s12">
          <label for="published_at">公開日</label>
          <input type="date" id="published_at" :value="$moment(this.$store.state.now_form_published_at).format('YYYY-MM-DD')" @input="updateNowForm('now_form_published_at', $event.target.value)">
        </div>

        <div class="col s2">
          <label for="recorded">収録</label>
        </div>
        <div class="col s10">
          <div class="switch"><label><i class="fas fa-times"></i><input type="checkbox" id="recorded" :checked="this.$store.state.now_form_recorded" @change="updateNowForm('now_form_recorded', $event.target.checked)"><span class="lever"></span><i class="fas fa-check"></i></label></div>
        </div>

        <div class="col s2">
          <label for="edited">編集</label>
        </div>
        <div class="col s10">
          <div class="switch"><label><i class="fas fa-times"></i><input type="checkbox" id="edited" :checked="this.$store.state.now_form_edited" @change="updateNowForm('now_form_edited', $event.target.checked)"><span class="lever"></span><i class="fas fa-check"></i></label></div>
        </div>

        <div class="col s2">
          <label for="reviewed">検閲</label>
        </div>
        <div class="col s10">
          <div class="switch"><label><i class="fas fa-times"></i><input type="checkbox" id="reviewed" :checked="this.$store.state.now_form_reviewed" @change="updateNowForm('now_form_reviewed', $event.target.checked)"><span class="lever"></span><i class="fas fa-check"></i></label></div>
        </div>

        <div class="col s2">
          <label for="drew_thumbnail">サムネイル画像</label>
        </div>
        <div class="col s10">
          <div class="switch"><label><i class="fas fa-times"></i><input type="checkbox" id="drew_thumbnail" :checked="this.$store.state.now_form_drew_thumbnail" @change="updateNowForm('now_form_drew_thumbnail', $event.target.checked)"><span class="lever"></span><i class="fas fa-check"></i></label></div>
        </div>

        <div class="col s2">
          <label for="reserved">予約投稿</label>
        </div>
        <div class="col s10">
          <div class="switch"><label><i class="fas fa-times"></i><input type="checkbox" id="reserved" :checked="this.$store.state.now_form_reserved" @change="updateNowForm('now_form_reserved', $event.target.checked)"><span class="lever"></span><i class="fas fa-check"></i></label></div>
        </div>

        <div class="col s2">
          <label for="released">公開</label>
        </div>
        <div class="col s10">
          <div class="switch"><label><i class="fas fa-times"></i><input type="checkbox" id="released" :checked="this.$store.state.now_form_released" @change="updateNowForm('now_form_released', $event.target.checked)"><span class="lever"></span><i class="fas fa-check"></i></label></div>
        </div>

        <div class="col s2">
          <label for="drew_comic">4コマ漫画</label>
        </div>
        <div class="col s10">
          <div class="switch"><label><i class="fas fa-times"></i><input type="checkbox" id="drew_comic" :checked="this.$store.state.now_form_drew_comic" @change="updateNowForm('now_form_drew_comic', $event.target.checked)"><span class="lever"></span><i class="fas fa-check"></i></label></div>
        </div>

        <div class="col s2">
          <label for="tweeted">ツイート</label>
        </div>
        <div class="col s10">
          <div class="switch"><label><i class="fas fa-times"></i><input type="checkbox" id="tweeted" :checked="this.$store.state.now_form_tweeted" @change="updateNowForm('now_form_tweeted', $event.target.checked)"><span class="lever"></span><i class="fas fa-check"></i></label></div>
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
    methods: {
     updateNowForm (key, value) {
      this.$store.commit('updateNowForm', {key: key, value: value})
    },
  }
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

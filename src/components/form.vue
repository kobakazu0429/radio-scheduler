<template>
  <form>
    <input type="text" id="folder_id">
    <div class="modal-content">
      <div class="row" id="title-row">
        <div class="input-field col s3">
          <span>第</span>
          <input id="time" type="number" min="1" class="validate" :value="this.$store.state.now_form_time" @input="updateNowForm('now_form_time', $event.target.value)">
          <span>回</span>
        </div>

        <div class="input-field col s9">
          <input id="title" type="text" class="validate" :value="this.$store.state.now_form_title" @input="updateNowForm('now_form_title', $event.target.value)">
          <label for="title">タイトル</label>
        </div>
      </div>

      <div class="row">
        <div class="col s12">
          <label for="published_at">公開日</label>
          <input type="date" id="published_at" :value="$moment(this.$store.state.now_form_published_at).format('YYYY-MM-DD')" @input="updateNowForm('now_form_published_at', $event.target.value)">
        </div>
      </div>

      <div class="row">
        <div class="input-field col s12">
          <label for="manager">担当者</label>
          <input id="manager" type="text" class="validate" :value="this.$store.state.now_form_manager" @input="updateNowForm('now_form_manager', $event.target.value)">
        </div>
      </div>

      <div class="row">
        <div class="col s12 m6 l6 xl3">
          <label for="recorded">収録</label>
        </div>
        <div class="col s12 m6 l6 xl9">
          <div class="switch"><label><i class="fas fa-times"></i><input type="checkbox" id="recorded" :checked="this.$store.state.now_form_recorded" @change="updateNowForm('now_form_recorded', $event.target.checked)"><span class="lever"></span><i class="fas fa-check"></i></label></div>
        </div>

        <div class="col s12 m6 l6 xl3">
          <label for="edited">編集</label>
        </div>
        <div class="col s12 m6 l6 xl9">
          <div class="switch"><label><i class="fas fa-times"></i><input type="checkbox" id="edited" :checked="this.$store.state.now_form_edited" @change="updateNowForm('now_form_edited', $event.target.checked)"><span class="lever"></span><i class="fas fa-check"></i></label></div>
        </div>

        <div class="col s12 m6 l6 xl3">
          <label for="reviewed">検閲</label>
        </div>
        <div class="col s12 m6 l6 xl9">
          <div class="switch"><label><i class="fas fa-times"></i><input type="checkbox" id="reviewed" :checked="this.$store.state.now_form_reviewed" @change="updateNowForm('now_form_reviewed', $event.target.checked)"><span class="lever"></span><i class="fas fa-check"></i></label></div>
        </div>

        <div class="col s12 m6 l6 xl3">
          <label for="drew_thumbnail">サムネイル画像</label>
        </div>
        <div class="col s12 m6 l6 xl9">
          <div class="switch"><label><i class="fas fa-times"></i><input type="checkbox" id="drew_thumbnail" :checked="this.$store.state.now_form_drew_thumbnail" @change="updateNowForm('now_form_drew_thumbnail', $event.target.checked)"><span class="lever"></span><i class="fas fa-check"></i></label></div>
        </div>

        <div class="col s12 m6 l6 xl3">
          <label for="reserved">予約投稿</label>
        </div>
        <div class="col s12 m6 l6 xl9">
          <div class="switch"><label><i class="fas fa-times"></i><input type="checkbox" id="reserved" :checked="this.$store.state.now_form_reserved" @change="updateNowForm('now_form_reserved', $event.target.checked)"><span class="lever"></span><i class="fas fa-check"></i></label></div>
        </div>

        <div class="col s12 m6 l6 xl3">
          <label for="released">公開</label>
        </div>
        <div class="col s12 m6 l6 xl9">
          <div class="switch"><label><i class="fas fa-times"></i><input type="checkbox" id="released" :checked="this.$store.state.now_form_released" @change="updateNowForm('now_form_released', $event.target.checked)"><span class="lever"></span><i class="fas fa-check"></i></label></div>
        </div>

        <div class="col s12 m6 l6 xl3">
          <label for="drew_comic">4コマ漫画</label>
        </div>
        <div class="col s12 m6 l6 xl9">
          <div class="switch"><label><i class="fas fa-times"></i><input type="checkbox" id="drew_comic" :checked="this.$store.state.now_form_drew_comic" @change="updateNowForm('now_form_drew_comic', $event.target.checked)"><span class="lever"></span><i class="fas fa-check"></i></label></div>
        </div>

        <div class="col s12 m6 l6 xl3">
          <label for="tweeted">ツイート</label>
        </div>
        <div class="col s12 m6 l6 xl9">
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
    updateNowForm(key, value) {
      this.$store.commit('updateNowForm', { key: key, value: value })
    }
  }
}
</script>

<style scoped>
.modal-content {
  padding-top: 0;
  padding-bottom: 0;
}

#title-row {
  margin-bottom: 0;
}

#time {
  width: 30%;
  text-align: right;
  padding-right: 5px;
}

.upload-row {
  margin-bottom: 5px;
}

#folder_id {
  display: none;
}
</style>

<template>
  <div id="modal1" class="modal modal-fixed-footer">
    <form>
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
<!--         <div class="row upload-row">
          <div class="col s2">
            <label for="rec_source">ラジオ音源</label>
          </div>
          <div class="col s10">
            <input type="file" id="rec_source" @change="convert('rec_source')">
          </div>
        </div>
        <div class="row upload-row">
          <div class="col s2">
            <label for="thumbnail_img">サムネイル画像</label>
          </div>
          <div class="col s10">
            <input type="file" id="thumbnail_img" @change="convert('thumbnail_img')">
          </div>
        </div>
        <div class="row upload-row">
          <div class="col s2">
            <label for="comic_img">4コマ漫画</label>
          </div>
          <div class="col s10">
            <input type="file" id="comic_img" @change="convert('comic_img')">
          </div>
        </div> -->
      </div>
      <div class="modal-footer">
        <div class="row">
          <div class="col s12">
            <button type="button" class="modal-action waves-effect waves-green btn-flat" @click="send">追加する</button>
            <button type="button" class="modal-close waves-effect waves-green btn-flat">キャンセル</button>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
  // var rec_source = '';
  // var thumbnail_img = '';
  // var comic_img = '';
  module.exports = {
    data: function() {
      return {
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
        record_url    : '',
        thumbnail_url : '',
        comic_url     : '',
      }
    },
    methods: {
      // convert: function(target_id) {
      //   var input_file = document.getElementById(target_id);

      //   // ファイルが選択されたか
      //   if(!(input_file.value)) return;

      //   // FileReader クラスに対応しているか
      //   if(!(window.FileReader)) return;

      //   // ------------------------------------------------------------
      //   // File オブジェクトを取得（HTML5 世代）
      //   // ファイルリストを取得
      //   var file_list = input_file.files;
      //   if(!file_list) return;

      //   // 0 番目の File オブジェクトを取得
      //   var file = file_list[0];
      //   if(!file) return;

      //   // ------------------------------------------------------------
      //   // FileReader オブジェクトを生成
      //   var file_reader = new FileReader();

      //   // ------------------------------------------------------------
      //   // 読み込み成功時に実行されるイベント
      //   file_reader.onload = function(e){

      //     // 出力
      //     // var target_id = file_reader.result;
      //     switch(target_id) {
      //       case 'rec_source':
      //         rec_source = file_reader.result;
      //         break;
      //       case 'thumbnail_img':
      //         thumbnail_img = file_reader.result;
      //         break;
      //       case 'comic_img':
      //         comic_img = file_reader.result;
      //         break;
      //     }

      //     // 出力テスト
      //     console.log(target_id);
      //   };

      //   // ------------------------------------------------------------
      //   // 読み込みを開始する（Data URI Scheme 文字列を得る）
      //   file_reader.readAsDataURL(file);
      // },
      send: function() {
        let params = new URLSearchParams();

        params.append('title', this.title);
        params.append('published_at', this.published_at);
        params.append('recorded', this.recorded);
        params.append('edited', this.edited);
        params.append('reviewed', this.reviewed);
        params.append('drew_thumbnail', this.drew_thumbnail);
        params.append('reserved', this.reserved);
        params.append('released', this.released);
        params.append('drew_comic', this.drew_comic);
        params.append('tweeted', this.tweeted);
        params.append('folder_id', this.folder_id);
        params.append('record_url', this.record_url);
        params.append('thumbnail_url', this.thumbnail_url);
        params.append('comic_url', this.comic_url);

        this.axios.post('http://0.0.0.0:3000/api/v1/publishing_task/', params)
        .then(response => {
          location.reload();
        }).catch(error => {
          console.log(error);
        });
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
</style>

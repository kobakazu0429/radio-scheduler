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
          <div class="col s12"><label for="published_at">公開日</label><input type="date" id="published_at" v-model="published_at"></div>
          <div class="col s2">
            <label for="rec">収録</label>
          </div>
          <div class="col s10">
            <div class="switch"><label><i class="fas fa-times"></i><input type="checkbox" id="rec" v-model="rec"><span class="lever"></span><i class="fas fa-check"></i></label></div>
          </div>
          <div class="col s2">
            <label for="edit">編集</label>
          </div>
          <div class="col s10">
            <div class="switch"><label><i class="fas fa-times"></i><input type="checkbox" id="edit" v-model="edit"><span class="lever"></span><i class="fas fa-check"></i></label></div>
          </div>
          <div class="col s2">
            <label for="censorship">検閲</label>
          </div>
          <div class="col s10">
            <div class="switch"><label><i class="fas fa-times"></i><input type="checkbox" id="censorship" v-model="censorship"><span class="lever"></span><i class="fas fa-check"></i></label></div>
          </div>
          <div class="col s2">
            <label for="thumbnail">サムネイル画像</label>
          </div>
          <div class="col s10">
            <div class="switch"><label><i class="fas fa-times"></i><input type="checkbox" id="thumbnail" v-model="thumbnail"><span class="lever"></span><i class="fas fa-check"></i></label></div>
          </div>
          <div class="col s2">
            <label for="reserve">予約投稿</label>
          </div>
          <div class="col s10">
            <div class="switch"><label><i class="fas fa-times"></i><input type="checkbox" id="reserve" v-model="reserve"><span class="lever"></span><i class="fas fa-check"></i></label></div>
          </div>
          <div class="col s2">
            <label for="release">公開</label>
          </div>
          <div class="col s10">
            <div class="switch"><label><i class="fas fa-times"></i><input type="checkbox" id="release" v-model="release"><span class="lever"></span><i class="fas fa-check"></i></label></div>
          </div>
          <div class="col s2">
            <label for="comic">4コマ漫画</label>
          </div>
          <div class="col s10">
            <div class="switch"><label><i class="fas fa-times"></i><input type="checkbox" id="comic" v-model="comic"><span class="lever"></span><i class="fas fa-check"></i></label></div>
          </div>
          <div class="col s2">
            <label for="tweet">ツイート</label>
          </div>
          <div class="col s10">
            <div class="switch"><label><i class="fas fa-times"></i><input type="checkbox" id="tweet" v-model="tweet"><span class="lever"></span><i class="fas fa-check"></i></label></div>
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
            <button type="button" class="modal-action modal-close waves-effect waves-green btn-flat" @click="send">追加する</button>
            <button type="button" class="modal-action modal-close waves-effect waves-green btn-flat">キャンセル</button>
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
        title: '',
        published_at: '',
        rec: false,
        edit: false,
        censorship: false,
        thumbnail: false,
        reserve: false,
        release: false,
        comic: false,
        tweet: false,
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
        this.axios({
          method: 'post',
          url: 'https://script.google.com/macros/s/AKfycbzub6RPKKORwtpMpqccA7Q5mzhNQ_HnFzBjYl74pORaaM3u-39X/exec',
          data: {
            title        : this.title,
            published_at : this.published_at,
            rec          : this.rec,
            edit         : this.edit,
            censorship   : this.censorship,
            thumbnail    : this.thumbnail,
            reserve      : this.reserve,
            release      : this.release,
            comic        : this.comic,
            tweet        : this.tweet,
            // rec_source   : rec_source,
            // thumbnail_img: thumbnail_img,
            // comic_img    : comic_img,
          },
          headers: {
            'Content-Type': 'text/plain;charset=utf-8',
          }
        })
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
</style>

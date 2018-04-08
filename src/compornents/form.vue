<template>
  <div id="modal1" class="modal modal-fixed-footer">
    <form action="https://script.google.com/macros/s/AKfycbzub6RPKKORwtpMpqccA7Q5mzhNQ_HnFzBjYl74pORaaM3u-39X/exec" method="post">
      <div class="modal-content">
        <div class="row" id="title-row">
          <div class="input-field col s12">
            <input id="title" type="text" class="validate" name="title">
            <label for="title">タイトル</label>
          </div>
        </div>
        <div class="row">
          <div class="col s12"><label for="published_at">公開日</label><input type="date" id="published_at" name="published_at"></div>
          <div class="col s2">
            <label for="rec">収録</label>
          </div>
          <div class="col s10">
            <div class="switch"><label><i class="fas fa-times"></i><input type="checkbox" id="rec" name="rec"><span class="lever"></span><i class="fas fa-check"></i></label></div>
          </div>
          <div class="col s2">
            <label for="edit">編集</label>
          </div>
          <div class="col s10">
            <div class="switch"><label><i class="fas fa-times"></i><input type="checkbox" id="edit" name="edit"><span class="lever"></span><i class="fas fa-check"></i></label></div>
          </div>
          <div class="col s2">
            <label for="censorship">検閲</label>
          </div>
          <div class="col s10">
            <div class="switch"><label><i class="fas fa-times"></i><input type="checkbox" id="censorship" name="censorship"><span class="lever"></span><i class="fas fa-check"></i></label></div>
          </div>
          <div class="col s2">
            <label for="thumb">サムネイル画像</label>
          </div>
          <div class="col s10">
            <div class="switch"><label><i class="fas fa-times"></i><input type="checkbox" id="thumb" name="thumb"><span class="lever"></span><i class="fas fa-check"></i></label></div>
          </div>
          <div class="col s2">
            <label for="reserve">予約投稿</label>
          </div>
          <div class="col s10">
            <div class="switch"><label><i class="fas fa-times"></i><input type="checkbox" id="reserve" name="reserve"><span class="lever"></span><i class="fas fa-check"></i></label></div>
          </div>
          <div class="col s2">
            <label for="release">公開</label>
          </div>
          <div class="col s10">
            <div class="switch"><label><i class="fas fa-times"></i><input type="checkbox" id="release" name="release"><span class="lever"></span><i class="fas fa-check"></i></label></div>
          </div>
          <div class="col s2">
            <label for="comic">4コマ漫画</label>
          </div>
          <div class="col s10">
            <div class="switch"><label><i class="fas fa-times"></i><input type="checkbox" id="comic" name="comic"><span class="lever"></span><i class="fas fa-check"></i></label></div>
          </div>
          <div class="col s2">
            <label for="tweet">ツイート</label>
          </div>
          <div class="col s10">
            <div class="switch"><label><i class="fas fa-times"></i><input type="checkbox" id="tweet" name="tweet"><span class="lever"></span><i class="fas fa-check"></i></label></div>
          </div>
        </div>
        <div class="row upload-row">
          <div class="col s2">
            <label for="rec_source">ラジオ音源</label>
          </div>
          <div class="col s10">
            <input type="file" id="rec_source" name="rec_source" @change="convert('rec_source')">
          </div>
        </div>
        <div class="row upload-row">
          <div class="col s2">
            <label for="thumb_img">サムネイル画像</label>
          </div>
          <div class="col s10">
            <input type="file" id="thumb_img" name="thumb_img" @change="convert('thumb_img')">
          </div>
        </div>
        <div class="row upload-row">
          <div class="col s2">
            <label for="comic_img">4コマ漫画</label>
          </div>
          <div class="col s10">
            <input type="file" id="comic_img" name="comic_img" @change="convert('comic_img')">
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <div class="row">
          <div class="col s12">
            <button type="button" class="modal-action modal-close waves-effect waves-green btn-flat">追加する</button>
            <button type="button" class="modal-action modal-close waves-effect waves-green btn-flat">キャンセル</button>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
  module.exports = {
    methods: {
      convert: function(target_id) {
        var input_file = document.getElementById(target_id);

        // ファイルが選択されたか
        if(!(input_file.value)) return;

        // FileReader クラスに対応しているか
        if(!(window.FileReader)) return;

        // ------------------------------------------------------------
        // File オブジェクトを取得（HTML5 世代）
        // ファイルリストを取得
        var file_list = input_file.files;
        if(!file_list) return;

        // 0 番目の File オブジェクトを取得
        var file = file_list[0];
        if(!file) return;

        // ------------------------------------------------------------
        // FileReader オブジェクトを生成
        var file_reader = new FileReader();

        // ------------------------------------------------------------
        // 読み込み成功時に実行されるイベント
        file_reader.onload = function(e){

          // 出力テスト
          console.log(file_reader.result);
        };

        // ------------------------------------------------------------
        // 読み込みを開始する（Data URI Scheme 文字列を得る）
        file_reader.readAsDataURL(file);
      }
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

<template>
  <div id="edit-modal" class="modal modal-fixed-footer">
    <modal-form></modal-form>
    <div class="modal-footer">
      <div class="row">
        <div class="col s12">
          <button type="button" class="waves-effect waves-green btn-flat" @click="send()">更新する</button>
          <button type="button" class="modal-close waves-effect waves-green btn-flat">キャンセル</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  // var rec_source = '';
  // var thumbnail_img = '';
  // var comic_img = '';
  module.exports = {
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
        let thisId              = this.$store.state.now_form_id;

        let nowRecorded         = this.$store.state.now_form_recorded;
        let nowEdited           = this.$store.state.now_form_edited;
        let nowReviewed         = this.$store.state.now_form_reviewed;
        let nowDrew_thumbnail   = this.$store.state.now_form_drew_thumbnail;
        let nowReserved         = this.$store.state.now_form_reserved;
        let nowReleased         = this.$store.state.now_form_released;
        let nowDrew_comic       = this.$store.state.now_form_drew_comic;
        let nowTweeted          = this.$store.state.now_form_tweeted;

        let tmp_recorded       = (nowRecorded == 0       || nowRecorded == false)       ? 0 : 1;
        let tmp_edited         = (nowEdited == 0         || nowEdited == false)         ? 0 : 1;
        let tmp_reviewed       = (nowReviewed == 0       || nowReviewed == false)       ? 0 : 1;
        let tmp_drew_thumbnail = (nowDrew_thumbnail == 0 || nowDrew_thumbnail == false) ? 0 : 1;
        let tmp_reserved       = (nowReserved == 0       || nowReserved == false)       ? 0 : 1;
        let tmp_released       = (nowReleased == 0       || nowReleased == false)       ? 0 : 1;
        let tmp_drew_comic     = (nowDrew_comic == 0     || nowDrew_comic == false)     ? 0 : 1;
        let tmp_tweeted        = (nowTweeted == 0        || nowTweeted == false)        ? 0 : 1;

        let params = new URLSearchParams();

        params.append('title', this.$store.state.now_form_title);
        params.append('published_at', this.$store.state.now_form_published_at);
        params.append('recorded', tmp_recorded);
        params.append('edited', tmp_edited);
        params.append('reviewed', tmp_reviewed);
        params.append('drew_thumbnail', tmp_drew_thumbnail);
        params.append('reserved', tmp_reserved);
        params.append('released', tmp_released);
        params.append('drew_comic', tmp_drew_comic);
        params.append('tweeted', tmp_tweeted);
        params.append('folder_id', this.$store.state.now_form_folder_id);
        params.append('record_url', '');
        params.append('thumbnail_url', '');
        params.append('comic_url', '');

        this.axios.patch('http://0.0.0.0:3000/api/v1/publishing_task/' + thisId + '/', params)
        .then(response => {
          location.reload();
        }).catch(error => {
          console.log(error);
        });
      },
    }
  }
</script>

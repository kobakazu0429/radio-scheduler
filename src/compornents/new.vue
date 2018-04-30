<template>
  <div id="new-modal" class="modal modal-fixed-footer">
    <modal-form></modal-form>
    <div class="modal-footer">
      <div class="row">
        <div class="col s12">
          <button type="button" class="waves-effect waves-green btn-flat" @click="send">追加する</button>
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
        // record_url    : '',
        // thumbnail_url : '',
        // comic_url     : '',
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
        let tmp_recorded       = (this.$children["0"].recorded == 0       || this.$children["0"].recorded == false)       ? 0 : 1;
        let tmp_edited         = (this.$children["0"].edited == 0         || this.$children["0"].edited == false)         ? 0 : 1;
        let tmp_reviewed       = (this.$children["0"].reviewed == 0       || this.$children["0"].reviewed == false)       ? 0 : 1;
        let tmp_drew_thumbnail = (this.$children["0"].drew_thumbnail == 0 || this.$children["0"].drew_thumbnail == false) ? 0 : 1;
        let tmp_reserved       = (this.$children["0"].reserved == 0       || this.$children["0"].reserved == false)       ? 0 : 1;
        let tmp_released       = (this.$children["0"].released == 0       || this.$children["0"].released == false)       ? 0 : 1;
        let tmp_drew_comic     = (this.$children["0"].drew_comic == 0     || this.$children["0"].drew_comic == false)     ? 0 : 1;
        let tmp_tweeted        = (this.$children["0"].tweeted == 0        || this.$children["0"].tweeted == false)        ? 0 : 1;

        let params = new URLSearchParams();

        params.append('title', this.$children["0"].title);
        params.append('published_at', this.$children["0"].published_at);
        params.append('recorded', tmp_recorded);
        params.append('edited', tmp_edited);
        params.append('reviewed', tmp_reviewed);
        params.append('drew_thumbnail', tmp_drew_thumbnail);
        params.append('reserved', tmp_reserved);
        params.append('released', tmp_released);
        params.append('drew_comic', tmp_drew_comic);
        params.append('tweeted', tmp_tweeted);
        params.append('folder_id', this.$children["0"].folder_id);
        params.append('record_url', '');
        params.append('thumbnail_url', '');
        params.append('comic_url', '');

        this.axios.post('http://0.0.0.0:3000/api/v1/publishing_task/', params)
        .then(response => {
          location.reload();
        }).catch(error => {
          console.log(error);
        });
      }
    }
  }
</script>

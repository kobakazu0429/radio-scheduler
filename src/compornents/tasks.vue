<template>
  <div class="col s12 m6 l3">
    <div class="card">
      <div class="card-image">
        <img src="http://materializecss.com/images/sample-1.jpg">
        <!-- <img :src="icon"> -->
        <!-- <img :src="item.img"> -->
      </div>
      <div class="card-content">
        <span class="card-title">{{ title }}</span>
        <p>収録　　　　:　<i class="fas" :class="[recorded ? 'fa-check': 'fa-times']"></i></p>
        <p>編集　　　　:　<i class="fas" :class="[edited ? 'fa-check': 'fa-times']"></i></p>
        <p>検閲　　　　:　<i class="fas" :class="[reviewed ? 'fa-check': 'fa-times']"></i></p>
        <p>サムネ画像　:　<i class="fas" :class="[drew_thumbnail ? 'fa-check': 'fa-times']"></i></p>
        <p>予約投稿　　:　<i class="fas" :class="[reserved ? 'fa-check': 'fa-times']"></i></p>
        <p>公開　　　　:　<i class="fas" :class="[released ? 'fa-check': 'fa-times']"></i></p>
        <p>４コマ漫画　:　<i class="fas" :class="[drew_comic ? 'fa-check': 'fa-times']"></i></p>
        <p>ツイート　　:　<i class="fas" :class="[tweeted ? 'fa-check': 'fa-times']"></i></p>
      </div>
      <div class="card-action center">
        <a class="waves-effect waves-light btn-small icon" :href="'http://www.kure-rad.io/app/radios/' + id" target="_brank"><i class="material-icons">open_in_new</i></a>
        <button class="waves-effect waves-light btn-small icon edit modal-trigger" href="#modal1"><i class="material-icons">edit</i></button>
        <!-- <button class="waves-effect waves-light btn-small icon delete modal-trigger" href="#modal2"><i class="material-icons">delete</i></button> -->
        <button class="waves-effect waves-light btn-small icon delete" @click="deleteTask(title, id)"><i class="material-icons">delete</i></button>
      </div>
    </div>
  </div>
</template>

<script>
  module.exports = {
    props: {
      id: {
        type: Number,
        default: 00,
        required: true,
      },
      title:{
        type: String,
        default: 'タイトルだよー',
      },
      published_at:{
        type: [Number, String],
        default: 20010429,
      },
      recorded:{
        type: Number,
        default: 0,
        required: true,
      },
      edited:{
        type: Number,
        default: 0,
        required: true,
      },
      reviewed:{
        type: Number,
        default: 0,
        required: true,
      },
      drew_thumbnail:{
        type: Number,
        default: 0,
        required: true,
      },
      reserved:{
        type: Number,
        default: 0,
        required: true,
      },
      released:{
        type: Number,
        default: 0,
        required: true,
      },
      drew_comic:{
        type: Number,
        default: 0,
        required: true,
      },
      tweeted:{
        type: Number,
        default: 0,
        required: true,
      },
      folder_id:{
        type: String,
        default: 0,
      },
      record_url:{
        type: String,
        default: 0,
      },
      thumbnail_url:{
        type: String,
        default: 0,
      },
      comic_url:{
        type: String,
        default: 0,
      },
    },
    methods: {
      deleteTask: function(title, id) {
        let result = confirm('[ 第' + id + '回 ] ' + title + ' を本当に削除してもいいですか？');
        if(result) {
          this.axios.delete('http://0.0.0.0:3000/api/v1/publishing_task/' + id + '/')
          .then(response => {
            location.reload();
          }).catch(error => {
            console.log(error);
          });
        }
      }
    }
  }
</script>

<style scoped>
.card-image img {
  border-bottom: 1px solid rgba(160, 160, 160, 0.2);
}

.card-title {
  color: black !important;
  background-color: rgba(255, 255, 255, 0.8);
}

.switch {
  display: inline-block;
}

.icon {
  padding: 1px 7px 2px !important;
}

.fa-check {
  color: #34E29BFF;
}

.fa-times {
  color: #FF0034FF;
}

.add {
  background-color: #FFBABFFF;
}

.edit {
  background-color: #00B5FFFF;
}

.delete {
  background-color: #FF0013FF;
}
</style>

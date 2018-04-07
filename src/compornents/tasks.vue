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
        <p>収録　　　　:　<i class="fas" :class="[rec ? 'fa-check': 'fa-times']"></i></p>
        <p>編集　　　　:　<i class="fas" :class="[edit ? 'fa-check': 'fa-times']"></i></p>
        <p>検閲　　　　:　<i class="fas" :class="[censorship ? 'fa-check': 'fa-times']"></i></p>
        <p>サムネ画像　:　<i class="fas" :class="[thumbnail ? 'fa-check': 'fa-times']"></i></p>
        <p>予約投稿　　:　<i class="fas" :class="[reserve ? 'fa-check': 'fa-times']"></i></p>
        <p>公開　　　　:　<i class="fas" :class="[release ? 'fa-check': 'fa-times']"></i></p>
        <p>４コマ漫画　:　<i class="fas" :class="[comic ? 'fa-check': 'fa-times']"></i></p>
        <p>ツイート　　:　<i class="fas" :class="[tweet ? 'fa-check': 'fa-times']"></i></p>
      </div>
      <div class="card-action center">
        <a class="waves-effect waves-light btn-small icon" :href="'http://www.kure-rad.io/app/radios/' + id" target="_brank"><i class="material-icons">open_in_new</i></a>
        <button class="waves-effect waves-light btn-small icon edit"><i class="material-icons">edit</i></button>
        <button class="waves-effect waves-light btn-small icon delete"><i class="material-icons">delete</i></button>
        <!-- <button class="waves-effect waves-light btn-small"><i class="material-icons left">open_in_new</i>確認</button>
        <button class="waves-effect waves-light btn-small edit"><i class="material-icons left">edit</i>編集</button>
        <button class="waves-effect waves-light btn-small delete"><i class="material-icons left">delete</i>削除</button> -->
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
      title: {
        type: String,
        default: 'タイトルだよ〜',
        required: true,
      },
      published_at: {
        type: String,
        default: '2001-04-29',
        required: true,
      },
      rec: {
        type: Boolean,
        default: false,
        required: true,
      },
      edit: {
        type: Boolean,
        default: false,
        required: true,
      },
      censorship: {
        type: Boolean,
        default: false,
        required: true,
      },
      thumbnail: {
        type: Boolean,
        default: false,
        required: true,
      },
      reserve: {
        type: Boolean,
        default: false,
        required: true,
      },
      release: {
        type: Boolean,
        default: false,
        required: true,
      },
      comic: {
        type: Boolean,
        default: false,
        required: true,
      },
      tweet: {
        type: Boolean,
        default: false,
        required: true,
      },
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

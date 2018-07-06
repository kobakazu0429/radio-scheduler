<template>
  <div class="row">
    <div v-for="task in this.$store.getters.Tasks" :key="task.time">
      <div class="col s12 m4 l4 xl4">
        <div class="card">
          <div class="card-image">
            <img src="http://materializecss.com/images/sample-1.jpg">
            <!-- <img :src="item.img"> -->
          </div>
          <div class="card-content">
            <span class="subject">タイトル　　-　</span><span class="body">{{ task.title }}</span><br>
            <span class="subject">公開予定日　-　</span><span class="body" v-if="task.published_at==''">未定</span><span class="body" v-else>{{ $moment(task.published_at).format('YYYY-MM-DD') }}</span><br>
            <span class="subject">担当者　　　-　</span><span class="body">{{task.manager}}</span><br>
            <hr>
            <p>収録　　　　:　<i class="fas" :class="[task.recorded ? 'fa-check': 'fa-times']"></i></p>
            <p>編集　　　　:　<i class="fas" :class="[task.edited ? 'fa-check': 'fa-times']"></i></p>
            <p>検閲　　　　:　<i class="fas" :class="[task.reviewed ? 'fa-check': 'fa-times']"></i></p>
            <p>サムネ画像　:　<i class="fas" :class="[task.drew_thumbnail ? 'fa-check': 'fa-times']"></i></p>
            <p>予約投稿　　:　<i class="fas" :class="[task.reserved ? 'fa-check': 'fa-times']"></i></p>
            <p>公開　　　　:　<i class="fas" :class="[task.released ? 'fa-check': 'fa-times']"></i></p>
            <p>４コマ漫画　:　<i class="fas" :class="[task.drew_comic ? 'fa-check': 'fa-times']"></i></p>
            <p>ツイート　　:　<i class="fas" :class="[task.tweeted ? 'fa-check': 'fa-times']"></i></p>
          </div>
          <div class="card-action center">
            <a class="waves-effect waves-light btn-small icon" :href="'https://www.kure-rad.io/app/radios/' + task.time" target="_brank"><i class="material-icons">open_in_new</i></a>
            <button class="waves-effect waves-light btn-small icon edit modal-trigger" href="#edit-modal" @click="editTask(task.id, task.time)"><i class="material-icons">edit</i></button>
            <!-- <button class="waves-effect waves-light btn-small icon delete modal-trigger" href="#modal2"><i class="material-icons">delete</i></button> -->
            <button class="waves-effect waves-light btn-small icon delete" @click="deleteTask(task.id, task.time, task.title)"><i class="material-icons">delete</i></button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
module.exports = {
  mounted: function() {
    this.$store.commit('APITasks')
  },

  methods: {
    deleteTask: function(id, time, title) {
      let confirmresult = confirm(
        '[ 第' + time + '回 ] ' + title + ' を本当に削除してもいいですか？'
      )
      if (confirmresult) {
        this.axios
          .delete(this.$store.getters.APIURL + id + '/')
          .then(response => {
            location.reload()
          })
          .catch(error => {
            console.log(error)
          })
      }
    },
    editTask: function(id, time) {
      let selectedTask = this.$store.getters.Tasks.filter(function(item) {
        if (item.id == id) return item
      })
      this.$store.commit('setNowForm', selectedTask['0'])
    }
  }
}
</script>

<style scoped>
.card-image img {
  border-bottom: 1px solid rgba(160, 160, 160, 0.2);
}

.card-title {
  color: black;
  margin-top: 10px;
  line-height: 20px;
  font-size: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.card-content {
  padding-top: 0;
  width: 100%;
}

.switch {
  display: inline-block;
}

.icon {
  padding: 1px 7px 2px !important;
}

.fa-check {
  color: #34e29bff;
}

.fa-times {
  color: #ff0034ff;
}

.add {
  background-color: #ffbabfff;
}

.edit {
  background-color: #00b5ffff;
}

.delete {
  background-color: #ff0013ff;
}

.subject {
  font-size: 0.7rem;
}

.body {
  font-size: 1rem;
}
</style>

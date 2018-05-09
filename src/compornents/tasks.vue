<template>
  <div class="row">
    <div v-for="task in this.$store.getters.getTasks">
      <div class="col s12 m6 l3">
        <div class="card">
          <div class="card-image">
            <img src="http://materializecss.com/images/sample-1.jpg">
            <!-- <img :src="item.img"> -->
          </div>
          <div class="card-content">
            <span class="card-title">{{ task.title }}</span>
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
            <a class="waves-effect waves-light btn-small icon" :href="'http://www.kure-rad.io/app/radios/' + task.id" target="_brank"><i class="material-icons">open_in_new</i></a>
            <button class="waves-effect waves-light btn-small icon edit modal-trigger" href="#edit-modal" @click="editTask(task.id)"><i class="material-icons">edit</i></button>
            <!-- <button class="waves-effect waves-light btn-small icon delete modal-trigger" href="#modal2"><i class="material-icons">delete</i></button> -->
            <button class="waves-effect waves-light btn-small icon delete" @click="deleteTask(task.id, task.title)"><i class="material-icons">delete</i></button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  module.exports = {
    mounted: function() {
      this.$store.commit('getAPITasks')
    },
    methods: {
      deleteTask: function(id, title) {
        let confirmresult = confirm('[ 第' + id + '回 ] ' + title + ' を本当に削除してもいいですか？');
        if(confirmresult) {
          this.axios.delete('http://0.0.0.0:3000/api/v1/publishing_task/' + id + '/')
          .then(response => {
            location.reload();
          }).catch(error => {
            console.log(error);
          });
        }
      },
      editTask: function(id) {
        let selectedTask = this.$store.getters.getTasks.filter(function(item){
          if(item.id == id) return item
        });

        this.$store.commit('updateNowForm', {key: 'now_form_id', value: selectedTask["0"].id})
        this.$store.commit('updateNowForm', {key: 'now_form_title', value: selectedTask["0"].title})
        this.$store.commit('updateNowForm', {key: 'now_form_published_at', value: selectedTask["0"].published_at}),
        this.$store.commit('updateNowForm', {key: 'now_form_recorded', value: selectedTask["0"].recorded})
        this.$store.commit('updateNowForm', {key: 'now_form_edited', value: selectedTask["0"].edited})
        this.$store.commit('updateNowForm', {key: 'now_form_reviewed', value: selectedTask["0"].reviewed})
        this.$store.commit('updateNowForm', {key: 'now_form_drew_thumbnail', value: selectedTask["0"].drew_thumbnail})
        this.$store.commit('updateNowForm', {key: 'now_form_reserved', value: selectedTask["0"].reserved})
        this.$store.commit('updateNowForm', {key: 'now_form_released', value: selectedTask["0"].released})
        this.$store.commit('updateNowForm', {key: 'now_form_drew_comic', value: selectedTask["0"].drew_comic})
        this.$store.commit('updateNowForm', {key: 'now_form_tweeted', value: selectedTask["0"].tweeted})
        this.$store.commit('updateNowForm', {key: 'now_form_folder_id', value: selectedTask["0"].folder_id})
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

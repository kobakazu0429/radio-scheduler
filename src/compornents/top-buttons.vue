<template>
  <div class="row">
    <div class="col s12" id="buttons">
      <div class="buttons">
        <button class="waves-effect waves-light btn modal-trigger add" href="#new-modal" @click="resetForm">
          <i class="material-icons left">add</i>
          新規追加
        </button>
        <button class="waves-effect waves-light btn modal-trigger add" href="#modal2">
          <i class="material-icons left">delete</i>
          削除
        </button>
        <button class="waves-effect waves-light btn"><i class="material-icons left">add</i>button</button>
      </div>
    </div>
  </div>
</template>

<script>
  module.exports = {
    methods: {
      resetForm: function() {
        this.$store.commit('clearNowForm')
      }
    }
  }
</script>

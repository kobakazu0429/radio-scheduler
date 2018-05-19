<template>
  <div class="row">
    <div class="col s12" id="buttons">
      <div class="buttons">
        <button class="waves-effect waves-light btn modal-trigger add" href="#new-modal" @click="resetForm">
          <i class="material-icons left">add</i>
          新規追加
        </button>
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

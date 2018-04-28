<template>
  <div id="modal2" class="modal">
    <div class="modal-content">
      <button class="waves-effect waves-light btn modal-trigger add" href="#">
        <i class="material-icons left">cancel</i>
        キャンセルする
      </button>
      <button class="waves-effect waves-light btn modal-trigger add" href="#">
        <i class="material-icons left">delete</i>
        削除する
      </button>
    </div>
  </div>
</template>

<script>

</script>

<style scoped>
.modal {
  height: 30%;
  width: 30%;
  top: 30% !important;
  overflow: hidden;
}

.modal-content {
  padding: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

button {
  margin: 10px;
}
</style>

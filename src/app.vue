<template>
  <div id="app">
    <h4>ちょっくれ スケジューラー</h4>
    <div class="container">
      <new-task></new-task>
      <edit-task></edit-task>
      <delete-confirm></delete-confirm>
      <top-buttons></top-buttons>
      <tasks></tasks>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  mounted: function() {
    const elems = document.querySelectorAll('.modal')
    M.Modal.init(elems)
  }
}
</script>

<style>
@import url('https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-beta/css/materialize.min.css');
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');
@import url('https://use.fontawesome.com/releases/v5.0.2/css/all.css');

html,
body {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  margin: 0;
  padding: 0;
  font-size: 18px;
}

.container {
  margin-top: 5rem;
}
</style>

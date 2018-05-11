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
  }
</script>

<style>
html, body {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  margin: 0;
  padding: 0;
  font-size: 18px;
}

.container {
  margin-top: 5rem;
}

#a01 {
  background-color: rgba(255, 0, 0, 0.2);
}

#a02 {
  background-color: rgba(0, 255, 0, 0.2);
}

#a03 {
  background-color: rgba(0, 0, 255, 0.2);
}

#a04 {
  background-color: rgba(0, 0, 0, 0.2);
}
</style>

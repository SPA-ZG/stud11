<script setup>

</script>

<template>
  <div id="app">
    <h1>Welcome To Book Saver</h1>
    <img class = 'img-icon' src="@/assets/book.svg" alt="Book icon">
    <router-link class="link" to="/books">Go to Book List</router-link>
    <router-view />
  </div>
</template>

<style scoped>
  #app {
    border: 1px solid #BED754;
    border-radius: 10px;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .img-icon{
    width: 100px;
    height: 100px;
  }
  .link{
    margin-top: 10px;
    color: #E3651D;
    transition-duration: 0.4s;
  }
  .link:hover{
    border-radius: 5px;
    background-color: #750E21;
  }
</style>

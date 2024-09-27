<script setup>
import {RouterLink, RouterView} from "vue-router"
</script>

<template>
  <header>
    <nav>
      <RouterLink class="router-link" to="/">Home</RouterLink>
      |
      <RouterLink class="router-link" to="/books">Books</RouterLink>
      |
      <RouterLink class="router-link" to="/createBook">Add New Book</RouterLink>
    </nav>
  </header>
  <RouterView class = "router-view"/>
</template>


<style>
  * {
    background-color: #191919;

  }
  .router-view{
    display:flex;
    flex-direction: column;
  }
  .router-link{
    color: #BED754;;
  }

</style>

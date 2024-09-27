<script setup>

import { ref, computed } from 'vue';
import  { Sold } from "../stores/pinia.js"

const store=Sold()

const bookTitle = ref('');
const bookAuthor = ref('');
const bookDescription = ref('');
const bookText = ref('');
const bookPrice = ref(0);
const rate = 7.53;
const books = ref(getBooksFromLocalStorage());
const sold = ref(0)

const createBook = () => {
  const newBook = {
    title: bookTitle.value,
    author: bookAuthor.value,
    description: bookDescription.value,
    text: bookText.value,
    price: bookPrice.value,
    sold: store.count
  };

  books.value.push(newBook);
  saveBooksToLocalStorage();
  resetForm();
};

const resetForm = () => {
  bookTitle.value = '';
  bookAuthor.value = '';
  bookDescription.value = '';
  bookText.value = '';
  bookPrice.value = 0;
  store.setCounter(0)
};

const saveBooksToLocalStorage = () => {
  localStorage.setItem('books', JSON.stringify(books.value));
};

function getBooksFromLocalStorage() {
  const storedBooks = localStorage.getItem('books');
  return storedBooks ? JSON.parse(storedBooks) : [];
}

const priceInHR = computed(() => {
  return (bookPrice.value * rate).toFixed(2);
});
</script>


<template>
  <div id="create-view">
    <h1>Create New Book</h1>
    <form @submit.prevent="createBook">
      <label for="title">Title:</label>
      <input v-model="bookTitle" type="text" id="title" required />

      <label for="author">Author:</label>
      <input v-model="bookAuthor" type="text" id="author" required />

      <label for="description">Description:</label>
      <textarea v-model="bookDescription" id="description" required></textarea>
      
      <label for="text">Text:</label>
      <textarea v-model="bookText" id="text" rows="10" required></textarea>

      <label for="price">Price €:</label>
      <input v-model="bookPrice" type="number" id="price" required />

      <div class="priceHRK">
        <label for="priceInHR">Price in HRK: </label>
        <span id="priceInHR">{{ priceInHR }}</span>
      </div>
      <h1 style="font-size: 26px;">Sold Amount (do it first):</h1>
      <div class = "sold">
        <button class="link" @click="store.decrement(1)">Decrement</button>
        <h1 style="font-size: 15px;">{{store.count}}</h1>
        <button class="link" @click="store.increment(1)">Increment</button>
      </div>
      <hr>
      <br>
      <button type="submit" class="link">Create Book</button>
    </form>
    <button @click="resetForm" class="link" style="margin-top: 10px;">Reset Inputs</button>
    <router-view />
  </div>
</template>

<style scoped>
#create-view {
  border: 1px solid #BED754;
  border-radius: 10px;
  margin-top: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

form {
  width: 300px;
  display: flex;
  flex-direction: column;
}

label {
  margin-top: 10px;
  color: #E3651D;
  font-size: 15px;
}

input,
textarea {
  margin-top: 5px;
  padding: 5px;
  color:rgb(167, 167, 167);
}

.link {
  margin: auto;
  color: #E3651D;
  transition-duration: 0.4s;
  font-size: 18px;
  
}

.link:hover {
  border-radius: 5px;
  background-color: #750E21;
}

.priceHRK{
  margin-top: 5px;
}

.sold{
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
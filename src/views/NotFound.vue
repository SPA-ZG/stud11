<template>
    <div id="error">
        <h1>Sorry, {{ $route.params.catchAll }} is not found.</h1>
        Try <router-link class="link" to="/">home</router-link>
    </div>
    
</template>

<style scoped>
    .link{
        color: #BED754;
        transition: 0.4s;
        font-size: 18px;
    }
    .link:hover{
        border-radius: 5px;
        background-color: #750E21;
    }
    #error{
        margin-top: 10px;
    }
</style>
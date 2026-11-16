<script setup>
  import { useCartStore } from './stores/storeCart'

  const cartStore = useCartStore()
</script>

<template>
  <header class="navbar">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/cart">Cart ({{ cartStore.totalItems }})</router-link>
    </nav>
  </header>

  <main>
    <router-view />
  </main>
</template>

<style>
  body {
    font-family: sans-serif;
    margin: 0;
  }

  .navbar {
    padding: 16px 24px;
    background-color: #f4f4f4;
    border-bottom: 1px solid #ddd;
  }

  .navbar a {
    text-decoration: none;
    color: #333;
    font-weight: bold;
    margin: 0 8px;
  }

  .navbar a.router-link-active {
    color: #42b983;
  }

  main {
    padding: 20px;
  }
</style>

<script setup>
  import { ref } from 'vue'
  import ProductCard from './cardProduk.vue'
  import { useCartStore } from '../stores/storeCart'

  const cartStore = useCartStore()

  const productList = ref([
    { id: 1, name: 'Writebook', price: 2000, stock: 6 },
    { id: 2, name: 'Artbook', price: 5000, stock: 8 },
    { id: 3, name: 'Coding Magazine', price: 7000, stock: 4 },
    { id: 4, name: 'Drawing Book', price: 6500, stock: 7 },
    { id: 5, name: 'Horror Book', price: 5000, stock: 9 }
  ])

  const handleBuyProduct = (productData) => {
    const product = productList.value.find(p => p.id === productData.id)

    if (product && product.stock > 0) {
      product.stock--
      cartStore.addItem(productData)
    } else {
      alert('No Stock Left!')
    }
  }
</script>

<template>
  <div class="product-list-container">
    <h2>New Catalog</h2>
    <p>Please choose the book you want</p>

    <div class="product-grid">
      <ProductCard
        v-for="item in productList"
        :key="item.id"
        :id="item.id"
        :name="item.name"
        :price="item.price"
        :stock="item.stock"
        @buy_product="handleBuyProduct"
        />
    </div>
  </div>
</template>

<style scoped>
  .product-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    gap: 16px;
    margin-top: 20px;
  }
</style>

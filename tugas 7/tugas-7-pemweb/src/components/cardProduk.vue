<script setup>
  const props = defineProps({
    id: { type: Number, required: true },
    name: { type: String, required: true },
    price: { type: Number, required: true },
    stock: { type: Number, default: 0 }
  })

  const emit = defineEmits(["buy_product"])

  const handleBuy = () => {
  if (props.stock > 0) {
      emit("buy_product", {
        id: props.id,
        name: props.name,
        price: props.price,
        stock: props.stock})
    } else {
      alert("No Stock Left!")
    }
  }
</script>

<template>
  <div class="product-card">
    <h3 class="product-name"> {{ name }} </h3>
    <p class="product-price">Rp. {{ price.toLocaleString("id-ID") }} </p>
    <p class="product-stock" :class="{ 'out-of-stock': stock === 0 }">
      Stock: {{ stock > 0 ? stock : 'Out of stock' }}
    </p>
    <button @click="handleBuy" :disabled="stock === 0" class="btn-buy">
      {{ stock > 0 ? '+ Add to Cart' : 'Sold Out' }}
    </button>
  </div>
</template>

<style scoped>
  
</style>

<script setup>
  import { useCartStore } from '../stores/storeCart'

  const cartStore = useCartStore()

  const handleCheckout = () => {
    alert(`Checkout successful! Total payment: Rp. ${cartStore.totalPrice.toLocaleString('id-ID')}`)
    cartStore.items = [] // Kosongkan keranjang setelah checkout
  }
</script>

<template>
  <div class="cart-container">
    <h2>Shopping Cart</h2>

    <!-- Tampilan jika keranjang masih kosong -->
    <div v-if="cartStore.items.length === 0" class="empty-cart">
      <p>Your cart is still empty.</p>
      <router-link to="/" class="btn-back">Back to Catalog</router-link>
    </div>

    <!-- Tampilan jika sudah ada barang di keranjang -->
    <div v-else class="cart-content">
      <div v-for="item in cartStore.items" :key="item.id" class="cart-item">
        <div class="item-info">
          <h4>{{ item.name }}</h4>
          <p>Price: Rp. {{ item.price.toLocaleString('id-ID') }}</p>
          <p>Quantity: {{ item.quantity }}</p>
          <p class="subtotal">
            Subtotal: Rp. {{ (item.price * item.quantity).toLocaleString('id-ID') }}
          </p>
        </div>

        <button @click="cartStore.removeItem(item.id)" class="btn-remove">
          Remove
        </button>
      </div>

      <!-- Ringkasan Total -->
      <div class="cart-summary">
        <p>Total Items: <strong>{{ cartStore.totalItems }}</strong></p>
        <h3>Total Price: Rp. {{ cartStore.totalPrice.toLocaleString('id-ID') }}</h3>

        <div class="cart-actions">
          <router-link to="/" class="btn-back">Continue Shopping</router-link>
          <button @click="handleCheckout" class="btn-checkout">Checkout</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .cart-container {
    max-width: 600px;
    margin: 20px auto;
    padding: 16px;
  }

  .cart-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #ddd;
    padding: 12px 0;
  }

  .subtotal {
    font-weight: bold;
  }

  .btn-remove {
    background-color: #ff4d4d;
    color: white;
    border: none;
    padding: 6px 12px;
    border-radius: 4px;
    cursor: pointer;
  }

  .cart-summary {
    margin-top: 20px;
    text-align: right;
  }

  .cart-actions {
    display: flex;
    justify-content: flex-end;
    gap: 12px;
    margin-top: 12px;
  }

  .btn-checkout {
    background-color: #28a745;
    color: white;
    border: none;
    padding: 8px 16px;
    border-radius: 4px;
    cursor: pointer;
  }

  .btn-back {
    padding: 8px 16px;
    text-decoration: none;
    color: #333;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
</style>

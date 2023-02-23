<template>
  <div>
    <h2>Cart Page</h2>

    <div class="products" v-if="products.length">
      <ProductComponent v-for="(product, index) in products" :product="product" :key="index"/>
    </div>

    <div v-else>cart is empty</div>
    <!-- <div class="cartQuantity"><p>Кол-во: </p>{{ $store.state.cart.length }}</div> -->
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import ProductComponent from '@/components/Product.vue'

  export default Vue.extend({
    name: 'CartView',

    data: () => ({
      products: [] as any
    }),

    components: {
      ProductComponent
    },

    mounted(){
      const productsInStore: any[] = this.$store.state.products;
      const cartInStore: any[] = this.$store.state.cart;

      this.products = productsInStore.filter((product) => cartInStore.find((productId) => productId === product.id))
      
      // this.$set(this.$store.state, 'quantuty',1)
    }
  })
</script>

<style scoped lang="scss">
  .products{
    display: flex;
  }
</style>
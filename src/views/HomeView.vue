<template>
  <div>
    <div class="top-bar">
      <div class="top-bar-logo-wrapper">
        <img width="50" class="top-bar-logo" src="../assets/logo.png" alt="">
        <h3>Vue-lesson-3</h3>
      </div>
      <CartComponent :count="$store.state.cart.length" />
    </div>

    <div class="products">
      <ProductComponent v-for="(product, index) in $store.state.products" :product="product" @putInCartAction="putInCartAction" :key="index"/>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import CartComponent from '@/components/Cart.vue'
  import ProductComponent from '@/components/Product.vue'

  interface Data {
    // cart: number[]
  }

  export default Vue.extend({
    name: 'HomeView',

    data: (): Data => ({
      
    }),
    components: {
      CartComponent,
      ProductComponent
    },
    methods: {
      putInCartAction(productId: number){
        this.$store.dispatch('addToCart', productId)
      }
    }
  })
</script>

<style scoped lang="scss">
  .top-bar {
    border: 1px solid;
    display: flex;
    justify-content: space-between;

    .top-bar-logo-wrapper {
      display: flex;
    }
  }

  .products{
    display: flex;
  }
</style>
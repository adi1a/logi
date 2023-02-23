<template>
    <div class="product" :id="product.id">
        <div class="product_-image">
            <img :src="product.imageUrl" :alt="product.title">
        </div>

        <div class="product__title">{{ product.title }}</div>

        <div class="product__actions" >
            <button @click="putInCartAction" >Put in cart</button>
        </div>
        
    </div>
    
</template>

<script lang="ts">
    import Vue from 'vue'

    export default Vue.extend({
        name: 'ProductComponent',
        props: ['product'],
        methods: {
            putInCartAction() {
                this.$emit('putInCartAction', this.product.id)

            }
        }
    })
</script>

<style scoped lang="scss">
    .product{
        width: 200px;   
        height: 300px;
        img{
            width: 100%;
        }
    }
</style>
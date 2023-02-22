import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [
      {
        id: 1,
        title: 'Iphone 11',
        imageUrl: 'https://activ.kz/shop/media/__sized__/products/iphone_11_black-thumbnail-255x255-90.jpg'
      },
      {
        id: 2,
        title: 'Iphone 12',
        imageUrl: 'https://activ.kz/shop/media/__sized__/products/1_w7PO89Z-thumbnail-255x255-90.jpg'
      },
      {
        id: 3,
        title: 'Iphone 13',
        imageUrl: 'https://activ.kz/shop/media/__sized__/products/iphone_13_black-thumbnail-255x255-90.jpg'
      },
      { 
        id: 4,
        title: 'Iphone 14',
        imageUrl: 'https://activ.kz/shop/media/__sized__/products/1_R6GEUef-thumbnail-255x255-90.jpg'
      },
    ] as any,

    cart: [] as any
  },
  getters: {
  },
  mutations: {
    addToCart(state, productId) {
      state.cart.push(productId)
    }
  },
  actions: {
    addToCart(context: any, productId: number) {
      context.commit('addToCart', productId);
    }
  }as any,
  modules: {
  }
})

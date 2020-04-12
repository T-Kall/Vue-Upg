import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'


Vue.use(Vuex)

export default new Vuex.Store({

//STATE skickar till getters

  state: { 
    cart: [],
    products: [],
    product: null
  },

// MUTATIONS skickar till state


  mutations: { 

    // Mutations Product/products 

    GET_PRODUCTS(state, products) {
      state.products = products
      sessionStorage.setItem('products', state.products) //hämtar från state
    },
    
    GET_PRODUCT_BYID(state, product) {
      state.product = product
      //state.product = state.products.filter(p => p.id === id)[0]
      sessionStorage.setItem('product', state.product)
    },

    //Mutations shoppingcart

    ADD_TO_CART(state, {product, quantity}) {
      let exists = state.cart.find(item => { return item.product._id === product._id })
      if(exists) {
        exists.quantity += quantity //uppdaterar inte staten 2.18.40
        
        return
      }
      state.cart.push({product, quantity})
      localStorage.setItem('cart', JSON.stringify(state.cart))

    },

    DELETE_FROM_CART(state, id) {
      state.cart = state.cart.filter(item => { return item.product.id !== id})
      localStorage.setItem('cart', JSON.stringify(state.cart))
    },

  },


//ACTIONS skickar till mutation

  actions: {  

    // Actions Product/products

    async getProducts({ commit }) {

      axios.get('http://localhost:9998/api/products')
        .then(res => {
          if (res.status === 200) {
            
            commit('GET_PRODUCTS', res.data.products)
          }
        })
    },


    async getProductById({ commit }, id) { //skickar till mapActions i Product

      axios.get('http://localhost:9998/api/products/' + id) //api-anrop via axios
        .then(res => {
          if (res.status === 200) {
            commit('GET_PRODUCT_BYID', res.data) 
          }
        })
    },

    // Actions shoppingcart - lägg tiil / ta bort

    addProductToCart({commit}, { product, quantity }) {
      commit('ADD_TO_CART', { product, quantity })
    },
    

    deleteProductFromCart({commit}, id) {
      commit('DELETE_FROM_CART', id)
    }

        
    //  deleteProductFromCart({commit}, id) {

    
    //     axios.delete('http://localhost:9998/api/products/' + id) 
    //     commit('DELETE_FROM_CART', id)
       
    //   }
    
  
  },

//GETTERS

getters: {

  //Getters Product/products

  products(state) {
    return state.products
  },
  product(state) {
    return state.product
  },


//Getters shoppingcart


  shoppingCart(state) {
    let cart = JSON.parse(localStorage.getItem('cart'))
    if (cart !== null) {
      state.cart = cart
    }
    return state.cart
  },

  shoppingCartTotal(state) {
    let total = 0
    if(state.cart.length !== 0) {
      state.cart.forEach(item => {
        total += item.product.price * item.quantity
      })
    }    
    return total
  },
  
  shoppingCartItemCount(state) {
    let items = 0
    state.cart.forEach(item => {
      items += item.quantity
    }) 
    return items
  },
 }

})



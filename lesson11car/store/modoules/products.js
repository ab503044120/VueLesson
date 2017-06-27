import shop from '../../api/shop'
import * as types from '../mutation-types'

//initial state 初始化状态
const state = {
    all: []
}

//getters
const getters = {
    allProducts: state => state.all
}

//mutations
const mutations = {
    [types.RECEIVE_PRODUCTS](state, { products }) {
        state.all = products
    },
    //在cart.js中也有该状态 这样的话 可以取到不同文件中的state
    [types.ADD_TO_CART](state, { id }) {
        state.all.find(p => p.id === id).inventory--
    }
}

//actions
const actions = {
    getAllProducts({ commit }) {
        shop.getProducts(products => {
            commit(types.RECEIVE_PRODUCTS, { products })
        })
    }
}

export default {
  state,
  getters,
  actions,
  mutations
}
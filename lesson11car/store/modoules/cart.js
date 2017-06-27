import shop from '../../api/shop'
import * as types from './../mutation-types.js'

//state
const state = {
    added: [],//已经添加的商品
    checkoutStatus: null//检查商品的状态    
}

//getters 获取state的时候 进行状态检查 和过滤
const getters = {
    checkoutStatus: state => state.checkoutStatus
}

//mutations 变动 只支持同步代码 对数据进行更改
const mutations = {

    [types.ADD_TO_CART](state, { id }) {
        state.lastCheckout = null
        // const product = state.all.find(p => p.id == id)
        // product.quatity--
        const record = state.added.find(p => p.id == id)
        if (!record) {
            //添加到购物车中
            state.added.push({
                id,
                quatity: 1
            })
        } else {
            record.quatity++
        }
    },

    [types.CHECKOUT_REQUEST](state) {
        state.added = []
        state.checkoutStatus = null
    },

    [types.CHECKOUT_SUCCESS](state) {
        state.checkoutStatus = 'successful'
    },

    [types.CHECKOUT_FAILURE](state, { saveCartItems }) {
        state.added = saveCartItems
        alert("失败")
        state.checkoutStatus = 'fauled'
    },
}

//actions 支持异步 内部其实是调用mutations进行数据的更改
const actions = {
    checkout({ commit, state }, products) {
        //... 是解析语法
        const savedCartItems = [...state.added]
        //调用 检查请求 调用REQUEST的方法
        commit(types.CHECKOUT_REQUEST);

        shop.buyProducts(products, () => commit(types.CHECKOUT_SUCCESS), () => commit(types.CHECKOUT_FAILURE, { savedCartItems }))
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
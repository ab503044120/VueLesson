import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(vuex)

//创建一个对象来保存启动时的状态
const state={
    //放置初始化状态
}

const mutations={
    //放置我们变更状态的函数

}

//整合到整个Vuex中
export default new Vuex.Store({
  state,
  mutations
})
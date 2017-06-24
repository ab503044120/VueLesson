import Vue from "./../node_modules/vue/dist/vue.js"

import app from './compoents/Hello.vue'

Vue.config.debug = true;//开启错误提示
new Vue(app);
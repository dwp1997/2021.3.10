// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

//引入reset.css初始化样式文件
import './assets/css/reset.css'
// 引入公共组件
import './components/index'
// 引入全局过滤器
import './filters/index'
// 引入仓库
import store from './store/index'
/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store, // 挂载仓库
    components: { App },
    template: '<App/>'
})
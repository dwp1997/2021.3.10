import Vue from 'vue'

let obj = {}

//for循环注册公共组件

for (let key in obj) {

    Vue.component(key, obj[key])
}
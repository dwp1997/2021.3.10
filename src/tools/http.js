import Vue from 'vue'
import axios from 'axios'
import qs from 'qs'

// 开发环境
let baseUrl = '/api'
    //上线环境
    // let baseUrl = ''

// 响应拦截
axios.interceptors.response.use((res) => {
    console.group("=====本次请求的路径是：" + res.config.url)
    console.log(res);
    console.groupEnd("=====请求结束")

    return res
})
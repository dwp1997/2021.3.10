import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const login = () =>
    import ('../page/login/login.vue')
const index = () =>
    import ('../page/index/index.vue')
export default new Router({
    routes: [{
            path: '/index',
            component: index
        },
        {
            path: '/login',
            component: login
        }
    ]
})
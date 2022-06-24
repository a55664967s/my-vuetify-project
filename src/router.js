import Vue from 'vue'
import Router from 'vue-router'
import layout from '@/components/V-layout.vue'
Vue.use(Router)
export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/layout',
            name: 'layout',
            component:layout,
        },
    ]
})
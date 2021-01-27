import Vue from 'vue'
import Router from 'vue-router'
import Chapter_1 from '@/components/Chapter_1.vue'
import Chapter_2 from '@/components/Chapter_2.vue'


Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Chapter_1',
            component: Chapter_1
        },
        {
            path: '/2',
            name: 'Chapter_2',
            component: Chapter_2
        }
    ]
})

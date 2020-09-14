import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/Home'
import First from '../views/home/first/First'
import Classify from '../views/home/classify/Classify'
// import Classify from '../views/home/classify/swipe'
import Search from '../views/home/search/Search'
import User from '../views/home/user/User'
import Commend from '../views/home/first/Commend'
import Stadium from '../views/home/first/Stadium'
import City from '../views/city/City.vue'
import Desc from '../views/desc/Desc.vue'


Vue.use(VueRouter)
const routes = [{
        path: '/',
        redirect: '/home/first/commend'
    },
    {
        path: '/desc',
        component: Desc
    },
    {
        path: '/city',
        component: City
    },
    {
        path: '/home',
        component: Home,
        children: [{
                path: '/home/first',
                component: First,
                children: [{
                        path: '/home/first/commend',
                        component: Commend
                    },
                    {
                        path: '/home/first/stadium',
                        component: Stadium
                    },

                ]
            },
            {
                path: 'classify',
                component: Classify
            },
            {
                path: 'search',
                component: Search
            },
            {
                path: 'user',
                component: User
            }
        ]
    },

]



const router = new VueRouter({
    routes
})

export default router

import Search from '@/pages/Search'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Detail from '@/pages/Detail'
import AddCartSuccess from '@/pages/AddCartSuccess'
import ShopCart from '@/pages/ShopCart'
import Trade from '@/pages/Trade'
import Pay from '@/pages/Pay'
import PaySuccess from '@/pages/PaySuccess'
import Center from '@/pages/Center'

import groupOrder from '@/pages/Center/groupOrder'
import myOrder from '@/pages/Center/myOrder'
export default [{
        path: "/home",
        component: ()=>import('@/pages/Home'),
        meta: {
            show: true
        }
    },
    {
        path: "/search/:keyword?",
        component: Search,
        meta: {
            show: true
        },
        name: 'search'
    },
    {
        path: "/login",
        component: Login,
        meta: {
            show: false
        }
    },
    {
        path: "/register",
        component: Register,
        meta: {
            show: false
        }
    },
    {
        path: "/detail/:skuid",
        component: Detail,
        meta: {
            show: true
        }
    },
    {
        path: "/addCartSuccess",
        name: 'addCartSuccess',
        component: AddCartSuccess,
        meta: {
            show: true
        }
    },
    {
        path: "/shopCart",
        component: ShopCart,
        meta: {
            show: true
        }
    },
    {
        path: "/trade",
        component: Trade,
        meta: {
            show: true
        },
        beforeEnter(to, from, next) {
            if (from.path === '/shopcart') {
                next()
            } else {
                next('/shopcart')
            }
        }
    },
    {
        path: "/pay",
        component: Pay,
        meta: {
            show: true
        },
        props: route => ({
            orderId: route.query.orderId
        }),
        beforeEnter(to, from, next) {
            if (from.path === '/trade') {
                next()
            } else {
                next('/trade')
            }
        }
    },
    {
        path: "/paySuccess",
        component: PaySuccess,
        meta: {
            show: true
        }
    },
    {
        path: "/center",
        component: Center,
        meta: {
            show: true
        },
        children: [{
                path: "grouporder",
                component: groupOrder,
            },
            {
                path: "myorder",
                component: myOrder,
            },
            {
                path: '/center',
                redirect: '/center/myorder'
            }
        ]
    },
    {
        path: "*",
        redirect: "/home"
    }
]
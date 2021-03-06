import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import _Store from '@/store'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/como_funciona',
        name: 'how_work',
        component: () => import('../views/HowWork.vue')
    },
    {
        path: '/nosotros',
        name: 'we_are',
        component: () => import('../views/WeAre.vue')
    },
    {
        path: '/contactanos',
        name: 'contact',
        component: () => import('../views/Contact.vue')
    },
    {
        path: '/pago_de_servicios',
        name: 'payment_services',
        component: () => import('../views/PaymentServices.vue')
    },
    {
        path: '/inicio_de_sesion/:service',
        name: 'login',
        component: () => import('../views/Login.vue')
    },
    {
        path: '/olvide_contrasena',
        name: 'forgot_password',
        component: () => import('../views/Forgot.vue')
    },
    // {
    //     path: '/auth/reset-password/callback',
    //     name: 'reset_password',
    //     props: (route) => ({ token: route.query.token }),
    //     component: () => import('../views/ResetPassword.vue')
    // },
    {
        path: '/auth/reset-password/callback/:token',
        name: 'reset_password',
        component: () => import('../views/ResetPassword.vue')
    },
    {
        path: '/registro',
        name: 'register',
        component: () => import('../views/Register.vue')
    },
    {
        path: '/cuenta',
        // alias: '/stripe/success',
        name: 'dashboard',
        component: () => import('../views/Dashboard.vue')
    },
    {
        path: '/stripe/success',
        /* eslint-disable */
        redirect: to => {
            // the function receives the target route as the argument
            // we return a redirect path/location here.
            return { name: 'dashboard', params: { make_payment: true } }
        },
        /* eslint-enable */
        
    },
    {
        path: '/historial_de_pagos',
        name: 'history_payments',
        component: () => import('../views/HistoryPayments.vue')
    },
    {
        path: '/aviso_de_privacidad',
        name: 'privacy',
        component: () => import('../views/Privacy.vue')
    },
    {
        path: '/terminos_y_condiciones',
        name: 'terms',
        component: () => import('../views/Terms.vue')
    },
    // {
    //     path: '/qr/callback',
    //     name: 'dashboard2',
    //     component: () => import('../views/Qr.vue')
        
    // }
    {
        path: '/qr/callback',
        name: 'dashboardPay',
        component: () => import('../views/QrSA.vue')
        
    },
    {
        path: '/stripe/success_without_login',
        name:'success_without_login',
        /* eslint-disable */
        redirect: to => {
            // the function receives the target route as the argument
            // we return a redirect path/location here.
            return { name: 'dashboardPay', params: { make_payment: true } }
        },
        /* eslint-enable */
        
    },
    {
        path: '/stripe/success_services',
        name:'success_services',
        /* eslint-disable */
        redirect: to => {
            // the function receives the target route as the argument
            // we return a redirect path/location here.
            return { name: 'dashboard', params: { make_payment_service: true } }
        },
        /* eslint-enable */
        
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})


router.beforeEach(async(to, from, next) => {

    /*** CHECK SESSION INTERNAL ***/
    let session = JSON.parse(await _Store.dispatch('existSession'))
    console.log(session)

    // if(session !== null) {
        
    // }

    // Hide views in specifics cases
    const show_only_with_session = ['dashboard', 'history_payments']
    const show_only_without_session = ['login', 'register', 'forgot_password']
    const show_only_session_redirect = ['dashboard2']

    if((session === null || session.access_token === null) && show_only_with_session.includes(to.name)) {
        console.log('show_only_with_session',to.name)
        next({ name: 'home' })
        return
    }
    if((session === null || session.access_token === null) && show_only_session_redirect.includes(to.name)){
        if(Object.keys(to.query).length !== 0) { //if the url has query (?query)
            next({
                name: 'login',
                query: to.query
            })
          }
    }
    else if((session !== null && session.access_token !== null) && show_only_without_session.includes(to.name)) {
        console.log('show_only_without_session',to.name)
        next({ name: 'dashboard' })
        return
    }

    next()

    // console.log(_Store.state.lang, '_Store.state.lang')
    // console.log(_Store, '_Store')


    // Set language if url changes
    //await _Store.dispatch('changeLang', 'es')
    //console.log(_Store, '_Store')    
    // let new_view = to.name
    // let old_view = from.name

    //let lang = await _Store.dispatch('getLang')

    // loadLanguageAsync(new_view, old_view, lang).then(response => {
    //     next()
    // })
})

export default router

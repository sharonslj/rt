import Vue from "vue";
import VueRouter from "vue-router";


import Login from '../pages/Login/Login.vue'
import MainPage from '../pages/MainPage/MainPage.vue'
import ConsumerList from '../pages/ConsumerList/ConsumerList.vue'
import Dashboard from '../pages/Dashboard/Dashboard.vue'
import PluginList from '../pages/PluginList/PluginList.vue'
import RoutesCreate from '../pages/RoutesCreate/RoutesCreate.vue'
import RoutesList from '../pages/RoutesList/RoutesList.vue'
import ServerInfo from '../pages/ServerInfo/ServerInfo.vue'
import ServiceList from '../pages/ServiceList/ServiceList.vue'
import SslList from '../pages/SslList/SslList.vue'
import UpstreamList from '../pages/UpstreamList/UpstreamList.vue'

const originalReplace = VueRouter.prototype.push

VueRouter.prototype.push = function push(location) {
    return originalReplace.call(this, location).catch(err => err)
}

Vue.use(VueRouter)

export default new VueRouter({
    routes: [{
            path: '/login',
            components: Login
        },
        {
            path: '/mainpage',
            components: MainPage,
            children: [{
                    path: '/mainpage/dashboard',
                    components: Dashboard
                },
                {
                    path: '/mainpage/routes/list',
                    components: RoutesList
                },
                {
                    path: '/mainpage/upstream/list',
                    components: UpstreamList
                },
                {
                    path: '/mainpage/service/list',
                    components: ServiceList
                },
                {
                    path: '/mainpage/consumer/list',
                    components: ConsumerList
                },
                {
                    path: '/mainpage/plugin/list',
                    components: PluginList
                },
                {
                    path: '/mainpage/ssl/list',
                    components: SslList
                },
                {
                    path: '/mainpage/serverinfo',
                    components: ServerInfo
                },
                {
                    path: '/mainpage/routes/create',
                    components: RoutesCreate
                },
            ]
        },


    ]
})
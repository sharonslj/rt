import Vue from "vue";
import VueRouter from "vue-router";

import ConsumerList from '../pages/ConsumerList/ConsumerList.vue'
import Dashboard from '../pages/Dashboard/Dashboard.vue'
import PluginList from '../pages/PluginList/PluginList.vue'
import RoutesCreate from '../pages/RoutesCreate/RoutesCreate.vue'
import RoutesList from '../pages/RoutesList/RoutesList.vue'
import ServerInfo from '../pages/ServerInfo/ServerInfo.vue'
import ServiceList from '../pages/ServiceList/ServiceList.vue'
import SslList from '../pages/SslList/SslList.vue'
import UpstreamList from '../pages/UpstreamList/UpstreamList.vue'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [{
            path: 'dashboard',
            components: Dashboard
        },
        {
            path: 'routes/list',
            components: RoutesList
        },
        {
            path: 'upstream/list',
            components: UpstreamList
        },
        {
            path: 'service/list',
            components: ServiceList
        },
        {
            path: 'consumer/list',
            components: ConsumerList
        },
        {
            path: 'plugin/list',
            components: PluginList
        },
        {
            path: 'ssl/list',
            components: SslList
        },
        {
            path: 'serverinfo',
            components: ServerInfo
        },
        {
            path: 'routes/create',
            components: RoutesCreate
        },
    ]
})
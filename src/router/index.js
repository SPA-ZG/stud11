import {createRouter, createWebHistory} from 'vue-router'
import HomeView from "../views/HomeView.vue"
import NotFound from "../views/NotFound.vue"
import CreateView from "../views/CreateView.vue"

const router = createRouter(
{
    history: createWebHistory(import.meta.env.BASE_URL),
    routes:[
        {
            path: "/",
            name: "",
            component: HomeView
        },
        {
            path: "/createBook",
            name: "create",
            component: CreateView
        },
        {
            path:"/:catchAll(.*)",
            name:"NotFound",
            component:NotFound
        }
    ]
})

export default router
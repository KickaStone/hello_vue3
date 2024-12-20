import {createRouter, createWebHistory} from "vue-router";
import About from "../components/About.vue";
import Home from "../components/Home.vue";
import News from "../components/News.vue";
import Details from "../components/Details.vue";

const router     = createRouter({
    history: createWebHistory(),
    routes:[
        {
            name:"Home",
            path: "/home",
            component: Home
        },
        {
            name: "News",
            path: "/news",
            component: News,
            children:[
                {
                    path: 'details',
                    component: Details
                }
            ]
        },
        {
            name: "About",
            path: "/about",
            component: About
        }
    ]
})

export default router;
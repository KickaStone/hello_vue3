import {createRouter, createWebHistory} from "vue-router";
import Props from "../pages/01_props/Father.vue"
import Events from "../pages/02_custom-event/Father.vue"
import Mitt from "../pages/03_mitt/Father.vue"
import VModel from "../pages/04_v-model/Father.vue"
import Attr from "../pages/05_$attr/Father.vue"
import Refs from '../pages/06_$refs-$parent/Father.vue'
import PI from "../pages/07_provide-inject/Father.vue"
import Pinia from "../pages/08_pinia/Father.vue"
import Slot from "../pages/09_1_slots/Father.vue"
import Slot2 from "../pages/09_2_scoped_slots/Father.vue"

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/props',
            component: Props,
        },
        {
            path: '/events',
            component: Events,
        },
        {
            path: '/mitt',
            component: Mitt,
        },
        {
            path: '/vmodel',
            component: VModel,
        },
        {
            path: '/attrs',
            component: Attr,
        },
        {
            path: '/refs',
            component: Refs,
        },
        {
            path: '/provide-inject',
            component: PI
        },
        {
            path: '/pinia',
            component: Pinia
        },
        {
            path: '/slot',
            component: Slot
        },
        {
            path: '/scoped_slots',
            component: Slot2
        }

    ]
})
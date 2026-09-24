import Vue from 'vue';
import VueRouter from 'vue-router';
import HeroView from '@/views/HeroView.vue';
import OurCoffee from '@/views/OurCoffee.vue';
import GoodSpage from '@/views/GoodSpage.vue';
import ContactUs from '@/views/ContactUs.vue';

Vue.use(VueRouter)

const routes = [
    { path: '/', component: HeroView },
    { path: '/our-coffee', component: OurCoffee },
    { path: '/good-spage', component: GoodSpage },
    { path: '/contact-us', component: ContactUs }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router
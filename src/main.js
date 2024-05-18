import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import Dropdown from 'primevue/dropdown';
import { createRouter, createWebHashHistory} from 'vue-router'
import Homepage from './components/pages/Homepage.vue'
import Services from './components/pages/Services.vue'
import Services_details from './components/pages/Services_details.vue'
import Ourteam from './components/pages/Ourteam.vue'
import Shop from './components/pages/Shop.vue'
import Pricing from './components/pages/Pricing.vue'
import Blog from './components/pages/Blog.vue'
import About from './components/pages/About .vue'
import Faq from './components/pages/Faq.vue'


const routes = [
    {path: '/', component: Homepage},
    {path: '/services', component: Services},
    {path: '/services-details', component: Services_details},
    {path: '/our-team', component: Ourteam},
    {path: '/shop', component: Shop},
    {path: '/pricing', component: Pricing},
    {path: '/blog', component: Blog},
    {path: '/about-us', component: About},
    {path: '/faqs', component: Faq},
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

const app = createApp(App);
app.use(PrimeVue); 
app.component('Dropdown', Dropdown);
app.use(router)
app.mount('#app')
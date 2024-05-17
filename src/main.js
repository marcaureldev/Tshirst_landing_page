import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import Dropdown from 'primevue/dropdown';


import { createRouter, createMemoryHistory} from 'vue-router'

import Homepage from './components/pages/Homepage.vue'
import About from './components/pages/About .vue'

const app = createApp(App);
app.use(PrimeVue); 
app.component('Dropdown', Dropdown);
app.mount('#app')

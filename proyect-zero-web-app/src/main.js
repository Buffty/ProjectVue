// IMPORTACIONES GENERALES DE VUE

import { createApp } from 'vue'
import App from './App.vue'

// IMPORTACIONES PLUGINS

import i18n from './plugins/i18n' // Traducciones
import router from './router/index' // Routing
import PrimeVue from 'primevue/config' // PrimeVUE
import store from './store/store' // Store

// ESTILOS PrimeVue

import './assets/style/main.css' 

import 'primevue/resources/themes/saga-blue/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'
import 'primeflex/themes/primeone-light.css'
import 'primeflex/themes/primeone-dark.css'


createApp(App)
.use(i18n)
.use(router)
.use(PrimeVue)
.use(store)
.mount('#app')

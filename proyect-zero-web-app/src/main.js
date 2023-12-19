// IMPORTACIONES GENERALES DE VUE

import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// IMPORTACIONES PLUGINS

import i18n from './plugins/i18n'
import router from './router/index'
import PrimeVue from 'primevue/config'

// ESTILOS PrimeVue
import 'primevue/resources/themes/saga-blue/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'
import 'primeflex/themes/primeone-light.css'
import 'primeflex/themes/primeone-dark.css'


createApp(App)
.use(i18n)
.use(router)
.use(PrimeVue)
.mount('#app')

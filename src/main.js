import 'primeicons/primeicons.css'
import '@/assets/tokens.css'
import '@/assets/app.css'

import { createApp } from 'vue'
import PrimeVue from 'primevue/config'
import ToastService from 'primevue/toastservice'
import Ripple from 'primevue/ripple'
import Tooltip from 'primevue/tooltip'
import App from './App.vue'
import router from './router'
import i18n from './plugins/i18n'

const app = createApp(App)

app.use(router)
app.use(i18n)
app.use(PrimeVue, { unstyled: true })
app.use(ToastService)
app.directive('ripple', Ripple)
app.directive('tooltip', Tooltip)
app.mount('#app')

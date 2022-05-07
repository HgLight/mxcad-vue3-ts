import { createApp } from 'vue'
import App from './App.vue'
import Mx from "mxdraw"
Mx.loadCoreCode().then(()=> {
    createApp(App).mount('#app')
})


import Vue from 'vue'

import { Button } from 'ant-design-vue'
Vue.use(Button)
import 'ant-design-vue/dist/antd.css'

import '../src/assets/style/common.scss'
import App from './App'
new Vue({
    render: h => h(App)
}).$mount('#app')
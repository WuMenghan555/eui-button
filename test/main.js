import Vue from 'vue'
import App from './App.vue'
// 导入组件库
import EuiButton from '../packages'

Vue.config.productionTip = false

Vue.use(EuiButton)

new Vue({
  render: h => h(App)
}).$mount('#app')

import Vue from 'vue'
import App from '@/App.vue'

import router from './router/index'

import '@/assets/css/base.css'

/* 导入mui的样式表 */
import '@/assets/mui/dist/css/mui.min.css'
import '@/assets/mui/dist/css/icons-extra.css'

/* 按需引入部分mint-ui组件 */
import { Header } from 'mint-ui';
Vue.component(Header.name, Header);


Vue.filter('dateFormat', function(originVal) {
  
  const dt = new Date(originVal)
  const y = dt.getFullYear()
  const m = (dt.getMonth() + 1 + '').padStart(2, '0')
  const d = (dt.getDate() + '').padStart(2, '0')

  return `${y}年${m}月${d}日`
})


/* axios */
import axios from 'axios'
axios.defaults.baseURL = 'http://127.0.0.1:8088/'
// 在request拦截器中，展示进度条 NProgress.start()
/* axios.interceptors.request.use(
  config => {
    // Do something before request is sent
    config.headers.Authorization = window.sessionStorage.getItem('token')
    return config
  },
  error => {
    // Do something with request error
    return Promise.reject(error)
  }
) */

Vue.prototype.$http = axios
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')

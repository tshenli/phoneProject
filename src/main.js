import Vue from 'vue'
import App from './App.vue'


// 接收路由
import router from './router'
// 导入MintUI插件，制作轮播
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
// 关联store
import store from './store';

Vue.use(MintUI)
// 书写￥符号 过滤器
Vue.filter("currency", function (value) {
  if (!value) return
  return "￥" + value;
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

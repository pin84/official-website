// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store/index'

/* 路由 */
import router from './router'


import api from './api/api'
Vue.prototype.api = api;


import {get,post } from './http/axios'
Vue.prototype.$get = get;
Vue.prototype.$post = post;

import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);
// import { Form, Field, CellGroup } from 'vant';
// App.use(Form);
// App.use(Field);
// app.use(CellGroup);

/* swiper */
import 'swiper/dist/css/swiper.min.css';

/* 重置样式 */
import './assets/css/reset.min.css'

import '@/assets/css/style.css'

/* jquery */
// import 'jquery'

/* bootstarp */
import './assets/css/bootstrap.min.css'
import './assets/js/bootstrap.min'

/* animate.css */
import 'animate.css'

 
/* 头部组件 */
import Header from './components/Header'
Vue.component(Header.name,Header)


/* 尾部组件 */
import Footer from './components/Footer'
Vue.component(Footer.name,Footer)

/* 回到顶部 */
import GoTop from './components/GoTop'
Vue.component(GoTop.name,GoTop)

Vue.config.productionTip = false


router.beforeEach((to, from, next) => {
    if(to.meta.title){
      document.title = to.meta.title
    }
    next();
});


new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

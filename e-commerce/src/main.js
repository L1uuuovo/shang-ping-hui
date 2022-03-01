import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
import router from '@/router'
import store from '@/store'
import * as API from '@/api'
import TypeNav from '@/components/TypeNav'
Vue.component(TypeNav.name, TypeNav)
import Carousel from '@/components/Carousel'
Vue.component(Carousel.name, Carousel)
import Pagination from '@/components/Pagination'
Vue.component(Pagination.name,Pagination)
import "@/mock/mockServe";
import 'swiper/css/swiper.css'
import { Button,MessageBox} from 'element-ui';
Vue.component(Button.name,Button);
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
import VueLazyload from 'vue-lazyload'
import atm from '@/assets/1.gif';
import '@/utils/validate'
Vue.use(VueLazyload,{
  loading:atm
})

new Vue({
  render: h => h(App),
  beforeCreate() {
    Vue.prototype.$bus = this
    Vue.prototype.$API = API
  },
  router,
  store
}).$mount('#app')
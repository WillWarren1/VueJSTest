import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

new Vue({
  el: '.hello',
  data: {
    seen: true
  },
  methods: {
    hideText: function () {
      console.log('check it out')
      this.seen = !this.seen
    }
  }
})
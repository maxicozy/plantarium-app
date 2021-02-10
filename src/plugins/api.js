import axios from 'axios'

const api = axios.create({
  baseURL: '/api/'
})

const install = Vue => {
  Object.defineProperty(Vue.prototype, '$api', {
    get() {
      return api
    }
  })

  Vue.mixin({   
      beforeRouteUpdate(to, from, next) {
         if(typeof this.fetch === 'function' && from !== to) this.fetch()
         next()
      },
      mounted() {
         if(typeof this.fetch === 'function') this.fetch()
      }
  })
}

export default { install }
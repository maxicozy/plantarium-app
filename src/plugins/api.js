import axios from 'axios'

//eigenes kleines vue plugin dass daten vom backend abfragen erleichtert

const api = axios.create({
  baseURL: '/api/'
})

const install = Vue => {
  //so kann jede Vue instanz die api property nutzen
  Object.defineProperty(Vue.prototype, '$api', {
    get() {
      return api
    }
  })
  
  //ruft beim neuladen oder routenupdaten die fetch() funktion einer komponente auf
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
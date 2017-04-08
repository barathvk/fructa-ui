import { observable, action } from 'mobx'
export default class Store {
  baseURL = 'http://api.fructa.ga'
  @observable spinning = false
  @observable result
  @observable simulating = false
  @observable progress = 0
  @observable size
  tokens = []
  numusers = 3
  @action async login () {
    for (let i = 1; i <= this.numusers; i++) {
      const d = await axios.post(`${this.baseURL}/login`, {id: `player${i}`, password: 'password'}, { headers: { 'Access-Control-Expose-Headers': 'Authorization' } })
      this.tokens[i - 1] = d.data.replace('Bearer ', '')
    }
  }
  @action async spin (id) {
    this.spinning = true
    this.result = null
    const result = await axios.get(`${this.baseURL}/spin`, {headers: {Authorization: this.tokens[id - 1]}})
    this.result = result.data
    this.spinning = false
  }
  @action async simulate () {
    for (let i = 0; i < this.size; i++) {
      const uid = Math.floor(Math.random() * (this.numusers)) + 1
      await axios.get(`${this.baseURL}/spin`, {headers: {Authorization: this.tokens[uid - 1]}})
      this.progress = i * 100 / this.size
    }
    this.progress = 0
  }
}

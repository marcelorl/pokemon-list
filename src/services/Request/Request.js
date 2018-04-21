import axios from 'axios'
import localforage from 'localforage'
import { setupCache } from 'axios-cache-adapter'

const store = localforage.createInstance({
  driver: [
    localforage.INDEXEDDB
  ],
  name: 'pokemon-cache'
})

const cache = setupCache({
  store,
  maxAge: 15 * 60 * 1000
})

const instance = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/pokemon',
  adapter: cache.adapter
})

export default instance

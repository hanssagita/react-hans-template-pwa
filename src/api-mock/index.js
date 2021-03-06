import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

import dummy from './routes/dummy'

const routes = [...dummy]

const methodMap = {
  GET: 'onGet',
  PUT: 'onPut',
  POST: 'onPost',
  DELETE: 'onAny',
  PATCH: 'onAny'
}

const mock = new MockAdapter(axios)

const applyMock = (routes) => {
  routes.forEach(route => {
    mock[methodMap[route.method]](route.url).reply(route.code || 200, route.response)
  })
}

applyMock(routes)

console.log('mock created')

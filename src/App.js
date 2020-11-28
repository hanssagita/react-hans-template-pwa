import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import { getDataViaApi, postDataViaApi, putDataViaApi, deleteDataViaApi } from './utils/httpApi'

class App extends Component {
  componentDidMount () {
    getDataViaApi('/backend/dummy/get', res => console.log(res), res => console.log(res))
    postDataViaApi('/backend/dummy/post', res => console.log(res), res => console.log(res))
    putDataViaApi('/backend/dummy/put', res => console.log(res), res => console.log(res))
    deleteDataViaApi('/backend/dummy/delete', res => console.log(res), res => console.log(res))
  }

  render () {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    )
  }
}

export default App

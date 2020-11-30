import React, { Component } from 'react'
import logo from './logo.svg'
import style from './App.module.css'
import { connect } from 'react-redux'
import { getDummy } from './redux/actions/api'
import PropTypes from 'prop-types'

class App extends Component {
  componentDidMount () {
    this.props.getDummy()
  }

  render () {
    return (
      <div className={style.app}>
        <header className={style.appHeader}>
          <img src={logo} className={style.appLogo} alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <p>text: {this.props.dummy}</p>
          <a
            className={style.appLink}
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

const mapStateToProps = state => {
  return {
    dummy: state.apiReducer.dummy
  }
}
const mapDispatchToProps = dispatch => {
  return {
    getDummy: () => dispatch(getDummy())
  }
}
App.propTypes = {
  getDummy: PropTypes.func,
  dummy: PropTypes.string
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

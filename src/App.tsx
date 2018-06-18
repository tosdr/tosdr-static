import React from 'react'
import { Router, Link } from 'react-static'
import { hot } from 'react-hot-loader'
//
import Routes from 'react-static-routes'

import '../node_modules/bulma/css/bulma.min.css';
import icon from './icon.png'

const App = () => (
  <Router>
    <div>
      <header className="container">
        <nav className="navbar" role="navigation" aria-label="Main navigation">
          <div className="navbar-brand has-text-weight-bold">
            <Link exact to="/" className="navbar-item">
              <span className="icon is-medium"><img src={icon} alt="" /></span>
              Terms of Service; Didn't Read
            </Link>
          </div>
          <div className="navbar-menu">
            <div className="navbar-start">
              <Link to="/about" className="navbar-item">About</Link>
            </div>
          </div>
        </nav>
      </header>
      <div className="content">
        <Routes />
      </div>
    </div>
  </Router>
)

export default hot(module)(App)

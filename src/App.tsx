import React from 'react'
import { Router, Link } from 'react-static'
import { hot } from 'react-hot-loader'
import Routes from 'react-static-routes'
import { Helmet } from 'react-helmet';

import '../node_modules/bulma/css/bulma.min.css';
import icon from './icon.png'

const App = () => (
  <Router>
    <div>
      <Helmet>
        <link rel="icon" type="image/png" href={icon}/>
      </Helmet>
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
              <a href="https://blog.tosdr.org/" className="navbar-item" title="Terms of Service; Didn't Read blog">Blog</a>
              <Link to="/about" className="navbar-item">About</Link>
            </div>
            <div className="navbar-end">
              <a
                className="navbar-item"
                href="https://twitter.com/ToSDR"
                title="Terms of Service; Didn't Read on Twitter"
              >
                @ToSDR on Twitter
              </a>
              <a
                className="navbar-item"
                href="https://opencollective.com/tosdr"
                title="Terms of Service; Didn't Read on OpenCollective"
              >
              Donate through OpenCollective
              </a>
            </div>
          </div>
        </nav>
      </header>
      <div className="content">
        <Routes />
      </div>
      <footer className="footer">
        <div className="container">
          <div className="columns">
            <div className="column">
              <Link
                to="/"
                className="title is-size-4"
              >
                Home
              </Link>
              <hr/>
              <div>
                <ul>
                  <li><a href="mailto:teSPAMam@tosREMOVEdr.org" title="Send us an email">Email the team</a></li>
                  <li><Link to="/downloads" title="Download our browser extension">Browser extensions</Link></li>
                </ul>
              </div>
            </div>
            <div className="column">
              <h2 className="title is-size-5">Contribute</h2>
              <div>
                <ul>
                  <li>
                    <a
                      href="https://opencollective.com/tosdr"
                      title="Terms of Service; Didn't Read on OpenCollective"
                    >
                      Donate through OpenCollective
                    </a>
                  </li>
                  <li>
                    <Link
                      to="/get-involved"
                    >
                      Get involved
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/api"
                    >
                    Use the API
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="column">
              <h2 className="title is-size-5">Spread the word</h2>
              <div>
                <ul>
                  <li>
                    <a
                      href="https://twitter.com/tosdr"
                      title="Terms of Service; Didn't Read on Twitter"
                    >
                      On Twitter
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://plus.google.com/b/117929815628330307285/117929815628330307285/about"
                      title="Terms of Service; Didn't Read on Google+"
                    >
                      On Google+
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.facebook.com/TermsOfServiceDidntRead"
                      title="Terms of Service; Didn't Read on Facebook"
                    >
                      On Facebook
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/tosdr/"
                      title="Terms of Service; Didn't Read on GitHub"
                    >
                      On GitHub
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr/>
          <p className="content">
            <em>Nothing here should be considered legal advice.</em>&nbsp;
            We express our opinion with no guarantee and we do not endorse any service in any way.
            Please refer to a qualified attorney for legal advice.
            Reading ToS;DR is in no way a replacement for reading the full terms to which you are bound.
          </p>
        </div>
      </footer>
    </div>
  </Router>
)

export default hot(module)(App)

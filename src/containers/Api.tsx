import React from 'react'
import Helmet from 'react-helmet';

export default () => (
  <div>
    <header className="hero is-light">
      <div className="hero-body">
        <div className="container">
          <Helmet>
            <title>
              API · Terms of Service; Didn't Read
            </title>
          </Helmet>
          <h2 className="title">API</h2>
        </div>
      </div>
    </header>
    <section className="section">
      <div className="container">
        <p className="content">Unfortunately we are still in the process of defining our API structure. Follow along <a href="https://github.com/tosdr/phoenix/issues/523" title="GitHub issue on the API specification">on the GitHub issue</a>.</p>
      </div>
    </section>
  </div>
)

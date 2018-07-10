import React from 'react'
import { Helmet } from 'react-helmet';

export default () => (
  <div>
    <header className="hero is-light">
      <div className="hero-body">
        <div className="container">
          <Helmet>
            <title>
              About · Terms of Service; Didn't Read
            </title>
          </Helmet>
          <h2 className="title">About</h2>
        </div>
      </div>
    </header>
    <section className="section">
      <div className="container">
        <p className="content"> “Terms of Service; Didn't Read” (short: ToS;DR) is a project started in June 2012 to help fix the “biggest lie on the web”: almost no one really reads the terms of service we agree to all the time. </p>
      </div>
    </section>
  </div>
)

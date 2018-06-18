import React from 'react'

export default () => (
  <div>
    <section className="section">
      <div className="container">
        <h2 className="title">Browser extensions</h2>
        <div className="media">
          <div className="media-content">
            <h3 className="title">Firefox</h3>
            <p className="field is-grouped">
              <span className="control">
                <a
                  href="https://addons.mozilla.org/en-US/firefox/addon/terms-of-service-didnt-read/"
                  title="Download the Firefox extension from Mozilla Add-Ons"
                  className="button is-link"
                >
                  Download from Mozilla Add-Ons
                </a>
              </span>
              <span className="control">
                <a
                  href="https://github.com/tosdr/tosdr-firefox"
                  title="Check out the Firefox extension's source code"
                  className="button is-text"
                >Source code</a>
              </span>
            </p>
          </div>
        </div>
        <div className="media">
          <div className="media-content">
            <h3 className="title">Chrome</h3>
            <p className="field is-grouped">
              <span className="control">
                <a
                  href="https://chrome.google.com/webstore/detail/hjdoplcnndgiblooccencgcggcoihigg"
                  title="Download the Chrome extension from Chrome Web Store"
                  className="button is-link"
                >
                  Download from the Chrome Web Store
                </a>
              </span>
              <span className="control">
                <a
                  href="https://github.com/tosdr/tosdr-chrome"
                  title="Check out the Chrome extension's source code"
                  className="button is-text"
                >Source code</a>
              </span>
            </p>
          </div>
        </div>
        <div className="media">
          <div className="media-content">
            <h3 className="title">Safari</h3>
            <p className="field is-grouped">
              <span className="control">
                <a
                  href="http://safariextension.tosdr.org/"
                  title="Download the Safari extension from the extension homepage"
                  className="button is-link"
                >
                  Download from extension homepage
                </a>
              </span>
              <span className="control">
                <a
                  href="https://github.com/tosdr/tosdr-safari"
                  title="Check out the Safari extension's source code"
                  className="button is-text"
                >Source code</a>
              </span>
            </p>
          </div>
        </div>
        <div className="media">
          <div className="media-content">
            <h3 className="title">Opera</h3>
            <p className="field is-grouped">
              <span className="control">
                <a
                  href="https://addons.opera.com/extensions/details/terms-of-service-didnt-read/"
                  title="Download the Opera add-on from Opera add-Ons"
                  className="button is-link"
                >
                  Download from Opera add-Ons
                </a>
              </span>
              <span className="control">
                <a
                  href="https://github.com/tosdr/tosdr-opera"
                  title="Check out the Opera add-on's source code"
                  className="button is-text"
                >Source code</a>
              </span>
            </p>
          </div>
        </div>
        <div className="media">
          <div className="media-content">
            <h3 className="title">Internet Explorer, Edge and other browsers</h3>
            <p>
              We do not have extensions for other browsers yet. Please send an email to&nbsp;
              <a href="mailto:team@tosdr.org" title="Email the team">team@tosdr.org</a>&nbsp;
              if you would like to contribute.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
)

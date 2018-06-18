import React from 'react';
import { detect } from 'detect-browser';
import { Link } from 'react-static';

const browserInfo = detect();

interface Props {
  className?: string;
}

export const DownloadButton: React.SFC<Props> = (props) => {
  switch(browserInfo.name) {
    case 'firefox':
      return (
        <p>
          <a
            href="https://addons.mozilla.org/en-US/firefox/addon/terms-of-service-didnt-read/"
            title="Download Firefox extension"
            className={`button ${props.className || ''}`}
          >
            Firefox extension
          </a>
          <br/>
          <Link to="/downloads" className="button is-text" style={ {marginTop: '1rem' }}>Other browsers</Link>.
        </p>
        
      );
    case 'chrome':
      return (
        <p>
          <a
            href="https://chrome.google.com/webstore/detail/hjdoplcnndgiblooccencgcggcoihigg"
            title="Download Chrome extension"
            className={`button ${props.className || ''}`}
          >
            Chrome extension
          </a>
          <br/>
          <Link to="/downloads" className="button is-text" style={ {marginTop: '1rem' }}>Other browsers</Link>.
        </p>
        
      );
    case 'safari':
      return (
        <p>
          <a
            href="http://safariextension.tosdr.org/"
            title="Download Safari extension"
            className={`button ${props.className || ''}`}
          >
            Safari extension
          </a>
          <br/>
          <Link to="/downloads" className="button is-text" style={ {marginTop: '1rem' }}>Other browsers</Link>.
        </p>
        
      );
    case 'opera':
      return (
        <p>
          <a
            href="https://addons.opera.com/extensions/details/terms-of-service-didnt-read/"
            title="Download Opera extension"
            className={`button ${props.className || ''}`}
          >
            Opera extension
          </a>
          <br/>
          <Link to="/downloads" className="button is-text" style={ {marginTop: '1rem' }}>Other browsers</Link>.
        </p>
        
      );
    default:
      return <Link to="/downloads" className={`button ${props.className || ''}`}>Browser add-on</Link>
  }
};

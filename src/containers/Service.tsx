import React from 'react'
import { withRouteData } from 'react-static'
import slug from 'slug';

import { Service, Quote, Documents } from '../types'
import { ServiceSummary } from '../components/ServiceSummary';
import { Classification } from '../components/Classification';

interface Props {
  service: Service
}

export default withRouteData(({ service }: Props) => (
  <div>
    <header className="hero is-light">
      <div className="hero-body">
        <div className="container">
          <ServiceSummary service={service} detailed={true}/>
        </div>
      </div>
    </header>
    {renderDocs(service.docs, service.domains[0])}
  </div>
))

const renderDocs = (docs: Documents, domain: string) => {
  const filenames = Object.keys(docs);

  return filenames.map((filename) => {
    return (
      <section key={slug(filename)} id={slug(filename)} className="section">
        <div className="container">
          <h3 className="title">{filename}</h3>
          <ul className="is-marginless">{docs[filename].points.map(renderQuote)}</ul>
          <hr/>
          <small>
            <a
              href={`https://github.com/tosdr/tosback2/blob/${docs[filename].topRev}/crawl_reviewed/${domain}/${encodeURIComponent(filename)}`}
              title="View these quotes in their full context on ToSback"
            >
              View the complete {filename} as crawled by ToSback
            </a>&nbsp;
            (<a href={docs[filename].url} title={`View current version of ${filename}`} target="_blank">source</a>)
          </small>
        </div>
      </section>
    );
  });
};

const renderQuote = (quote: Quote, index: number) => {
  return (
    <li key={`quote${index}`} className="media">
      <div className="media-content">
        <div className="level">
          <div className="level-left">
            <div className="level-item">
              <h4 className="title is-size-6">
                {/* TODO: Refer to the point instead of the case */}
                <a
                  href={`https://edit.tosdr.org/cases/${quote.caseId}`}
                  title="View this point's discussion and history in our rating tool"
                  target="_blank"
                >
                  {quote.caseTitle}
                </a>
              </h4>
            </div>
            <div className="level-item">
              <Classification classification={quote.caseClassification}/>
            </div>
          </div>
        </div>
        <blockquote>{quote.quoteText}</blockquote>
      </div>
    </li>
  );
}

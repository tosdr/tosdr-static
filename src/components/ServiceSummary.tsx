import React from 'react';
import { Link } from 'react-static';
import slug from 'slug';

import { Service } from '../types';
import { Rating } from './Rating';

interface Props {
  service: Service;
  detailed?: boolean;
}

export const ServiceSummary: React.SFC<Props> = (props) => {
  return (
    <div>
      <div className="level">
        <div className="level-left">
          <div className="level-item">
            {renderTitle(props.service, props.detailed)}
          </div>
          <div className="level-item">
            <Rating rating={props.service.class}/>
          </div>
        </div>
        <div className="level-right">{renderMetadata(props.service)}</div>
      </div>
      {renderDocs(props.service)}
    </div>
  );
}

function renderTitle(service: Service, detailed?: boolean) {
  if (detailed) {
    return (
      <h2 className="title is-size-2">{service.name}</h2>
    );
  }

  return (
    <h3 className="title is-size-5"><Link to={`/service/${service.id}/`}>{service.name}</Link></h3>
  );
}

function renderMetadata(service: Service): React.ReactNodeArray {
  const metadata: React.ReactNodeArray = [];

  if (service.domains) {
    service.domains.forEach((domain) => {
      const url = new URL(`http://${domain}`);

      metadata.push((
        <div className="level-item">
          <a 
            href={`http://${domain}`}
            title={`Visit ${url.hostname}`}
            target="_blank"
            className="button is-text"
          >
            {url.hostname}
          </a>
        </div>
      ));
    });
  }

  return metadata;
}

function renderDocs(service: Service): React.ReactNode {
  const linksToDocs = Object.keys(service.docs).map((filename) => {
    return (
      <Link
        to={`/service/${service.id}/#${slug(filename)}`}
        title={`View ${filename} for ${service.name}`}
        className="level-item button is-text"
      >
        {filename}
      </Link>
    );
  });

  return (
    <div className="level">
      <div className="level-left">
        {linksToDocs}
      </div>
    </div>
  );
}

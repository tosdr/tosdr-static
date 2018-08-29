import React from 'react';
import { Link } from 'react-static';

import { ValidReviewV1 } from '../types';
import { Rating } from './Rating';

interface Props {
  domain: string;
  service: ValidReviewV1;
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
            <Rating rating={props.service.rated}/>
          </div>
        </div>
        <div className="level-right">
          <div className="level-item">
            <a 
              href={`http://${props.domain}`}
              title={`Visit ${props.domain}`}
              target="_blank"
              className="button is-text"
            >
              {props.domain}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function renderTitle(service: ValidReviewV1, detailed?: boolean) {
  if (detailed) {
    return (
      <h2 className="title is-size-2">{service.name}</h2>
    );
  }

  return (
    <h3 className="title is-size-5"><Link to={`/service/${service.slug}/`}>{service.name}</Link></h3>
  );
}

function renderPoints(service: ValidReviewV1): React.ReactNode {
  const linksToPoints = (service.points || []).map((point) => {
    return (
      <Link
        key={point.id}
        to={`/service/${service.slug}/#${point.id}`}
        title={`View ${point.title} about ${service.name}`}
        className="level-item button is-text"
      >
        {point.title}
      </Link>
    );
  });

  return (
    <div className="level">
      <div className="level-left">
        {linksToPoints}
      </div>
    </div>
  );
}

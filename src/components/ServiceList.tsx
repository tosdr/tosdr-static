import React from 'react';

import { Reviews, isRedirectReview, ValidReviewV1, ReviewV1 } from '../types';
import { ServiceSummary } from './ServiceSummary';

interface Props {
  services: Reviews;
}

export class ServiceList extends React.Component<Props> {
  public render() {
    return (
      <ul className="is-marginless">
        {Object.entries(this.props.services)
          .filter(isCanonicalReview)
          .map(([key, service]: [string, ValidReviewV1]) => (
            <li key={service.slug} className="media">
              <div className="media-content">
                <ServiceSummary domain={key.replace('tosdr/review/', '').trim()} service={service}/>
              </div>
            </li>
          )
        )}
      </ul>
    );
  }
}

function isCanonicalReview(entry: [string, ReviewV1]): entry is [string, ValidReviewV1] {
  return !isRedirectReview(entry[1]);
}

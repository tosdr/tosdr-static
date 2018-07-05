import React from 'react';

import { Service } from '../types';
import { ServiceSummary } from './ServiceSummary';

interface Props {
  services: Service[];
}

export class ServiceList extends React.Component<Props> {
  public render() {
    return (
      <ul className="is-marginless">
        {this.props.services.map(service => (
          <li key={service.id} className="media">
            <div className="media-content">
              <ServiceSummary service={service}/>
            </div>
          </li>
        ))}
      </ul>
    );
  }
}

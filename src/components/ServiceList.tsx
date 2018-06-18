import React from 'react';
import { Link } from 'react-static';

import { Service } from '../types';
import { Rating } from './Rating';

interface Props {
  services: Service[];
}

export class ServiceList extends React.Component<Props> {
  public render() {
    return (
      <ul>
        {this.props.services.map(service => (
          <li key={service.id} className="media">
            <div className="media-content">
              <h3 className="title">
                <Link to={`/service/${service.id}/`}>{service.name}</Link>
              </h3>
              <p className="subtitle">
                <Rating rating={service.tosdr.rated}/>
              </p>
            </div>
          </li>
        ))}
      </ul>
    );
  }
}

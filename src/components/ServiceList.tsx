import React from 'react';
import { Link } from 'react-static';

import { Service } from '../types';

interface Props {
  services: Service[];
}

export class ServiceList extends React.Component<Props> {
  public render() {
    return (
      <ul>
        {this.props.services.map(service => (
          <li key={service.id}>
            <Link to={`/service/${service.id}/`}>{service.name}</Link>
          </li>
        ))}
      </ul>
    );
  }
}

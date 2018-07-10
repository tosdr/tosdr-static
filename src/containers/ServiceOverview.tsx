import React from 'react'
import { withRouteData } from 'react-static'

import { Service } from '../types'
import { ServiceList } from '../components/ServiceList';
import Helmet from 'react-helmet';

interface Props {
  services: Service[]
}

export default withRouteData(({ services }: Props) => (
  <div>
    <Helmet>
      <title>
        Services · Terms of Service; Didn't Read
      </title>
    </Helmet>
    <ServiceList services={services}/>
  </div>
))

import React from 'react'
import { withRouteData } from 'react-static'

import { Service } from '../types'
import { ServiceList } from '../components/ServiceList';

interface Props {
  services: Service[]
}

export default withRouteData(({ services }: Props) => (
  <div>
    <ServiceList services={services}/>
  </div>
))

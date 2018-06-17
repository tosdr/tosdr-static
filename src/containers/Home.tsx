import React from 'react'
import { withSiteData, withRouteData } from 'react-static'

import logoImg from '../logo.png'
import { Service } from '../types';
import { ServiceList } from '../components/ServiceList';

interface Props {
  services: Service[]
}

export default withSiteData(withRouteData(({ services }: Props) => (
  <div>
    <h1 style={{ textAlign: 'center' }}>Welcome to</h1>
    <img src={logoImg} alt="" />
    <ServiceList services={services}/>
  </div>
)))

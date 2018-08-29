import React from 'react'
import { withRouteData } from 'react-static'

import { Reviews } from '../types'
import { ServiceList } from '../components/ServiceList';
import Helmet from 'react-helmet';

interface Props {
  reviews: Reviews;
}

export default withRouteData(({ reviews }: Props) => (
  <div>
    <Helmet>
      <title>
        Services · Terms of Service; Didn't Read
      </title>
    </Helmet>
    <ServiceList services={reviews}/>
  </div>
))

import React from 'react'
import { withRouteData, Link } from 'react-static'
import { Service } from '../types'

interface Props {
  service: Service
}

export default withRouteData(({ service }: Props) => (
  <div>
    <Link to="/service/">{'<'} Back</Link>
    <br />
    <h3>{service.name}</h3>
    <p>{service.tosdr.rated ? service.tosdr.rated : null}</p>
  </div>
))

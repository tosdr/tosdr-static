import React from 'react'
import { withRouteData } from 'react-static'

import { Service } from '../types'
import { Rating } from '../components/Rating';

interface Props {
  service: Service
}

export default withRouteData(({ service }: Props) => (
  <section className="section">
    <div className="container">
      <h3 className="title">{service.name}</h3>
      <aside className="card">
        <header className="card-header">
          <h4 className="card-header-title">At a glance</h4>
        </header>
        <div className="card-content">
          <p><Rating rating={service.tosdr.rated}/></p>
        </div>
      </aside>
    </div>
  </section>
))

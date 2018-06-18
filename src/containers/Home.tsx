import React from 'react'
import { withSiteData, withRouteData } from 'react-static'

import logoImg from '../logo.png'
import { Service } from '../types';
import { ServiceList } from '../components/ServiceList';
import { DownloadButton } from '../components/DownloadButton';

interface Props {
  services: Service[]
}

export default withSiteData(withRouteData(({ services }: Props) => (
  <div>
    <section className="hero is-light">
      <div className="hero-body">
        <div className="container">
          <div className="level">
            <div className="level-item has-text-centered">
              <img src={logoImg} alt="" style={{ maxWidth: '500px' }} />
            </div>
            <div className="level-item has-text-centered">
              <DownloadButton className="is-primary is-large"/>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="section">
      <div className="container">
        <p className="is-size-2 has-text-centered">
          <q className="has-text-weight-bold">I have read and agree to the Terms</q> is the biggest lie on the web. We aim to fix that.
        </p>
      </div>
    </section>
    <section className="section">
      <div className="container">
        <ServiceList services={services}/>
      </div>
    </section>
  </div>
)))

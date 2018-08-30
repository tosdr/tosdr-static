import React from 'react'
import { withRouteData } from 'react-static'
import Helmet from 'react-helmet';

import { Review, isRedirectReview, PointV1 } from '../types'
import { ServiceSummary } from '../components/ServiceSummary';

interface Props {
  domain: string;
  review: Review
}

export default withRouteData(({ domain, review }: Props) => {
  if (isRedirectReview(review)) {
    return <span>This service is already reviewed elsewhere.</span>;
  }

  const points = review.points
    // List points with the highest weight ("score") first
    ? review.points.sort((point1, point2) => point2.score - point1.score)
    : [];

  return (
    <div>
      <header className="hero is-light">
        <div className="hero-body">
          <div className="container">
            <Helmet>
              <title>
                {review.name} · Terms of Service; Didn't Read
              </title>
            </Helmet>
            <ServiceSummary service={review} domain={domain} detailed={true}/>
          </div>
        </div>
      </header>
      {renderPoints(points)}
    </div>
  )
})

const renderPoints = (points: PointV1[]) => {
  return points.map((point) => {
    return (
      <section key={point.id} id={point.id} className="section">
        <div className="container">
          <h3 className="title">{point.title}</h3>
          <p>{point.description}</p>
        </div>
      </section>
    );
  });
};

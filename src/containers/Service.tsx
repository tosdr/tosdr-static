import React from 'react'
import { withRouteData } from 'react-static'
import Helmet from 'react-helmet';

import { Review, isRedirectReview, PointV1 } from '../types'
import { ServiceSummary } from '../components/ServiceSummary';
import { Classification } from '../components/Classification';

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
          <div className="level">
            <div className="level-left">
              <div className="level-item">
                <Classification classification={point.point}/>
              </div>
              <div className="level-item">
                <h3 className="title">{point.title}</h3>
              </div>
            </div>
            <div className="level-right">
              <a
                href={point.discussion}
                title="Do you agree with this analysis? Discuss it on our edit tool."
                className="button is-text is-small"
              >Discuss</a>
            </div>
          </div>
          <p>{point.description}</p>
        </div>
      </section>
    );
  });
};

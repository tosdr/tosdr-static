import React from 'react';

import './ratings.css';

interface Props {
  rating: false | 'A' | 'B' | 'C' | 'D' | 'E';
}

export const Rating: React.SFC<Props> = (props) => {
  if (!props.rating) {
    return (
      <p className="subtitle"><span className="tag is-light">No class yet</span></p>
    );
  }

  return (
    <p className="subtitle"><span className={`tag is-${props.rating}`}>Grade {props.rating}</span></p>
  );
}

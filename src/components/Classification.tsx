import React from 'react';

import './classifications.css';

interface Props {
  classification: 'blocker' | 'bad' | 'neutral' | 'good';
}

export const Classification: React.SFC<Props> = (props) => {
  return (
    <span className={`tag is-${props.classification}`}>
      {props.classification.substr(0, 1).toLocaleUpperCase()}
      {props.classification.substr(1)}
    </span>
  );
}

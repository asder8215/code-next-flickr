import React from 'react';

export const SubTitle = (props) => {
  const hasText = props.value.length > 0;
  return <h2>{hasText ? props.value : 'No'} Images</h2>;
};
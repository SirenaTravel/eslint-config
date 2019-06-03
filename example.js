import React from 'react';
import { node, func } from 'prop-types';

export const a = (b) => b;

export const b = (c) => {
  const e = 'string';

  return c + e;
};

const Test = ({ children, onClick }) => (
  <button type="button" onClick={() => onClick}>
    {children}
  </button>
);

Test.propTypes = {
  children: node.isRequired,
  onClick: func.isRequired,
};

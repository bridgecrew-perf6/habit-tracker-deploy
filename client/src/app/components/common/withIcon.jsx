import React from 'react';

const withIcon = (Component) => (props) => {
  return <Component {...props} />;
};

export default withIcon;

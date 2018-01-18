import React from 'react';

const Button = ({ type, buttonStyleOptions, onButtonPressed, icon, iconStyleOptions, children }) => (
  <button
    className={`${type ? type : 'default'}-button ${buttonStyleOptions}`}
    onClick={() => onButtonPressed()}
  >
    {icon &&
      <i className={`fa fa-${icon} ${iconStyleOptions}`} aria-hidden="true" style={{ paddingRight: children ? '3px' : null }}></i>
    }
    {children}
  </button>
);

export { Button };

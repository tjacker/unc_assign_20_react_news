import React from 'react';

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
export const Input = props => (
  <div className={`input-field col ${props.colWidth}`}>
    <input id={props.id} type={props.type} className={props.className} name={props.id} pattern={props.pattern} required />
    <label htmlFor={props.id}>{props.children}</label>
  </div>
);

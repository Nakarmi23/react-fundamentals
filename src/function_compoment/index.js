import React from 'react';

export default function FunctionComponentI(props) {
  return <div>function 1 {props.name}</div>;
}

export const FunctionComponentII = (props) => {
  return <div>function 2 {props.name}</div>;
};

import React from 'react';
import './style.scss';

function SimpleButtonComponent(props) {
  return (
    <button className={'valorant-simp-btn'}>
      <div className={'hover-effect'}></div>
      <span className={'valorant-simp-btn-content'}>{props.children}</span>
    </button>
  );
}

export default SimpleButtonComponent;

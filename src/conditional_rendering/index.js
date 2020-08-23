import React, { useState } from 'react';
import SimpleButtonComponent from '../SimpleButtonComponent';
import StateComponent from '../class_component/state_component';

function ConditionalRendering(props) {
  const [shouldDisplay, setDisplay] = useState(true);

  function handleStateToggleClick() {
    setDisplay(!shouldDisplay);
    // if (shouldDisplay == true) {
    //   setDisplay(false);
    // } else {
    //   setDisplay(true);
    // }
  }

  return (
    <div>
      // expression ? if true : if false
      <p>{shouldDisplay ? <StateComponent /> : null}</p>
      <SimpleButtonComponent onClick={handleStateToggleClick}>
        Toggle State
      </SimpleButtonComponent>
    </div>
  );
}

export default ConditionalRendering;

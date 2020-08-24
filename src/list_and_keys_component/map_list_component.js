import React, { useState } from 'react';

function MapListComponent() {
  const [names, setNames] = useState([
    'Melvin',
    'Ujan',
    'Anish',
    'Sushant',
    'Ankit',
    'Coco',
  ]);

  function handlePOnClick(index) {
    let newNames = [...names];
    newNames.splice(index, 1);
    setNames(newNames);
  }

  return (
    <div>
      <h1>Map List</h1>
      {names.map((item, index) => (
        <p key={index} onClick={() => handlePOnClick(index)}>
          {item}
        </p>
      ))}
    </div>
  );
}

export default MapListComponent;

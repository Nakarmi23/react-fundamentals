import React from 'react';

function ForListComponent() {
  const names = ['Melvin', 'Ujan', 'Anish', 'Sushant', 'Ankit', 'Coco'];

  function getNames() {
    let pNames = [];
    for (let index = 0; index < names.length; index++) {
      pNames.push(<p>{names[index]}</p>);
    }
    return pNames;
  }

  return (
    <div>
      <h1>For List</h1>
      {getNames()}
    </div>
  );
}

export default ForListComponent;

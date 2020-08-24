import React from 'react';

function ForEachListComponent() {
  const names = ['Melvin', 'Ujan', 'Anish', 'Sushant', 'Ankit', 'Coco'];

  function getNames() {
    let pName = [];
    names.forEach((item) => {
      pName.push(<p>{item}</p>);
    });
    return pName;
  }

  return (
    <div>
      <h1>For Each List</h1>
      {getNames()}
    </div>
  );
}

export default ForEachListComponent;

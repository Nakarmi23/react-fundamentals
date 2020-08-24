import React from 'react';

function MapListComponent() {
  const names = ['Melvin', 'Ujan', 'Anish', 'Sushant', 'Ankit', 'Coco'];
  return (
    <div>
      <h1>Map List</h1>
      {names.map((item) => {
        console.log(item);
        return <p>{item}</p>;
      })}
    </div>
  );
}

export default MapListComponent;

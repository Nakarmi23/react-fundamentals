import React, { useState } from 'react';

function FormComponent() {
  let [name, setName] = useState('Ujan');

  function handleNameChange(event) {
    setName(event.target.value);
  }

  return (
    <form>
      <h1>Form Component</h1>
      <input
        value={name}
        onChange={handleNameChange}
        type='text'
        name='name'
        placeholder='Enter Name'
      />
    </form>
  );
}

export default FormComponent;

// camelCase
// PascalCase

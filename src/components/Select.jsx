import React from 'react';

function Select(props) {
  const { id, label, value, options } = props;
  return (
    <label htmlFor={ id }>
      { label }
      <select
        id={ id }
        value={ value }
      />
    </label>
  );
}

export default Select;

import React from 'react';

export default function generateSelectOptionsFromArray(array) {
  return array.map(
    (element, index) => <option key={ index }>{element}</option>,
  );
}

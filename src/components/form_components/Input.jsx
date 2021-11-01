import React, { Component } from 'react';

export default class Input extends Component {
  render() {
    const { value, idAndFor, title, onChange } = this.props;
    return (
      <label htmlFor={ idAndFor }>
        { title }
        <input
          type="text"
          name={ idAndFor }
          id={ idAndFor }
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

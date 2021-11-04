import React, { Component } from 'react';

class InputPass extends Component {
  render() {
    const { onChange } = this.props;
    return (
      <div>
        <input
          name="senha"
          type="text"
          data-testid="password-input"
          placeholder="password"
          onChange={ onChange }
        />
      </div>
    );
  }
}

export default InputPass;
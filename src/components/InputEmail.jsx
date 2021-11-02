import React, { Component } from 'react';

class InputEmail extends Component {
 
  render() {
    const { onChange } = this.props;
    return (
      <div>
        <input
        name="email" 
        type="text"
        data-testid="email-input" 
        placeholder="email"
        onChange={ onChange }
         />
      </div>
    );
  }
}

export default InputEmail;
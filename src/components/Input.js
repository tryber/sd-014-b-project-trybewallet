// import React, { Components } from 'react';

// class Input extends Components {
//   render() {
//     const { title, id, valor, onChange } = this.props;
//     return (
//       <label htmlFor={ id }>
//         { title }
//         <input
//           type="text"
//           id={ id }
//           value={ valor }
//           onChange={ onChange }
//         />
//       </label>
//     );
//   }
// }

// export default Input;
import PropTypes from "prop-types"
import React, { Component } from 'react';

export default class Input extends Component {
  render() {
    const { title, id, valor, onChange } = this.props;
    return (
      <label htmlFor={ id }>
        { title }
        <input
          type="text"
          id={ id }
          value={ valor }
          onChange={ onChange }
        />
      </label>
    );
  }
}

Input.propTypes = {
  id: PropTypes.any,
  onChange: PropTypes.any,
  title: PropTypes.any,
  valor: PropTypes.any,
}.isRequired;

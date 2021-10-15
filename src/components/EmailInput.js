import React from 'react';
import { connect } from 'react-redux';

class EmailInput extends React.Component {
  render() {
    return (
      <label htmlFor="email">
        <input
          placeholder="Digite seu e-mail"
          type="email"
          id="email"
          data-testid="email-input"
          required
        />
      </label>
    );
  }
}

/*const mapStateToProps = (state) => {
  return {
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
  };
};*/

export default connect()(EmailInput);

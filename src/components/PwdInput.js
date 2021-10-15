import React from 'react';
import { connect } from 'react-redux';

class PwdInput extends React.Component {
  render() {
    return (
      <label htmlFor="password">
        <input
          placeholder="Senha"
          type="password"
          id="password"
          data-testid="password-input"
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

export default connect()(PwdInput);

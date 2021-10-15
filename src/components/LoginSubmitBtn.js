import React from 'react';
import { connect } from 'react-redux';

class LoginSubmitBtn extends React.Component {
  render() {
    return (
      <button
        type="submit"
        id="submitbutton"
        disabled
      >
        Enviar
      </button>
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

export default connect()(LoginSubmitBtn);

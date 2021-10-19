import React from 'react';
import PropTypes from 'prop-types';

class Login extends React.Component {
  render() {
    const { history } = this.props;
    return (
      <form>
        <label htmlFor="email">
          E-Mail:
          <input
            type="text"
            data-testid="email-input"
            id="email"
            /* onChange={  } */
          />
        </label>
        <label htmlFor="password">
          E-Mail:
          <input
            type="text"
            data-testid="password-input"
            id="password"
            /* onChange={  } */
          />
        </label>
        <button
          type="button"
          onClick={ () => (history.push('/carteira')) } // fazer handleSubmit
        >
          Entrar
        </button>
      </form>
    );
  }
}

Login.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};

/* mapDispatchToProps () */

export default Login;

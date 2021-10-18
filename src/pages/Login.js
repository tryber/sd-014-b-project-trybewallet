import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Label from '../helpers/Label';
import loginAction from '../actions';

export class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      disabled: true,
      login: '',
      Password: '',
      update: false,
    };
  }

  passwordIsvalid = (password, minLength) => (password.length >= minLength);

  loginIsvalid = (email) => {
    const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return emailRegex.test(email);
  }

  handleButton = () => {
    this.setState((state) => {
      const { login, Password } = state;
      const minLength = 6;
      if (login && Password) {
        if (this.loginIsvalid(login) && this.passwordIsvalid(Password, minLength)) {
          return ({ ...state, disabled: false });
        } return ({ ...state, disabled: true });
      }
    });
  };

handleChange = ({ target: { name, value } }) => {
  this.setState({ [name]: value }, this.handleButton);
}

render() {
  const { handleChange } = this;
  const { dispatchLogin } = this.props;
  const { disabled, login } = this.state;
  return (
    <form>
      <Label
        name="login"
        type="email"
        dataTestid="email-input"
        required
        handleChange={ handleChange }
      />
      <br />
      <Label
        name="Password"
        type="password"
        dataTestid="password-input"
        minlength="6"
        required
        handleChange={ handleChange }
      />
      <br />
      <Link to="/carteira">
        <button
          type="button"
          onClick={ () => dispatchLogin(login) }
          disabled={ disabled }
        >
          Entrar
        </button>
      </Link>
    </form>
  );
}
}

Login.propTypes = {
  dispatchLogin: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  dispatchLogin: (email) => dispatch(loginAction(email)),
});

export default connect(null, mapDispatchToProps)(Login);

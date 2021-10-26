import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateUserInfo } from '../actions';
import { isValidEmail, isValidPassword } from '../utils/forms/validation';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    const { dispatchUpdateUserInfo, history } = this.props;
    const { email } = this.state;

    event.preventDefault();
    dispatchUpdateUserInfo({ email });
    history.push('/carteira');
  }

  render() {
    const { email, password } = this.state;
    const allFormInputsAreValid = isValidEmail(email) && isValidPassword(password);

    return (
      <main>
        <h1>TrybeWallet</h1>
        <div>
          <h2>Login</h2>
          <form onSubmit={ this.handleSubmit }>
            <input
              type="email"
              name="email"
              value={ email }
              onChange={ this.handleChange }
              data-testid="email-input"
            />
            <input
              type="password"
              name="password"
              value={ password }
              onChange={ this.handleChange }
              data-testid="password-input"
            />
            <button type="submit" disabled={ !allFormInputsAreValid }>Entrar</button>
          </form>
        </div>
      </main>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    dispatchUpdateUserInfo: (userInfo) => dispatch(updateUserInfo(userInfo)),
  };
}

export default connect(null, mapDispatchToProps)(Login);

Login.propTypes = {
  dispatchUpdateUserInfo: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

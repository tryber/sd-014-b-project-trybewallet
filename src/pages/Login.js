import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router';
import { saveEmailAction } from '../actions';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      loggedIn: false,
    };

    this.handleInputs = this.handleInputs.bind(this);
    this.loginButtonClick = this.loginButtonClick.bind(this);
  }

  handleInputs({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  loginButtonClick() {
    const { email } = this.state;
    const { saveEmail } = this.props;
    saveEmail(email);
    this.setState({ loggedIn: true });
  }

  render() {
    const { email, password, loggedIn } = this.state;
    // const { saveEmail } = this.props;
    // Link de onde encontrei o Regex para a validação do email:
    // https://www.simplilearn.com/tutorials/javascript-tutorial/email-validation-in-javascript
    const valid = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const passMinLength = 6;
    if (loggedIn) return <Redirect to="/carteira" />;
    return (
      <div>
        <h2>Login</h2>
        <form>
          <input
            data-testid="email-input"
            type="email"
            name="email"
            placeholder="Email"
            value={ email }
            onChange={ this.handleInputs }
          />
          <input
            data-testid="password-input"
            type="password"
            name="password"
            placeholder="Senha"
            value={ password }
            onChange={ this.handleInputs }
          />
          <input
            type="button"
            value="Entrar"
            disabled={
              !email.match(valid) || password.length < passMinLength
            }
            onClick={
              // () => saveEmail(email) && this.setState({ loggedIn: true })
              this.loginButtonClick
            }
          />
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  saveEmail: (payload) => dispatch(saveEmailAction(payload)),
});

Login.propTypes = {
  saveEmail: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);

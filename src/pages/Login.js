import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { actionLogin } from '../actions/index';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      disabled: true,
    };
    this.handleChange = this.handleChange.bind(this);
    this.validation = this.validation.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    }, () => this.validation());
  }

  validation() {
    // https://pt.stackoverflow.com/questions/1386/express%C3%A3o-regular-para-valida%C3%A7%C3%A3o-de-e-mail
    const { email, password } = this.state;
    const nb = 6;
    const emailValid = (/[\w]+@[\w]+.com/.test(email));
    if (emailValid && password.length >= nb) {
      this.setState({ disabled: false });
    } else {
      this.setState({ disabled: true });
    }
  }

  handleClick(event) {
    event.preventDefault();
    const { email, password } = this.state;
    const { login, history } = this.props;
    login({ email, password });
    this.setState({
      disabled: true,
    });
    history.push('/carteira');
  }

  render() {
    const { disabled, email, password } = this.state;
    return (
      <div className="container">
        <form>
          <label htmlFor="login-email">
            Email:
            <input
              id="login-email"
              name="email"
              type="email"
              value={ email }
              onChange={ this.handleChange }
              data-testid="email-input"
            />
          </label>
          <label htmlFor="login-password">
            Senha:
            <input
              data-testid="password-input"
              id="login-password"
              type="password"
              name="password"
              value={ password }
              onChange={ this.handleChange }
            />
          </label>
          <button
            className="btn btn-primary"
            type="submit"
            value="Entrar"
            onClick={ this.handleClick }
            disabled={ disabled }
          >
            Entrar
          </button>
        </form>
      </div>);
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  login: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  login: (payload) => dispatch(actionLogin(payload)),
});

export default connect(null, mapDispatchToProps)(Login);

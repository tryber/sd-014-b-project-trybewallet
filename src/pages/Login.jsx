import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { submitForm } from '../actions';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      emailValidate: false,
      passwordValidate: false,
    };
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    }, () => {
      if (this.validateEmail(value)) {
        this.setState({
          emailValidate: true,
        });
      } else {
        this.setState({
          emailValidate: false,
        });
      }
    });
  }

  handlePassword = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    }, () => {
      const caracters = 6;
      if (value.length >= caracters) {
        this.setState({
          passwordValidate: true,
        });
      } else {
        this.setState({
          passwordValidate: false,
        });
      }
    });
  }

  handleClick = (callback, email) => {
    const { history } = this.props;
    callback({ email });
    history.push('/carteira');
  }

  /*
   * Link: https://www.horadecodar.com.br/2020/09/13/como-validar-email-com-javascript/
   * thread: https://trybecourse.slack.com/archives/C023YHXAEGM/p1634586091402700
   */

  validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  render() {
    const { email, password, emailValidate, passwordValidate } = this.state;
    const { submit } = this.props;
    let disabled = false;
    if (!emailValidate || !passwordValidate) {
      disabled = true;
    }
    return (
      <div>
        Login
        <form>
          <input
            name="email"
            type="text"
            value={ email }
            onChange={ this.handleChange }
            data-testid="email-input"
          />
          <input
            name="password"
            type="password"
            value={ password }
            onChange={ this.handlePassword }
            data-testid="password-input"
          />
          <button
            type="button"
            disabled={ disabled }
            onClick={ () => this.handleClick(submit, email) }
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  submit: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  submit: (state) => dispatch(submitForm(state)),
});

export default connect(null, mapDispatchToProps)(Login);

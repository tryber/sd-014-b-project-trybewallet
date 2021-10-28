import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { saveUser } from '../actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      pass: '',
      btnEmail: false,
      btnPass: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.emailValidation = this.emailValidation.bind(this);
    this.passVerify = this.passVerify.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    if (name === 'pass') {
      this.passVerify(value);
    }
    if (name === 'email') {
      this.emailValidation(value);
    }
    this.setState({
      [name]: value,
    });
  }

  emailValidation(email) {
    // Com apoio do artigo abaixo, olha que Regex bunito!
    // https://www.horadecodar.com.br/2020/09/13/como-validar-email-com-javascript/
    const re = /\S+@\S+\.\S+/;
    this.setState({
      btnEmail: re.test(email),
    });
  }

  passVerify(pass) {
    const minLength = 6;
    this.setState({
      btnPass: pass.length >= minLength,
    });
  }

  handleSubmit() {
    const { email, pass } = this.state;
    const { history, sendData } = this.props;
    sendData({ email, pass });
    history.push('./carteira');
  }

  render() {
    const { pass, email, btnPass, btnEmail } = this.state;
    return (
      <div>
        <input
          data-testid="email-input"
          name="email"
          type="email"
          value={ email }
          id="email"
          onChange={ this.handleChange }
        />
        <input
          data-testid="password-input"
          name="pass"
          type="password"
          value={ pass }
          id="pass"
          onChange={ this.handleChange }
        />
        <button
          type="button"
          id="submit"
          onClick={ this.handleSubmit }
          disabled={ !(btnPass === true && btnEmail === true) }
        >
          Entrar
        </button>
      </div>
    );
  }
}

Login.propTypes = {
  history: PropTypes.func.isRequired,
  sendData: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  sendData: (values) => dispatch(saveUser(values)),
});

export default connect(null, mapDispatchToProps)(Login);

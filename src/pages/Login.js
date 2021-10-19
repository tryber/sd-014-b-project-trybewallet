import React from 'react';
import '../style/Login.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { emailSubmit } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputEmail: '',
      inputPassword: '',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.validateForms = this.validateForms.bind(this);
  }

  handleInputChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  validateForms() {
    const { inputEmail, inputPassword } = this.state;
    const minLength = 6;
    const emailValidate = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailValidate.test(inputEmail) && inputPassword.length >= minLength;
  }

  render() {
    const { inputEmail, inputPassword } = this.state;
    const { validateForms } = this;
    const { submitInputEmail } = this.props;

    return (
      <main id="container">
        <form>
          <h2>
            Trybe
            <p>Wallet</p>
          </h2>
          <div>
            <input
              data-testid="email-input"
              type="text"
              name="inputEmail"
              placeholder="Enter your email"
              value={ inputEmail }
              onChange={ this.handleInputChange }
            />
            <div className="underline" />
          </div>
          <div>
            <input
              data-testid="password-input"
              type="password"
              name="inputPassword"
              placeholder="Enter your password"
              value={ inputPassword }
              onChange={ this.handleInputChange }
            />
            <div className="underline" />
          </div>
          <Link to="/carteira">
            <button
              type="button"
              value="Entrar"
              className="buttonLogin"
              disabled={ !validateForms() }
              onClick={ () => submitInputEmail(inputEmail) }
            >
              Entrar
            </button>
          </Link>
        </form>
      </main>
    );
  }
}

Login.propTypes = {
  submitInputEmail: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  submitInputEmail: (emailInfo) => dispatch(emailSubmit(emailInfo)),
});

export default connect(null, mapDispatchToProps)(Login);

/* links que peguei de referencia para validação do email */
/* https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions */

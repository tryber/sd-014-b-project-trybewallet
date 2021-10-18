import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { loggedEmail } from '../actions';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      emailValue: '',
      passwordValue: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.saveEmailOnClick = this.saveEmailOnClick.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  disabledBtn() {
    const { emailValue, passwordValue } = this.state;
    const MIN_LENGTH = 6;
    const regex = /\S+@\S+\.\S+/;

    if (regex.test(emailValue) && passwordValue.length >= MIN_LENGTH) {
      return false;
    }
    return true;
  }

  saveEmailOnClick() {
    const { saveEmail } = this.props;
    const { emailValue } = this.state;
    saveEmail(emailValue);
  }

  render() {
    const { emailValue, passwordValue } = this.state;
    return (
      <div>
        <fieldset>
          <legend>TrybeWallet</legend>
          <input
            type="email"
            placeholder="E-mail"
            data-testid="email-input"
            onChange={ this.handleChange }
            name="emailValue"
            value={ emailValue }
          />
          <input
            type="password"
            placeholder="Senha"
            data-testid="password-input"
            onChange={ this.handleChange }
            name="passwordValue"
            value={ passwordValue }
          />
          <Link to="/carteira">
            <button
              onClick={ this.saveEmailOnClick }
              disabled={ this.disabledBtn() }
              type="submit"
            >
              Entrar
            </button>
          </Link>
        </fieldset>
      </div>
    );
  }
}

/* const mapStateToProps = (state) => ({
  email: state.user.email,
}); */
const mapDispatchToProps = (dispatch) => ({
  saveEmail: (email) => dispatch(loggedEmail(email)),
});

Login.propTypes = {
  saveEmail: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);

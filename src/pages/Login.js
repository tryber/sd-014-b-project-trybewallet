import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { saveEmail } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      senha: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.validadeEmail = this.validadeEmail.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  validadeEmail() {
    const { email, senha } = this.state;
    const lengthEmail = 6;
    const passwordFormat = senha.length >= lengthEmail;
    const emailFormat = email.includes('@') && email.includes('.com');

    if (emailFormat && passwordFormat) {
      return true;
    }
    return false;
  }

  render() {
    const { email, senha } = this.state;
    const { validadeEmail, handleChange } = this;
    const { userEmail } = this.props;
    return (
      <form>
        <label htmlFor="email">
          Login:
          <input
            onChange={ handleChange }
            name="email"
            value={ email }
            data-testid="email-input"
            type="email"
            id="email"
          />
        </label>
        <label htmlFor="password">
          Senha:
          <input
            onChange={ handleChange }
            name="senha"
            value={ senha }
            data-testid="password-input"
            type="password"
            id="password"
          />
        </label>
        <Link to="/carteira">
          <button
            type="button"
            disabled={ !validadeEmail() }
            onClick={ () => userEmail(email) }
          >
            Entrar
          </button>
        </Link>
      </form>
    );
  }
}

Login.propTypes = {
  userEmail: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  userEmail: (state) => dispatch(saveEmail(state)),
});

export default connect(null, mapDispatchToProps)(Login);

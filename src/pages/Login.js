import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { sendUserInfo } from '../actions';
import '../App.css';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      senha: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.onSubmitForm = this.onSubmitForm.bind(this);
  }

  onSubmitForm() {
    const { email } = this.state;
    const { history, dispatchSetValue } = this.props;
    dispatchSetValue(email);
    history.push('/carteira');
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  // função auxiliar pega do slack, sugestão do colega Michael Caxias
  isEmailValid(email) {
    const regexEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return regexEmail.test(email) === true;
  }

  render() {
    const { email, senha } = this.state;
    const MININUM_NUMBER = 6;
    return (
      <div>
        <div>
          <h2>Login</h2>
          <form>
            <label htmlFor="input-email">
              Email:
              <input
                data-testid="email-input"
                id="input-email"
                name="email"
                type="text"
                value={ email }
                onChange={ this.handleChange }
              />
            </label>
            <label htmlFor="input-password">
              senha:
              <input
                data-testid="password-input"
                type="password"
                name="senha"
                id="input-password"
                value={ senha }
                onChange={ this.handleChange }
              />
            </label>
            <button
              disabled={ !this.isEmailValid(email) || senha.length < MININUM_NUMBER }
              type="button"
              onClick={ this.onSubmitForm }
            >
              Entrar

            </button>
          </form>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  dispatchSetValue: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  dispatchSetValue: (payload) => dispatch(sendUserInfo(payload)),
});

export default connect(null, mapDispatchToProps)(Login);

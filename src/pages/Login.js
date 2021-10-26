import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as action from '../actions/index';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      passwordMinChar: 6,
      validEmail: false,
      validButton: true,
    };

    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.buttonValidation = this.buttonValidation.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  // O método (adaptado) que utiliza a callback () => this.buttonValidation foi encontrado em
  // https://www.freecodecamp.org/news/get-pro-with-react-setstate-in-10-minutes-d38251d1c781/
  // Esse método permite que a validação do botão seja feita somente após o setState ser definido.

  handlePasswordChange(event) {
    this.setState({
      password: event.target.value,
    }, () => this.buttonValidation());
  }

  // O método regex foi encontrado em
  // https://www.horadecodar.com.br/2020/09/13/como-validar-email-com-javascript/

  handleEmailChange(event) {
    this.setState({
      email: event.target.value,
    });
    const re = /\S+@\S+\.\S+/;
    const test = re.test(event.target.value);
    if (test === true) {
      this.setState({
        validEmail: true,
      }, () => this.buttonValidation());
    } else {
      this.setState({
        validEmail: false,
      }, () => this.buttonValidation());
    }
  }

  buttonValidation() {
    const { password, validEmail, passwordMinChar } = this.state;
    if (password.length >= passwordMinChar && validEmail) {
      this.setState({
        validButton: false,
      });
    } else {
      this.setState({
        validButton: true,
      });
    }
  }

  handleClick() {
    const { history, dispatchUserInfo } = this.props;
    dispatchUserInfo(this.state);
    history.push('/carteira');
  }

  render() {
    const { email, password, validButton } = this.state;
    return (
      <div>
        <form className="login">
          <h1>TrybeWallet</h1>
          <input
            data-testid="email-input"
            type="text"
            placeholder="Digite o seu e-mail"
            name="email"
            value={ email }
            onChange={ this.handleEmailChange }
          />
          <input
            data-testid="password-input"
            type="password"
            placeholder="Digite a sua senha"
            name="password"
            value={ password }
            onChange={ this.handlePasswordChange }
          />
          <button
            type="button"
            disabled={ validButton }
            onClick={ this.handleClick }
            className="loginButton"
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
    push: PropTypes.func.isRequired,
  }).isRequired,
  dispatchUserInfo: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  user: {
    email: state.user.email,
  },
});

const mapDispatchToProps = (dispatch) => ({
  dispatchUserInfo: (myState) => dispatch(action.userUpdate(myState)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);

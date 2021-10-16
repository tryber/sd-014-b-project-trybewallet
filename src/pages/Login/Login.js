import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Image from '../../images/iconLogin.png';
import { saveUser } from '../../actions';
import './Login.css';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      senha: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.validacaoEmail = this.validacaoEmail.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderBtn = this.renderBtn.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  validacaoEmail({ target: { value } }) {
    // Pesquisa de validação no site https://www.devmedia.com.br/html5-validator-validando-formularios-com-html5/28785
    const negativeLength = -1;
    if (value === ''
        || value.indexOf('@') === negativeLength
        || value.indexOf('.com') === negativeLength) {
      document.getElementById('msgemail')
        .innerHTML = '<font color=\'red\'>digite um e-mail válido </font>';
    } else {
      document.getElementById('senha').disabled = false;
      document.getElementById('msgemail').innerHTML = '';
    }
  }

  handleSubmit() {
    const { history, saveData } = this.props;
    saveData(this.state);
    history.push('./carteira');
  }

  renderBtn() {
    const { senha } = this.state;
    const minLength = 6;
    if (senha.length >= minLength) {
      return false;
    }
    return true;
  }

  render() {
    const btnDesabilitado = this.renderBtn();
    const { email, senha } = this.state;
    return (
      <main>
        <section>
          <img src={ Image } alt="icon" />
          <div>
            <div>
              <input
                className="input-login"
                data-testid="email-input"
                name="email"
                type="email"
                value={ email }
                placeholder="Email"
                onKeyUp={ this.validacaoEmail }
                onChange={ this.handleChange }
              />
              <span className="span-msg" id="msgemail" />
            </div>
            <input
              className="input-login"
              data-testid="password-input"
              id="senha"
              name="senha"
              type="password"
              value={ senha }
              placeholder="Senha"
              onChange={ this.handleChange }
              disabled
            />
            <button
              className="btnSubmit"
              id="btnSubmit"
              type="submit"
              onClick={ this.handleSubmit }
              disabled={ btnDesabilitado }
            >
              Entrar
            </button>
          </div>
        </section>
      </main>
    );
  }
}

Login.propTypes = {
  saveData: PropTypes.func.isRequired,
  history: PropTypes.shape({
    history: PropTypes.string,
    push: PropTypes.func,
  }).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  saveData: (values) => dispatch(saveUser(values)),
});

export default connect(null, mapDispatchToProps)(Login);

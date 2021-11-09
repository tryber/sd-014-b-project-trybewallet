import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { actionChangeEmail } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      senha: '',
      isDisabled: true,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleNextPage = this.handleChange.bind(this);
    this.enableButton = this.enableButton.bind(this);
  }

  handleHistoryChange(event) {
    const { emailValue } = this.props;
    const { email } = this.state;
    event.preventDefault();
    emailValue(email);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value }, () => this.enableButton());
  }

  enableButton() {
    const { email, senha } = this.state;
    const MIN_LENGTH = 5;
    const isDisabled = !(/\S+@\S+\.\S+/.test(email) && senha.length > MIN_LENGTH);
    this.setState({ isDisabled });
    // https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
  }

  render() {
    const { email, senha, isDisabled } = this.state;
    return (
      <form onSubmit={ this.handleHistoryChange }>
        Email:
        <input
          data-testid="email-input"
          type="text"
          name="email"
          placeholder="Insira seu email"
          value={ email }
          onChange={ this.handleChange }
        />
        Senha:
        <input
          data-testid="password-input"
          type="password"
          name="senha"
          placeholder="Insira sua senha"
          value={ senha }
          onChange={ this.handleChange }
          required
        />
        <Link to="/carteira">
          <Button
            value="Entrar"
            disabled={ isDisabled }
          />
        </Link>
      </form>
    );
  }
}

Login.propTypes = {
  emailValue: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  emailValue: (value) => dispatch(actionChangeEmail(value)),
});

export default connect(null, mapDispatchToProps)(Login);

import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Input from '../components/Input';
import Button from '../components/Button';
import { userAction } from '../actions';

const PASS_LENGTH = 6;
const REGEX_EMAIL = /\S+@\S+\.\S+/;

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      disabled: true,
    };

    this.onSubmitForm = this.onSubmitForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  onSubmitForm() {
    const { dispatchUser } = this.props;
    dispatchUser(this.state);
  }

  isUserValid() {
    const { email, password } = this.state;
    const validEmail = REGEX_EMAIL.test(email);

    if ((password.length >= PASS_LENGTH) && (validEmail === true)) {
      this.setState({ disabled: false });
    } else {
      this.setState({ disabled: true });
    }
  }

  handleChange({ target }) {
    this.setState({
      [target.name]: target.value,
    }, this.isUserValid);
  }

  render() {
    const { email, password, disabled } = this.state;
    return (
      <div>
        <img
          className="App-logo"
          src="https://www.acate.com.br/wp-content/uploads/2020/01/trybe.png"
          alt="Logo da Trybe"
          height="150px"
        />
        <form>
          <Input
            testid="email-input"
            name="email"
            type="email"
            value={ email }
            placeholder="Digite seu email"
            onChange={ this.handleChange }
          />
          <br />
          <br />
          <Input
            testid="password-input"
            name="password"
            type="password"
            value={ password }
            placeholder="Digite sua senha"
            onChange={ this.handleChange }
          />
          <br />
          <br />
          <Link to="/carteira">
            <Button
              testid="login-btn"
              label="Entrar"
              disabled={ disabled }
              onClick={ this.onSubmitForm }
            />
          </Link>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  dispatchUser: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  dispatchUser: (state) => dispatch(userAction(state)),
});

export default connect(null, mapDispatchToProps)(Login);

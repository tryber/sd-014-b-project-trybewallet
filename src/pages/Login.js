import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { actionRegisterUser } from '../actions';
import { Inputs, Button } from '../components';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      disabled: true,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.validation = this.validation.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value }, () => this.validation());
  }

  validation() {
    const regex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
    const number = 5;
    const { email, password } = this.state;
    const disabled = !(regex.test(email) && password.length > number);

    this.setState({ disabled });
  }

  handleClick() {
    const { history, registerUser } = this.props;
    const { email } = this.state;
    registerUser(email);
    history.push('/carteira');
  }

  render() {
    const { disabled } = this.state;
    return (
      <form>
        <fieldset>
          <Inputs
            name="email"
            page="login"
            type="text"
            onHandleChange={ this.handleChange }
          />
          <Inputs
            name="password"
            page="login"
            type="password"
            onHandleChange={ this.handleChange }
          />
          <Button
            name="Entrar"
            onHandleClick={ this.handleClick }
            disabled={ disabled }
          />
        </fieldset>
      </form>
    );
  }
}

const mapDispathToProps = (dispatch) => ({
  registerUser: (payload) => dispatch(actionRegisterUser(payload)),
});

Login.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
  registerUser: PropTypes.func.isRequired,
};

export default connect(null, mapDispathToProps)(Login);

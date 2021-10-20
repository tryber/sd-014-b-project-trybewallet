import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { loginDone } from '../actions/index';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    this.setState({
      [target.name]: target.value,
    });
  }

  render() {
    const { email, password } = this.state;
    const regex = /\S+@\S+\.\S+/; // consultei https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
    const MIN_PASSWORD = 6;
    const { sendLogin } = this.props;
    return (
      <form>
        <input
          type="email"
          data-testid="email-input"
          name="email"
          placeholder="E-mail"
          onChange={ (event) => this.handleChange(event) }
          value={ email }
        />
        <input
          type="password"
          data-testid="password-input"
          name="password"
          placeholder="Senha"
          onChange={ (event) => this.handleChange(event) }
          value={ password }
        />
        <Link to="/carteira">
          <input
            type="button"
            name="entrar"
            value="Entrar"
            disabled={ regex.test(email) && password.length >= MIN_PASSWORD ? 0 : true }
            onClick={ () => sendLogin(email) }
          />
        </Link>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  sendLogin: (email) => dispatch(loginDone(email)),
});

Login.propTypes = {
  sendLogin: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);

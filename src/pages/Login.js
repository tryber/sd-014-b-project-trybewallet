import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { login } from '../actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  handleClick(e, email) {
    e.preventDefault();
    const { history, keyEmail } = this.props;
    keyEmail(email);
    history.push('/carteira');
  }

  render() {
    const { email, password } = this.state;
    const min = 6;
    const regex = /\S+@\S+\.\S+/;

    return (
      <section>
        <input
          data-testid="email-input"
          type="email"
          placeholder="Email"
          name="email"
          value={ email }
          onChange={ this.handleChange }
        />
        <input
          data-testid="password-input"
          type="password"
          placeholder="Password"
          name="password"
          value={ password }
          onChange={ this.handleChange }
        />
        <button
          type="button"
          onClick={ (e) => this.handleClick(e, email) }
          disabled={ password.length < min || !(regex.test(email)) }
        >
          Entrar
        </button>
      </section>
    );
  }
}

Login.propTypes = {
  keyEmail: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

const mapStateToProps = (dispatch) => ({
  keyEmail: (email) => dispatch(login(email)),
});

export default connect(null, mapStateToProps)(Login);

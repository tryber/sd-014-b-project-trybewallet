import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { userLogin } from '../actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      disabled: true,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  // Sugestão compartilhada pelo Michael no slack!
  // https://trybecourse.slack.com/archives/C023YHXAEGM/p1634319096263400?thread_ts=1634319081.263300&cid=C023YHXAEGM
  isEmailValid(email) {
    const regexEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return regexEmail.test(email) === true;
  }

  verifyInputs() {
    const { email, password } = this.state;
    const passValid = 5;
    if ((password.length >= passValid) && (this.isEmailValid(email))) {
      this.setState({
        disabled: false,
      });
    }
  }

  handleChange({ target }) {
    const { id, value } = target;
    this.setState({ [id]: value });
    this.verifyInputs();
  }

  handleClick() {
    const { history, emailDispatchValue } = this.props;
    emailDispatchValue(this.state);
    history.push('/carteira');
  }

  render() {
    const { email, password, disabled } = this.state;
    return (
      <>
        <input
          value={ email }
          id="email"
          data-testid="email-input"
          type="text"
          onChange={ this.handleChange }
          required
        />
        <input
          value={ password }
          id="password"
          data-testid="password-input"
          type="password"
          onChange={ this.handleChange }
          required
        />
        <button
          type="button"
          disabled={ disabled }
          onClick={ this.handleClick }
        >
          Entrar
        </button>
      </>
    );
  }
}

Login.propTypes = {
  emailDispatchValue: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  emailDispatchValue: (payload) => dispatch(userLogin(payload)),
});

export default connect(null, mapDispatchToProps)(Login);

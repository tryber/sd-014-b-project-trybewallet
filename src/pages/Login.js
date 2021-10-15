import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import mailToGlobalState from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.disabledButton = this.disabledButton.bind(this);

    this.state = {
      mail: '',
      password: '',
    };
  }

  handleChange(event) {
    const { name } = event.target;
    const { value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  disabledButton(email, password) {
    const minPassword = 6;
    const regexEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (regexEmail.test(email) && password.length >= minPassword) {
      return false;
    }
    return true;
  }

  // Solução de regex proposta no slack da turma por Gustavo Sant'Anna
  // https://trybecourse.slack.com/archives/C023YHXAEGM/p1634320005266300?thread_ts=1634319081.263300&cid=C023YHXAEGM

  render() {
    const { dispatchMail } = this.props;
    const { mail, password } = this.state;
    return (
      <fieldset>
        <label htmlFor="mail">
          <input
            onChange={ this.handleChange }
            data-testid="email-input"
            name="mail"
            ype="text"
          />
        </label>
        <label htmlFor="password">
          <input
            onChange={ this.handleChange }
            data-testid="password-input"
            name="password"
            type="password"
          />
        </label>
        <Link to="/carteira">
          <button
            disabled={ this.disabledButton(mail, password) }
            type="button"
            onClick={ () => dispatchMail(mail) }
          >
            Entrar
          </button>
        </Link>

      </fieldset>
    );
  }
}

Login.propTypes = {
  dispatchMail: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  dispatchMail: (mail) => dispatch(mailToGlobalState(mail)),
});

export default connect(null, mapDispatchToProps)(Login);

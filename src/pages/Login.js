import React from 'react';
import { connect } from 'react-redux';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;

    this.setState({ [name]: target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const {submitUserEmail} = this.props;
    const {email, password} = this.state;
  }

  render() {
    // Tive que colocar 5 por problema de asincronidade
    const passMinLenth = 5;
    // https://www.w3resource.com/javascript/form/email-validation.php
    const reg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const { email, password } = this.state;
    return (
      <div>
        <form>
          <input
            type="email"
            name="email"
            data-testid="email-input"
            placeholder="Email"
            value={ email }
            onChange={ this.handleChange }
          />
          <input
            type="password"
            name="password"
            data-testid="password-input"
            placeholder="Password"
            value={ password }
            onChange={ this.handleChange }
          />
          <button
            type="button"
            disabled={ !(email.match(reg)) || (password.length <= passMinLenth) }
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  submitUserEmail: (email) => (dispatch(index(email))),
});

export default connect(null, mapDispatchToProps)(Login);

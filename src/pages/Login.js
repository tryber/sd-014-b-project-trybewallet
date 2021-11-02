import React from 'react';
import InputEmail from '../components/InputEmail';
import InputPass from '../components/InputPass';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      senha:'',
    };
    this.handleChange = this.handleChange.bind(this);
    this.isEmailValid = this.isEmailValid.bind(this);
    this.isPassValid = this.isPassValid.bind(this);
  }

  isEmailValid(email) {
    const regexEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return regexEmail.test(email) === true;
  }

  // https://stackoverflow.com/questions/19605150
  isPassValid(pass) {
    const regexEmail = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    return regexEmail.test(pass)
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { email, senha } = this.state;
    const validEmailAndPass = this.isEmailValid(email) && this.isPassValid(senha);
    // const validPass = this.isPassValid(senha);
    return (
      <div className="login-field">
        Login
       <InputEmail onChange={ this.handleChange } />
       <InputPass onChange={ this.handleChange } />
        <button disabled={ !validEmailAndPass } type="button">Entrar</button>
        <span style={{visibility: validEmailAndPass ?'hidden':'visible' }}>Creat a valid pass</span>
      </div>);
  }
}

export default Login;

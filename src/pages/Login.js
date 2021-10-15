import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mail: '',
      password: '',
      buttonDisabled: false,
    };
  }

  handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    })
  }
  
  disabledButton = (email, password) => {
    const regexEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (regexEmail.test(email) && password.length >= 6){
      return false
    }
    return true
  }

  //Solução de regex proposta no slack da turma por Gustavo Sant'Anna
  //https://trybecourse.slack.com/archives/C023YHXAEGM/p1634320005266300?thread_ts=1634319081.263300&cid=C023YHXAEGM



  render() {
    const {mail, password} = this.state
    return (
      <fieldset>
        <label htmlFor="mail">
          <input 
          onChange={this.handleChange}
          data-testid="email-input" 
          name="mail" 
          ype="text" />
        </label>
        <label htmlFor="password">
          <input 
          onChange={this.handleChange}
          data-testid="password-input" 
          name="password" 
          type="password" />
        </label>
        <button disabled={this.disabledButton(mail, password)} type="button">Entrar</button>
        
      </fieldset>
    );
  }
}

export default Login;

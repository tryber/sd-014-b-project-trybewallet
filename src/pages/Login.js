import React from 'react';
import Label from '../helpers/Label';

class Login extends React.Component {
  constructor(props) {
    super(props);
    const { name } = props
    this.state ={
      [name]: '',
    };
};

handleChange = ({target: { name, value }}) => {
    this.setState({ [name]: value })
}

  render() {
    const { handleChange } = this;
    return (
      <form>
        <Label 
          name={'Login'} 
          type={'email'} 
          dataTestid={"email-input"} 
          required={true} 
          handleChange={handleChange} 
        />
        <br />
        <Label 
          name={'Password'} 
          type={'password'} 
          dataTestid={"password-input"} 
          minlength="6" 
          required={true}
          handleChange={handleChange} 
        />
        <br />
        <button>Entrar</button>
      </form>
      );
  }
}

export default Login;

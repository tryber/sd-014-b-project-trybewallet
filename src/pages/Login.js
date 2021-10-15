import React from 'react';
import Label from '../helpers/Label';
import { login } from '../actions';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';

export class Login extends React.Component {

handleChange = ({target: { name, value }}) => {
    this.setState({ [name]: value })
}

  render() {
    const { handleChange } = this;
    const { dispatchLogin } = this.props;
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
        <Link to={'/carteira'}> 
          <button  
          type="button" 
          onClick={() => dispatchLogin(this.state.login)} 
            >Entrar
          </button>
        </Link>
      </form>
      );
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatchLogin: (email) => {
    return dispatch(login(email)) 
  },
});

export default connect(null, mapDispatchToProps)(Login);
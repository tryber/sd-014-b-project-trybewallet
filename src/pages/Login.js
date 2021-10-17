import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Label from '../helpers/Label';
import login from '../actions';

export class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      disabled: true,
      Login: '',
      Password: '',
    };
  }

  passwordIsvalid = (password) => (password.length >= 6 );
  
  loginIsvalid = (email) => {
    const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return emailRegex.test(email);
  }

  handleButton = () => {
    this.setState({...this.state}, () => {
      const { Login, Password } = this.state;
      if(Login && Password) {
        if(this.loginIsvalid(Login) && this.passwordIsvalid(Password)) {
          this.setState({...this.state, disabled: false})
        } 
        else {this.setState({...this.state, disabled: true})}
      }
      });
  };

handleChange = ({target: { name, value }}) => {
    this.setState({ [name]: value },  this.handleButton())
}

  render() {
    const { handleChange } = this;
    const { dispatchLogin } = this.props;
    const { disabled, Login } = this.state;
    return (
      <form>
        <Label
          name="Login"
          type="email"
          dataTestid="email-input"
          required
          handleChange={ handleChange }
        />
        <br />
        <Label
          name="Password"
          type="password"
          dataTestid="password-input"
          minlength="6"
          required
          handleChange={ handleChange }
        />
        <br />
        <Link to="/carteira">
          <button
            type="button"
            onClick={ () => dispatchLogin(Login) }
            disabled={ disabled }
          >
            Entrar
          </button>
        </Link>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatchLogin: (email) => dispatch(login(email)),
});

export default connect(null, mapDispatchToProps)(Login);

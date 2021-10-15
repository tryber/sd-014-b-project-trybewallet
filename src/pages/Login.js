import React from 'react';
import EmailInput from '../components/EmailInput';
import LoginSubmitBtn from '../components/LoginSubmitBtn';
import PwdInput from '../components/PwdInput';

class Login extends React.Component {
  render() {
    return (
      <form>
        <EmailInput />
        <PwdInput />
        <LoginSubmitBtn />
      </form>

    );
  }
}

export default Login;

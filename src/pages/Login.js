import React from 'react';
import Input from '../components/Input';
import PageContainer from '../components/PageContainer';

class Login extends React.Component {
  render() {
    return (
      <PageContainer>
        <h1>Login</h1>
        <Input type="email" id="email" name="email" placeholder="Email" />
        <Input type="password" id="password" name="password" placeholder="Senha" />
      </PageContainer>
    );
  }
}

export default Login;

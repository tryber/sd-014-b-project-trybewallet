import React from 'react';
import Box from '@mui/material/Box';
import LoginForm from '../components/LoginForm';

class Login extends React.Component {
  render() {
    return (
      <Box
        sx={ {
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        } }
      >
        <h1>TrybeWallet</h1>
        <LoginForm />
      </Box>
    );
  }
}

export default Login;

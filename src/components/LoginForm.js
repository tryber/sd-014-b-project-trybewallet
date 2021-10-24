import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default class LoginForm extends React.Component {
  render() {
    const inputStyles = {
      my: 1,
    };
    const buttonStyles = {
      my: 2,
    };

    return (
      <Box
        component="form"
        sx={ {
          display: 'flex',
          flexDirection: 'column',
        } }
      >
        <TextField
          required
          type="email"
          id="email"
          name="email"
          label="Email"
          data-testid="email-input"
          sx={ inputStyles }
        />
        <TextField
          required
          type="password"
          id="password"
          name="password"
          label="Senha"
          data-testid="password-input"
          sx={ inputStyles }
        />
        <Button
          variant="contained"
          size="large"
          type="submit"
          sx={ buttonStyles }
        >
          Entrar
        </Button>
      </Box>
    );
  }
}

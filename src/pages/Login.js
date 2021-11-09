import React from 'react';
import { connect } from 'react-redux';

class Login extends React.Component {
  render() {
    return (
      <div>
        <input type="email" data-testid="email-input" />
        <input type="password" data-testid="password-input" />
        <button type="button">Entrar</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

export default connect(mapStateToProps)(Login);

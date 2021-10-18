import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Input from '../components/Input';
import Button from '../components/Button';
import { userAction } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        email: '',
        password: '',
      },
    };

    this.onSubmitForm = this.onSubmitForm(this);
    this.handleChange = this.handleChange(this);
  }

  onSubmitForm() {
    const { dispatchUser } = this.props;
    const { user } = this.state;
    dispatchUser(user);
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      user: {
        [name]: value,
      },
    });
  }

  render() {
    const { user: { email, password } } = this.state;
    return (
      <div>
        <img
          className="App-logo"
          src="https://www.acate.com.br/wp-content/uploads/2020/01/trybe.png"
          alt="Logo da Trybe"
          height="150px"
        />
        <form>
          <Input
            testid="email-input"
            name="email"
            type="email"
            value={ email }
            placeholder="Digite seu email"
            onChange={ this.handleChange }
          />
          <br />
          <br />
          <Input
            testid="password-input"
            name="password"
            type="password"
            value={ password }
            placeholder="Digite sua senha"
            onChange={ this.handleChange }
          />
          <br />
          <br />
          <Button
            testid="login-btn"
            label="Entrar"
            onClick={ this.onSubmitForm }
          />
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  dispatchUser: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  dispatchUser: (emailAndPass) => dispatch(userAction(emailAndPass)),
});

// falta conectar o state
// const mapStateToProps = (state) => ({ userInfo: state.userAction.state });

export default connect(null, mapDispatchToProps)(Login);

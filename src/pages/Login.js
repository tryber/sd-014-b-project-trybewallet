import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <section className="container mt-4">
        <form className="row col-sm-6">
          <label className="form-label" htmlFor="email">
            <input
              className="form-control"
              id="email"
              name="email"
              data-testid="email-input"
              placeholder="E-mail"
            />
          </label>
          <label className="form-label" htmlFor="password">
            <input
              className="form-control"
              id="password"
              name="password"
              data-testid="password-input"
              placeholder="Senha"
            />
          </label>
          <div className="container">
            <button type="button" className="btn btn-success w-50">
              Entrar
            </button>
          </div>
        </form>
      </section>
    );
  }
}

export default Login;

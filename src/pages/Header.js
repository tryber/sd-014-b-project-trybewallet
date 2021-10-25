import React, { Component } from 'react';

class Header extends Component {
  render() {
    const { email } = this.props;
    return (
      <div>
        <h1>Header</h1>
        <p data-testid="email-field">{ email }</p>
        <p data-testid="total-field">Despesa total com o gastos VALOR INIT 0</p>
        <p data-testid="header-currency-field">Valor BRL</p>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  email: state.user.email,
});

Header.propTypes = {
  email: PropTypes.any,
}.isRequired;

export default connect(mapStateToProps, null)(Header);

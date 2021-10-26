import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Header.css';

class Header extends React.Component {
  render() {
    const { email, total } = this.props;
    return (
      <header className="header">
        <h1>Trybe</h1>
        <section className="header-section">
          <div className="header-nav">
            <h4>Email:</h4>
            <p data-testid="email-field">{email}</p>
          </div>
          <div className="header-nav">
            <h4>Despesa Total:</h4>
            <p data-testid="total-field">{total}</p>
            <p data-testid="header-currency-field">BRL</p>
          </div>
        </section>
      </header>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
};

export default Header;

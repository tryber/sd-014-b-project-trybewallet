import React from 'react';
import PropTypes from 'prop-types';

function Header({ email, totalExpenses }) {
  return (
    <header className="header">
      <div data-testid="email-field" className="email-header">
        {`Email: ${email}`}
      </div>
      <div className="expenses">
        <div data-testid="total-field">
          {`Despesas totais: ${totalExpenses}`}
        </div>
        <span data-testid="header-currency-field"> BRL </span>
      </div>
    </header>
  );
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
  totalExpenses: PropTypes.number,
};

Header.defaultProps = {
  totalExpenses: 0,
};

export default Header;

import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

function Header(props) {
  const { userEmail, expenses } = props;
  const totalField = expenses
    .reduce((acc, currentValue) => {
      const valueToNumber = Number(currentValue.value);
      const currentAsk = currentValue.exchangeRates[currentValue.currency].ask;
      return acc + (valueToNumber * currentAsk);
    }, 0);

  return (
    <header>
      <div className="container-title">
        <img
          src="https://www.clipartmax.com/png/full/141-1410805_%C2%A0-stock-photography.png"
          alt="wallet"
        />
        <h4>TrybeWallet</h4>
      </div>

      <div className="container-infos">
        <span data-testid="email-field">
          { `Email: ${userEmail}` }
        </span>
        <div>
          <span>
            Despesa Total: R$
            <span data-testid="total-field">
              { expenses.length > 0 ? totalField.toFixed(2) : '0.00'}
            </span>
          </span>
          <span
            className="text-center"
            data-testid="header-currency-field"
          >
            BRL
          </span>
        </div>
      </div>
    </header>
  );
}

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
  expenses: state.wallet.expenses,
});

Header.propTypes = {
  userEmail: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps)(Header);

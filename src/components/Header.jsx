import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import '../css/headerCss.css';
import { Link } from 'react-router-dom';

const ROUND = 2;

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.getBrlCurrency = this.getBrlCurrency.bind(this);
  }

  getBrlCurrency(index, code) {
    const { totalField } = this.props;
    const brlCurrency = Object.values(totalField[index].exchangeRates)
      .find((item) => item.code === code);
    return brlCurrency.ask;
  }

  render() {
    const { email, totalField } = this.props;
    return (
      <header className="header-container">
        <Link to="/">
          <img src="https://media-exp1.licdn.com/dms/image/C4D0BAQFalja6B0Vl8A/company-logo_200_200/0/1625490679503?e=1642032000&v=beta&t=83k2adr5Kb40PTl16dJXY30S2fwvGaU-hn3OTLh43e8" alt="trybe logo" />
        </Link>
        <span data-testid="email-field">
          {`Olá, ${email}, seja bem-vindo(a) a sua carteira!`}
        </span>
        <span data-testid="total-field">
          {`Você gastou um total de: 
            ${totalField === undefined ? 0 : totalField.reduce((acc, expense, index) => {
        acc += Math.round(
          Number(expense.value) * Number(this.getBrlCurrency(index, expense.currency))
              * 100,
        )
              / 100;
        return acc;
      }, 0).toFixed(ROUND)}`}
        </span>
        <span data-testid="header-currency-field">BRL</span>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  totalField: state.wallet.expenses,
  currencies: state.wallet.currencies,
  email: state.user.email,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
  totalField: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps)(Header);

import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from '../styles/header.module.scss';

class Header extends React.Component {
  constructor() {
    super();

    this.totalValeu = this.totalValeu.bind(this);
  }

  totalValeu() {
    const { expenses } = this.props;
    const totalValue = expenses.reduce((acc, expense) => {
      const currencyValue = Number(expense.exchangeRates[expense.currency].ask);
      acc += Number(expense.value) * currencyValue;
      return acc;
    }, 0);
    return totalValue;
  }

  render() {
    const { totalValeu } = this;
    const { email } = this.props;
    return (
      <header className={ styles.header }>
        <div className={ styles.emailField } data-testid="email-field">
          Email:
          {' '}
          {email}
        </div>
        <div className={ styles.totalValueDiv }>
          <div data-testid="total-field">
            {totalValeu().toFixed(2)}
          </div>
          <div data-testid="header-currency-field">BRL</div>
        </div>
      </header>
    );
  }
}

// USANDO HOOKS
// function Header({ email }) {
//   return (
//     <header className={ styles.header }>
//       <div className={ styles.emailField } data-testid="email-field">
//         Email:
//         {' '}
//         {email}
//       </div>
//       <div className={ styles.totalValueDiv }>
//         <div data-testid="total-field">0</div>
//         <div data-testid="header-currency-field">BRL</div>
//       </div>
//     </header>
//   );
// }

const mapStateToProps = ({ user: { email }, wallet: { expenses } }) => ({
  email,
  expenses,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps)(Header);

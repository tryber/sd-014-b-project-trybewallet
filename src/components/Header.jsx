import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {

  getTotalExpensives() {
    const { expensives } = this.props;
    if (expensives.length !== 0) {
      const total = expensives.reduce((acc, currentValue) => (
        acc + currentValue.value * currentValue.exchangeRates[currentValue.currency].ask
      ), 0);
      return total.toLocaleString('pt-br',{style:'currency', currency: 'BRL'});
    }
    return 'R$ 0,00';
  }

  render() {
    const { getEmail } = this.props;
    return (
      <header>
        <section className="section-header-info">
          <p 
            data-testid="header-currency-field"
            className="m-0"
          >Moeda: BRL
          </p>
          <p 
            data-testid="total-field"
            className="m-0"
          >{ `Total: ${this.getTotalExpensives()}` }
          </p>
          <p 
            data-testid="email-field"
            className="m-0"
          > <i className="bi bi-person-circle" /> { getEmail }
          </p>
        </section>
      </header>
    );
  }
}

Header.propTypes = {
  getEmail: PropTypes.string.isRequired,
  expensives: PropTypes.arrayOf(PropTypes.any).isRequired,
};

const mapStateToProps = (state) => ({
  getEmail: state.user.email,
  expensives: state.wallet.expenses,
});

export default connect(mapStateToProps)(Header);
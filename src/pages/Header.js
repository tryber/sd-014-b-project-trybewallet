import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currency: 'BRL',
    };

    this.getTotal = this.getTotal.bind(this);
  }

  getTotal() {
    const {
      props: { expenses },
    } = this;

    let output = 0;
    const INDEX = 3;

    if (expenses.length > 0) {
      output = expenses
        .map(({ value, currency, exchangeRates }) => value * exchangeRates[currency].ask)
        .reduce((amount, index) => amount + index);
    }
    output = new Intl
      .NumberFormat([], { style: 'currency', currency: 'BRL' })
      .format(output);
    output = output.slice(INDEX).replace(',', '.');

    return output;
  }

  render() {
    const {
      getTotal,
      state: { currency },
      props: { email },
    } = this;

    const total = getTotal();

    return (
      <div>
        <p data-testid="email-field">{ email }</p>
        <p data-testid="total-field">{ total }</p>
        <p data-testid="header-currency-field">{ currency }</p>
      </div>
    );
  }
}

const mapStateToProps = ({ user, wallet }) => ({
  email: user.email,
  expenses: wallet.expenses,
});

Header.propTypes = {
  email: PropTypes.string,
  expenses: PropTypes.array,
}.isRequired;

export default connect(mapStateToProps, null)(Header);

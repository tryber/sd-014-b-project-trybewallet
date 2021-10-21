import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      câmbio: 'BRL',
    };
  }

  render() {
    const { user, wallet } = this.props;
    const { email } = user;
    const { expenses } = wallet;
    const { câmbio } = this.state;
    console.log(expenses);
    const askValue = 'ask';
    return (
      <div>
        <h5 data-testid="email-field">
          {email}
        </h5>
        <h5 data-testid="total-field">
          despesa total:
          {
            expenses
              .reduce(
                (previous, { value, exchangeRates, currency }) => previous
                + parseFloat(value * exchangeRates[currency][askValue]), 0,
              )
          }
        </h5>
        <h5 data-testid="header-currency-field">
          Câmbio utilizado:
          {câmbio}
        </h5>
      </div>
    );
  }
}

Header.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.isRequired,
  }).isRequired,
  wallet: PropTypes.shape({
    expenses: PropTypes.shape({
      reduce: PropTypes.func,
    }).isRequired,
  }).isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
  wallet: state.wallet,
});

export default connect(mapStateToProps)(Header);

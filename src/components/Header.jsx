import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

class Header extends React.Component {
  render() {
    const { userEmail, total } = this.props;
    console.log(total);
    return (
      <hearder>
        <h4>Descrição</h4>
        <p data-testid="email-field">{userEmail}</p>
        <p data-testid="total-field">
          { total.reduce((acc, {
            value,
            currency,
            exchangeRates }) => acc + parseFloat(value) * exchangeRates[currency].ask, 0)}
        </p>
        <p data-testid="header-currency-field">BRL</p>
      </hearder>
    );
  }
}

Header.propTypes = {
  userEmail: PropTypes.func.isRequired,
  total: PropTypes.shape({
    reduce: PropTypes.func.isRequired,
  }).isRequired,
};

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
  total: state.wallet.expenses,
});
export default connect(mapStateToProps, null)(Header);

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import SelectCurrency from './SelectCurrency';
import './Header.css';

class Header extends React.Component {
  render() {
    const { email } = this.props;
    return (
      <div className="container-header">
        <h1>TrybeWallet</h1>
        <span data-testid="email-field">{ email }</span>
        <div>
          <span>Despesa total: </span>
          <span data-testid="total-field">0</span>
          <span data-testid="header-currency-field">BRL</span>
        </div>
        {/* <SelectCurrency id="select-currency-header" /> */}
      </div>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
});

export default connect(mapStateToProps)(Header);

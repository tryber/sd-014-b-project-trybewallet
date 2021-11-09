import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      exchange: 'BRL',
    };
  }

  render() {
    const { exchange } = this.state;
    const { userLoggin, totalExpenses } = this.props;
    return (
      <>
        <p data-testid="email-field">
          { userLoggin }
        </p>
        <p data-testid="total-field">
          { totalExpenses }
        </p>
        <p data-testid="header-currency-field">
          { exchange }
        </p>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  userLoggin: state.user.email,
  totalExpenses: state.wallet.totalValue,
});

Header.propTypes = {
  userLoggin: PropTypes.string.isRequired,
  totalExpenses: PropTypes.number,
};

Header.defaultProps = {
  totalExpenses: 0,
};

export default connect(mapStateToProps, null)(Header);

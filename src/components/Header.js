import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends React.Component {
  render() {
    const { email } = this.props;
    return (
      <header>
        <h1>Projeto TrybeWallet</h1>
        <div>
          <p data-testid="email-field">{ email }</p>
          <p data-testid="total-field">0</p>
          <p data-testid="header-currency-field">BRL</p>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
  /* expenses: PropTypes.objectOf((
    PropTypes.any
  )).isRequired, */
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet,
});

export default connect(mapStateToProps, null)(Header);

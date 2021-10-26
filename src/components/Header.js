import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends React.Component {
  render() {
    // cria state com valor inicial
    // percorrer expenses
    // fazer a conta
    // passa valor pelo setstate
    // passar os dois strings para Number

    const { user } = this.props;
    return (
      <header>
        <p data-testid="email-field">
          { user }
        </p>
        <p data-testid="total-field">
          0
        </p>
        <p data-testid="header-currency-field">
          BRL
        </p>
      </header>
    );
  }
}

Header.propTypes = {
  user: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user.email,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Header);

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ExpenseForm from '../component/expenseForm';

class Wallet extends React.Component {
  render() {
    const { email } = this.props;
    return (
      <div>
        <header>
          <div>
            <h2 data-testid="email-field">{email}</h2>
          </div>
          <div>
            <h3 data-testid="total-field">0</h3>
            <h4 data-testid="header-currency-field">BRL</h4>
          </div>
        </header>
        <ExpenseForm />
      </div>

    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Wallet);

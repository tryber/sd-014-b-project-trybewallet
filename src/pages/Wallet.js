import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ExpenseForm from '../component/expenseForm';
import { loading } from '../actions';

class Wallet extends React.Component {
  constructor() {
    super();

    this.state = {
      despesa: 0,
    };
  }

  componentDidUpdate() {
    const { viewLoading } = this.props;

    if (viewLoading) {
      this.somarDespesas();
    }
  }

  somarDespesas() {
    const { info, currencies, funcLoading } = this.props;
    const { despesa } = this.state;

    info.forEach(({ currency, value }) => this
      .setState(
        { despesa: despesa + value * currencies[currency].ask },
      ));

    funcLoading(false);
  }

  render() {
    const { email } = this.props;
    const { despesa } = this.state;

    return (
      <div>
        <header>
          <div>
            <h2 data-testid="email-field">{email}</h2>
          </div>
          <div>
            <h3 data-testid="total-field">{despesa}</h3>
            <h4 data-testid="header-currency-field">BRL</h4>
          </div>
        </header>
        <ExpenseForm />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  funcLoading: (value) => dispatch(loading(value)),
});

const mapStateToProps = (state) => ({
  email: state.user.email,
  currencies: state.wallet.currencies,
  info: state.wallet.expenses,
  viewLoading: state.wallet.loading,
});

Wallet.propTypes = {
  email: PropTypes.string,
  info: PropTypes.array,
  currencies: PropTypes.object,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);

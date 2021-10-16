import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ExpenseForm from '../components/ExpenseForm';

class Wallet extends React.Component {
  constructor() {
    super();

    this.state = {
      totalExpenses: 0,
      currentCurrency: 'BRL',
      valueInput: '',
      descriptionInput: '',
      currencyInput: '',
      paymentMethodInput: 'money',
      categoryInput: 'food',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { target: { name, value } } = event;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { email } = this.props;
    const { totalExpenses, currentCurrency,
      valueInput, descriptionInput, currencyInput, paymentMethodInput, categoryInput,
    } = this.state;
    const inputsState = {
      valueInput,
      descriptionInput,
      currencyInput,
      paymentMethodInput,
      categoryInput,
    };

    return (
      <>
        <header>
          <h4 data-testid="email-field">{ email }</h4>
          <div>
            Despesas totais:
            <span data-testid="total-field">{ totalExpenses }</span>
          </div>
          <div>
            Câmbio atual:
            <span data-testid="header-currency-field">{ currentCurrency }</span>
          </div>
          <ExpenseForm handleChange={ this.handleChange } inputsValues={ inputsState } />
        </header>
        <main>Despesas</main>
      </>
    );
  }
}

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
};

function mapStateToProps(state) {
  return {
    email: state.user.email,
  };
}

export default connect(mapStateToProps)(Wallet);

import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Wallet extends React.Component {
  render() {
    const { emailUser } = this.props;
    const methodPayment = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    const expense = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    return (
      <>
        <header>
          <span data-testid="email-field">{ emailUser.email }</span>
          <span data-testid="total-field">0</span>
          <span data-testid="header-currency-field">BRL</span>
        </header>
        <section>
          <form>
            <label htmlFor="input-value">
              Valor:
              <input type="text" id="input-value" name="input-valor" />
            </label>
            <label htmlFor="input-description">
              Descrição:
              <input type="text" id="input-description" name="input-description" />
            </label>
            <label htmlFor="input-currency">
              Moeda:
              <select id="input-currency">Moeda</select>
            </label>
            <label htmlFor="input-payment">
              Método de pagamento:
              <select id="input-payment">
                { methodPayment.map((payment) => (
                  <option key={ payment } value={ payment }>{payment}</option>
                ))}
              </select>
            </label>
            <label htmlFor="input-payment">
              Tag:
              <select id="input-payment">
                { expense.map((expenseItem) => (
                  <option key={ expenseItem } value={ expenseItem }>{expenseItem}</option>
                ))}
              </select>
            </label>
          </form>
        </section>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  emailUser: state.user,
});

Wallet.propTypes = {
  email: PropTypes.objectOf(PropTypes.string),
}.isRequired;

export default connect(mapStateToProps, null)(Wallet);

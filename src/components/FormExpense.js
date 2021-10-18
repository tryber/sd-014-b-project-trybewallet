import React from 'react';
import getCoins from '../services/coinsAPI';

class FormExpense extends React.Component {
  constructor() {
    super();
    this.state = {
      coins: [],
    };

    this.requestCoins = this.requestCoins.bind(this);
  }

  componentDidMount() {
    this.requestCoins();
  }

  async requestCoins() {
    // const { coins } = this.state;
    const currentCoins = await getCoins().then((response) => response);
    this.setState({
      coins: currentCoins,
    });
  }

  render() {
    const { coins } = this.state;
    const coinsArrayCurrency = Object.values(coins);
    const methodPayment = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    const expense = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    return (
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
            <select id="input-currency">
              {coinsArrayCurrency.map((coinsCurrency) => (
                <option
                  key={ coinsCurrency.ask }
                  value={ coinsCurrency.code }
                >
                  {coinsCurrency.code}
                </option>
              ))}

            </select>
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
    );
  }
}

export default FormExpense;

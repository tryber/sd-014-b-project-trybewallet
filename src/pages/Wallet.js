import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import Select from '../components/Select';
import { fetchCurrencies, addExpenses, removeExpenses } from '../actions';

const payMethod = ['Cartão de crédito', 'Cartão de débito', 'Dinheiro'];
const tags = ['Lazer', 'Trabalho', 'Alimentação', 'Transporte', 'Saúde'];

class Wallet extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      id: 0,
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };
  }

  componentDidMount() {
    const { handleCurrencies } = this.props;
    handleCurrencies();
  }

  handleChange({ target: { value, name } }) {
    this.setState({ [name]: value });
  }

  handleClick() {
    const { handleCurrencies, addExpense } = this.props;
    handleCurrencies();
    addExpense(this.state);
    this.setState((prevState) => ({ id: prevState.id + 1 }));
  }

  renderWallet() {
    const { currency, method, tag } = this.state;
    const { moedas } = this.props;

    return (
      <>
        <Select
          field="currency"
          label="Moeda:"
          array={ moedas }
          value={ currency }
          onChange={ this.handleChange }
        />
        <Select
          field="method"
          label="Método de pagamento:"
          array={ payMethod }
          value={ method }
          onChange={ this.handleChange }
        />
        <Select
          field="tag"
          label="Tag:"
          array={ tags }
          value={ tag }
          onChange={ this.handleChange }
        />
      </>
    );
  }

  renderTableTittle() {
    return (
      <thead>
        <tr>
          <th>Descrição</th>
          <th>Tag</th>
          <th>Método de pagamento</th>
          <th>Valor</th>
          <th>Moeda</th>
          <th>Câmbio utilizado</th>
          <th>Valor convertido</th>
          <th>Moeda de conversão</th>
          <th>Editar/Excluir</th>
        </tr>
      </thead>
    );
  }

  renderTable() {
    const { gastos, removeExpense } = this.props;
    return (
      <table>
        {this.renderTableTittle()}
        <tbody>
          {gastos.length === 0 ? (<tr><td>Adicione uma despesa</td></tr>) : gastos
            .map((currentExpenses) => {
              const {
                id,
                value,
                description,
                currency,
                method,
                tag,
                exchangeRates } = currentExpenses;
              return (
                <tr key={ id }>
                  <td>{description}</td>
                  <td>{tag}</td>
                  <td>{ method }</td>
                  <td>{ value}</td>
                  <td>
                    {exchangeRates[currency].name.split('/')[0]}
                  </td>
                  <td>{Number(exchangeRates[currency].ask).toFixed(2)}</td>
                  <td>
                    {(Number(value) * Number(exchangeRates[currency].ask)).toFixed(2)}
                  </td>
                  <td>Real</td>
                  <td>
                    <button
                      data-testid="delete-btn"
                      onClick={ () => removeExpense(currentExpenses) }
                      type="button"
                    >
                      Excluir
                    </button>

                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    );
  }

  render() {
    const { value, description } = this.state;
    return (
      <>
        <Header />
        <form>
          <label htmlFor="expense">
            Valor:
            <input
              type="text"
              name="value"
              id="expense"
              value={ value }
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="description">
            Descrição:
            <input
              type="text"
              name="description"
              id="description"
              value={ description }
              onChange={ this.handleChange }
            />
          </label>
          {this.renderWallet()}
          <button
            type="button"
            onClick={ this.handleClick }
          >
            Adicionar despesa
          </button>
          {this.renderTable()}
        </form>
      </>
    );
  }
}

Wallet.propTypes = {
  addExpense: PropTypes.func.isRequired,
  gastos: PropTypes.shape({
    length: PropTypes.number,
    map: PropTypes.func,
  }).isRequired,
  moedas: PropTypes.arrayOf(PropTypes.any).isRequired,
  handleCurrencies: PropTypes.func.isRequired,
  removeExpense: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  moedas: state.wallet.currencies,
  gastos: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  handleCurrencies: () => dispatch(fetchCurrencies()),
  addExpense: (state) => dispatch(addExpenses(state)),
  removeExpense: (state) => dispatch(removeExpenses(state)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);

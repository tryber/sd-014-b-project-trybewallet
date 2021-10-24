import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchRates, getCurrencies } from '../actions';
import fetchCurriences from '../services/requestsApi';

class ExpensesForm extends React.Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };
    this.handleCurrencies = this.handleCurrencies.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.renderValueInput = this.renderValueInput.bind(this);
    this.renderDescriptionInput = this.renderDescriptionInput.bind(this);
    this.renderTagInput = this.renderTagInput.bind(this);
  }

  componentDidMount() {
    this.handleCurrencies();
  }

  async handleCurrencies() {
    const { saveCurrencies } = this.props;
    const allCurrencies = await fetchCurriences();
    const currencies = allCurrencies.filter((currency) => currency !== 'USDT');
    saveCurrencies(currencies);
  }

  handleClick() {
    const { setExpenses } = this.props;
    this.setState((prevState) => ({ id: prevState.id + 1 }));
    setExpenses(this.state);

    this.setState({
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    });
  }

  handleChange({ target: { id, value } }) {
    this.setState({
      [id]: value,
    });
  }

  renderValueInput() {
    const { value } = this.state;
    return (
      <label htmlFor="value">
        Valor:
        <input
          type="number"
          id="value"
          value={ value }
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  renderDescriptionInput() {
    const { description } = this.state;
    return (
      <label htmlFor="description">
        Descrição:
        <input
          type="text"
          id="description"
          value={ description }
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  renderTagInput() {
    const { tag } = this.state;
    return (
      <label htmlFor="tag">
        Tag:
        <select
          id="tag"
          onChange={ this.handleChange }
          value={ tag }
        >
          <option>Alimentação</option>
          <option>Lazer</option>
          <option>Trabalho</option>
          <option>Transporte</option>
          <option>Saúde</option>
        </select>
      </label>
    );
  }

  render() {
    const { currency, method } = this.state;
    const { currencies } = this.props;
    return (
      <section>
        <form>
          { this.renderValueInput() }
          { this.renderDescriptionInput() }
          <label htmlFor="currency">
            Moeda:
            <select
              id="currency"
              value={ currency }
              onChange={ this.handleChange }
            >
              {currencies.map((item, index) => (
                <option key={ index }>
                  {item}
                </option>))}
            </select>
          </label>
          <label htmlFor="method">
            Método de pagamento:
            <select
              id="method"
              value={ method }
              onChange={ this.handleChange }
            >
              <option>Dinheiro</option>
              <option>Cartão de crédito</option>
              <option>Cartão de débito</option>
            </select>
          </label>
          { this.renderTagInput() }
        </form>
        <button
          type="button"
          onClick={ this.handleClick }
        >
          Adicionar despesa
        </button>
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  setExpenses: (state) => dispatch(fetchRates(state)),
  saveCurrencies: (array) => dispatch(getCurrencies(array)),
});

ExpensesForm.propTypes = {
  setExpenses: PropTypes.func.isRequired,
  saveCurrencies: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesForm);

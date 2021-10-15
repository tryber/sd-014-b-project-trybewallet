import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addExpenses, fetchAPI } from '../actions';
import SelectGenerator from './SelectGenerator';
import InputGenerator from './InputGenerator';

class FormExpense extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: 0,
      value: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      description: '',
    };

    this.renderSelect = this.renderSelect.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const { handleAPI } = this.props;
    handleAPI();
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  handleSubmit() {
    const { id, value, currency, method, tag, description } = this.state;
    const { handleExpenses, currentCurrencies, handleAPI } = this.props;
    handleAPI();
    this.setState((state) => ({ id: state.id + 1 }));

    const newExpenses = {
      id,
      value,
      description,
      currency,
      method,
      tag,
      exchangeRates: currentCurrencies,
    };

    handleExpenses(newExpenses);
  }

  renderSelect() {
    const paymentMethod = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    const category = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    const { currency, method, tag } = this.state;
    const { currencies } = this.props;

    return (
      <>
        <SelectGenerator
          label="Moeda"
          option={ currencies.filter((e) => e !== 'USDT') }
          name="currency"
          handleChange={ this.handleChange }
          value={ currency }
        />
        <SelectGenerator
          label="Método de pagamento"
          option={ paymentMethod }
          name="method"
          handleChange={ this.handleChange }
          value={ method }
        />
        <SelectGenerator
          label="Tag"
          option={ category }
          name="tag"
          handleChange={ this.handleChange }
          value={ tag }
        />
      </>
    );
  }

  render() {
    const { value, description } = this.state;
    return (
      <div>
        <form className="form-expense">
          <InputGenerator
            name="value"
            value={ value }
            handleChange={ this.handleChange }
            text="Valor"
          />
          { this.renderSelect() }
          <InputGenerator
            name="description"
            value={ description }
            handleChange={ this.handleChange }
            text="Descrição"
          />
          <button
            type="button"
            className="btn btn-warning"
            onClick={ () => this.handleSubmit() }
          >
            Adicionar Despesa
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: Object.keys(state.wallet.currencies),
  currentCurrencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  handleAPI: () => dispatch(fetchAPI()),
  handleExpenses: (state) => dispatch(addExpenses(state)),
});

FormExpense.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  currentCurrencies: PropTypes.objectOf(PropTypes.object).isRequired,
  handleAPI: PropTypes.func.isRequired,
  handleExpenses: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(FormExpense);

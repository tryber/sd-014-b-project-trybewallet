import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addEditExpenses, addExpenses, fetchAPI } from '../actions';
import SelectGenerator from './SelectGenerator';
import InputGenerator from './InputGenerator';

const paymentMethod = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
const category = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
class FormExpense extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: 0,
      value: '',
      currency: 'USD',
      method: paymentMethod[0],
      tag: category[0],
      description: '',
    };

    this.renderSelect = this.renderSelect.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const { dispatchRequestAPI } = this.props;
    dispatchRequestAPI();
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  setInitialState() {
    this.setState((prevState) => ({
      id: prevState.id + 1,
      value: '',
      currency: 'USD',
      method: paymentMethod[0],
      tag: category[0],
      description: '',
    }));
  }

  handleSubmit() {
    const { dispatchAddExpenses, currentCurrencies, dispatchRequestAPI } = this.props;
    dispatchRequestAPI();
    dispatchAddExpenses({ ...this.state, exchangeRates: currentCurrencies });
    this.setInitialState();
  }

  handleEditExpenses() {
    const { dispatchModifiedExpense } = this.props;
    dispatchModifiedExpense(this.state);
    this.setInitialState();
  }

  renderSelect() {
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
    const { isEdit } = this.props;
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
          { isEdit ? (
            <button
              type="button"
              className="btn btn-success"
              onClick={ () => this.handleEditExpenses() }
            >
              Editar Despesa
            </button>
          ) : (
            <button
              type="button"
              className="btn btn-warning"
              onClick={ () => this.handleSubmit() }
            >
              Adicionar Despesa
            </button>
          ) }

        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  currentCurrencies: state.wallet.currentCurrencies,
  isEdit: state.wallet.isEdit,
  editExpense: state.wallet.editExpense,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchRequestAPI: () => dispatch(fetchAPI()),
  dispatchAddExpenses: (state) => dispatch(addExpenses(state)),
  dispatchModifiedExpense: (state) => dispatch(addEditExpenses(state)),
});

FormExpense.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  currentCurrencies: PropTypes.objectOf(PropTypes.object),
  dispatchRequestAPI: PropTypes.func.isRequired,
  dispatchAddExpenses: PropTypes.func.isRequired,
  dispatchModifiedExpense: PropTypes.func.isRequired,
  isEdit: PropTypes.bool,
  editExpense: PropTypes.shape({}),
};

FormExpense.defaultProps = {
  currentCurrencies: {},
  isEdit: false,
  editExpense: {},
};

export default connect(mapStateToProps, mapDispatchToProps)(FormExpense);

import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { pagamento, tags } from '../data/ExpensesFormData';
import { getCurrenciesDataThunk, setDataExpenses } from '../redux/actions';
import Select from '../interactionComponents/Select';
import AddExpenseButton from '../interactionComponents/AddExpenseButton';
import Input from '../interactionComponents/Input';

class ExpensesForm extends Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      value: '',
      description: '',
      currency: '',
      method: '',
      tag: '',
      exchangeRates: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  async handleClick() {
    const { id } = this.state;
    const { dataCurrencies, setExpenses, getCurrencies } = this.props;
    await dataCurrencies();
    this.setState({ exchangeRates: getCurrencies });
    setExpenses(this.state);
    const updateId = id + 1;
    this.setState({
      id: updateId,
      value: '',
      description: '',
      currency: '',
      method: '',
      tag: '',
      exchangeRates: [],
    });
  }

  // eslint-disable-next-line max-lines-per-function
  render() {
    const { value, description, currency, method, tag } = this.state;
    const { getCurrencies } = this.props;
    return (
      <form className="m-2">
        <Input
          label="Valor"
          type="number"
          name="value"
          value={ value }
          onChange={ this.handleChange }
        />
        <Input
          type="string"
          label="Descrição"
          name="description"
          value={ description }
          onChange={ this.handleChange }
        />
        <label className="form-label m-1" htmlFor="currency">
          Moeda
          <select
            id="currency"
            name="currency"
            value={ currency }
            onChange={ this.handleChange }
          >
            {Object.values(getCurrencies).filter(({ codein }) => codein !== 'BRLT')
              .map(({ code }, index) => (
                <option key={ index } value={ code }>{code}</option>
              ))}
          </select>
        </label>
        <Select
          label="Método de pagamento"
          name="method"
          value={ method }
          handleChange={ this.handleChange }
          dataArray={ pagamento }
        />
        <Select
          label="Tag"
          name="tag"
          value={ tag }
          handleChange={ this.handleChange }
          dataArray={ tags }
        />
        <AddExpenseButton click={ this.handleClick } />
      </form>
    );
  }
}

ExpensesForm.propTypes = {
  dataCurrencies: PropTypes.func.isRequired,
  getCurrencies: PropTypes.objectOf(PropTypes.object).isRequired,
  setExpenses: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  getCurrencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  dataCurrencies: () => dispatch(getCurrenciesDataThunk()),
  setExpenses: (state) => dispatch(setDataExpenses(state)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesForm);

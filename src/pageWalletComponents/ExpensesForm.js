import React from 'react';
import { getCurrenciesDataThunk } from '../redux/actions';
import Input from '../interactionComponents/input';
import TextArea from '../interactionComponents/textArea';
import SelectLabel from '../interactionComponents/select';
import { paymentMethodData, tagData } from '../data/ExpensesFormData';

class ExpensesForm extends React.Component {
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
    this.handleChangeInputs = this.handleChangeInputs.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChangeInputs({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  async handleClick() {
    const { id } = this.state; // O id da despesa
    const { currenciesData, getCurrencies } = this.props; // define as props que serao puxadas
    // em mapDispatachToProps
    await currenciesData();
    this.setState({ exchangeRates: getCurrencies });
    const nextId = id + 1;
    this.setState({
      id: nextId,
      value: '',
      description: '',
      currency: '',
      method: '',
      tag: '',
      exchangeRates: [],
    });
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    const { value, description, currency, method, tag } = this.state;
    const { getCurrencies } = this.props;
    return (
      <form>
        <Input
          type="number"
          name="Valor"
          data-testid="email-input"
          value={ value }
          onChange={ this.handleChange }
        />
        <TextArea
          value={ description }
          name="Descrição"
          onChange={ this.handleChange }
        />
        <label className="form" htmlFor="currency">
          Moeda
          <select
            id="currency"
            name="currency"
            value={ currency }
            onChange={ this.handleChangeInputs }
            className="form-control"
          >
            {Object.values(getCurrencies).filter(({ codein }) => codein !== 'BRLT') // getCurrencies vai receber o estado de currencies
              .map(({ code }, index) => ( // code e codein esta no retorno da api
                <option key={ index } value={ code }>{code}</option>// !=='BRLT' exlcui informação da api
              ))}
          </select>
        </label>
        <SelectLabel
          id="method"
          value={ method }
          name="Método de pagamento"
          callbackFunc={ this.handleChange }
          data={ paymentMethodData }
        />
        <SelectLabel
          id="tag"
          value={ tag }
          name="tag"
          callbackFunc={ this.handleChange }
          data={ tagData }
        />
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  getCurrencies: state.wallet.currencies, // wallet é o reducer;
});

const mapDispatachToProps = (dispatch) => ({
  currenciesData: () => dispatch(getCurrenciesDataThunk()),
});

export default connect(mapStateToProps, mapDispatachToProps)(ExpensesForm);

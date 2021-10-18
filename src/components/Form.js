import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { pagamento, tags } from '../data';
import { fetchCurrencyData, setDataExpenses } from '../actions';
import InputDefault from './InputDefault';
import SelectDefault from './SelectDefault';
import ButtonDefault from './ButtonDefault';

class Form extends Component {
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

  render() {
    const { value, description, currency, method, tag } = this.state;
    const { getCurrencies } = this.props;
    return (
      <form>
        <InputDefault
          desc="Valor"
          name="value"
          value={ value }
          handleChange={ this.handleChangeInputs }
        />
        <InputDefault
          desc="Descrição"
          name="description"
          value={ description }
          handleChange={ this.handleChangeInputs }
        />
        <label className="form-label m-1" htmlFor="currency">
          Moeda
          <select
            id="currency"
            name="currency"
            value={ currency }
            onChange={ this.handleChangeInputs }
            className="form-control"
          >
            {Object.values(getCurrencies).filter(({ codein }) => codein !== 'BRLT')
              .map(({ code }, index) => (
                <option key={ index } value={ code }>{code}</option>
              ))}
          </select>
        </label>
        <SelectDefault
          desc="Método de pagamento"
          name="method"
          value={ method }
          handleChange={ this.handleChangeInputs }
          dataArray={ pagamento }
        />
        <SelectDefault
          desc="Tag"
          name="tag"
          value={ tag }
          handleChange={ this.handleChangeInputs }
          dataArray={ tags }
        />
        <ButtonDefault click={ this.handleClick } />
      </form>
    );
  }
}

Form.propTypes = {
  dataCurrencies: PropTypes.func.isRequired,
  getCurrencies: PropTypes.objectOf(PropTypes.object).isRequired,
  setExpenses: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  getCurrencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  dataCurrencies: () => dispatch(fetchCurrencyData()),
  setExpenses: (state) => dispatch(setDataExpenses(state)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);

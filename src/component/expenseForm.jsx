import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchAwesomeApi, setExpenses, loading } from '../actions';
import InputForm from './inputForm';

class ExpenseForm extends React.Component {
  constructor() {
    super();

    this.setandoEstado = this.setandoEstado.bind(this);
    this.submit = this.submit.bind(this);

    this.state = {
      id: 0,
      value: '',
      description: '',
      currency: '',
      method: '',
      tag: '',
      exchangeRates: '',
    };
  }

  componentDidMount() {
    const { fetchCoin } = this.props;
    fetchCoin();
  }

  setandoEstado({ target }) {
    const { value, id } = target;

    this.setState({
      [id]: value,
    });
  }

  async submit() {
    const { dispatchDespesas, funcLoading, fetchCoin } = this.props;
    const { id } = this.state;

    this.setState({
      exchangeRates: await fetchCoin(),
    });

    dispatchDespesas(this.state);

    this.setState({
      id: id + 1,
    });

    funcLoading(true);
  }

  render() {
    const { value, description, currency, method, tag } = this.state;
    const { arrayCoin } = this.props;
    const response = Object.keys(arrayCoin).filter((coin) => coin !== 'USDT');
    return (
      <form>
        <label htmlFor="value">
          Valor
          <input
            type="text"
            id="value"
            value={ value }
            onChange={ this.setandoEstado }
          />
        </label>
        <label htmlFor="description">
          Descrição
          <input
            type="text"
            id="description"
            value={ description }
            onChange={ this.setandoEstado }
          />
        </label>
        <label htmlFor="currency">
          Moeda
          <select id="currency" value={ currency } onChange={ this.setandoEstado }>
            {response.map((coin) => <option value={ coin } key={ coin }>{coin}</option>)}
          </select>
        </label>
        <InputForm
          method={ method }
          tag={ tag }
          func={ this.setandoEstado }
        />
        <button
          type="button"
          onClick={ () => this.submit() }
        >
          Adicionar despesa
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchCoin: () => dispatch(fetchAwesomeApi()),
  dispatchDespesas: (value) => dispatch(setExpenses(value)),
  funcLoading: (value) => dispatch(loading(value)),
});

const mapStateToProps = (state) => ({
  arrayCoin: state.wallet.currencies,
});

ExpenseForm.propTypes = {
  arrayCoin: PropTypes.array,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseForm);

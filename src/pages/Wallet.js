import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { savingWallet } from '../actions';
import Header from '../components/Header';
import InputBase from '../components/InputBase';
import getAPI from '../services/currencyAPI';
import SelectBase from '../components/SelectBase';
import { tagDefault, methodDefault } from '../data';

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      id: 0,
      value: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      description: '',
    };
  }

  async componentDidMount() {
    this.atualizaEstado();
  }

  atualizaEstado = async () => {
    const api = await getAPI();
    const resultAPI = Object.keys(api);
    const USDT = resultAPI.indexOf('USDT');
    resultAPI.splice(USDT, 1);
    this.setState({
      data: resultAPI,
    });
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleClick = async () => {
    const { walletSaved } = this.props;
    const { id, value, currency, method, tag, description } = this.state;
    const api = await getAPI();
    walletSaved({
      id,
      value,
      currency,
      method,
      tag,
      description,
      exchangeRates: api,
    });
    this.setState((prev) => ({
      id: prev.id + 1,
      value: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: tagDefault[0],
      description: '',
    }));
  }

  render() {
    const { data, value, description, method, tag, currency } = this.state;
    return (
      <div>
        <Header />
        <form>
          <InputBase
            onChange={ this.handleChange }
            name="value"
            type="number"
            label="Valor:"
            value={ value }
          />
          <SelectBase
            onChange={ this.handleChange }
            idLabel="currency"
            label="Moeda:"
            name="currency"
            mapIteration={ data }
            value={ currency }
          />
          <SelectBase
            onChange={ this.handleChange }
            idLabel="method"
            label="Método de pagamento:"
            name="method"
            mapIteration={ methodDefault }
            value={ method }
          />
          <SelectBase
            onChange={ this.handleChange }
            idLabel="tag"
            label="Tag:"
            name="tag"
            mapIteration={ tagDefault }
            value={ tag }
          />
          <InputBase
            onChange={ this.handleChange }
            name="description"
            type="text"
            label="Descrição:"
            value={ description }
          />
          <button type="button" onClick={ this.handleClick }>Adicionar despesa</button>
        </form>
      </div>);
  }
}

Wallet.propTypes = {
  walletSaved: PropTypes.func,
}.isRequired;

const mapDispatchToProps = (dispatch) => ({
  walletSaved: (value) => dispatch(savingWallet(value)),
});

export default connect(null, mapDispatchToProps)(Wallet);

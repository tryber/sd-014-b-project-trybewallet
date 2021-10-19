import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchCoins, getObjectCoins } from '../actions';

class WalletForm extends React.Component {
  constructor() {
    super();

    this.handleInput = this.handleInput.bind(this);
    this.addExpense = this.addExpense.bind(this);

    this.state = {
      id: 0,
      value: 0,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };
  }

  async componentDidMount() {
    const { receiveCoins } = this.props;
    await receiveCoins();
  }

  handleInput(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  async addExpense() {
    const { id } = this.state;
    const { receiveObjectCoins } = this.props;

    // Requisição para API
    await receiveObjectCoins(this.state);

    this.setState({
      id: id + 1,
    });
  }

  render() {
    const tags = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    const methods = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    const { allCoins } = this.props;
    return (
      <>
        <form>
          <label htmlFor="input-despesas">
            Valor:
            <input
              name="value"
              id="input-despesas"
              type="text"
              onChange={ this.handleInput }
            />
          </label>
          <label htmlFor="input-descricao">
            Descrição:
            <input
              name="description"
              id="input-descricao"
              type="text"
              onChange={ this.handleInput }
            />
          </label>
          <label htmlFor="select-moeda">
            Moeda:
            <select name="currency" id="select-moeda" onChange={ this.handleInput }>
              { allCoins.map((coin, id) => <option key={ id }>{ coin }</option>) }
            </select>
          </label>
          <label htmlFor="select-pagamento">
            Método de pagamento:
            <select name="method" onChange={ this.handleInput } id="select-pagamento">
              { methods.map((method) => <option key={ method }>{ method }</option>)}
            </select>
          </label>
          <label htmlFor="select-tag">
            Tag:
            <select name="tag" onChange={ this.handleInput } id="select-tag">
              { tags.map((tag) => <option key={ tag }>{ tag }</option>) }
            </select>
          </label>
        </form>
        <button type="button" onClick={ this.addExpense }>Adicionar despesa</button>
      </>
    );
  }
}

WalletForm.propTypes = {
  receiveCoins: PropTypes.func.isRequired,
  allCoins: PropTypes.arrayOf(PropTypes.string).isRequired,
  receiveObjectCoins: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  receiveCoins: async () => dispatch(await fetchCoins()),
  receiveObjectCoins: async (localState) => dispatch(await getObjectCoins(localState)),
});

const mapStateToProps = (globalState) => ({
  allCoins: globalState.wallet.currencies,
  objectCoins: globalState.wallet.objectCoins,
});

export default connect(mapStateToProps, mapDispatchToProps)(WalletForm);

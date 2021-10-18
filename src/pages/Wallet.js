import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/header';
import { fecthCurrencies, addExpense } from '../actions/index';
import Select from '../components/select';
import TableWallet from '../components/tableWallet';

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.renderForm = this.renderForm.bind(this);
  }

  componentDidMount() {
    const { getCurrencies } = this.props;
    getCurrencies();
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  async handleClick(event) {
    event.preventDefault();
    const { id, currency, method, tag, description, value } = this.state;
    const { onSubmit } = this.props;

    const api = await fetch('https://economia.awesomeapi.com.br/json/all');
    const exchangeRates = await api.json();

    this.setState((prevState) => ({ id: prevState.id + 1 }));
    onSubmit({ value, description, exchangeRates, id, currency, method, tag });
    this.setState({
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    });
  }

  renderForm() {
    const { description, value } = this.state;
    return (
      <div>
        <form>
          <label htmlFor="value">
            Valor:
            <input
              id="value"
              name="value"
              value={ value }
              onChange={ this.handleChange }
            />
          </label>
          <br />
          <label htmlFor="description">
            Descrição:
            <input
              id="description"
              name="description"
              value={ description }
              onChange={ this.handleChange }
            />
          </label>
        </form>
      </div>
    );
  }

  render() {
    const { email, currencies } = this.props;
    const { currency, method, tag } = this.state;
    return (
      <div>
        <Header email={ email } />
        { this.renderForm() }
        <Select
          currencies={ currencies }
          exchange={ currency }
          method={ method }
          tag={ tag }
          handleChange={ this.handleChange }
        />
        <button
          type="submit"
          onClick={ this.handleClick }
          value="Adicionar Despesas"
        >
          Adicionar Despesas
        </button>
        <TableWallet />
      </div>);
  }
}

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  getCurrencies: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  onSubmit: PropTypes.func.isRequired,
};

const mapStateToProps = ({ user, wallet }) => ({
  email: user.email,
  currencies: wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(fecthCurrencies()),
  onSubmit: (expense) => dispatch(addExpense(expense)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fecthCurrencies, addExpense } from '../actions/index';
import Select from './Select';

class WalletForm extends React.Component {
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
  }

  componentDidMount() {
    const { getCurrencies } = this.props;
    getCurrencies();
  }

  async handleClick() {
    const { id, currency, method, tag, description, value } = this.state;
    const { onSubmit } = this.props;
    const fetchApi = await fetch('https://economia.awesomeapi.com.br/json/all');
    const exchangeRates = await fetchApi.json();
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

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { description, value, tag, method, currency } = this.state;
    const { currencies } = this.props;
    return (
      <form>
        <label htmlFor="value-input">
          Valor:
          <input
            onChange={ this.handleChange }
            value={ value }
            type="text"
            id="value-input"
            name="value"
          />
        </label>
        <label htmlFor="desc-input">
          Descrição:
          <input
            onChange={ this.handleChange }
            value={ description }
            type="text"
            id="desc-input"
            name="description"
          />
        </label>
        <Select
          currency={ currency }
          currencies={ currencies }
          method={ method }
          tag={ tag }
          handleChange={ this.handleChange }
        />
        <button type="button" onClick={ this.handleClick }>Adicionar despesa</button>
      </form>
    );
  }
}

WalletForm.propTypes = {
  getCurrencies: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const mapStateToProps = ({ wallet }) => ({
  currencies: wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(fecthCurrencies()),
  onSubmit: (expense) => dispatch(addExpense(expense)),
});

export default connect(mapStateToProps, mapDispatchToProps)(WalletForm);

import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { fetchCurrenciesAPI } from '../actions';

class WalletForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      currency: 'USD',
      payment: '',
      category: '',
      description: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const { getCurrencies } = this.props;
    getCurrencies();
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    const { currencies } = this.props;
    const { value, description, currency, payment, category } = this.state;
    return (
      <form>
        <label htmlFor="value">
          Valor :
          <input
            onChange={ this.handleChange }
            value={ value }
            type="text"
            name="value"
            id="value"
          />
        </label>
        <label htmlFor="description">
          Descrição :
          <input value={ description } type="text" name="description" id="description" />
        </label>
        <label htmlFor="currency">
          Moeda :
          <select value={ currency } name="currency" id="currency">
            {currencies
              .map((item) => (<option value={ item } key={ item }>{ item }</option>))}
          </select>
        </label>
        <label htmlFor="payment">
          Método de pagamento :
          <select value={ payment } name="payment" id="payment">
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="category">
          Tag :
          <select value={ category } name="category" id="category">
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
      </form>
    );
  }
}

WalletForm.propTypes = {
  currencies: PropTypes.shape({
    map: PropTypes.func,
  }),
  getCurrencies: PropTypes.func,
}.isRequired;

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: (state) => dispatch(fetchCurrenciesAPI(state)),
});

export default connect(mapStateToProps, mapDispatchToProps)(WalletForm);

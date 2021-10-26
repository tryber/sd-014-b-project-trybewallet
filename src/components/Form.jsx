import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Input from './Input';

class Form extends React.Component {
  constructor() {
    super();
    // this.state = {
    // value: 0,
    // description: '',
    // currency: '',
    // paymenyMethod: '',
    // category: '',
    // };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  render() {
    const { currencies } = this.props;
    return (
      <form>
        <Input label="Valor" name="value" />
        <Input label="Descrição" name="description" />

        <label htmlFor="coin">
          Moeda
          <select id="coin">
            {Object.keys(currencies).map((currency, index) => (
              <option key={ index } value={ currency }>{currency}</option>
            ))}
          </select>
        </label>

        <label htmlFor="payment-method">
          Método de pagamento
          <select id="payment-method">
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>

        <label htmlFor="category">
          Tag
          <select id="category" onChange={ this.handleChange }>
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
Form.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

export default connect(mapStateToProps)(Form);

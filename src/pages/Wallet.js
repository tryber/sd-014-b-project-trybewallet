import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addExpenses, fetchCurrencies } from '../actions';
import Header from '../components/Header';
import Input from '../components/Input';
import Select from '../components/Select';
import Button from '../components/Button';

class Wallet extends React.Component {
  constructor() {
    super();

    this.state = {
      id: 0,
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const { fetchCoinsApi } = this.props;
    fetchCoinsApi();
  }

  handleChange({ target: { value, name } }) {
    this.setState({ [name]: value });
  }

  handleClick() {
    const { expense, fetchCoinsApi } = this.props;
    fetchCoinsApi();
    expense(this.state);
    this.setState((prevState) => ({ id: prevState.id + 1 }));
  }

  renderSelects() {
    const { currency, method, tag } = this.state;
    const { currencies } = this.props;

    return (
      <>
        <Select
          labelText="Moeda"
          name="currency"
          id="currency"
          options={ currencies }
          value={ currency }
          onChange={ this.handleChange }
        />
        <Select
          labelText="Método de pagamento"
          name="method"
          id="payment"
          options={ ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'] }
          value={ method }
          onChange={ this.handleChange }
        />
        <Select
          labelText="Tag"
          name="tag"
          id="tag"
          options={ ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'] }
          value={ tag }
          onChange={ this.handleChange }
        />
      </>
    );
  }

  render() {
    const { userEmail } = this.props;
    const { value, description } = this.state;
    return (
      <>
        <Header userEmail={ userEmail } />
        <form>
          <Input
            labelText="Valor"
            type="text"
            name="value"
            id="value"
            value={ value }
            onChange={ this.handleChange }
          />
          <Input
            labelText="Descrição"
            type="text"
            name="description"
            id="description"
            value={ description }
            onChange={ this.handleChange }
          />
          {this.renderSelects()}
          <Button onClick={ this.handleClick } textButton="Adicionar despesa" />
        </form>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCoinsApi: () => dispatch(fetchCurrencies()),
  expense: (state) => dispatch(addExpenses(state)),
});

Wallet.propTypes = {
  userEmail: PropTypes.string.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  fetchCoinsApi: PropTypes.func.isRequired,
  expense: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);

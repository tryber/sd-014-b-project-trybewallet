import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { resultApi, resultApiExpenses } from '../actions';

//  feito com ajuda do Vitor Silva

class WalletForm extends React.Component {
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
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    const { armazenaApiEstadoGLobal } = this.props;
    armazenaApiEstadoGLobal();
  }

  onSubmit() {
    const { armazenaApiExpense } = this.props;
    this.setState((prevState) => ({ id: prevState.id + 1 }));
    armazenaApiExpense(this.state);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  renderForm() {
    const { description, value, currency } = this.state;
    const { currencies } = this.props;
    return (
      <div>
        <label
          htmlFor="value"
        >
          Valor
          <input
            name="value"
            id="value"
            value={ value }
            onChange={ this.handleChange }
            type="number"
          />
        </label>
        <label
          htmlFor="description"
        >
          Descrição
          <input
            name="description"
            id="description"
            value={ description }
            onChange={ this.handleChange }
            type="text"
          />
        </label>
        <label htmlFor="currency">
          Moeda
          <select
            id="currency"
            value={ currency }
            name="currency"
            onChange={ this.handleChange }
          >
            {currencies.map((coin, index) => (
              <option key={ index }>{coin}</option>
            ))}
          </select>
        </label>
      </div>
    );
  }

  renderForm2() {
    const { method, tag } = this.state;
    return (
      <div>
        <label htmlFor="method">
          Método de Pagamento
          <select
            id="method"
            value={ method }
            name="method"
            onChange={ this.handleChange }
          >
            Método de Pagamento
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag:
          <select id="tag" name="tag" value={ tag } onChange={ this.handleChange }>
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
          <button type="button" onClick={ this.onSubmit }>Adicionar despesa</button>
        </label>
      </div>
    );
  }

  render() {
    return (
      <div>
        <form>
          {this.renderForm()}
          {this.renderForm2()}
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  armazenaApiEstadoGLobal: () => dispatch(resultApi()),
  armazenaApiExpense: (state) => dispatch(resultApiExpenses(state)),
}
);

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  exchange: state.wallet.exchange,
});

WalletForm.propTypes = {
  currencies: PropTypes.func.isRequired,
  armazenaApiEstadoGLobal: PropTypes.func.isRequired,
  armazenaApiExpense: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(WalletForm);

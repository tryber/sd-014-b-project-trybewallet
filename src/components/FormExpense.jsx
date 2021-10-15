import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addExpenses, fetchAPI } from '../actions';
import SelectGenerator from './SelectGenerator';
import InputGenerator from './InputGenerator';

class FormExpense extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      currency: 'usd',
      payment: 'dinheiro',
      tag: 'alimentação',
      describe: '',
    };

    this.renderSelect = this.renderSelect.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const { handleAPI } = this.props;
    handleAPI();
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  renderSelect() {
    const paymentMethod = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    const category = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    const { currency, payment, tag } = this.state;
    const { currenncies } = this.props;

    return (
      <>
        <SelectGenerator
          label="Moeda"
          option={ currenncies.filter((e) => e !== 'USDT') }
          name="currency"
          handleChange={ this.handleChange }
          value={ currency }
        />
        <SelectGenerator
          label="Método de pagamento"
          option={ paymentMethod }
          name="payment"
          handleChange={ this.handleChange }
          value={ payment }
        />
        <SelectGenerator
          label="Tag"
          option={ category }
          name="tag"
          handleChange={ this.handleChange }
          value={ tag }
        />
      </>
    );
  }

  render() {
    const { value, describe } = this.state;
    const { handleExpenses } = this.props;
    return (
      <div>
        <form className="form-expense">
          <InputGenerator
            name="value"
            value={ value }
            handleChange={ this.handleChange }
            text="Valor"
          />
          { this.renderSelect() }
          <InputGenerator
            name="describe"
            value={ describe }
            handleChange={ this.handleChange }
            text="Descrição"
          />
          <button
            type="button"
            className="btn btn-warning"
            onClick={ () => handleExpenses(this.state) }
          >
            Adicionar Despesa
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currenncies: Object.keys(state.wallet.currencies),
});

const mapDispatchToProps = (dispatch) => ({
  handleAPI: () => dispatch(fetchAPI()),
  handleExpenses: (state) => dispatch(addExpenses(state)),
});

FormExpense.propTypes = {
  currenncies: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleAPI: PropTypes.func.isRequired,
  handleExpenses: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(FormExpense);

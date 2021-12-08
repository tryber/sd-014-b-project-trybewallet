import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import InputDefault from './InputDefault';
import SelectDefault from './SelectDefault';
import '../styles/ExpenseForm.css';

class ExpenseForm extends Component {
  constructor(props) {
    super(props);

    const { values: { value, description, currency, method, tag } } = props;
    this.state = {
      value,
      description,
      currency,
      method,
      tag,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    const { currencies, onSubmit, isEditing } = this.props;
    const { value, description, method, tag, currency } = this.state;
    return (
      <form className="expense-form">
        <InputDefault
          name="value"
          onChange={ this.handleChange }
          value={ value }
          label="Valor"
        />
        <InputDefault
          name="description"
          onChange={ this.handleChange }
          value={ description }
          label="Descrição"
        />
        <SelectDefault
          name="currency"
          options={ currencies }
          onChange={ this.handleChange }
          value={ currency }
          label="Moeda"
        />
        <SelectDefault
          name="method"
          options={ ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'] }
          onChange={ this.handleChange }
          value={ method }
          label="Método de pagamento"
        />
        <SelectDefault
          name="tag"
          options={ ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'] }
          onChange={ this.handleChange }
          value={ tag }
          label="Tag"
        />
        <button
          type="submit"
          className="submit-btn"
          onClick={ (event) => {
            event.preventDefault();
            onSubmit({ value, description, currency, method, tag });
          } }
        >
          { isEditing ? 'Editar Despesa' : 'Adicionar Despesa' }
        </button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

ExpenseForm.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  values: PropTypes.shape({
    value: PropTypes.string,
    description: PropTypes.string,
    currency: PropTypes.string,
    method: PropTypes.string,
    tag: PropTypes.string,
  }),
  onSubmit: PropTypes.func.isRequired,
  isEditing: PropTypes.bool,
};

ExpenseForm.defaultProps = {
  isEditing: false,
  values: {
    value: '',
    description: '',
    currency: 'USD',
    method: 'Dinheiro',
    tag: 'Alimentação',
  },
};

export default connect(mapStateToProps, null)(ExpenseForm);

import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { saveExpenses, fetchAPI } from '../actions';
import InputValue from './InputValue';
import InputSelect from './InputSelect';
import SelectCurrency from './SelectCurrency';

class AddForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: 0,
      value: '0',
      description: '',
      currency: 'USD',
      method: 'money',
      tag: 'food',
      exchangeRates: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  // Com apoio do Lucas
  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  handlerSubmit() {
    const { id } = this.state;
    const { requestApi, currencies } = this.props;
    requestApi();
    const { saveExpenseData } = this.props;
    saveExpenseData({ ...this.state, exchangeRates: currencies });
    this.setState({ id: id + 1 });
  }

  render() {
    const { value, description, currency, method, tag } = this.state;
    return (
      <div>
        <form>
          <InputValue
            label="Valor"
            type="text"
            name="value"
            handleChange={ this.handleChange }
            value={ value }
          />
          <SelectCurrency
            handleChange={ this.handleChange }
            value={ currency }
          />
          <InputSelect
            label="Método de pagamento"
            name="method"
            data={ ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'] }
            handleChange={ this.handleChange }
            value={ method }
          />
          <InputSelect
            label="Tag"
            name="tag"
            data={ ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'] }
            handleChange={ this.handleChange }
            value={ tag }
          />
          <InputValue
            label="Descrição"
            name="description"
            type="text"
            handleChange={ this.handleChange }
            value={ description }
          />
          <button type="button" onClick={ this.handlerSubmit }>Adicionar despesa</button>
        </form>
      </div>
    );
  }
}

AddForm.propTypes = {
  saveExpenseData: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(
    PropTypes.string.isRequired,
  ).isRequired,
  requestApi: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  saveExpenseData: (values) => dispatch(saveExpenses(values)),
  requestApi: () => dispatch(fetchAPI()),
});

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

export default connect(mapStateToProps, mapDispatchToProps)(AddForm);

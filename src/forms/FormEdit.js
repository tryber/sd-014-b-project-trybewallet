import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Inputs, Button, Select } from '../components';
import { actionAddEditExpense } from '../actions';

class FormEdit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };

    this.renderSelects = this.renderSelects.bind(this);
    this.getInfo = this.getInfo.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.getInfo();
  }

  getInfo() {
    const { expenses, editId } = this.props;
    const editItem = expenses.find((item) => item.id === editId);
    // const { id, value, description, currency, method, tag, exchangeRates } = editItem;
    this.setState({ ...editItem });
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  handleClick() {
    const { expenses, editId, addEditExpense } = this.props;
    const filterList = expenses.filter((item) => item.id !== editId);
    const addToList = [...filterList, this.state];
    const newExpenseList = addToList.sort((a, b) => a.id - b.id);
    addEditExpense(newExpenseList);
  }

  renderSelects(name, label, options, value) {
    return (
      <Select
        name={ name }
        page="wallet"
        label={ label }
        onHandleChange={ this.handleChange }
        options={ options }
        value={ value }
      />
    );
  }

  render() {
    const methodOptions = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    const tagOptions = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    const { currencies } = this.props;
    const { value, description, currency, method, tag } = this.state;

    return (
      <form>
        <Inputs
          value={ value }
          name="value"
          page="wallet"
          type="number"
          label="Valor"
          onHandleChange={ this.handleChange }
        />
        <Inputs
          value={ description }
          name="description"
          page="wallet"
          type="text"
          label="Descrição"
          onHandleChange={ this.handleChange }
        />
        {this.renderSelects('currency', 'Moeda', currencies, currency)}
        {this.renderSelects('method', 'Método de pagamento', methodOptions, method)}
        {this.renderSelects('tag', 'Tag', tagOptions, tag)}
        <Button name="Editar despesa" onHandleClick={ this.handleClick } />
      </form>
    );
  }
}

FormEdit.propTypes = {
  editId: PropTypes.number.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  addEditExpense: PropTypes.func.isRequired,
};

const mapStateToProps = ({ wallet }) => ({
  expenses: wallet.expenses,
  currencies: wallet.currencies,
  editId: wallet.editId,
});

const mapDispatchToProps = (dispatch) => ({
  addEditExpense: (payload) => dispatch(actionAddEditExpense(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FormEdit);

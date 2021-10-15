import React from 'react';
import { connect } from 'react-redux';

class CategoryOfExpenseForm extends React.Component {
  render() {
    return (
      <label htmlFor="categoryExpense-form-label">
        Tag
        <select id="categoryExpense-form-label">
          <option value="Alimentação">Alimentação</option>
          <option value="Lazer">Lazer</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Transporte">Transporte</option>
          <option value="Saúde">Saúde</option>
        </select>
      </label>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

export default connect(mapStateToProps, null)(CategoryOfExpenseForm);

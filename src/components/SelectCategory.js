import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class CategoryOfExpenseForm extends React.Component {
  render() {
    const { onChange, value, name } = this.props;
    return (
      <label htmlFor="categoryExpense-form-label">
        Tag
        <select
          id="categoryExpense-form-label"
          onChange={ onChange }
          value={ value }
          name={ name }
        >
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

CategoryOfExpenseForm.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, null)(CategoryOfExpenseForm);

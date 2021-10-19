import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ButtonComponent from './ButtonComponent';
import { deleteExpensesAction } from '../actions';

class TableComponent extends React.Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
    this.tHeadRender = this.tHeadRender.bind(this);
  }

  handleClick({ target }) {
    const { expenses, dispatchExpensesToGlobal } = this.props;
    const newExpenses = expenses.filter(({ id }) => id !== Number(target.id));
    dispatchExpensesToGlobal(newExpenses);
  }

  tHeadRender() {
    return (
      <thead>
        <tr>
          <th>Descrição</th>
          <th>Tag</th>
          <th>Método de pagamento</th>
          <th>Valor</th>
          <th>Moeda</th>
          <th>Câmbio utilizado</th>
          <th>Valor convertido</th>
          <th>Moeda de conversão</th>
          <th>Editar/Excluir</th>
        </tr>
      </thead>
    );
  }

  render() {
    const { expenses } = this.props;
    return (
      <table>
        {this.tHeadRender()}
        <tbody>
          {expenses.map((
            {
              id,
              description,
              tag,
              method,
              value,
              currency,
              exchangeRates: {
                [currency]: { ask, name } },
            },
          ) => (
            <tr key={ id }>
              <td>{description}</td>
              <td>{tag}</td>
              <td>{method}</td>
              <td>{value}</td>
              <td>{name}</td>
              <td>{Number(ask).toFixed(2)}</td>
              <td>{(Number(value) * Number(ask)).toFixed(2)}</td>
              <td>Real</td>
              <td>
                <ButtonComponent
                  id={ id }
                  onClick={ this.handleClick }
                  text="Delete"
                  datatestid="delete-btn"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

TableComponent.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  dispatchExpensesToGlobal: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  dispatchExpensesToGlobal: (expenses) => dispatch(deleteExpensesAction(expenses)),
});

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps, mapDispatchToProps)(TableComponent);

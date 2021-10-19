import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Button from './Button';

import { editExpenses, reduceTotal } from '../actions';

class TableRows extends React.Component {
  constructor(props) {
    super(props);

    this.getRate = this.getRate.bind(this);
    this.getTotal = this.getTotal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.getTotal();
  }

  componentDidUpdate() {
    this.getTotal();
  }

  componentWillUnmount() {
    const { reduceTotals } = this.props;
    reduceTotals(0.00);
  }

  getRate() {
    const { expenses: { currency, exchangeRates } } = this.props;
    const rate = exchangeRates.find(
      (array) => array[0] === currency,
    )[1]
      .ask;
    return Number(rate).toFixed(2);
  }

  getTotal() {
    const { reduceTotals, expenseList } = this.props;
    const conversions = [];
    expenseList.forEach((expense) => {
      const rate = this.getRate();
      const conversion = (expense.value * rate).toFixed(2);
      conversions.push(Number(conversion));
    });
    const total = conversions.reduce((a, b) => a + b);
    reduceTotals(total);
  }

  async handleSubmit({ id }) {
    const { updateExpenses, expenseList } = this.props;
    const update = expenseList.filter((expense) => expense.id !== id);
    await updateExpenses(update);
  }

  render() {
    const { expenses: {
      currency,
      description,
      exchangeRates,
      id,
      method,
      tag,
      value,
    } } = this.props;
    const rate = this.getRate();
    const conversion = (value * rate).toFixed(2);
    return (
      <tr>
        <td header="description">{ description }</td>
        <td header="tag">{ tag }</td>
        <td header="method">{ method }</td>
        <td header="value">{ value }</td>
        <td header="currency">
          { exchangeRates.find(
            (array) => array[0] === currency,
          )[1]
            .name
            .replace('/Real Brasileiro', '') }
        </td>
        <td header="rate">{ rate }</td>
        <td header="conversion">{ conversion }</td>
        <td header="home-currency">Real</td>
        <td header="button">
          <Button
            id="delete-btn"
            label="Excluir"
            onClick={ () => this.handleSubmit({ id }) }
          />
        </td>
      </tr>
    );
  }
}

const mapStateToProps = (state) => ({
  expenseList: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  updateExpenses: (object) => dispatch(editExpenses(object)),
  reduceTotals: (value) => dispatch(reduceTotal(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TableRows);

TableRows.propTypes = {
  expenseList: PropTypes.objectOf(PropTypes.any).isRequired,
  expenses: PropTypes.objectOf(PropTypes.any).isRequired,
  reduceTotals: PropTypes.func.isRequired,
  updateExpenses: PropTypes.func.isRequired,
};

TableRows.defaultProps = {

};

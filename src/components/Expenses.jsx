import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import FormHeader from './FormHeader';
import { getApi, getCurrency } from '../actions';

class Expenses extends Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      value: 0,
      description: '',
      currency: 'USD',
      method: 'Cash',
      tag: 'Food',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const { getCurrencies } = this.props;
    getCurrencies();
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  handleClick() {
    const { expense } = this.props;
    expense({ ...this.state });
    this.setState((prevState) => ({
      id: prevState.id + 1,
      value: 0,
      description: '',
      currency: 'USD',
      method: 'Cash',
      tag: 'Food',
    }));
  }

  render() {
    const { value, description, currency, method, tag } = this.state;
    const { currencies, total, user } = this.props;
    return (
      <div>
        <form>
          <label htmlFor="infos">
            Usuario:
            <span data-testid="email-field">{user}</span>
            <div data-testid="total-field">
              Despesas:
              <span>{ total }</span>
              Moeda:
              <span data-testid="header-currency-field">BRL</span>
            </div>
          </label>
        </form>
        <FormHeader
          currencies={ currencies }
          handleChange={ this.handleChange }
          value={ value }
          description={ description }
          currency={ currency }
          method={ method }
          tag={ tag }
          onClick={ this.handleClick }
        />
      </div>
    );
  }
}

Expenses.propTypes = {
  getCurrencies: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  expense: PropTypes.func.isRequired,
  total: PropTypes.string,
  user: PropTypes.string.isRequired,
};

Expenses.defaultProps = {
  total: '0',
};

const mapStateToProps = (state) => ({
  user: state.user.email,
  currencies: state.wallet.currencies,
  total: state.wallet.total,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(getApi()),
  expense: (expense) => dispatch(getCurrency(expense)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Expenses);

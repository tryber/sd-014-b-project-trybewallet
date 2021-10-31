import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React from 'react';
import Header from '../components/Header';
import AddExpense from '../components/AddExpense';
import ExpensesTable from '../components/ExpensesTable';
import EditExpense from '../components/EditExpense';
import { updateCurrencies } from '../actions';
import { fetchCurrenciesList } from '../services/currencyQuotesApi';

class Wallet extends React.Component {
  constructor() {
    super();

    this.state = {
      isEditing: false,
      currentlyEditing: undefined,
      id: undefined,
    };

    this.handleEditing = this.handleEditing.bind(this);
  }

  componentDidMount() {
    this.getCurrenciesList();
  }

  async getCurrenciesList() {
    const { setCurrencies } = this.props;
    const currencies = await fetchCurrenciesList();
    setCurrencies(currencies);
  }

  handleEditing(id) {
    const { expenses } = this.props;
    const currentlyEditing = expenses.find((exp) => exp.id === id);
    this.setState((prevState) => ({
      isEditing: !prevState.isEditing,
      id,
      currentlyEditing,
    }));
  }

  render() {
    const { isEditing, id, currentlyEditing } = this.state;
    return (
      <>
        <Header />
        { isEditing
          ? <EditExpense id={ id } expense={ currentlyEditing } />
          : <AddExpense /> }
        <ExpensesTable handleEditing={ this.handleEditing } />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrencies: (currencies) => dispatch(updateCurrencies(currencies)),
});

Wallet.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object),
  setCurrencies: PropTypes.func.isRequired,
};

Wallet.defaultProps = {
  expenses: [],
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);

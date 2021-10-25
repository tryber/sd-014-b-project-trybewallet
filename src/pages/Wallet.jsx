import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../components/Header';
import Form from '../components/Form';
import { fetchCurrencies } from '../actions/currenciesAction';
import ExpensesList from '../components/ExpensesList';

class Wallet extends React.Component {
  componentDidMount() {
    const { getCurrencies } = this.props;
    getCurrencies();
  }

  render() {
    const { loading, currencies } = this.props;
    return (
      <div>
        <Header />
        {
          loading
            ? <div>Carregando...</div>
            : <Form currencies={ currencies } />
        }
        <ExpensesList />
      </div>
    );
  }
}

Wallet.propTypes = {
  loading: PropTypes.bool,
}.isRequired;

const mapStateToProps = (state) => ({
  loading: state.currenciesReducer.loading,
  currencies: state.currenciesReducer.currencies,
  error: state.currenciesReducer.error,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(fetchCurrencies()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);

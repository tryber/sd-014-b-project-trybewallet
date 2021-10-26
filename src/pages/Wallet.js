import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Form from '../components/Form';
import Header from '../components/Header';
import { submitCurrencies } from '../actions';

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true,
    };
    this.requestApiCurrencies = this.requestApiCurrencies.bind(this);
  }

  componentDidMount() {
    this.requestApiCurrencies();
  }

  async requestApiCurrencies() {
    const { getCurrencies } = this.props;
    const URL = 'https://economia.awesomeapi.com.br/json/all';
    const result = await fetch(URL);
    const response = await result.json();
    console.log(response);
    getCurrencies(response);
    this.setState({ loading: false });
  }

  render() {
    const { loading } = this.state;
    return (
      <div>
        <Header />
        {loading
          ? <h1>Carregando...</h1>
          : <Form />}
      </div>);
  }
}

Wallet.propTypes = {
  getCurrencies: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: (currencies) => dispatch(submitCurrencies(currencies)),
});

export default connect(null, mapDispatchToProps)(Wallet);

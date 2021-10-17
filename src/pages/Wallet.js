import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import Form from '../components/Form';

class Wallet extends React.Component {
  constructor() {
    super();

    this.state = {
      currencies: [],
    };

    this.fetchCurrencies = this.fetchCurrencies.bind(this);
  }

  componentDidMount() {
    this.fetchCurrencies();
  }

  async fetchCurrencies() {
    const URL = await fetch('https://economia.awesomeapi.com.br/json/all');
    const result = await URL.json();
    const coins = Object.keys(result).filter((coin) => (
      coin !== 'USDT'));
    this.setState({
      currencies: coins,
    });
  }

  render() {
    const { userEmail } = this.props;
    const { currencies } = this.state;
    return (
      <>
        <Header userEmail={ userEmail } />
        <Form currencies={ currencies } />
      </>
    );
  }
}

Wallet.propTypes = {
  userEmail: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
});

export default connect(mapStateToProps, null)(Wallet);

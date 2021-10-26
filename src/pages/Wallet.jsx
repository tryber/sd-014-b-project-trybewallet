import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../components/Header';
import { getCurrenciesApiThunk } from '../actions/currencies';
import Select from '../components/Select';

class Wallet extends React.Component {
  constructor() {
    super();

    this.state = {
      currency: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const { setCurrencies } = this.props;
    setCurrencies();
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { currency } = this.state;
    const { currencies, isLoading } = this.props;
    return isLoading ? <Header />
      : (
        <>
          <Header />
          <form>
            <Select
              nameLabel="Moedas"
              id="currencies"
              name="currency"
              value={ currency }
              onChange={ this.handleChange }
              arrOptions={ currencies }
              defaultOption="Moeda"
            />
          </form>
        </>
      );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  isLoading: state.wallet.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrencies: () => dispatch(getCurrenciesApiThunk()),
});

Wallet.propTypes = {
  currencies: PropTypes.array,
  isLoading: PropTypes.bool,
  setCurrencies: PropTypes.func,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);

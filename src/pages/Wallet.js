import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { LOAD_CURRENCIES } from '../actions';
import Header from '../components/Header';
import InputLabel from '../components/InputLabel';
import SelectLabel from '../components/SelectLabel';
import DATA from '../data';

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      // Valor: '',
      // Descrição: '',
      // Moeda: 'USD',
      // 'Método de pagamento': 'Dinheiro',
      // Tag: 'Alimentação',
    };
  }

  componentDidMount() {
    const { getCurrencies } = this.props;
    getCurrencies();
  }

  handleEntries = ({ target: { name, value } }) => this.setState({ [name]: value });

  render() {
    const { hasCurrencies, currencies } = this.props;
    return (
      <div>
        <Header />
        <form>
          <InputLabel name="Valor" callbackFunc={ this.handleEntries } />
          <SelectLabel
            name="Moeda"
            callbackFunc={ this.handleEntries }
            isLoaded={ hasCurrencies }
            ITEMS={ currencies }
          />
          <SelectLabel
            name="Método de pagamento"
            callbackFunc={ this.handleEntries }
            ITEMS={ DATA.payment }
          />
          <SelectLabel
            name="Tag"
            callbackFunc={ this.handleEntries }
            ITEMS={ DATA.tag }
          />
          <InputLabel name="Descrição" callbackFunc={ this.handleEntries } />
        </form>
      </div>);
  }
}

Wallet.propTypes = {
  currencies: PropTypes.arrayOf(String).isRequired,
  hasCurrencies: PropTypes.bool.isRequired,
  getCurrencies: PropTypes.func.isRequired,
};

function mapState({ wallet: { hasCurrencies, currencies } }) {
  return { hasCurrencies, currencies };
}

function mapDispatch(dispatch) {
  return { getCurrencies: () => dispatch(LOAD_CURRENCIES()) };
}

export default connect(mapState, mapDispatch)(Wallet);

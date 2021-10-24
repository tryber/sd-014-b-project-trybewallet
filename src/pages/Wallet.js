import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Input from '../components/Input';
import Select from '../components/Select';
import { fetchCoins } from '../actions';

class Wallet extends React.Component {
  componentDidMount() {
    const { fetchCoinsApi } = this.props;
    fetchCoinsApi();
  }

  render() {
    const { userEmail, currencies } = this.props;
    return (
      <>
        <Header userEmail={ userEmail } />
        <form>
          <Input labelText="Valor" type="text" name="value" id="value" />
          <Input labelText="Descrição" type="text" name="description" id="description" />
          <Select
            labelText="Moeda"
            name="currency"
            id="currency"
            options={ currencies }
          />
          <Select
            labelText="Método de pagamento"
            name="payment"
            id="payment"
            options={ ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'] }
          />
          <Select
            labelText="Tag"
            name="tag"
            id="tag"
            options={ ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'] }
          />
        </form>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCoinsApi: () => dispatch(fetchCoins()),
});

Wallet.propTypes = {
  userEmail: PropTypes.string.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  fetchCoinsApi: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);

import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchCoinsAction } from '../actions';
import Input from '../components/Input';
import Select from '../components/Select';

class Wallet extends React.Component {
  componentDidMount() {
    const { fetchCoinsApi } = this.props;
    fetchCoinsApi();
  }

  render() {
    const { user, currencies } = this.props;
    return (
      <>
        <header>
          <p data-testid="email-field">{ user }</p>
          <p data-testid="total-field"> 0</p>
          <p data-testid="header-currency-field">BRL</p>
        </header>
        <form>
          <Input type="text" id="valor" />
          <Input type="text" id="descrição" />
          <Select title="Moeda" name="moeda" options={ currencies } />
          <Select
            title="Método de pagamento:"
            id="pagamento"
            options={ ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'] }
          />
          <Select
            title="Tag:"
            id="tag"
            options={ ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'] }
          />
        </form>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user.email, currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCoinsApi: () => dispatch(fetchCoinsAction()),
});

Wallet.propTypes = {
  user: PropTypes.string.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  fetchCoinsApi: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);

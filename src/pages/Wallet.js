import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Select from '../components/Select';
import SelectCoins from '../components/SelectCoins';
import { requestAPIMoney } from '../actions';

class Wallet extends React.Component {
  constructor() {
    super();

    this.state = {
      spent: 0,
    };
  }

  async componentDidMount() {
    const { fetchMoney } = this.props;
    const response = await fetchMoney();
    return response;
  }

  render() {
    const { userEmail, fetchMoney, currencies } = this.props;
    const { spent } = this.state;
    return (
      <header>
        <h3 data-testid="email-field">{ userEmail }</h3>
        <form>
          <label htmlFor="money-by">
            Valor:
            <input
              type="number"
              id="money-by"
            />
            <span data-testid="total-field">{ spent }</span>
          </label>
          <span data-testid="header-currency-field">BRL</span>
          <SelectCoins
            labelhtmlfor="moeda"
            description="Moeda"
            currencies={ currencies }
            fetchMoney={ fetchMoney }
          />
          <Select
            labelhtmlfor="pagamento"
            description="Método de pagamento"
            optionone="Dinheiro"
            optiontwo="Cartão de crédito"
            optionthree="Cartão de débito"
          />
          <Select
            labelhtmlfor="tag"
            description="Tag"
            optionone="Alimentação"
            optiontwo="Lazer"
            optionthree="Trabalho"
            optionfour="Transporte"
            optionfive="Saúde"
          />
          <label htmlFor="descrição">
            Descrição:
            <input type="text" id="descrição" />
          </label>
          {/* <button
          type="button" data-testid="total-field">Adicionar despesas</button> */}
        </form>
      </header>
    );
  }
}

Wallet.propTypes = {
  email: PropTypes.string,
  fetchMoney: PropTypes.func,
  currencies: PropTypes.array,
}.isRequired;

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  fetchMoney: () => dispatch(requestAPIMoney()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);

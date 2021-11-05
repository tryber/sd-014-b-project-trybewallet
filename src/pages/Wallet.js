import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Select from '../components/Select';
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
    await fetchMoney();
  }

  render() {
    const { userEmail } = this.props;
    const { spent } = this.state;
    return (
      <header>
        <h3 data-testid="email-field">{ userEmail }</h3>
        <form>
          <label htmlFor="money-by" data-testid="total-field">
            Valor:
            <input
              type="number"
              id="money-by"
            />
            { spent }
          </label>
          <SelectCoins
            labelhtmlfor="moeda"
            description="Moeda"
            optionone="BRL"
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
          <button type="button">Adicionar despesas</button>
        </form>
        {/* { console.log(fetchMoney()) } */}
      </header>
    );
  }
}

Wallet.propTypes = {
  email: PropTypes.string,
  fetchMoney: PropTypes.func,
}.isRequired;

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
});

const mapDispatchToProps = (dispatch) => ({
  fetchMoney: () => dispatch(requestAPIMoney()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);

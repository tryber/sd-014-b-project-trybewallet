import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends React.Component {
  render() {
    const { userEmail } = this.props;

    return (
      <>
        <div data-testid="email-field">
          Email:
          { userEmail }
        </div>
        <div data-testid="total-field">
          0
        </div>
        <span data-testid="header-currency-field">BRL</span>
        <form>
          <label htmlFor="input-despesas">
            Valor:
            <input id="input-despesas" type="text" />
          </label>
          <label htmlFor="input-descricao">
            Descrição:
            <input id="input-descricao" type="text" />
          </label>
          <label htmlFor="select-moeda">
            Moeda:
            <select id="select-moeda">
              {/* select vazio */}
            </select>
          </label>
          <label htmlFor="select-pagamento">
            Método de pagamento:
            <select id="select-pagamento">
              <option>Dinheiro</option>
              <option>Cartão de crédito</option>
              <option>Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="select-tag">
            Tag:
            <select id="select-tag">
              <option>Alimentação</option>
              <option>Lazer</option>
              <option>Trabalho</option>
              <option>Transporte</option>
              <option>Saúde</option>
            </select>
          </label>
        </form>
      </>
    );
  }
}

Header.propTypes = {
  userEmail: PropTypes.shape({
    user: PropTypes.shape({
      email: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

const mapStateToProps = (globalState) => ({
  userEmail: globalState.user.email,
});

export default connect(mapStateToProps)(Header);

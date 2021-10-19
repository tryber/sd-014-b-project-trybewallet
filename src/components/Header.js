import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      cambio: 'BRL',
    };
    this.somatoriaDespesas = this.somatoriaDespesas.bind(this);
  }

  somatoriaDespesas() {
    const { despesas } = this.props;
    const total = despesas.reduce((acc, { value }) => (
      Number(acc) + Number(value)), 0);
    return total;
  }

  render() {
    const { email } = this.props;
    const { cambio } = this.state;
    return (
      <div>
        <p data-testid="email-field">
          Bem Vindo:
          {' '}
          { email }
        </p>

        {/* <div>
          { this.somatoriaDespesas() }
        </div> */}
        <p>
          Despesa Total:
          {' '}
          <span data-testid="total-field">{ this.somatoriaDespesas() }</span>
        </p>

        <p data-testid="header-currency-field">
          Cambio corrente:
          {' '}
          { cambio }
        </p>
      </div>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
  despesas: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    value: PropTypes.string,
    description: PropTypes.string,
    currency: PropTypes.string,
    method: PropTypes.string,
    tag: PropTypes.string,
    exchangeRate: PropTypes.objectOf(PropTypes.object),
  })).isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  despesas: state.wallet.expenses,
});

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(Header);

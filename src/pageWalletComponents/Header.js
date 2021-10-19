import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends React.Component {
  render() {
    const { userEmail } = this.props;
    return (
      <main>
        <span data-testid="email-field">
          {' '}
          Email:
          { userEmail }
        </span>
        <span data-testid="total-field">
          Despesas Totais:0
        </span>
        <span data-testid="header-currency-field">
          Cambio: BRL
        </span>

      </main>
    );
  }
}

// const mapStateToProps = (state) => ({
//   userEmail: state.reducer.email } // aqui tava dando errado porque o reducer chama user e nao reducer
// );

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
});

Header.propTypes = {
  userEmail: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Header);

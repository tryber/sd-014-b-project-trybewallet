import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      despesaTotal: 0,
      cambio: 'BRL',
    };
  }

  render() {
    const { email } = this.props;
    const { despesaTotal, cambio } = this.state;
    return (
      <div>
        <p data-testid="email-field">
          Bem Vindo:
          {' '}
          { email }
        </p>

        <p data-testid="total-field">
          Despesa Total:
          {' '}
          { despesaTotal }
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
};

const mapStateToProps = (state) => ({
  email: state.user.email,
});

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(Header);

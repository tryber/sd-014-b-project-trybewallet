import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

class Header extends React.Component {
  render() {
    const { email, soma } = this.props;

    return (
      <header>
        <h1 data-testid="email-field">{ email }</h1>
        <h3 data-testid="total-field">
          { !soma ? 'R$ 0,00' : soma.map((value) => value.getValueConvert)
            .reduce((acc, cur) => acc + cur) }
        </h3>
        <h3 data-testid="header-currency-field">BRL</h3>
      </header>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
  soma: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  soma: state.soma.expenses,
});

export default connect(mapStateToProps)(Header);

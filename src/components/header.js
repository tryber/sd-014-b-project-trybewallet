import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

class Header extends React.Component {
  render() {
    const { email } = this.props;
    return (
      <div>
        <span data-testid="email-field">{`Email: ${email}`}</span>
        <span data-testid="total-field">Despesa: R$ 0,00</span>
        <span data-testid="header-currency-field">BRL</span>
      </div>);
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
};

const mapStateToProps = ({ user }) => ({
  email: user.email,
});

export default connect(mapStateToProps)(Header);

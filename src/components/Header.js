import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends React.Component {
  render() {
    const { userEmail } = this.props;
    return (
      <section>
        <header>
          <h2 data-testid="email-field">{userEmail}</h2>
          <h5 data-testid="total-field">0</h5>
          <h5 data-testid="header-currency-field">BRL</h5>
        </header>
      </section>
    );
  }
}
const mapStateToProps = (state) => ({
  userEmail: state.user.email,
});
export default connect(mapStateToProps, null)(Header);

Header.propTypes = {
  userEmail: PropTypes.string.isRequired,
};

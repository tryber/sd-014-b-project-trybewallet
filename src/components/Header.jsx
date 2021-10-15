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
          <label htmlFor="input-name">
            Nome:
            <input id="input-name" type="text" />
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

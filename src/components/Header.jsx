import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

class Header extends React.Component {
  render() {
    const { user } = this.props;
    return (
      <main>
        <header>
          <h3 data-testid="email-field">
            Email:
            {' '}
            { user }
          </h3>
          <h3
            data-testid="total-field"
          >
            Despesa Total:
            {' '}
            <span data-testid="header-currency-field">
              R$
            </span>
            {' '}
            0
          </h3>
        </header>
      </main>
    );
  }
}

Header.propTypes = {
  user: PropTypes.string.isRequired,
};

const mapDispatchToProps = (state) => ({
  user: state.user.email,
});

export default connect(mapDispatchToProps, null)(Header);

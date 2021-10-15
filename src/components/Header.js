import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      despesa: 0,
      câmbio: 'BRL',
    };
  }

  render() {
    const { user } = this.props;
    const { email } = user;
    const { despesa, câmbio } = this.state;
    return (
      <div>
        <h5 data-testid="email-field">
          {email}
        </h5>
        <h5 data-testid="total-field">
          despesa total:
          {despesa}
        </h5>
        <h5 data-testid="header-currency-field">
          Câmbio utilizado:
          {câmbio}
        </h5>
      </div>
    );
  }
}

Header.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.isRequired,
  }).isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps)(Header);

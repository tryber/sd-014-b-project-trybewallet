import PropTypes from 'prop-types';
import React from 'react';

class Header extends React.Component {
  render() {
    const { email, dataTestId } = this.props;
    return (
      <header data-testid={ dataTestId }>
        <p>{ email }</p>
      </header>
    );
  }
}

Header.propTypes = {
  dataTestId: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export default Header;

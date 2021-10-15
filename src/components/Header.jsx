import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from '../styles/header.module.scss';

class Header extends React.Component {
  render() {
    const { email } = this.props;
    return (
      <header className={ styles.header }>
        <div className={ styles.emailField } data-testid="email-field">
          Email:
          {' '}
          {email}
        </div>
        <div className={ styles.totalValueDiv }>
          <div data-testid="total-field">0</div>
          <div data-testid="header-currency-field">BRL</div>
        </div>
      </header>
    );
  }
}

const mapStateToProps = ({ user: { email } }) => ({
  email,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Header);

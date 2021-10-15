import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { email } = this.props;
    return (
      <header>
        <div className="d-flex">
          <section>
            <p data-testid="email-field">{`E-mail: ${email}`}</p>
          </section>
          <section>
            <p data-testid="total-field">Despesa Total: R$ 0</p>
            <p data-testid="header-currency-field">BRL</p>
          </section>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
});

export default connect(mapStateToProps)(Header);

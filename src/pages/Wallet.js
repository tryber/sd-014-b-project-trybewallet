import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import '../styles/Header.css';

class Wallet extends React.Component {
  render() {
    const { email, total } = this.props;
    return (
      <div>
        <header className="header">
          <h1>Trybe</h1>
          <section className="header-section">
            <div className="header-nav">
              <h4>Email:</h4>
              <p data-testid="email-field">{email}</p>
            </div>
            <div className="header-nav">
              <h4>Despesa Total:</h4>
              <p data-testid="total-field">{total}</p>
              <p data-testid="header-currency-field">BRL</p>
            </div>
          </section>
        </header>
        <div>
          E
        </div>
      </div>
    );
  }
}

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  total: state.wallet.total,
});

export default connect(mapStateToProps, null)(Wallet);

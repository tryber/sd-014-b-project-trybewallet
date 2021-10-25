import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import '../styles/Header.css';

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      moeda: 'BRL',
    };
  }

  render() {
    const { email } = this.props;
    const { total, moeda } = this.state;
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
              <p data-testid="header-currency-field">{moeda}</p>
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
};

const mapStateToProps = (state) => ({
  email: state.user.email,
});

export default connect(mapStateToProps, null)(Wallet);

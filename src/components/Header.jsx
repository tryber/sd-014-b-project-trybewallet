import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

function Header(props) {
  const { userEmail } = props;
  return (
    <header>
      <div className="container-title">
        <img
          src="https://www.clipartmax.com/png/full/141-1410805_%C2%A0-stock-photography.png"
          alt="wallet"
        />
        <h4>TrybeWallet</h4>
      </div>

      <div className="container-infos">
        <span data-testid="email-field">
          { `Email: ${userEmail}` }
        </span>
        <div>
          <span data-testid="total-field">
            Despesa Total:
            R$ 0,00
          </span>
          <span
            className="text-center"
            data-testid="header-currency-field"
          >
            BRL
          </span>
        </div>
      </div>
    </header>
  );
}

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
});

Header.propTypes = {
  userEmail: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Header);

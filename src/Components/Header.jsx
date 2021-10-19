import React, { Component } from 'react';
// import PropTypes from 'prop-types';

import './header.css';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="title">
          <h1>Tribewallet</h1>
        </div>
        <div className="header-email">
          <div>
            <h3 data-testid="email-field">Email:</h3>
          </div>
          <div className="field">
            <h3 data-testid="total-field">
              Despesa total:
              <span> 0</span>
            </h3>
            <h3 data-testid="header-currency-field">BRL</h3>
          </div>
        </div>
      </div>

    );
  }
}

export default Header;

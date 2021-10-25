import React from 'react';
import Header from '../components/Header';

class Wallet extends React.Component {
  render() {
    return (
      <>
        <Header />
        <form>
          <label htmlFor="value">
            Valor:
            <input
              type="value"
              name="value"
              data-testid="value-input"
            />
          </label>
        </form>
      </>
    );
  }
}

export default Wallet;

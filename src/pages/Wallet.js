import React from 'react';
import { connect } from 'react-redux';

import Form from '../components/Form';
import Header from '../components/Header';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Form />
      </div>
    );
  }
}

export default connect()(Wallet);

Wallet.propTypes = {
};

Wallet.defaultProps = {
};

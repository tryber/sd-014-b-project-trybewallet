import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import FormCost from '../components/FormCost';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <h1>trybe Wallet</h1>
        <FormCost />
      </div>

    );
  }
}

Wallet.propTypes = {
  email: PropTypes.any,
}.isRequired;

const mapStateToProps = (state) => ({
  email: state.user.email,
});

export default connect(mapStateToProps, null)(Wallet);

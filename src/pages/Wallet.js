import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FormWallet from '../components/formWallet';
import { fetchAPI } from '../actions';

class Wallet extends React.Component {
  constructor() {
    super();
    this.startFetch = this.startFetch.bind(this);
  }

  componentDidMount() {
    this.startFetch();
  }

  startFetch() {
    const { getMoeda } = this.props;
    getMoeda();
  }

  render() {
    const { email } = this.props;
    return (
      <div>
        TrybeWallet
        <header data-testid="email-field">{ email }</header>
        <p data-testid="total-field">0</p>
        <p data-testid="header-currency-field">BRL</p>
        <FormWallet />
      </div>

    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  getMoeda: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  getMoeda: () => dispatch(fetchAPI()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);

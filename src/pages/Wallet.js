import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AddDespesa from '../components/AddDespesa';

class Wallet extends React.Component {
  constructor() {
    super();
    this.updateTotal = this.updateTotal.bind(this);
    this.state = {
      total: 0,
    };
  }

  updateTotal(value) {
    this.setState({
      total: value,
    });
  }

  render() {
    const { email } = this.props;
    const { total } = this.state;
    return (
      <>
        <header>
          <span data-testid="email-field">
            Email:
            {' '}
            {email}
            {' '}
          </span>
          <span>Despesa Total: </span>
          <span data-testid="total-field">{ total }</span>
          <span data-testid="header-currency-field">
            {' '}
            BRL
          </span>
        </header>
        <AddDespesa total={ total } updateTotal={ this.updateTotal } />
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    email: state.user.email,
  };
}

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Wallet);

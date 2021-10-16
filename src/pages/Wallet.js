import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../components/Header';

class Wallet extends React.Component {
  constructor() {
    super();

    this.state = {
      totalExpense: 0,
    };
  }

  render() {
    const { email } = this.props;
    const { totalExpense } = this.state;
    return (
      <div>
        <Header userEmail={ email } totalExpense={ totalExpense } />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Wallet);

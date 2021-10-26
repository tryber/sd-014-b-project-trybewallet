import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../Components/Header';
import Form from '../Components/Form';

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      moeda: '',
    };
  }

  render() {
    const { email } = this.props;
    const { total, moeda } = this.state;
    return (
      <div>
        <Header email={ email } total={ total } moeda={ moeda } />
        <Form />
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

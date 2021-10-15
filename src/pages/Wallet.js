import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import Spending from '../components/Spending';
import { fetchAPI } from '../actions';
import './Wallet.css';

class Wallet extends React.Component {
  componentDidMount() {
    const { requestApi } = this.props;
    requestApi();
  }

  render() {
    return (
      <>
        <Header />
        <Spending />
      </>
    );
  }
}

Wallet.propTypes = {
  requestApi: PropTypes.func.isRequired,
};

// const mapStateToProps = (state) => {};

const mapDispatchToProps = (dispatch) => ({
  requestApi: () => dispatch(fetchAPI()),
});

export default connect(null, mapDispatchToProps)(Wallet);

import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Header from '../../components/Header/Header';
import Expenses from '../../components/Expenses/Expenses';
import { fetchAPI } from '../../actions';
import './Wallet.css';
import Table from '../../components/Table/Table';

class Wallet extends React.Component {
  componentDidMount() {
    const { requestApi } = this.props;
    requestApi();
  }

  render() {
    return (
      <>
        <Header />
        <hr />
        <Expenses />
        <hr />
        <Table />
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

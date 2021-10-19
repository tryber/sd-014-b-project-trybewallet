import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import Expenses from '../components/Expenses';
import { fetchAPI } from '../actions';
import './Wallet.css';
import Table from '../components/Table';
import EditExpense from '../components/EditExpense';

class Wallet extends React.Component {
  componentDidMount() {
    const { requestApi } = this.props;
    requestApi();
  }

  render() {
    const { editor } = this.props;
    return (
      <>
        <Header />
        <hr />
        { editor ? <EditExpense /> : <Expenses />}
        <hr />
        <Table />
      </>
    );
  }
}

Wallet.propTypes = {
  editor: PropTypes.bool.isRequired,
  requestApi: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  editor: state.wallet.editor,
});

const mapDispatchToProps = (dispatch) => ({
  requestApi: () => dispatch(fetchAPI()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);

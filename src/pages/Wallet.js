import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchAPI } from '../actions';
import AddForm from '../componets/AddForm';
import HeaderWallet from '../componets/HeaderWallet';
import DataTable from '../componets/DataTable';

class Wallet extends React.Component {
  componentDidMount() {
    const { requestApi } = this.props;
    requestApi();
  }

  render() {
    return (
      <div>
        <HeaderWallet />
        <AddForm />
        <DataTable />
      </div>
    );
  }
}

Wallet.propTypes = {
  requestApi: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  requestApi: () => dispatch(fetchAPI()),
});

export default connect(null, mapDispatchToProps)(Wallet);

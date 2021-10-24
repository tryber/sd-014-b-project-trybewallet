import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Header } from '../components';
import Table from '../components/Table';
import { FormWallet, FormEdit } from '../forms';

class Wallet extends React.Component {
  render() {
    const { editForm } = this.props;

    if (editForm) {
      return (
        <div>
          <Header />
          <FormEdit />
          <Table />
        </div>
      );
    }
    return (
      <div>
        <Header />
        <FormWallet />
        <Table />
      </div>
    );
  }
}

Wallet.propTypes = {
  editForm: PropTypes.bool,
};

Wallet.defaultProps = {
  editForm: false,
};

const mapStateToProps = ({ wallet }) => ({
  editForm: wallet.renderFormEdit,
});

export default connect(mapStateToProps)(Wallet);

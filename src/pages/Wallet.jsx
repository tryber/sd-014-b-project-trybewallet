import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../components/Header';
import Form from '../components/Form';
import FormEdit from '../components/FormEdit';
import Table from '../components/Table';

class Wallet extends React.Component {
  render() {
    const { inEdit } = this.props;
    return (
      <>
        <Header />
        { inEdit ? <FormEdit /> : <Form /> }
        <Table />
      </>
    );
  }
}

Wallet.propTypes = {
  inEdit: PropTypes.bool,
};

Wallet.defaultProps = {
  inEdit: false,
};

const mapStateToProps = (state) => ({
  inEdit: state.wallet.editor,
});

export default connect(mapStateToProps)(Wallet)

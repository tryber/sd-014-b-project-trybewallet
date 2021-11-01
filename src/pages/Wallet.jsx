import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Header } from '../components';
import TableExpenses from '../components/wallet_components/TableExpenses';
import Form from '../components/wallet_components/Form';
import { getFetchAPI } from '../actions';

class Wallet extends React.Component {
  componentDidMount() {
    const { prepareFetchData } = this.props;
    prepareFetchData();
  }

  render() {
    return (
      <div>
        <Header />
        Wallet
        <section>
          <Form />
        </section>
        <section>
          <TableExpenses />
        </section>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  prepareFetchData: () => dispatch(getFetchAPI()),
});

Wallet.propTypes = {
  prepareFetchData: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Wallet);

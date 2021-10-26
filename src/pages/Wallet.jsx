import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Header, Form, TableExpenses } from '../components';
import { getFecthAPI } from '../actions';

class Wallet extends React.Component {
  componentDidMount() {
    const { prepareFetchData } = this.props;
    prepareFetchData();
  }

  render() {
    const { currencies } = this.props;
    return (
      <div>
        <Header />
        Wallet
        <Form currency={ currencies } />
        <TableExpenses />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  prepareFetchData: () => dispatch(getFecthAPI()),
});

const mapStateToProps = ({ wallet: { currencies } }) => ({
  currencies,
});

Wallet.propTypes = {
  prepareFetchData: PropTypes.func.isRequired,
  currencies: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);

import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Header } from '../components';
import TableExpenses from '../components/wallet_components/TableExpenses';
import Form from '../components/wallet_components/Form';
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
        <section>
          <Form currencies={ currencies } />
        </section>
        <section>
          <TableExpenses />
        </section>
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
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  prepareFetchData: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);

import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Header, TableExpenses } from '../components';
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
  prepareFetchData: PropTypes.func.isRequired,
  // currencies: PropTypes.array.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);

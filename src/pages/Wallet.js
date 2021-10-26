import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCoinsFromApi } from '../actions/coinsAction';
import Form from '../components/Form';
import Header from '../components/Header';
import TableHeader from '../components/TableHeader';
import TableBody from '../components/TableBody';

class Wallet extends React.Component {
  componentDidMount() {
    const { fetchCoins } = this.props;
    fetchCoins();
  }

  render() {
    return (
      <div>
        <Header />
        <Form />
        <table>
          <TableHeader />
          <TableBody />
        </table>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchCoins: () => dispatch(fetchCoinsFromApi()),
});

Wallet.propTypes = {
  fetchCoins: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Wallet);

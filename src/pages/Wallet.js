import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import { fetchCurrency } from '../actions';
import Form from '../components/Form';

class Wallet extends React.Component {
  constructor() {
    super();

    this.state = {
      loading: true,
    };
  }

  componentDidMount = async () => {
    const { getCurrency } = this.props;
    await getCurrency();
    this.loadingFalse();
  }

  loadingFalse = () => {
    this.setState({ loading: false });
  }

  render() {
    const { loading } = this.state;
    return (
      <>
        <Header />
        <h1>carteira</h1>
        { !loading && <Form />}
      </>
    );
  }
}

Wallet.propTypes = {
  getCurrency: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  getCurrency: (state) => dispatch(fetchCurrency(state)),
});

export default connect(null, mapDispatchToProps)(Wallet);

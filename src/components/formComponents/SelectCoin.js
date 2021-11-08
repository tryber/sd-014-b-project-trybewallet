import React from 'react';
import { useDispatch, connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setFormCoin } from '../../actions';

const SelectCoin = ({ coin, data }) => {
  const dispatch = useDispatch();

  return (
    <label htmlFor="coin">
      Moeda
      <select
        name="coin"
        id="coin"
        value={ coin }
        onChange={ ({ target }) => dispatch(setFormCoin(target.value)) }
      >
        { data !== null
          && Object.keys(data)
            .filter((singleCoin) => (singleCoin !== 'USDT') && (singleCoin !== 'DOGE'))
            .map((singleCoin, index) => (
              <option key={ index }>{singleCoin}</option>
            )) }
      </select>
    </label>
  );
};

SelectCoin.propTypes = {
  coin: PropTypes.string.isRequired,
  data: PropTypes.shape([]),
};

SelectCoin.defaultProps = {
  data: [],
};

const mapStateToProps = (state) => ({ coin: state.form.coin });

export default connect(mapStateToProps)(SelectCoin);

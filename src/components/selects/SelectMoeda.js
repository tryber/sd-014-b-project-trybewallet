import React from 'react';

class SelectMoeda extends React.Component {
  render() {
    return (
      <div>
        <label htmlFor="moeda">
          Moeda
          <select id="moeda">
            {/* <option value="moeda1">moeda 1 </option>
            <option value="moeda2">moeda 2 </option> */}
          </select>
        </label>
      </div>
    );
  }
}

export default SelectMoeda;

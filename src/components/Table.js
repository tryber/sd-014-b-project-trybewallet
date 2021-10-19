import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useTable } from 'react-table';
import COLUMNS from './columns';
import './table.css';

const Table = () => {
  const expenses = useSelector((state) => state.wallet.expenses);
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => expenses, [expenses]);
  const tableInstance = useTable({
    columns,
    data,
  });

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = tableInstance;

  return (
    <table { ...getTableProps() }>
      <thead>
        {headerGroups.map((headerGroup, index) => (
          <tr key={ index } { ...headerGroup.getHeaderGroupProps() }>
            {headerGroup.headers.map((column, idx) => (
              <th
                key={ idx }
                { ...column.getHeaderProps() }
              >
                { column.render('Header') }
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody { ...getTableBodyProps }>
        {rows.map((row, ix) => {
          prepareRow(row);
          return (
            <tr key={ ix } { ...row.getRowProps()}>
              {row.cells.map((cell, inx) => (<td key={ inx } { ...cell.getCellProps() }>{ cell.render('Cell')}</td>))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;

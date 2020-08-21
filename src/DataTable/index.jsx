import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Pagination from './Pagination';
import Row from './Row';
import Search from './Search';

const DataTable = ({ rows, rowsPerPage }) => {
  const calculateTotalNumberOfPages = (rows) => (rowsPerPage !== 0) ? Math.ceil(rows.length / rowsPerPage) : 0;
  const [rowsData, setRowsData] = useState(rows);
  const [currentPageNumber, setCurrentPageNumber] = useState(0);
  const [totalNumberOfPages, setTotalNumberOfPages] = useState(calculateTotalNumberOfPages(rows));
  const search = (event) => {
    const text = event.target.value.toLowerCase();
    const rowsFound = text 
      ? rows.filter((row) => {
        const { name1, email } = row;
        return (name1.toLowerCase().search(text) > -1
        || (email && email.toLowerCase().search(text) > -1));
      })
      : rows;
    setRowsData(rowsFound);
    setCurrentPageNumber(0);
    setTotalNumberOfPages(calculateTotalNumberOfPages(rowsFound))
  }

  const rowsInPageNumber = (pageNumber) => {
    const startIndex = pageNumber * rowsPerPage 
    return [startIndex, startIndex + rowsPerPage]
  }

  return (
    <div>
      <Search onSearch={search} />
      <table>
        <tbody>
          { rowsData && rowsData.map((row) => <Row key={row.per_id} { ...row } />).slice(...rowsInPageNumber(currentPageNumber)) }
        </tbody>
      </table>
      <Pagination
        currentPageNumber={currentPageNumber}
        totalNumberOfPages={totalNumberOfPages}
        onChange={setCurrentPageNumber} />
    </div>
  )
}

DataTable.propTypes = {
  rows: PropTypes.arrayOf(PropTypes.shape({
    name1: PropTypes.string.isRequired,
    email: PropTypes.string,
    edit_path: PropTypes.string.isRequired,
    per_id: PropTypes.number.isRequired,
  })).isRequired,
  rowsPerPage: PropTypes.number
};

DataTable.defaultProps = {
  rowsPerPage: 40
};

export default DataTable

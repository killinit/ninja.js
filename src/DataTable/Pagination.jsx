import React from 'react';
import PropTypes from 'prop-types';

import Page from './Page';

const Pagination = ({ currentPageNumber, totalNumberOfPages, onChange }) => (
  (totalNumberOfPages >= 1) &&
  <ul className="pagination">
    {Array.from(Array(totalNumberOfPages).keys()).map( pageNumber => (
      <Page
        key={pageNumber}
        currentPageNumber={currentPageNumber}
        pageNumber={pageNumber}
        onChange={onChange}
      />
    ))}
  </ul>
);

Pagination.propTypes = {
  currentPageNumber: PropTypes.number.isRequired,
  totalNumberOfPages: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired
};

export default Pagination;

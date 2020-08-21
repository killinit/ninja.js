import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const Page = ({ pageNumber, currentPageNumber, onChange } ) => {

  const handleClick = (event) => {
    event.preventDefault()
    onChange(pageNumber)
  }

  return (
    <li className="page-item mr-1">
      <button
        className={classNames(
          'page-link', {
            'button-outline': (currentPageNumber == pageNumber)
          })}
        onClick={handleClick}
      >{pageNumber + 1}
      </button>
    </li>
  )
}
Page.propTypes = {
  pageNumber: PropTypes.number.isRequired,
  currentPageNumber: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired
}

export default Page

import React from 'react';
import PropTypes from 'prop-types';

const Row = ({ edit_path, name1, email }) => (
  <tr>
    <td>
      <a href={edit_path}>
        {name1}
      </a><br />
      <small>{email}</small>
    </td>
  </tr>
);

Row.propTypes = {
  name1: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  edit_path: PropTypes.string.isRequired,
}

export default Row

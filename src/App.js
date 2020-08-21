import React from 'react';
import PropTypes from 'prop-types';
import DataTable from './DataTable';
import './App.css';

const App = ({ rows }) => (
  <div className="container mt-3">
    <DataTable rows={rows} locale="da" rowsPerPage={5} />
  </div>
)

App.propTypes = {
  rows: PropTypes.arrayOf(PropTypes.shape({
    name1: PropTypes.string.isRequired,
    email: PropTypes.string,
    edit_path: PropTypes.string.isRequired,
    per_id: PropTypes.number.isRequired,
  })).isRequired
}

export default App;

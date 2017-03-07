import React from 'react';
import { Link } from 'react-router';

const NotFound = () => {
  return (
    <div className="ibox float-e-margins">
      <div className="ibox-title">
        <h1>Page Not Found</h1>
        <Link to="/" type="button" className="btn btn-info">Go to main page</Link>
      </div>
    </div>
  );
};

export default NotFound;
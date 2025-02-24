import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/common/Button/Button';

const NotFound = () => {
  return (
    <div className="not-found">
      <h1>404 - Page Not Found</h1>
      <Link to="/">
        <Button variant="secondary">Go Home</Button>
      </Link>
    </div>
  );
};

export default NotFound; 
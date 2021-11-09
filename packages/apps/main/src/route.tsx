import React from 'react';
import DashboardRoute from '@app/dashboard/src/route';
import './index.css';
import test from './assets/test.png';

const MainRoute = () => {
  return (
    <div>
      <img src={test} alt="test" />
      <DashboardRoute />
      <p>Main route</p>
    </div>
  );
};

export default MainRoute;

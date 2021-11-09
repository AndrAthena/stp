import React from 'react';
import loadable from '@loadable/component';
import { Routes, Route } from 'react-router-dom';
import Loading from '@lib/common/Loading';

const ROUTE_BASENAME = '/project';

const Overview = loadable(() => import('./pages/Overview'), { fallback: <Loading open /> });

const ProjectRoute = () => {
  return (
    <Routes>
      <Route path={`${ROUTE_BASENAME}`} element={<Overview />} />
    </Routes>
  );
};

export default ProjectRoute;

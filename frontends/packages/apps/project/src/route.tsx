import React from 'react';
import loadable from '@loadable/component';
import { Routes, Route } from 'react-router-dom';
import { Loading } from '@lib/common';
import './index.css';
import CreateProject from './pages/CreateProject';

const ROUTE_BASENAME = 'project';

const Overview = loadable(() => import('./pages/Overview'), { fallback: <Loading open /> });
const ProjectDetails = loadable(() => import('./pages/ProjectDetails'), {
  fallback: <Loading open />,
});

const ProjectRoute = () => {
  return (
    <Routes>
      <Route path={`${ROUTE_BASENAME}`} element={<Overview />} />
      <Route path={`${ROUTE_BASENAME}/:projectId`} element={<ProjectDetails />} />
      <Route path={`${ROUTE_BASENAME}/create`} element={<CreateProject />} />
    </Routes>
  );
};

export default ProjectRoute;

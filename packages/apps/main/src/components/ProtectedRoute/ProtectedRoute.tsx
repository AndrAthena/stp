import React from 'react';
import loadable from '@loadable/component';
import { Loading } from '@lib/common';

const Project = loadable(() => import('@app/project/src/route'), {
  fallback: <Loading open />,
});

const ProtectedRoute = () => {
  return (
    <>
      <Project />
    </>
  );
};

export default ProtectedRoute;

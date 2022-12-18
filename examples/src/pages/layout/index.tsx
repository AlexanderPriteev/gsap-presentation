import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Nav } from './nav';

export const Index = function () {
  const rout = useLocation().pathname;
  const showNav = rout === '/' || rout.includes('-menu');
  return (
    <div className="page-wrapper">
      {showNav && <Nav />}
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
};

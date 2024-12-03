import React from 'react';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';

const Body = () => {
  return (
    <div>
      <div className="flex mt-16">
        <Sidebar />
        {/* The Outlet renders child routes here */}
        <Outlet />
      </div>
    </div>
  );
};

export default Body;

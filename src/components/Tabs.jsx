import React from 'react';
import { NavLink } from 'react-router-dom';

const Tabs = () => {
  return (
    <div className="flex border-b border-gray-300">
      <NavLink 
        to="/events" 
        exact 
        className="px-4 py-2 text-gray-600"
        activeClassName="text-green-700 border-b-2 border-green-700"
      >
        Overview
      </NavLink>
      <NavLink 
        to="/setting_event" 
        className="px-4 py-2 text-gray-600"
        activeClassName="text-green-700 border-b-2 border-green-700"
      >
        Setting Event
      </NavLink>
      <NavLink 
        to="/report" 
        className="px-4 py-2 text-gray-600"
        activeClassName="text-green-700 border-b-2 border-green-700"
      >
        Report
      </NavLink>
    </div>
  );
};

export default Tabs;

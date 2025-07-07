import React from 'react';
import { Outlet } from 'react-router-dom';
import './index.css';
import Header from './Header';
import SidebarDesktop from './SidebarDesktop';
import SidebarMobile from './SidebarMobile';

const Sidebar = () => {
  return (
    <nav className="sidebar text-white">
      <div className="row g-0 dark-purple full-height">
        <SidebarDesktop />
        <SidebarMobile />
      </div>
    </nav>
  );
};

const Layout = () => {
  return (
    <div className="layout-container">
      <Header />
      <div className="layout-body">
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;

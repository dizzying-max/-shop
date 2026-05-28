import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const DashboardLayout = () => {
  const user = JSON.parse(localStorage.getItem('user')) || { name: 'Пользователь' };

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ width: '200px', background: '#f0f0f0', padding: '20px' }}>
        <h3>Меню</h3>
        <ul>
          <li><Link to="/dashboard">Обзор</Link></li>
          <li><Link to="/dashboard/subscription">Подписка</Link></li>
          <li><Link to="/dashboard/devices">Устройства</Link></li>
        </ul>
      </div>
      <div style={{ flex: 1, padding: '20px' }}>
        <h1>Здравствуйте, {user.name}</h1>
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
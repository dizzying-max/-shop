import React, { useState } from 'react';
import { Link, Outlet, useNavigate, useLocation } from 'react-router-dom';

const DashboardLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  // Данные пользователя (временно из localStorage)
  const user = JSON.parse(localStorage.getItem('user')) || {
    name: 'bjbkjb',
    email: 'bjbkjb@mail.com',
    subscriptionEnd: '18 мая 2027 г.'
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  const menuItems = [
    { path: '/dashboard', label: 'Обзор', icon: '📊' },
    { path: '/dashboard/subscription', label: 'Подписка', icon: '💳' },
    { path: '/dashboard/devices', label: 'Устройства', icon: '📱' },
    { path: '/dashboard/servers', label: 'Серверы', icon: '🌍' },
    { path: '/dashboard/config', label: 'Конфигурации', icon: '⚙️' },
    { path: '/dashboard/support', label: 'Поддержка', icon: '💬' },
    { path: '/dashboard/settings', label: 'Настройки', icon: '🔧' },
  ];

  return (
    <div className="dashboard-container">
      {/* Боковое меню */}
      <aside className={`dashboard-sidebar ${sidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <Link to="/" className="sidebar-logo">Staff VPN</Link>
          <p className="user-email">{user.email}</p>
        </div>
        <nav className="sidebar-nav">
          {menuItems.map(item => (
            <Link
              key={item.path}
              to={item.path}
              className={`sidebar-link ${location.pathname === item.path ? 'active' : ''}`}
            >
              <span className="sidebar-icon">{item.icon}</span>
              {item.label}
            </Link>
          ))}
        </nav>
        <button onClick={handleLogout} className="sidebar-logout">Выйти</button>
      </aside>

      {/* Основная область */}
      <div className="dashboard-main">
        {/* Шапка */}
        <header className="dashboard-header">
          <button className="mobile-menu-btn" onClick={() => setSidebarOpen(!sidebarOpen)}>
            ☰
          </button>
          <div className="header-greeting">
            <p>Здравствуйте, <span className="user-name">{user.name}</span></p>
            <span className="subscription-badge">Активна до {user.subscriptionEnd}</span>
          </div>
        </header>

        {/* Контент (вложенный маршрут) */}
        <main className="dashboard-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
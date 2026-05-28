import React from 'react';

const Subscription = () => {
  const user = JSON.parse(localStorage.getItem('user')) || {
    plan: 'Премиум',
    endDate: '18 мая 2027 г.',
    autoRenew: true
  };
  return (
    <div className="subscription-page">
      <h2>Моя подписка</h2>
      <div className="subscription-card">
        <p><strong>Тариф:</strong> {user.plan}</p>
        <p><strong>Действует до:</strong> {user.endDate}</p>
        <p><strong>Автопродление:</strong> {user.autoRenew ? 'Включено' : 'Выключено'}</p>
        <button className="button-primary">Изменить тариф</button>
      </div>
    </div>
  );
};

export default Subscription;
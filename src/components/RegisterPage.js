// src/components/RegisterPage.js
import React from 'react';
import { Link } from 'react-router-dom';

const RegisterPage = () => {
  return (
    <div className="auth-page">
      <h2>📝 Регистрация</h2>
      <form>
        <div className="form-group">
          <label>👤 Имя</label>
          <input type="text" placeholder="Введите ваше имя" />
        </div>
        <div className="form-group">
          <label>📧 Email</label>
          <input type="email" placeholder="Введите email" />
        </div>
        <div className="form-group">
          <label>🔒 Пароль</label>
          <input type="password" placeholder="Создайте пароль" />
        </div>
        <div className="form-group">
          <label>✅ Подтвердите пароль</label>
          <input type="password" placeholder="Повторите пароль" />
        </div>
        <button type="submit">Зарегистрироваться</button>
      </form>
      <div className="register-link">
        Уже есть аккаунт?
        <Link to="/login">Войти</Link>
      </div>
      <div className="back-link">
        <Link to="/">← Вернуться на главную</Link>
      </div>
    </div>
  );
};

export default RegisterPage;
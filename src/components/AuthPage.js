import React from 'react';
import { Link } from 'react-router-dom';

const AuthPage = () => {
  return (
    <div className="auth-page">
      <h2>🔐 Вход в личный кабинет</h2>
      
      <form>
        <div className="form-group">
          <label>📧 Email</label>
          <input 
            type="email" 
            placeholder="Введите ваш email"
            required
          />
        </div>
        
        <div className="form-group">
          <label>🔒 Пароль</label>
          <input 
            type="password" 
            placeholder="Введите пароль"
            required
          />
        </div>
        
        <button type="submit">Войти</button>
      </form>
      
      <div className="register-link">
        Нет аккаунта?
        <Link to="/register">Зарегистрироваться</Link>
      </div>
      
      <div className="back-link">
        <Link to="/">← Вернуться на главную</Link>
      </div>
    </div>
  );
};

export default AuthPage;
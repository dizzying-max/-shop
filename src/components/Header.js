import React, { useState } from 'react';
import { MdOutlineVpnLock } from "react-icons/md";
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const [cartOpen, setCartOpen] = useState(false);
  const location = useLocation();
  const isAuthPage = location.pathname === '/login' || location.pathname === '/register';

  return (
    <header>
      <div>
        {/* Оборачиваем логотип в Link */}
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          <span className='logo'>Staff</span>
        </Link>
        
        <ul className='nav'>
          <li>Про нас</li>
          <li>Контакты</li>
          <li>
            <Link to="/login">Личный кабинет</Link>
          </li>
        </ul>
        
        {!isAuthPage && (
          <>
            <MdOutlineVpnLock 
              onClick={() => setCartOpen(!cartOpen)} 
              className={`shop-cart-button ${cartOpen && 'active'}`} 
            />
            {cartOpen && (
              <div className='shop-cart'>
                {/* Корзина */}
              </div>
            )}
          </>
        )}
      </div>
      
      {!isAuthPage && <div className='presentation'></div>}
    </header>
  );
}
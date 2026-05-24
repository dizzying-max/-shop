import React, { useState } from 'react'
import { MdOutlineVpnLock } from "react-icons/md";

export default function Header() {
  const [cartOpen, setCartOpen] = useState(false)  // ✅ const вместо let

  return (
    <header>
      <div className="header-top">  {/* или другое название */}
        <span className='logo'>Staff</span>
        <ul className='nav'>
          <li>Про нас</li>
          <li>Контакты</li>
          <li>Личный кабинет</li>
        </ul>
        <MdOutlineVpnLock 
          onClick={() => setCartOpen(!cartOpen)}  // ✅ исправлено
          className={`shop-cart-button ${cartOpen && 'active'}`}
        />

        {cartOpen && (
          <div className='shop-cart'>
            {/* Корзина пока пустая */}
          </div>
        )}
      </div>
      <div className='presentation'></div>
    </header>
  )
}
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../CartContext'; // Import the useCart hook
import { useHistory } from 'react-router-dom';
const Header = () => {
  const [cartItems] = useCart(); // Use the useCart hook to get cartItems
  const history = useHistory();

  const handleCartClick = () => {
    history.push('/cart'); // Navigate to the cart page
  };
  return (
    <div class="header">
      <div class="header_logo">
        <div className="container">
           <div class="logo">
                 <a href="/"
                  ><img src="/img/Layer 2.png" alt="" width="90%" height="90%"
                /></a>
           </div>
         </div>
     </div>

      <div class="header_buttom">
          <div class="container">
            <nav class="navbar navbar-expand-lg">
              <div class="container-fluid">
                <button
                  class="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul class="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
                    <li class="nav-item">
                      <a class="nav-link" aria-current="page" href=""
                        >TRANG CHỦ</a>
                    </li>
                    <li class="nav-item">
                      <a
                        class="nav-link active"
                        aria-current="page"
                        href="/"
                        >GIỚI THIỆU</a>
                    </li>
                    <li class="nav-item">
                      <a
                        class="nav-link active"
                        aria-current="page"
                        href="/"
                        >SẢN PHẨM</a>
                    </li>
                    <li class="nav-item">
                      <a
                        class="nav-link active"
                        aria-current="page"
                        href="/"
                        >TIN TỨC</a>
                    </li>
                    <li class="nav-item">
                      <a
                        class="nav-link active"
                        aria-current="page"
                        href="/"
                        >LIÊN HỆ</a>
                    </li>
                    <li className="nav-item">
                    <a href="#" className="nav-link active" onClick={handleCartClick}>
                      GIỎ HÀNG: {cartItems.length > 0 && <span className="badge badge-primary">{cartItems.length}</span>}
                    </a>
                  </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
  );
};

export default Header;
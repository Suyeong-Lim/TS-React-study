import React from "react";
import { Link } from "react-router-dom";

const Gnb = () => {
  return (
    <nav className="gnb">
      <ul>
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/products">상품 목록</Link>
        </li>
        <li>
          <Link to="/cart">장바구니</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Gnb;

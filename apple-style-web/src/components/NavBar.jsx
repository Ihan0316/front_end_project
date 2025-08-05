import React from "react";
import { Link } from "react-router-dom";
import appleLogo from "../assets/apple.svg";
import searchLogo from "../assets/search.svg";
import shopLogo from "../assets/shop.svg";
import { NAV_MENUS } from "../constants/navigation";

function NavBar({ activeMenu, handleMenuEnter, handleMenuClick }) {
  return (
    <nav className="apple-navbar" aria-label="메인 네비게이션">
      <ul className="apple-menu">
        <li>
          <Link to="/">
            <img src={appleLogo} alt="Apple Logo" className="apple-logo" />
          </Link>
        </li>
        {NAV_MENUS.map((menu) => (
          <li
            key={menu.key}
            aria-haspopup={!!menu.dropdownType}
            aria-expanded={activeMenu === menu.key}
            tabIndex={0}
            style={{ position: "relative" }}
          >
            <Link
              to={`/${menu.key}`}
              onClick={handleMenuClick}
              onMouseEnter={() => handleMenuEnter(menu.key)}
            >
              {menu.label}
            </Link>
          </li>
        ))}
        <li>
          <Link to="/search">
            <img src={searchLogo} alt="Search" className="apple-search-icon" />
          </Link>
        </li>
        <li>
          <Link to="/shop">
            <img src={shopLogo} alt="Shop" className="apple-shop-icon" />
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;

import React from "react";
import "../App.css";

function SearchDropdown() {
  return (
    <div className="search-dropdown">
      <div className="search-dropdown-inner">
        <div className="search-dropdown-input-row">
          <span className="search-dropdown-icon">🔍</span>
          <input
            className="search-dropdown-input"
            type="text"
            placeholder="apple.com 검색하기"
            autoFocus
          />
        </div>
        <div className="search-dropdown-section">
          <div className="search-dropdown-title">빠른 링크</div>
          <ul className="search-dropdown-links">
            <li>Apple Store Online에서 쇼핑하기</li>
            <li>Apple Vision Pro</li>
            <li>AirPods</li>
            <li>Apple Intelligence</li>
            <li>Apple Trade In</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SearchDropdown;

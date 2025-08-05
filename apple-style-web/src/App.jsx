import "./App.css";
import Home from "./pages/Home";
import React, { useState, useRef } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import DropdownArea from "./components/DropdownArea";

function App() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [fadeContentKey, setFadeContentKey] = useState(null);
  const [contentVisible, setContentVisible] = useState(false);
  const timerRef = useRef(null);
  const fadeTimerRef = useRef(null);

  // 메뉴 hover 진입/이탈
  const handleMenuEnter = (menu) => {
    if (timerRef.current) clearTimeout(timerRef.current);
    if (fadeTimerRef.current) clearTimeout(fadeTimerRef.current);

    if (!activeMenu) {
      // 드롭다운이 닫힌 상태: 1초 딜레이 후 열기
      timerRef.current = setTimeout(() => {
        setFadeContentKey(menu);
        setActiveMenu(menu);
        setContentVisible(true);
      }, 1000);
    } else if (activeMenu !== menu) {
      // 메뉴 간 이동: 즉각 전환
      setContentVisible(false);
      fadeTimerRef.current = setTimeout(() => {
        setFadeContentKey(menu);
        setActiveMenu(menu);
        setContentVisible(true);
      }, 200);
    }
    // 이미 열린 메뉴에 hover하면 아무 동작 없음
  };
  const handleMenuLeave = () => {
    setContentVisible(false);
    fadeTimerRef.current = setTimeout(() => {
      setActiveMenu(null);
      setFadeContentKey(null);
    }, 200); // fade out 시간(0.2s) 후 영역 닫기
  };
  const handleMenuClick = () => {
    setContentVisible(false);
    fadeTimerRef.current = setTimeout(() => {
      setActiveMenu(null);
      setFadeContentKey(null);
    }, 200);
  };
  return (
    <div className="apple-container">
      {activeMenu && <div className="navbar-blur-overlay" />}
      <div
        className="navbar-hover-wrapper"
        onMouseEnter={() => activeMenu && handleMenuEnter(activeMenu)}
        onMouseLeave={handleMenuLeave}
      >
        <NavBar
          activeMenu={activeMenu}
          handleMenuEnter={handleMenuEnter}
          handleMenuLeave={handleMenuLeave}
          handleMenuClick={handleMenuClick}
        />
        <div
          className={`navbar-dropdown-area${activeMenu ? " show" : ""}`}
          aria-hidden={!activeMenu}
        >
          <DropdownArea
            activeMenu={activeMenu}
            fadeContentKey={fadeContentKey}
            contentVisible={contentVisible}
            handleMenuEnter={handleMenuEnter}
            handleMenuLeave={handleMenuLeave}
          />
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* ...기존 라우트... */}
      </Routes>
      {/* ...기존 푸터... */}
    </div>
  );
}

export default App;

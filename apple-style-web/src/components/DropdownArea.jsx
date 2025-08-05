import React, { useRef, useLayoutEffect, useState, useEffect } from "react";
import DropdownMenu from "./DropdownMenu";
import { DROPDOWN_ITEMS, STORE_DROPDOWN } from "../constants/navigation";

function DropdownArea({ fadeContentKey, contentVisible }) {
  const contentRef = useRef(null);
  const nextContentRef = useRef(null);
  const fadeTimerRef = useRef(null);
  const [renderKey, setRenderKey] = useState(fadeContentKey);
  const [fadeState, setFadeState] = useState("in"); // 'in' | 'out'
  const [height, setHeight] = useState(0);
  const [nextKey, setNextKey] = useState(null);

  // 현재 내용의 높이 측정
  useLayoutEffect(() => {
    if (contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    }
  }, [renderKey]);

  // 메뉴 전환 감지: 항상 마지막 메뉴만 반영, 이전 트랜지션은 무시
  useEffect(() => {
    if (fadeContentKey !== renderKey) {
      if (fadeTimerRef.current) clearTimeout(fadeTimerRef.current);
      setNextKey(fadeContentKey);
      setFadeState("out");
      fadeTimerRef.current = setTimeout(() => {
        setRenderKey(fadeContentKey);
        setNextKey(null);
        setFadeState("in");
      }, 400); // 400ms로 통일
    }
  }, [fadeContentKey, renderKey]);

  // 다음 내용의 높이 미리 측정 및 height 트랜지션
  useLayoutEffect(() => {
    if (nextKey && nextContentRef.current) {
      setHeight(nextContentRef.current.scrollHeight);
    }
  }, [nextKey]);

  // 드롭다운 닫힐 때 fade-out + height 0
  useEffect(() => {
    if (!contentVisible) {
      if (fadeTimerRef.current) clearTimeout(fadeTimerRef.current);
      setFadeState("out");
      fadeTimerRef.current = setTimeout(() => {
        setHeight(0);
      }, 400); // 400ms로 통일
    } else if (contentVisible && fadeState === "out" && !nextKey) {
      setFadeState("in");
    }
  }, [contentVisible, fadeState, nextKey]);

  return (
    <div className="dropdown-fade-content show" style={{ height }}>
      {/* 현재 내용 */}
      <div
        key={renderKey}
        className={`dropdown-fade${
          fadeState === "in" && contentVisible ? " show" : ""
        }`}
        ref={contentRef}
      >
        {renderKey === "store" ? (
          <DropdownMenu
            key={renderKey}
            show={fadeState === "in" && contentVisible}
            storeProps={STORE_DROPDOWN}
          />
        ) : (
          renderKey &&
          DROPDOWN_ITEMS[renderKey] && (
            <DropdownMenu
              key={renderKey}
              items={DROPDOWN_ITEMS[renderKey]}
              show={fadeState === "in" && contentVisible}
            />
          )
        )}
      </div>
      {/* 다음 내용(숨김, 높이 측정용) */}
      {nextKey && (
        <div
          style={{
            position: "absolute",
            visibility: "hidden",
            pointerEvents: "none",
            height: "auto",
          }}
          ref={nextContentRef}
        >
          {nextKey === "store" ? (
            <DropdownMenu
              key={nextKey}
              show={false}
              storeProps={STORE_DROPDOWN}
            />
          ) : (
            nextKey &&
            DROPDOWN_ITEMS[nextKey] && (
              <DropdownMenu
                key={nextKey}
                items={DROPDOWN_ITEMS[nextKey]}
                show={false}
              />
            )
          )}
        </div>
      )}
    </div>
  );
}

export default DropdownArea;

import React from "react";
import "../App.css";

function DropdownMenu({ items, show, storeProps }) {
  // Mac 메뉴 3컬럼 구조 지원
  if (
    items &&
    typeof items === "object" &&
    items.left &&
    items.center &&
    items.right
  ) {
    const columns = [
      { key: "left", title: "Mac 살펴보기", data: items.left },
      { key: "center", title: "Mac 쇼핑 및 서비스", data: items.center },
      { key: "right", title: "Mac 관련 정보", data: items.right },
    ];
    return (
      <div className={`dropdown-fade${show ? " show" : ""}`}>
        <div className="dropdown-content show">
          {columns.map((col, colIdx) => (
            <div
              className={`dropdown-col${col.key === "left" ? " left" : ""}`}
              style={{ transitionDelay: `${colIdx * 60}ms` }}
              key={col.key}
            >
              <div className="dropdown-title">{col.title}</div>
              {col.data.map((item, idx) => (
                <div
                  key={idx}
                  className={
                    col.key === "left" ? "dropdown-main" : "dropdown-link"
                  }
                  style={{ transitionDelay: `${120 + idx * 30}ms` }}
                >
                  {item}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  }
  if (storeProps) {
    // 스토어 메뉴 전용 3컬럼 레이아웃
    const columns = [
      { key: "left", title: "쇼핑하기", data: storeProps.left },
      { key: "center", title: "빠른 링크", data: storeProps.center },
      { key: "right", title: "특별 할인 쇼핑하기", data: storeProps.right },
    ];
    return (
      <div className={`dropdown-fade${show ? " show" : ""}`}>
        <div className="dropdown-content show">
          {columns.map((col, colIdx) => (
            <div
              className={`dropdown-col${col.key === "left" ? " left" : ""}`}
              style={{ transitionDelay: `${colIdx * 60}ms` }}
              key={col.key}
            >
              <div className="dropdown-title">{col.title}</div>
              {col.data.map((item, idx) => (
                <div
                  key={idx}
                  className={
                    col.key === "left" ? "dropdown-main" : "dropdown-link"
                  }
                  style={{ transitionDelay: `${120 + idx * 30}ms` }}
                >
                  {item}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  }
  // 기본(기존) 드롭다운
  return (
    <div className={`dropdown-fade${show ? " show" : ""}`}>
      <ul className="dropdown-list">
        {items.map((item, idx) => (
          <li
            key={idx}
            className="dropdown-item"
            style={{ transitionDelay: `${idx * 30}ms` }}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DropdownMenu;

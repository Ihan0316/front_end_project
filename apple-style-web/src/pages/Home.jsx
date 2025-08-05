import React from "react";

function Home() {
  return (
    <>
      <section className="apple-hero apple-hero-iphone">
        <div className="apple-hero-content">
          <h1>iPhone</h1>
          <p className="apple-hero-desc">iPhone 16 라인업을 만나보세요</p>
          <div className="apple-hero-btns">
            <button className="apple-btn blue">더 알아보기</button>
            <button className="apple-btn outline">쇼핑하기</button>
          </div>
          <div className="apple-hero-highlight">
            <span className="highlight">Apple Intelligence를 위한 탄생.</span>
            <br />
            <span className="apple-hero-sub">
              Apple Intelligence, 현재 한국어로 서비스 중
            </span>
          </div>
        </div>
      </section>
      <section className="apple-hero apple-hero-ipad">
        <div className="apple-hero-content">
          <h1>iPad Pro</h1>
          <p className="apple-hero-desc">
            놀라우리만치 얇다. 엄청나게 강력하다.
          </p>
          <div className="apple-hero-btns">
            <button className="apple-btn blue">더 알아보기</button>
            <button className="apple-btn outline">구매하기</button>
          </div>
        </div>
      </section>
    </>
  );
}
export default Home;

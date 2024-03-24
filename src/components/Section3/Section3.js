import React from "react";
import Common from "../Section2/Common";

function Section3() {
  return (
    <section className="third-hightlight-wrapper">
      <div className="container">
        <Common title="iPhone 11 Pro" camera={true} trade={true} text="Buy" />
        {/* <div className="title-wraper bold">iPhone 11 Pro</div>

        <div className="description-wrapper">
          Pro cameras. Pro display. Pro performance.
        </div>

        <div className="price-wrapper">
          From $24.95/mo. or $599 with trade‑in.
        </div>

        <div className="links-wrapper">
          <ul>
            <li>
              <a href="">Learn more</a>
            </li>
            <li>
              <a href="">Buy</a>
            </li>
          </ul>
        </div> */}
      </div>
    </section>
  );
}

export default Section3;

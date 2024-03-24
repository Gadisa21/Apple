import React, { Component } from "react";
import Common from "./Section2/Common";

class New extends Component {
  render() {
    return (
      <section className="second-hightlight-wrapper">
        <Common
          title="MacBook Air"
          isBlack={true}
          show={true}
          showrange={true}
          text="Buy"
          showlast={false}
        />
      </section>
    );
  }
}
export default New;

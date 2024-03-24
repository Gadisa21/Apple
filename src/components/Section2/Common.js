import React, { Component } from "react";

class Common extends Component {
  render() {
    const classVar = "title-wraper bold" + (this.props.isBlack ? " black" : "");
    return (
      <div className="container">
        <div className="new-alert">New</div>

        <div className={classVar}>{this.props.title}</div>

        {this.props.show && (
          <div className="description-wrapper black">
            Twice the speed. Twice the storage.
          </div>
        )}

        {this.props.showrange && (
          <div className="price-wrapper grey">From $999.</div>
        )}

        <div className="links-wrapper">
          <ul>
            <li>
              <a href="">Learn more</a>
            </li>
            <li>
              <a href="">{this.props.text}</a>
            </li>
          </ul>
        </div>
        {this.props.showlast && (
          <div className="ipod-caption row">
            <div className="col-sm-12 col-md-6 text-md-right">
              iPad Pro available starting 3.25
            </div>
            <div className="col-sm-12 col-md-6 text-md-left">
              Magic Keyboard coming in May
            </div>
          </div>
        )}
        {this.props.camera && (
          <div className="description-wrapper">
            Pro cameras. Pro display. Pro performance.
          </div>
        )}

        {this.props.trade && (
          <div className="price-wrapper">
            From $24.95/mo. or $599 with trade‑in.
          </div>
        )}
      </div>
    );
  }
}
export default Common;

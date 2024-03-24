import React, { Component } from "react";
import { Link } from "react-router-dom";

class HeaderLink extends Component {
  render() {
    return (
      <li className="nav-item">
        <Link className="nav-link js-scroll-trigger" to={this.props.url}>
          {this.props.urlname}
        </Link>
      </li>
    );
  }
}
export default HeaderLink;

import React, { Component } from "react";
import { Link } from "react-router-dom";

class HeaderLinkLogo extends Component {
  render() {
    return (
      <li className="nav-item">
        <Link className="nav-link js-scroll-trigger" to={this.props.url}>
          <img src={this.props.image} />
        </Link>
      </li>
    );
  }
}
export default HeaderLinkLogo;

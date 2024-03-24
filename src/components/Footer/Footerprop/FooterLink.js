import { Component } from "react";

class FooterLink extends Component {
  render() {
    const { url, urlname } = this.props;
    return (
      <li>
        <a href={url}>{urlname}</a>
      </li>
    );
  }
}
export default FooterLink;

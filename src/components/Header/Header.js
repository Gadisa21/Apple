import { Component } from "react";
import logosm from "../../commonResource/images/icons/logo-sm.png";
import search from "../../commonResource/images/icons/search-icon-sm.png";
import cart from "../../commonResource/images/icons/cart-sm.png";
import HeaderLink from "./HeaderLink/HeaderLink";
import HeaderLinkLogo from "./HeaderLink/HeaderLinkLogo";
import { Link } from "react-router-dom";
class Header extends Component {
  render() {
    return (
      <div className="nav-wrapper fixed-top">
        <div className="container">
          <nav className="navbar navbar-toggleable-sm navbar-expand-md">
            <button
              className="navbar-toggler navbar-toggler-right"
              type="button"
              data-toggle="collapse"
              data-target=".navbar-collapse"
            >
              ☰
            </button>
            <Link className="navbar-brand mx-auto" to="/">
              <img src={logosm} />
            </Link>

            <div className="navbar-collapse collapse">
              <ul className="navbar-nav nav-justified w-100 nav-fill">
                <HeaderLink url="/Mac" urlname="Mac" />
                <HeaderLink url="iphone" urlname="iphone" />
                <HeaderLink url="ipad" urlname="ipad" />
                <HeaderLink url="watch" urlname="watch" />
                <HeaderLink url="tv" urlname="tv" />
                <HeaderLink url="Music" urlname="Music" />
                <HeaderLink url="Support" urlname="Support" />
                <HeaderLinkLogo url="/search/" image={search} />

                <HeaderLinkLogo url="/cart/" image={cart} />
              </ul>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}

export default Header;

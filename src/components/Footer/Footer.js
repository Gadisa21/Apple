import { Component } from "react";
import flag from "../../commonResource/images/icons/16.png";
import FooterColumn from "./Footerprop/FooterColumn";


class Footer extends Component {
  render() {
    const columns = [
      {
        title: ["Shop and Learn"],

        links: [
          [
            { url: "#", urlname: "Mac" },
            { url: "#", urlname: "ipad" },
            { url: "#", urlname: "iphone" },
            { url: "#", urlname: "Watch" },
            { url: "#", urlname: "Tv" },
            { url: "#", urlname: "Music" },
            { url: "#", urlname: "AirPods" },
            { url: "#", urlname: "HomePods" },
            { url: "#", urlname: "iPod touch" },
            { url: "#", urlname: "Accessories" },
            { url: "#", urlname: "Gift Cards" },
          ],
        ],
      },
      {
        title: ["Services", "Account"],
        links: [
          [
            { url: "#", urlname: "Apple Music" },
            { url: "#", urlname: "Apple News+" },
            { url: "#", urlname: "Apple TV+" },
            { url: "#", urlname: "Apple Arcade" },
            { url: "#", urlname: "Apple Card" },
            { url: "#", urlname: "iCloud" },
            { url: "#", urlname: "Music" },
          ],
          [
            { url: "#", urlname: "Manage Your Apple ID" },
            { url: "#", urlname: "Apple Store Account" },
            { url: "#", urlname: "iCloud.com" },
          ],
        ],
      },

      {
        title: ["Apple Store"],
        links: [
          [
            { url: "#", urlname: "Find a Store" },
            { url: "#", urlname: "Genius Bar" },
            { url: "#", urlname: "Today at Apple" },
            { url: "#", urlname: "Apple Camp" },
            { url: "#", urlname: "Field Trip" },
            { url: "#", urlname: "Apple Store App" },
            { url: "#", urlname: "Refurbished and Clearance" },
            { url: "#", urlname: "Financing" },
            { url: "#", urlname: "Apple Trade In" },
            { url: "#", urlname: "Order Status" },
            { url: "#", urlname: "Shopping Help" },
          ],
        ],
      },
      {
        title: [
          "For Business",
          "For Education",
          "For Healthcare",
          "For Government",
        ],
        links: [
          [
            { url: "#", urlname: "Apple and Business" },
            { url: "#", urlname: "Shop for Business" },
          ],
          [
            { url: "#", urlname: "Apple and Education" },
            { url: "#", urlname: "Shop for College" },
          ],
          [
            { url: "#", urlname: "Manage Your Apple ID" },
            { url: "#", urlname: "Apple Store Account" },
            { url: "#", urlname: "iCloud.com" },
          ],
          [
            { url: "#", urlname: "Apple and Education" },
            { url: "#", urlname: "Shop for College" },
          ],
        ],
      },

      {
        title: ["Apple Values", "About Apple"],
        links: [
          [
            { url: "#", urlname: "Find a Store" },
            { url: "#", urlname: "Genius Bar" },
            { url: "#", urlname: "Today at Apple" },
            { url: "#", urlname: "Apple Camp" },
            { url: "#", urlname: "Field Trip" },
            { url: "#", urlname: "Apple Store App" },
          ],
          [
            { url: "#", urlname: "Find a Store" },
            { url: "#", urlname: "Genius Bar" },
            { url: "#", urlname: "Today at Apple" },
            { url: "#", urlname: "Apple Camp" },
            { url: "#", urlname: "Field Trip" },
            { url: "#", urlname: "Apple Store App" },
          ],
        ],
      },
    ];
    return (
      <footer className="footer-wrapper">
        <div className="container">
          <div className="upper-text-container">
            <p>
              1. Trade In: Trade‑in values vary. iPhone 11 and iPhone 11 Pro
              promotional pricing is after trade‑in of iPhone 8 Plus and iPhone
              X in good condition. Additional trade‑in values require purchase
              of a new iPhone, subject to availability and limits. Must be at
              least 18. Apple or its trade-in partners reserve the right to
              refuse or limit any Trade In transaction for any reason. In‑store
              trade‑in requires presentation of a valid, government-issued photo
              ID (local law may require saving this information). Sales tax may
              be assessed on full value of new iPhone. Additional terms from
              Apple or Apple’s trade-in partners may apply. Monthly pricing:
              Available to qualified customers and requires 0% APR, 24-month
              installment loan with Citizens One or Apple Card Monthly
              Installments and iPhone activation with AT&T, Sprint, T-Mobile, or
              Verizon. Taxes and shipping not included. Additional Apple Card
              Monthly Installments terms are in the{" "}
              <a
                href="https://www.goldmansachs.com/terms-and-conditions/Apple-Card-Customer-Agreement.pdf"
                target="_blank"
              >
                {" "}
                Customer Agreement
              </a>
              . Additional iPhone Payments terms are{" "}
              <a href="https://www.apple.com/legal/sales-support/iphoneinstallments_us/">
                {" "}
                here
              </a>
              .
            </p>
            <p>
              2. Subscription required.
              <br />
              <br />
              Magic Keyboard sold separately.
              <br />
              <br />
              Apple TV+ is $4.99/month after free trial. One subscription per
              Family Sharing group. Offer good for 3 months after eligible
              device activation. Plan automatically renews until cancelled.
              Restrictions and other{" "}
              <a href="https://www.apple.com/promo/">terms </a> apply.
            </p>
          </div>
          <div className="footer-links-wrapper row">
            {columns.map((column, index) => (
              <FooterColumn
                key={index}
                title={column.title}
                links={column.links}
              />
            ))}
          </div>
          <div className="my-apple-wrapper">
            More ways to shop: <a href="#">Find an Apple Store</a> or{" "}
            <a href="#">other retailer</a> near you. Or call 1-800-MY-APPLE.
          </div>
          <div className="copyright-wrapper row">
            <div className="copyright col-sm-12 order-2 col-md-8 order-md-1 col-lg-4 order-lg-1">
              Copyright &copy; 2020 Apple Inc. All rights reserved.
            </div>
            <div className="footer-links-terms  col-sm-12 order-3 col-lg-6 order-lg-2">
              <ul>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Terms of Use</a>
                </li>
                <li>
                  <a href="#">Sales and Refunds</a>
                </li>
                <li>
                  <a href="#">Legal</a>
                </li>
                <li>
                  <a href="#">Site Map</a>
                </li>
              </ul>
            </div>
            <div className="footer-country  col-sm-12 order-1 col-md-4 order-md-2 text-md-right col-lg-2 order-lg-3">
              <div className="flag-wrapper">
                <img src={flag} />
              </div>{" "}
              <div className="footer-country-name">United States</div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;

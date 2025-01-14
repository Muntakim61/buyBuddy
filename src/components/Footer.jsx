import React from "react";
import { Link } from "react-router-dom";

const title = "About buyBuddy";
const desc =
  "buyBuddy is your go-to e-commerce platform, providing a seamless online shopping experience. Our virtual buyBuddy enables you to select, store, and review items effortlessly before checking out, making your shopping journey convenient and enjoyable.";
const ItemTitle = "Categories";
const quickTitle = "Quick Links";
const tweetTitle = "Recent Tweets";

const addressList = [
  {
    iconName: "icofont-google-map",
    text: "IIUC,Chittagong,Bangladesh",
  },
  {
    iconName: "icofont-phone",
    text: "+8801234567890",
  },
  {
    iconName: "icofont-envelope",
    text: " c223144@ugrad.iiuc.ac.bd",
  },
  {
    iconName: "icofont-envelope",
    text: " c223137@ugrad.iiuc.ac.bd",
  },
];

const socialList = [
    {
      iconName: "icofont-facebook",
      siteLink: "https://www.facebook.com/",
      className: "facebook",
    },
    {
      iconName: "icofont-twitter",
      siteLink: "https://www.twitter.com/",
      className: "twitter",
    },
    {
      iconName: "icofont-linkedin",
      siteLink: "https://www.linkedin.com/",
      className: "linkedin",
    },
    {
      iconName: "icofont-instagram",
      siteLink: "https://www.instagram.com/",
      className: "instagram",
    },
    {
      iconName: "icofont-pinterest",
      siteLink: "https://www.pinterest.com/",
      className: "pinterest",
    },
  ];
  

const ItemList = [
  {
    text: "All Products",
    link: "/shop",
  },
  {
    text: "Shop",
    link: "/shop",
  },
  {
    text: "Blog",
    link: "/blog",
  },
  {
    text: "About",
    link: "/about",
  },
  {
    text: "Contact",
    link: "/contact",
  },
];

const quickList = [
  {
    text: "Summer Sessions",
    link: "#",
  },
  {
    text: "Events",
    link: "#",
  },
  {
    text: "Gallery",
    link: "#",
  },
  {
    text: "Forums",
    link: "#",
  },
  {
    text: "Privacy Policy",
    link: "#",
  },
  {
    text: "Terms of Use",
    link: "#",
  },
];

const tweetList = [
  {
    iconName: "icofont-twitter",
    desc: (
      <p>
        Md.Mostafa Al Muntakim <br /> <a href="#">@buyBuddy Greetings!</a>
        <br /> Grab your item, 50% Big Sale Offer !!
      </p>
    ),
  },
  {
    iconName: "icofont-twitter",
    desc: (
      <p>
        Arshad Ahmed <br /> <a href="#"> @buyBuddy Hey!</a>
        <br /> Grab your item, 50% Big Sale Offer !!
      </p>
    ),
  },
];

const footerbottomList = [
  {
    text: "Faculty",
    link: "#",
  },
  {
    text: "Staff",
    link: "#",
  },
  {
    text: "Students",
    link: "#",
  },
  {
    text: "Alumni",
    link: "#",
  },
];

const Footer = () => {
    const currentYear = new Date().getFullYear();

  return (
    <footer className="style-2">
      {/*footer top */}
      <div className="footer-top dark-view padding-tb">
        <div className="container">
          <div className="row g-4 row-cols-xl-4 row-cols-sm-2 row-cols-1 justify-content-center">
            <div className="col">
              <div className="footer-item our-address">
                <div className="footer-inner">
                  <div className="footer-content">
                    <div className="title">
                      <h4>{title}</h4>
                    </div>
                    <div className="content">
                      <p>{desc}</p>
                      <ul className="lab-ul office-address">
                        {addressList.map((val, i) => (
                          <li key={i}>
                            <i className={val.iconName}>{val.text}</i>
                          </li>
                        ))}
                      </ul>
                      {/* Social Links */}
                      <ul className="lab-ul social-icons">
                        {socialList.map((val, i) => (
                          <li key={i}>
                            <a href={val.siteLink} className={val.className}>
                              <i className={val.iconName}></i>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="footer-item our-address">
                <div className="footer-inner">
                  <div className="footer-content">
                    <div className="title">
                      <h4>{ItemTitle}</h4>
                    </div>
                    <div className="content">
                        {/* Item Lists */}
                      <ul className="lab-ul office-address">
                        {ItemList.map((val, i) => (
                          <li key={i}>
                            <a href="#">{val.text}</a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="footer-item our-address">
                <div className="footer-inner">
                  <div className="footer-content">
                    <div className="title">
                      <h4>{quickTitle}</h4>
                    </div>
                    <div className="content">
                        {/* QuickLinks List */}
                      <ul className="lab-ul office-address">
                        {quickList.map((val, i) => (
                          <li key={i}>
                            <a href="#">{val.text}</a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="footer-item our-address">
                <div className="footer-inner">
                  <div className="footer-content">
                    <div className="title">
                      <h4>{tweetTitle}</h4>
                    </div>
                    <div className="content">
                      <ul className="lab-ul office-address">
                        {tweetList.map((val, i) => (
                          <li key={i}>
                            <i className={`${val.iconName} `}></i>
                            {val.desc}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*footer bottom */}
      <div className="footer-bottom">
        <div className="container">
          <div className="section-wrapper">
            <p>
             {currentYear} <Link to="/">buyBuddy</Link> Designed by{" "}
              <a href="/" target="_blank">
                Md.Mostafa Al Muntakim & Arshad Ahmed
              </a>
            </p>
            <div className="footer-bottom-list">
              {footerbottomList.map((val, i) => (
                <a href="#" key={i}>
                  {val.text}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

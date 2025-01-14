import React, { useState } from "react";
import { Link } from "react-router-dom";
const title = "Register Now";
const socialTitle = "Register with Social Media";
const btnText = "SignUp Now";

const socialList = [
  {
    link: "#",
    iconName: "icofont-facebook",
    className: "facebook",
  },
  {
    link: "#",
    iconName: "icofont-twitter",
    className: "twitter",
  },
  {
    link: "#",
    iconName: "icofont-linkedin",
    className: "linkedin",
  },
  {
    link: "#",
    iconName: "icofont-instagram",
    className: "instagram",
  },
  {
    link: "#",
    iconName: "icofont-pinterest",
    className: "pinterest",
  },
];

const SignUp = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    console.log(form);
    const email = form.email.value;
    const password = form.password.value;
    const name = form.name.value;
    const confirmPassword = form.confirmpassword.value;
    console.log(name, email, password, confirmPassword);
  };
  return (
    <div className="login-section padding-tb section-bg">
      <div className="container">
        <div className="account-wrapper">
          <h3 className="title">{title}</h3>
          <form className="account-form" onSubmit={handleRegister}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Full Name*"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email Address*"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                name="confirmpassword"
                id="confirmpassword"
                placeholder="Confirm Password"
                required
              />
            </div>

            <div className="form-group">
              <button type="submit" className="d-block lab-btn">
                <span>{btnText}</span>
              </button>
            </div>
          </form>

          <div className="account-button">
            <span className="d-block cate pt">
              Have an Account?{" "}
              <Link to="/login" className="text-warning">
                Login
              </Link>
            </span>

            <span className="or">
              <span>or</span>
            </span>

            {/*social login */}
            <h5 className="subtitle">{socialTitle}</h5>
            <ul className="la-ul social-icons justify-content-center">
              {socialList.map((val, i) => (
                <li key={i}>
                  <a href="#" className={val.className}>
                    <i className={val.iconName}>{val.siteLink}</i>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

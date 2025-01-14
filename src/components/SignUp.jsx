import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import Swal from "sweetalert2";
const title = "Register Now";
const socialTitle = "Register with Social Media";
const btnText = "SignUp Now";

const socialList = [
  {
    link: "#",
    iconName: "icofont-github",
    className: "github",
  },
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
  const { signUpWithGmail, login, user, createUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const name = form.name.value;
    const confirmPassword = form.confirmPassword.value;

    if (password !== confirmPassword) {
      setErrorMessage("Passwords don't match");
      Swal.fire({
        title: "Error!",
        text: "Passwords don't match. Please try again.",
        icon: "error",
      });
      return;
    }

    if (password.length < 6) {
      setErrorMessage("Password must be at least 6 characters long");
      Swal.fire({
        title: "Error!",
        text: "Password must be at least 6 characters long.",
        icon: "error",
      });
      return;
    }

    createUser(email, password)
      .then((user) => {
        Swal.fire({
          title: "Registered!",
          text: "Your account has been registered successfully.",
          icon: "success",
        });
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const message = error.message;
        setErrorMessage(message);
        Swal.fire({
          title: "Sorry!",
          text: errorMessage || "Something went wrong.",
          icon: "error",
        });
      });
  };

  const handleGoogleRegister = () => {
    signUpWithGmail()
      .then((result) => {
        Swal.fire({
          title: "Registered!",
          text: "Your account has been registered successfully.",
          icon: "success",
        });
        navigate("/");
      })
      .catch((error) => {
        console.log(error.message);
        Swal.fire({
          title: "Sorry!",
          text: "Something went wrong.",
          icon: "error",
        });
      });
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
                name="confirmPassword"
                id="confirmPassword"
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
            <div className="d-flex flex-column align-items-center  justify-content-center">
              <h5 className="subtitle">{socialTitle}</h5>
              <ul className="la-ul social-icons">
                {/* <button className="github mb-1" onClick={handleGoogleRegister}>
                  <i className="icofont-github"></i>
                </button> */}
                {socialList.map((val, i) => (
                  <li key={i}>
                    <a onClick={handleGoogleRegister} className={val.className}>
                      <i className={val.iconName}>{val.siteLink}</i>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

import React, { useContext, useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import app from "../firebase/firebase.config";
import { AuthContext } from "../context/AuthProvider";
import Swal from "sweetalert2";

const provider = new GoogleAuthProvider();
const auth = getAuth();

const title = "Login";
const socialTitle = "Login with Social Media";
const btnText = "Login Now";

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

const Login = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const { signUpWithGmail, login,user } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
  
    login(email, password)
      .then((result) => {
        const user = result.user;
        Swal.fire({
          title: "Login Successful!",
          text: "Welcome back!",
          icon: "success",
        });
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error.message);
        Swal.fire({
          title: "Login Failed!",
          text: "Please provide a valid email & password.",
          icon: "error",
        });
      });
  };
  
  const handleGoogleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        Swal.fire({
          title: "Login Successful!",
          text: "You have successfully logged in using Google.",
          icon: "success",
        });
      })
      .catch((error) => {
        const Message = error.message;
        setErrorMessage(Message);
        console.log(errorMessage);
        Swal.fire({
          title: "Login Failed!",
          text: errorMessage || "Something went wrong. Please try again.",
          icon: "error",
        });
      });
  };
  
  // const handleRegister = () => {
  //   signUpWithGmail()
  //     .then((result) => {
  //       const registeredUser = result.user;
  //       Swal.fire({
  //         title: "Registration Successful!",
  //         text: "Your account has been registered successfully.",
  //         icon: "success",
  //       });
  //       navigate(from, { replace: true });
  //     })
  //     .catch((error) => {
  //       console.log(error.message);
  //       Swal.fire({
  //         title: "Registration Failed!",
  //         text: "Please provide valid email & password.",
  //         icon: "error",
  //       });
  //     });
  // };
  
  return (
    <div className="login-section padding-tb section-bg">
      <div className="container">
        <div className="account-wrapper">
          <h3 className="title">{title}</h3>
          <form className="account-form" onSubmit={handleLogin}>
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
            {/* Showing error message */}
            <div>
              {errorMessage ? (
                <div className="error-message text-danger mb-1">
                  {errorMessage}
                </div>
              ) : (
                <></>
              )}
            </div>
            <div className="form-group">
              <div className="d-flex justify-content-between flex-wrap pt-sm-2">
                <div className="checkgroup">
                  <input type="checkbox" name="remember" id="remember" />
                  <label htmlFor="remember">Remember Me</label>
                </div>
                <div className="ms-auto">
                  <Link to="/forgetpass">Forget Password</Link>
                </div>
              </div>
            </div>
            <div className="form-group">
              <button type="submit" className="d-block lab-btn">
                <span>{btnText}</span>
              </button>
            </div>
          </form>

          <div className="account-button">
            <span className="d-block cate pt-10">
              Don&apos;t Have a Account?{" "}
              <Link to="/sign-up" className="text-warning">
                Sign Up
              </Link>
            </span>
            <span className="or">
              <span>or</span>
            </span>

            {/*Social login */}
            <h5 className="subtitle">{socialTitle}</h5>
            <ul className="la-ul social-icons justify-content-center">
              <button className="github mb-1"  onClick={handleGoogleLogin}>
                <i className="icofont-github"></i>
              </button>
              {socialList.map((val, i) => (
                <li key={i}>
                  <a href={val.link}  className={`${val.className} gap-4`}>
                    <i className={val.iconName}></i>
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

export default Login;

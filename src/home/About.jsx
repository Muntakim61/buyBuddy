import CountUp from "react-countup";
import { Link } from "react-router-dom";
const img1 = "/images/instructor/Arshad.jpg";
const img2 = "/images/instructor/Muntakim.jpg";


const subTitle = "Why Choose Us";
const title = "Become a Merchant";
const desc =
  "Learn business skills anytime, anywhere with our app. Download, install, and start your learning journey today!";
const btnText = "Apply Now";

const countList = [
  {
    iconName: "icofont-users-alt-4",
    count: "12600",
    text: "Marchant Enrolled",
  },
  {
    iconName: "icofont-graduate-alt",
    count: "30",
    text: "Certified Courses",
  },
  {
    iconName: "icofont-notification",
    count: "100",
    text: "Rewards and GitCards",
  },
];

const About = () => {
  return (
    <div className="instructor-section style-2 padding-tb section-bg-ash">
      <div className="container">
        <div className="section-wrapper">
          <div className="row g-4 justify-content-center align-items-center row-cols-1 row-cols-md-2 row-cols-xl-3">
            <div className="col">
              {countList.map((val, i) => (
                <div key={i} className="count-item">
                  <div className="count-inner">
                    <div className="count-icon">
                      <i className={val.iconName}></i>
                    </div>
                    <div className="count-content">
                      <h2>
                        <span className="count">
                          <CountUp end={val.count} />
                        </span>
                        <span>+</span>
                      </h2>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="col">
              <div className="instructor-content">
                <span className="subtitle">{subTitle}</span>
                <h2 className="title">{title}</h2>
                <p>{desc}</p>
                <Link to="/sign-up" className="lab-btn">
                  {btnText}
                </Link>
              </div>
            </div>
            <div className="col d-flex flex-column align-items-center gap-5">
              <img
                src={img2}
                alt=""
                className="rounded-circle"
                style={{
                  width: "200px",
                  height: "200px",
                  objectFit: "cover",
                }}
              />
              <img
                src={img1}
                alt=""
                className="rounded-circle"
                style={{
                  width: "250px",
                  height: "250px",
                  objectFit: "cover",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

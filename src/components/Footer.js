import SubscribeForm from "./SubscribeForm";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer className="footer">
      <div>
        <section className="footer__section1">
          <div>
            <h1 className="headline">Join The Erox Family</h1>
            <p className="prgh">Lorem Ipsum dolor amet, consoteur</p>
            <SubscribeForm />
          </div>
        </section>
        <section className="footer__section2">
          <div className="grid-box">
            <div className="grid-element form">
              <h1 className="headline">Erox</h1>
              <p className="prgh">
                Lorem Ipsum dolor sit amet, consoteur sadpricingsss
              </p>
              <SubscribeForm
                placeholder="Your Email"
                className="subscribe-form--outline"
              />
            </div>
            <div className="grid-element nav">
              <ul className="link-group">
                <li>
                  <h1 className="headline">
                    <Link>SHOP</Link>
                  </h1>
                </li>
                <li className="link">
                  <Link>Lorem Ipsum al</Link>
                </li>
                <li className="link">
                  <Link>Dolar at</Link>
                </li>
                <li className="link">
                  <Link>Veraotio</Link>
                </li>
                <li className="link">
                  <Link>Chauloe</Link>
                </li>
              </ul>
              <ul className="link-group">
                <li>
                  <h1 className="headline">
                    <Link>About</Link>
                  </h1>
                </li>
                <li className="link">
                  <Link>About Us</Link>
                </li>
                <li className="link">
                  <Link>Sooth Stories(Blog)</Link>
                </li>
                <li className="link">
                  <Link>Contact Us</Link>
                </li>
                <li className="link">
                  <Link>Learn More</Link>
                </li>
                <li className="link">
                  <Link>Stories</Link>
                </li>
              </ul>
              <ul className="link-group">
                <li>
                  <h1 className="headline">
                    <Link>More </Link>
                  </h1>
                </li>
                <li className="link">
                  <Link>Dolar at</Link>
                </li>
                <li className="link">
                  <Link>Lorem at al</Link>
                </li>
                <li className="link">
                  <Link>Veraotio</Link>
                </li>
              </ul>
            </div>
            <div className="copyright">
              <p className="prgh">Erox All Right Reserved</p>
              <div className="links">
                <Link>Privacy Policy</Link>
                <Link>Terms of Use</Link>
                <Link>Contact Us</Link>
              </div>
            </div>
            <div className="social-links">
              <Link className="_0facebook">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 25.079 24.927"
                >
                  <path
                    id="Icon_simple-facebook"
                    data-name="Icon simple-facebook"
                    d="M25.079,12.539a12.539,12.539,0,1,0-14.5,12.387V16.164H7.4V12.539H10.58V9.777c0-3.143,1.872-4.879,4.736-4.879a19.284,19.284,0,0,1,2.807.245V8.229H16.542A1.812,1.812,0,0,0,14.5,10.187v2.352h3.478l-.556,3.625H14.5v8.762A12.543,12.543,0,0,0,25.079,12.539Z"
                    fill="#fff"
                  />
                </svg>
              </Link>
              <Link className="_0instagram">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 22.901 22.901"
                >
                  <g
                    id="Icon_feather-instagram"
                    data-name="Icon feather-instagram"
                    transform="translate(1 1)"
                  >
                    <path
                      id="Path_2875"
                      data-name="Path 2875"
                      d="M8.225,3h10.45A5.225,5.225,0,0,1,23.9,8.225v10.45A5.225,5.225,0,0,1,18.676,23.9H8.225A5.225,5.225,0,0,1,3,18.676V8.225A5.225,5.225,0,0,1,8.225,3Z"
                      transform="translate(-3 -3)"
                      fill="none"
                      stroke="#fff"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                    <path
                      id="Path_2876"
                      data-name="Path 2876"
                      d="M20.38,15.5a4.18,4.18,0,1,1-3.522-3.522A4.18,4.18,0,0,1,20.38,15.5Z"
                      transform="translate(-5.749 -5.71)"
                      fill="none"
                      stroke="#fff"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                    <path
                      id="Path_2877"
                      data-name="Path 2877"
                      d="M26.25,9.75h0"
                      transform="translate(-10.052 -5.047)"
                      fill="none"
                      stroke="#fff"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </g>
                </svg>
              </Link>
              <Link className="_0twitter">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 23.116 18.811"
                >
                  <path
                    id="Icon_ionic-logo-twitter"
                    data-name="Icon ionic-logo-twitter"
                    d="M24.53,6.729a9.588,9.588,0,0,1-2.724.749,4.759,4.759,0,0,0,2.087-2.626A9.424,9.424,0,0,1,20.88,6a4.741,4.741,0,0,0-8.205,3.243,4.643,4.643,0,0,0,.122,1.083A13.44,13.44,0,0,1,3.02,5.367a4.752,4.752,0,0,0,1.474,6.339,4.632,4.632,0,0,1-2.155-.593v.059a4.747,4.747,0,0,0,3.806,4.654,4.774,4.774,0,0,1-1.249.167A4.474,4.474,0,0,1,4,15.9a4.75,4.75,0,0,0,4.433,3.3,9.509,9.509,0,0,1-5.893,2.033,9.614,9.614,0,0,1-1.132-.069,13.257,13.257,0,0,0,7.26,2.146A13.414,13.414,0,0,0,22.178,9.8c0-.206,0-.411-.015-.612A9.654,9.654,0,0,0,24.53,6.729Z"
                    transform="translate(-1.413 -4.5)"
                    fill="#fff"
                  />
                </svg>
              </Link>
              <Link className="_0youtube">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 21.492 21.492"
                >
                  <path
                    id="Icon_metro-youtube"
                    data-name="Icon metro-youtube"
                    d="M8.724,1.928,7.272,4.808,5.82,1.928H3.968L6.585,6.489,6.6,6.48V9.987H7.944V6.48l.015.009,2.617-4.561Zm3.921,2.686a.681.681,0,0,1,.672.672V7.973a.672.672,0,1,1-1.343,0V5.286A.681.681,0,0,1,12.645,4.615Zm0-1.343A2.021,2.021,0,0,0,10.63,5.286V7.973a2.015,2.015,0,1,0,4.03,0V5.286a2.021,2.021,0,0,0-2.015-2.015Zm6.045,0V8.56c-.586.489-1.343.784-1.343-.958V3.271H16v4.6h0c.021,1.11.255,3.11,2.684,1.484v.629h1.343V3.271H18.69ZM20.7,16.7a.672.672,0,0,0-.672.672v.672h1.343v-.672A.672.672,0,0,0,20.7,16.7Zm-6.045.672V20.9c.455.455,1.343.5,1.343-.168V17.585C16,16.914,15.332,16.7,14.66,17.375Zm9.293-3.242a2.793,2.793,0,0,0-2.746-2.693c-1.465-.073-4.816-.109-7.76-.109s-6.533.036-8,.109A2.793,2.793,0,0,0,2.7,14.133c-.088,1.577-.132,2.148-.132,2.936s.044,1.971.132,3.547A2.793,2.793,0,0,0,5.449,23.31c1.465.073,5.054.109,8,.109s6.3-.036,7.76-.109a2.793,2.793,0,0,0,2.746-2.693q.11-1.971.11-3.547c0-1.051-.037-1.623-.11-2.936ZM6.6,22.077H5.257V15.36H3.914V14.017h4.03V15.36H6.6Zm5.373,0H10.63v-.629c-2.554,1.433-2.664.046-2.684-1.064h0V16.7H9.287v3.7c0,.812.757.733,1.343.244V16.7h1.343Zm5.373-1.362c0,1.4-1.438,1.813-2.686.722v.641H13.317V14.017H14.66V16.2c1.343-1.343,2.686-.84,2.686.5Zm5.373-2.667v.672H20.033v1.343a.672.672,0,1,0,1.343,0V19.39h1.343v.672a2.015,2.015,0,1,1-4.03,0V17.375a2.015,2.015,0,1,1,4.03,0v.672Z"
                    transform="translate(-2.571 -1.928)"
                    fill="#fff"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
}

export default Footer;

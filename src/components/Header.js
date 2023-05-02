import { Link, NavLink } from "react-router-dom";
function Header({ mobileMenuState }) {
  function toggleMobileMenu(ev) {
    mobileMenuState.setIsMobileMenuActive((prev) => !prev);
  }
  return (
    <header className="header">
      <div>
        <div className="bar1">
          <ul className="link-list">
            <li className="hamburger" onClick={toggleMobileMenu}>
              {mobileMenuState.isMobileMenuActive ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20.953"
                  height="20.953"
                  viewBox="0 0 20.953 20.953"
                >
                  <path
                    id="Icon_ionic-md-close"
                    data-name="Icon ionic-md-close"
                    d="M28.477,9.619l-2.1-2.1L18,15.9,9.619,7.523l-2.1,2.1L15.9,18,7.523,26.381l2.1,2.1L18,20.1l8.381,8.381,2.1-2.1L20.1,18Z"
                    transform="translate(-7.523 -7.523)"
                    fill="#354e57"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20.947"
                  height="14.631"
                  viewBox="0 0 20.947 14.631"
                >
                  <g
                    id="Icon_feather-menu"
                    data-name="Icon feather-menu"
                    transform="translate(-3.5 -8)"
                  >
                    <path
                      id="Path_2880"
                      data-name="Path 2880"
                      d="M4.5,18H23.447"
                      transform="translate(0 -2.684)"
                      fill="none"
                      stroke="#354e57"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    />
                    <path
                      id="Path_2881"
                      data-name="Path 2881"
                      d="M4.5,9H23.447"
                      transform="translate(0)"
                      fill="none"
                      stroke="#354e57"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    />
                    <path
                      id="Path_2882"
                      data-name="Path 2882"
                      d="M4.5,27H23.447"
                      transform="translate(0 -5.369)"
                      fill="none"
                      stroke="#354e57"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    />
                  </g>
                </svg>
              )}
            </li>
            <li className="link about">
              <NavLink>ABOUT</NavLink>
            </li>
            <li className="link consultation">
              <NavLink>Consultation</NavLink>
            </li>
            <li className="link logo">
              <NavLink>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="43.264"
                  height="16.509"
                  viewBox="0 0 43.264 16.509"
                >
                  <path
                    id="Path_3067"
                    data-name="Path 3067"
                    d="M11.88-6.169H2.766V-22.406h8.753v2.287H5.46v4.6h5.582v2.276H5.46v4.8h6.42ZM21.2-15.262a2.177,2.177,0,0,0-1.37-.374,2.345,2.345,0,0,0-1.948,1.053,4.709,4.709,0,0,0-.781,2.865v5.548H14.473V-17.764H17.1v2.389h.045a4.039,4.039,0,0,1,1.183-1.908,2.67,2.67,0,0,1,1.783-.685,2.214,2.214,0,0,1,1.087.215ZM27.993-5.9a5.747,5.747,0,0,1-4.286-1.625,5.869,5.869,0,0,1-1.6-4.308,6.107,6.107,0,0,1,1.67-4.563,6.141,6.141,0,0,1,4.5-1.642,5.562,5.562,0,0,1,4.235,1.6,6.167,6.167,0,0,1,1.517,4.427,6.077,6.077,0,0,1-1.636,4.444A5.877,5.877,0,0,1,27.993-5.9Zm.125-10.043a3,3,0,0,0-2.434,1.076,4.5,4.5,0,0,0-.895,2.967,4.242,4.242,0,0,0,.906,2.87,3.042,3.042,0,0,0,2.423,1.047A2.887,2.887,0,0,0,30.5-9.011a4.561,4.561,0,0,0,.832-2.933A4.63,4.63,0,0,0,30.5-14.9,2.873,2.873,0,0,0,28.117-15.941ZM46.03-17.764,42.169-11.9l3.816,5.729H42.939L40.9-9.759q-.192-.328-.453-.838H40.4q-.045.1-.476.838L37.855-6.169H34.82l3.94-5.684-3.737-5.911h3.057l2,3.77q.226.419.442.861h.034l2.593-4.631Z"
                    transform="translate(-2.766 22.406)"
                    fill="#707070"
                  />
                </svg>
              </NavLink>
            </li>
            <li className="link search">
              <NavLink>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="8.2"
                  height="8.2"
                  viewBox="0 0 8.2 8.2"
                >
                  <path
                    id="Icon_map-search"
                    data-name="Icon map-search"
                    d="M7.44,6.349A3.243,3.243,0,1,0,6.349,7.44l2.2,2.2L9.64,8.548Zm-2.765.328a2,2,0,1,1,2-2,2,2,0,0,1-2,2Z"
                    transform="translate(-1.44 -1.44)"
                    fill="#354e57"
                  />
                </svg>
              </NavLink>
            </li>
            <li className="link cart">
              <NavLink>cart</NavLink>
            </li>
            <li className="link login">
              <NavLink>Login</NavLink>
            </li>
          </ul>
        </div>
        <div
          className={
            mobileMenuState.isMobileMenuActive
              ? "bar2 mobileMenuActive"
              : "bar2"
          }
        >
          <nav className="nav">
            <Link>Acne</Link>
            <Link>Sun</Link>
            <Link>Ezcema</Link>
            <Link>Psoriasis</Link>
            <Link>vitiligio</Link>
          </nav>
          <div className="extra-links">
            <Link>About</Link>
            <Link>Consultation</Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;

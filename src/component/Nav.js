import logo from "../images/logo.svg";
import { anchorLinks } from "../data";
import { socialLinks } from "../data";

const Nav = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>

        <ul className="nav-links" id="nav-links">
          {anchorLinks.map((anchor) => {
            return (
              <li key={anchor.id}>
                <a href={anchor.href} className="nav-link">
                  {anchor.value}
                </a>
              </li>
            );
          })}
        </ul>

        <ul className="nav-icons">
          {socialLinks.map((link) => {
            return (
              <li key={link.id}>
                <a
                  href={`https://www.${link.website}.com`}
                  target="_blank"
                  rel="noreferrer"
                  className="nav-icon"
                >
                  <i className={`fab fa-${link.website}`}></i>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};
export default Nav;

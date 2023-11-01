import { socialLinks } from "../data";
import { anchorLinks } from "../data";
const currentDate = new Date();
const currentYear = currentDate.getFullYear();

const Footer = () => {
  return (
    <footer className="section footer">
      <ul className="footer-links">
        {anchorLinks.map((anchor) => {
          return (
            <li key={anchor.id}>
              <a href={anchor.href} className="footer-link">
                {anchor.value}
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="footer-icons">
        {socialLinks.map((link) => {
          return (
            <li key={link.id}>
              <a
                href={`https://www.${link.website}.com`}
                target="_blank"
                rel="noreferrer"
                className="footer-icon"
              >
                <i className={`fab fa-${link.website}`}></i>
              </a>
            </li>
          );
        })}
      </ul>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{currentYear}</span> all rights reserved
      </p>
    </footer>
  );
};
export default Footer;

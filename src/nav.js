import logo from "./images/logo.svg";
import "./styles/nav.css";

const Nav = () => {
  return (
    <nav>
      <img className="logo" src={logo} alt="BackRoads" />
      <ul className="menu">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Services</a>
        </li>
        <li>
          <a href="#">Tours</a>
        </li>
      </ul>

      <ul className="socialMedia">
        <li>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <i class="fab fa-facebook"></i>
          </a>
        </li>
        <li>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <i class="fab fa-instagram"></i>
          </a>
        </li>
        <li>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <i class="fab fa-twitter"></i>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;

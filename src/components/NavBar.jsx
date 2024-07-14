import logo from "../assets/logo.jpeg";
import { Link } from "react-router-dom";
import "./NavBar.css";
function NavBar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light mb-5 ps-4 pe-4 border-bottom border-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img src={logo} width="70" height="70" alt="logo" />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse justify-content-end"
          id="navbarNavAltMarkup"
        >
          <div class="navbar-nav gap-3">
            <Link className="menu__link" to="/">
              Home
            </Link>
            <Link className="menu__link" to="/page">
              Home222
            </Link>
            <Link className="menu__link" to="/page2">
              About
            </Link>
            <Link className="menu__link" to="/page3">
              aaaaa
            </Link>
            <Link className="menu__link" to="/page4">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default NavBar;

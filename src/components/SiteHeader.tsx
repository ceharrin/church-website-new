import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export function SiteHeader() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="brand" to="/" onClick={() => setNavOpen(false)}>
          <img
            className="brand-logo"
            src="https://stdionysios.org/assets/template-elements/patron-saints/patron-saint-dionysios.png"
            alt=""
            width={80}
            height={118}
          />
          <span className="brand-text">
            <span className="metropolis">Metropolis of Denver</span>
            <span className="parish-name">St. Dionysios Greek Orthodox Christian Church</span>
            <span className="parish-location">Overland Park, KS 66212</span>
          </span>
        </Link>
        <button
          type="button"
          className="nav-toggle"
          aria-expanded={navOpen}
          aria-controls="primary-nav"
          onClick={() => setNavOpen((o) => !o)}
        >
          Menu
        </button>
        <nav
          id="primary-nav"
          className={`site-nav${navOpen ? " is-open" : ""}`}
          aria-label="Primary"
        >
          <ul>
            <li>
              <Link
                to={{ pathname: "/", hash: "#welcome" }}
                onClick={() => setNavOpen(false)}
              >
                Welcome
              </Link>
            </li>
            <li>
              <Link
                to={{ pathname: "/", hash: "#services" }}
                onClick={() => setNavOpen(false)}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to={{ pathname: "/", hash: "#events" }}
                onClick={() => setNavOpen(false)}
              >
                Events
              </Link>
            </li>
            <li>
              <Link
                to={{ pathname: "/", hash: "#faith" }}
                onClick={() => setNavOpen(false)}
              >
                Our Faith
              </Link>
            </li>
            <li>
              <NavLink to="/clergy" onClick={() => setNavOpen(false)}>
                Clergy
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" onClick={() => setNavOpen(false)}>
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink to="/giving" onClick={() => setNavOpen(false)}>
                Giving
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
